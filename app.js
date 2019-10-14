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
function returnMyName() {
    return myName;
}
console.log(returnMyName());
