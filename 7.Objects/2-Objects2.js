// const tinderUser = new Object(); // singleton object

const istinderUser = {}; //non singleton obj
istinderUser.name = "devesh";
istinderUser.id = 11211;
istinderUser.age = 23;
istinderUser.email = "devesh@gmail.com";

// console.log([tinderUser, istinderUser]);

const regularUser = {
    email: "deveshsharma@gmail.com",
    userFullName: {
        userFirstLast: {
            firstName: "Devesh",
            lastName: "Sharma"
        }
    }
}
// console.log([regularUser.userFullName.userFirstLast?.firstName]);

// const obj1 = {1: "a", 2:"b"};
// const obj2 = {3:"c", 4:"d"};

// // const obj3 = {...obj1, ...obj2}; cobine both value
// const obj3 = {...obj1, ...obj2, 5:"e"};
// console.log(obj3); //spread operator
// // const obj4 = Object.assign({}, obj1, obj2);
// // console.log(obj4);

// const users = {
//     id: 2323,
//     name: "devesh",
//     userId1: {
//         usermail1: "devesh@gmail.com",
//         usermail2: "devesh@gmail.com"
//     },
//     userId2: {
//         usermail1: "devesh@gmail.com",
//         usermail2: "devesh@gmail.com"
//     },
//     userId3: {
//         usermail1: "devesh@gmail.com",
//         usermail2: "devesh@gmail.com"
//     },
//     userId4: {
//         usermail1: "devesh@gmail.com",
//         usermail2: "devesh@gmail.com"
//     }
// }
// console.log(users.userId1.usermail1);

// console.log([users.usermail.usermail1]);

console.log(istinderUser); //most intresting this because it give us in all keys/value in arrays so we can reuse in our database if in project required
console.log(Object.keys(istinderUser));
console.log(Object.values(istinderUser));
console.log(Object.entries(istinderUser));
