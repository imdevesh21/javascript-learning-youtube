// <, >, <=, >=, !=, ==, ===, !==

// if-Statement
// const user = false;
// if(user == true || user == false){
//     console.log("user logged-in");
// } else {
//     console.log("user not logged-in");
// }
// console.log(user);


/*
const todayTemperature = 43;
console.log(`Welcome to summer forcast`)
if (todayTemperature == 40) {
    console.log("Temperature is moderate");
} else if (todayTemperature >= 40 && todayTemperature <= 44) {
    console.log("Temperature is hot, go out with an umbrella");
} else if (todayTemperature > 44) {
    console.log("Temperature is very hot with a heat wave, recommends staying at home");
} else {
    console.log("Temperature is good, you can go out with your umbrella");
}
*/

// scope not defined condition to be know while writing condition

/*
const score = 150;

if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`);// block access
}
console.log(`user power: ${power}`); //global access error

*/

// implicit scope(one line)

// const balance = 1000;
// if(balance > 100) console.log("test"), console.log("test2");

// mutiple condition
const userLoggedIn = true;
const debitCard = true;
const loggedFromgoogle = false;
const loggedFromEmail = true;

if((userLoggedIn && debitCard) && (loggedFromgoogle || loggedFromEmail)){
    console.log("user can make a purchase");
} else {
    console.log("user cannot make a purchase");
}

// Nullish coalescing operator (??): null or undefined

// const user = null;
// const user2 = undefined;
// const user3 = "test";

// const user4 = user ?? "default user";
// console.log(user4);

// // ternary operator

// const user5 = user ?? "default user";
// console.log(user5);

// const user6 = user ?? "default user";
// console.log(user6);

let val1;
// val11 = 5 ?? 10;
//val1 = null ?? 10; //safety check performed `null` is not null or undefined
// val1 = (undefined ?? 15);
val1 = (null ?? 10 ?? 15);
console.log(val1);

// nullish and ternary are different from each other

// ternay operator

const iceTeaprice = 100;
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");



