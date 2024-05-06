// for each
/*
const coding = ["js","java","cpp","python"];

// coding.forEach( function (items) {
//     console.log(items);
// })

// coding.forEach( (items) => {
//     console.log(items)
// })

function printMe(items){
    console.log(items);
}
coding.forEach(printMe);
*/

//for each on object
const myCoding = [
    {
    name : "js",
    year : 1995,
    isFun : true,
    bestFeatures : ["ES6", "Concurrency", "Modules"],
    difficulty : 8,
    },
    {
    name : "java",
    year : 1995,
    isFun : true,
    bestFeatures : ["ES6", "Concurrency", "Modules"],
    difficulty : 8,
    },
    {
    name : "c++",
    year : 1995,
    isFun : true,
    bestFeatures : ["ES6", "Concurrency", "Modules"],
    difficulty : 8,
    },
]

myCoding.forEach( (items) => {
    console.log(items.year);
})