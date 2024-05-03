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
*/