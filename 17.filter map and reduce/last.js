// const coding = ["js","java","cpp","python"];

// const values = coding.forEach((items) => {
//     console.log(items);
//     return;
// })
// console.log(values);


const myNums = [1,2,3,4,,5,6,7];
const newNums = myNums.filter( (num) =>  num > 4)
console.log(newNums);

const number = [1,2,3,4,5,6,7,8,9,10];
// other method 
const newNumber = number.filter((num) => {
    return num > 4;  // return is must when scopes are open
})
console.log(newNumber);

// for each use
// const numTwo = [1,2,3,4,5,6,7,8,9];
// const numTwos = [];

// numTwo.forEach((num) => {
//     if(num > 4){
//         numTwo.push(num);
//         // return is must when scopes are open
//         return num > 4; 
//     }
// })
// console.log(numTwos);