const userEmail = [];

if(userEmail){
    console.log("email is there");
} else {
    console.log("please provide an email");
}

// falsy Value
// false
// 0
// -0
// BigInt
// 0n
// ""
// null
// undefined
// NaN

// Truthy Value
// "abc"
// 1, -1
// " "
// []
// {}
// []
// 1, -1
// "abc"
// 'false'
// true
// function(){}

const emptyObj = {
    name: "abc",
    age: 20,
    email: "john.c.calhoun@examplepetstore.com"
}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
} else {
    console.log("not empty object");
}


