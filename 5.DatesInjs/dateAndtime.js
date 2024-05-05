// dates
/*
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 3, 3);
console.log(myCreatedDate.toDateString())
*/

// let dateNew = new Date("2024-01-22");
// console.log(dateNew.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now())/1000);

// let myCreatedDate = new Date ("01-22-2024");
// console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate.getMilliseconds());


newDate.toLocaleString('default', {
    month: 'long',
    weekday: 'long'
});

console.log(newDate)