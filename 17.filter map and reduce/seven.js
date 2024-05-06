// const myNums = [1,2,3,4,5,6,7];

// const newNums = myNums.map( (num) => {return num + 10});
// console.log(newNums);


// chaining

const myNums = [1,2,3,4,5,6,7];

                const newNums = myNums
                .map((num) =>{ return num * 10 })//two map chaining 
                .map((num) =>{ return num+10})
                .filter((num) => {return num>=40})
console.log(newNums);