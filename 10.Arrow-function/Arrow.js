// const users = {
//     username: "devesh",
//     price: 223,


//     welcomeMessage: function(){
//         console.log(`${this.username} ,Welcome to website`)
//         console.log(this);
//     }

// }

// users.welcomeMessage()
// users.username = "love";
// users.welcomeMessage();
// console.log(this)


// browser global object is window
// function chai(){
//     console.log(this);
// }
// chai();

const chai = () => {  // arrow function
    let username = "devesh";
    console.log(username);
}
chai();

//basic syntax  for arrow fun
// const addTwo = (num1, num2) => { //parenthesis use return madatory
//     return num1 + num2;
// }
// const sum = addTwo(3,5);
// console.log(sum);

// Implicit return using parenthesis is not mandatory 

// const addTwo = (num1,num2) => num1+num2 // return not madatory in usecase of brakets
// const addTwo = (num1,num2) => (num1+num2)

// for object use parenthesis 
const addTwo = (num1,num2) => ({username: "devesh"})
console.log(addTwo(30,6))
