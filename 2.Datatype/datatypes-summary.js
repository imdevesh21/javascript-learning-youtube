// 1. Primitive data type
// 1.1 Number
// 1.2 String
// 1.3 Boolean
// 1.4 Null
// 1.5 Undefined
// 1.6 Symbol
// 1.7 BigInt

// webevents
// object 
/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

// 2. Non-Primitive(reference type) data type
// 2.1 Object
// 2.2 Array
// 2.3 Function

// const score = 100;
// const scoreValue = 100.3

// const isUserLogged = true;
// const outsideTemp = null;

// const id = Symbol('123');
// const anotherId = Symbol('123')

// const bigNumber = 23242421414141;

// console.table([id === anotherId, bigNumber]);

// const heros = ["devesh", "ayush", "rahul"]; //arrays
// console.table([heros]);

// let userInfo = {
//     name: "devesh",
//     age: 23,
//     isMarried: false,
//     address :{
//         //object
//         city: "pune",
//         state: "maharashtra",
//         country: "india",
//     }
// }

// console.table([userInfo]);
// console.log(userInfo.address);// using dot 

// console.log(userInfo.address[city]);// using brakets
// const myFunction = function(){
//     console.log("hello")
// }


/******************************************* */

// stack(primitive)(copy)memory, heap(non-primitive) memory(reference of original value)

// stack memory working(stack, copy creation changes are done with the copied value)
// let myName = "devesh";
// let anotherName = myName;

// myName = "sharma";

// console.log(myName);
// console.log(anotherName);

//*************************************** */
//heap memory working(reference, change are done with the original value)
let userOne = {
    name: "devesh",
    upi: "user@bkl"
}

let userTwo = userOne;
userTwo.name = "sharma"
console.log(userOne);
console.log(userTwo);
