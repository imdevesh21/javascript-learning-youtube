const accountId = 14456;
let AccountEmail = "deveshsharma@gamil.com";
var accountPassword = "1234";
accountCity = "Ajmer";
let accountState;
let javaScript = null;
let age = NaN;
let surname = 0;

// accountId = 2; not allowed
AccountEmail = "new@gmail.com";
accountPassword = "211";
accountCity = "NewYork";
console.table([AccountEmail,accountPassword,accountCity, accountState, typeof(javaScript)]);
console.log(typeof(age));
console.log(typeof( surname));

/* 
Prefer not to use var
because of issue in block scope and functional scope

The main difference between the two is that let has a more limited scope than var . This means that a variable declared with let is only available within the block it was declared, whereas a variable declared with var is available anywhere within the current function. So it's best to use let 
*/

