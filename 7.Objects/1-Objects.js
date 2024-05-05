// declearation of object literals(no singleton), constructor(singleton)

// objects literals

// const isUser = {
//     name: 'devesh',
//     "tech stack": "c++, java, javascript, python", // " tech stack is comman can be access using "quatation mark"
//     age: 23,
//     education: 'B-tech',
//     city: 'Ajmer',
//     isLoggedIn: false,
//     getInfo : function(){
//         return `${this.name} is lives in ${this.city} and his eduction is ${this.education} and his tech Stack ${this["tech stack"]}`
//     }
// }
// //above is example of function under object
// console.log([isUser.getInfo()]);
// console.log(isUser);


//symbol declearation


const mySym = Symbol("mykey1")

const isUserTwo = {
    name: 'devesh',
    "tech stack": 'c++, java, javascript, python',
    age: 23,
    [mySym]: "mykey1",
    education: 'B-tech',
    country: 'India',
    isLoggedIn: false,
    getInfo : function(){
        return `${this.name} is lives in ${this.city} and his eduction is ${this.education} and his tech Stack ${this["tech stack"]}`
    }
}

// Object.freeze(isUserTwo)
isUserTwo.country = "Netherlands";
console.log(isUserTwo);

isUserTwo.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}
isUserTwo.greetingTwo();


// function declaration

// isUserLog = function()  {
//     console.log("welcome js user");
// }

// isUserLog();