// Nested Scope

// function one() {
//     const username = "devesh";
//     function two() {
//         const work = "software engineer"
//         console.log(username);
//     }
//     // console.log(work);
//     // two();
// }
// one();

// nested function => parent function access child
function one() {
    const user = "devesh";
    function two() {
        const work = "software developer";
        // console.log(user);
    }
    // console.log(work)
    two();
}
one();

if(true){
    const username = "devesh";
    if(username === "devesh"){
        // block scope
        const work = "software developer";
        // console.log(username + work);
    }
    // console.log(...work); //gives an error thus we're try to access the varible in a global scope.. 
}
// console.log(username)

/*****************************Intresting problem*******************************/ 

console.log(addValue(5));
function addValue(num){//here we only declear the value
    return (num+1);
}



console.log(addTwo(5));//gives error because here with declearation we also hold the value in variable 
const addTwo = function(num){
    return num+2;  //hoisting
}