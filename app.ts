//string
let myName = "Nick";
//will throw an error because myName is assigned a string initially
// myName = 20;

//number
let myAge = 28;
//will throw an error because myAge is assigned a number initially
// myAge = "Nick";

//boolean
let hasHobbies = true;
// hasHobbies = 1;

//assign types
// let myRealAge;
// myRealAge = 27;
// myRealAge = "27";
//this won't throw an error because no type was assigned initially

//Explicityly assign types
let myRealAge: number;
myRealAge = 28;
// myRealAge = '27';

//array
// let hobbies = ["Cooking", "Sports"];
// console.log(hobbies[0]);
// console.log(typeof hobbies); // returns object
//Will throw an error because typescript infers that hobbies should be an array of strings
// hobbies = [100];

//We can override the above error by setting hobbies to be an array of anything
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
//array of mixed types
let address: [string, number] = ["Superstreet", 99];
//will throw an error because this combination does not match our explicity type
// address = [99, 'Superstreet'];

// enum
//index will always refer to last value
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 2 // 2
}

let myColor: Color = Color.Green;
console.log(myColor); // returns 1

//ANY
let car: any = "BMW";
console.log(car); // returns string
car = { brand: "BMW", series: 3 };
console.log(car); // returns object

//Adding type after function name should tell TSC what you're returning
function returnMyName(): string {
  return myName;
  //Will throw an error because this is a number
  //return myAge;
}
console.log(returnMyName());

//Void
function sayHello(): void {
  console.log("hello!");
  //throws an error because nothing should be returned
  // return myName;
}

function multiply(value1: number, value2: number): number {
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

let myMultiply: (val1: number, val2: number) => number;
//Will throw error because say hello isn't a function that takes arguments nor does it return anything
// myMultiply = sayHello;
myMultiply = multiply;
//Will throw an error because 'max' is a string and not a number
// console.log(myMultiply('max', 2));
console.log(myMultiply(2, 3));

//OBJECTS
let userData = {
  name: "Nick",
  age: 28
};

//Will fail because object keys should match
// userData = {
//    a: 'Hello'
//    b: 28
// }
