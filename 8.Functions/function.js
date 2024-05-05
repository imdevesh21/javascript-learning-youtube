// function in javascript is a wrapping up of lines of data into package so we can use anywhere when want it.


// function nameData(name){
//     console.log("hello",name)
// }
// nameData("Devesh");

// function addNumbers(Number1, Number2){ //parameters
//     console.log(Number1+Number2)
// }
// const result = addNumbers(2113,24);// Arguments


// function addNumbers(Number1, Number2){
//     return Number1+Number2;
// }
// const result = addNumbers(2113,24);
// console.log(result)



// function multiplication(Number1, Number2){
//     return Number1*Number2;
// }
// const answer = multiplication(23, 5);
// console.log(answer);



// function loginUser(message){
//     console.log(message);
// }
// loginUser("Welcome to the website");



// function loginUser(username){
//     return `${username} successfully log-in`;
// }
// const result = loginUser("Devesh");
// console.log(result);



// function greetUser(Message, username){
//     return `${Message} ${username} you're successfully logged-in to website`;
// }
// const result = greetUser("Welcome", "Devesh");
// console.log(result);

function loginUser(username = "devesh"){
    if(!username){
        console.log("please enter you're username");
        return;
    }
    return `${username} just logged-in`;
}
const login = loginUser("ayush");//if value was empty it print default username which is devesh here over undefined....
// and if any value is passed then it will override that value like ayush in this case.....
console.log(login);