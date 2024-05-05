const name = "devesh";
const repoCount = 18;

console.log(`hello my name is ${name} and my github repocount is ${repoCount}`);//to concatinate values we use`string interpulation ${} `

const userName = new String('sharma');
console.log(userName);
// console.log(userName.length);//print length of  string
// console.log(userName.toUpperCase());//convert string to upper case
// console.log(userName[3]);//access perticular index from the string
// console.log(userName.charAt(4));
// console.log(userName.indexOf('s')); 
const newString = userName.substring(0, 3);
console.log(newString);

const anotherString = userName.slice(-6, 2);
console.log(anotherString);

