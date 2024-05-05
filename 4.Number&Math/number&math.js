/* const score = 233;
// console.log(score); // output 233

const balance = new Number(100.43);
console.log(balance) //output[Number: 1000]

console.log(balance.toString());//convert number to string
console.log(balance.toFixed(1)); //we can give how many number does we have to show after the point

const otherNumber = 112.353;
console.log(otherNumber.toPrecision(3));//give priority to the value before decimal

const hundreads = 100000;
console.log(hundreads.toLocaleString("en-US"));//convert number to string with commas

console.log(hundreads.toLocaleString("hi-IN"));//convert number to string with comma*/




// *****************************************************************
// Math library
// max value
// let number = [1, 4, 6, 7, 8];
// console.log(Math.max(...number));


// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(3,2));
// console.log(Math.sqrt(25));
// console.log(Math.pow(4,3));
// console.log(Math.min(...number))
// console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) +1);//helps us to get single digit number 


// inportant *********************************************************
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1))+ min);