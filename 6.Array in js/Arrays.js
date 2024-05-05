// const myArrays = [2,5,3,8,6,0];

// const fruits = [];
// fruits.push("banana", "mango", "lichi");
// console.log(fruits.length);

// const myArr2 = new Array(6,4,3,4);
// console.log(myArr2.sort());
// console.log(myArr2[1]);

// Array method's 

// myArr2.push(8,9);
// console.log(myArr2);
// console.log(myArr2.pop())

// myArr2.unshift(3);

// console.log(myArr2);

// console.log(myArr2.includes(3));

// const animals = ["devesh", "rahul", "ayush", "gaurav"];

// console.log(animals.splice(2,3))
// console.log(animals.slice(1));

// // using slice create newcar from mycar

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine:{cylinder: 4, size:2.2},
// };

// const myCar = [myHonda, 2, "cherry condition", "purchased 2000"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar=", myCar);
// console.log("newCar=", newCar);
// console.log("myCar[0].color=", myCar[0].color);
// console.log("newCar[0].color=", newCar[0].color);

// // change the color of my honda

// myHonda.color = "orange";
// console.log("the new color of my honda is", myHonda.color);

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// difference between slice and splice is
/*
slice : it will return the new array
splice : it will return the deleted array
*/

// slice 

/*
=>it is used to extract a portion of an array, without modifying the original array.

Syntax: array.slice(startIndex, endIndex)

Returns: A new array containing elements from the original array starting from the startIndex (inclusive) up to, but not including, the endIndex (exclusive).

If endIndex is not provided, slice() extracts to the end of the array.
*/

const fruits = ["apple", "mango", "banana", "cherry"];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

/* 
t is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
Returns: An array containing the removed elements, or an empty array if no elements were removed.

startIndex: The index at which to start changing the array.
deleteCount: The number of elements to remove starting from the startIndex.

item1, item2, ...: Optional items to add to the array starting from the startIndex.

*/

const fruits2 = ["apple", "mango", "banana", "cherry"];
const removeFruits = fruits2.splice(2, 3);
console.log(removeFruits);