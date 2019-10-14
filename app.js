"use strict";
//string
var myName = "Nick";
//will throw an error because myName is assigned a string initially
// myName = 20;
//number
var myAge = 28;
//will throw an error because myAge is assigned a number initially
// myAge = "Nick";
//boolean
var hasHobbies = true;
// hasHobbies = 1;
//assign types
// let myRealAge;
// myRealAge = 27;
// myRealAge = "27";
//this won't throw an error because no type was assigned initially
//Explicityly assign types
var myRealAge;
myRealAge = 28;
// myRealAge = '27';
//array
// let hobbies = ["Cooking", "Sports"];
// console.log(hobbies[0]);
// console.log(typeof hobbies); // returns object
//Will throw an error because typescript infers that hobbies should be an array of strings
// hobbies = [100];
//We can override the above error by setting hobbies to be an array of anything
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// tuples
//array of mixed types
var address = ["Superstreet", 99];
//will throw an error because this combination does not match our explicity type
// address = [99, 'Superstreet'];
// enum
//index will always refer to last value
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // returns 1
//ANY
var car = "BMW";
console.log(car); // returns string
car = { brand: "BMW", series: 3 };
console.log(car); // returns object
//Adding type after function name should tell TSC what you're returning
function returnMyName() {
    return myName;
    //Will throw an error because this is a number
    //return myAge;
}
console.log(returnMyName());
//Void
function sayHello() {
    console.log("hello!");
    //throws an error because nothing should be returned
    // return myName;
}
function multiply(value1, value2) {
    return value1 * value2;
}
//Will throw an error because 'max' is a string not a number
// console.log(multiply(2, 'max'));
console.log(multiply(2, 2));
// let myMultiply;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5, 2));
var myMultiply;
//Will throw error because say hello isn't a function that takes arguments nor does it return anything
// myMultiply = sayHello;
myMultiply = multiply;
//Will throw an error because 'max' is a string and not a number
// console.log(myMultiply('max', 2));
console.log(myMultiply(2, 3));
//OBJECTS
var userData = {
    name: "Nick",
    age: 28
};
//Will fail because object keys should match
// userData = {
//    a: 'Hello'
//    b: 28
// }
//complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex3 = {
    data: [200, 4.56, 10],
    output: function (all) {
        return this.data;
    }
};
// Union Types
//When it could be one of a couple of different types. Cleaner type of any
var myRealRealAge;
//Both of these work
myRealRealAge = "27";
myRealRealAge = 28;
//will throw error
// myRealRealAge = true;
//Check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
//2.0 types:
//Never
//Never returns anything not to be confused with void because void cannot have any output
function neverReturns() {
    throw new Error("An error!");
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
//this works beceause canAlsoBeNull was never set with a type
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = "any";
canThisBeAny = 27;
