// reduce
/*
const array1 = [1,2,3,4,5];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); //accumulator is previousValue
console.log(sumWithInitial);
*/


/*
//using function
const myNums = [1,2,3];

const myTotal = myNums.reduce(function(accumulator, currentValue){
    console.log(`acc: ${accumulator} and currVal:${currentValue}`)
    return accumulator + currentValue;
}, 0);

console.log(myTotal);
*/


//using arrow function
// const myNumsTwo = [1,2,3];
// const inTotal = myNumsTwo.reduce((acc,curr) => acc+curr, 0)
// console.log(inTotal);
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);