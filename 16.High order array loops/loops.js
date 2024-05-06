// for of loop
/*
const arr = [ 1, 2, 3, 4, 5 ];
for (const index of arr){
    console.log(index);
}


const greeting = "hello!"
for (const i of greeting){
    console.log(`Each char is ${i}`);
}
*/

// Maps

// const map = new Map();
// map.set("name", "John");
// map.set("age", 23);

// for (const [key, value] of map){
//     console.log(`${key} of ${value}`)
// }

/*
const map1 = new Map();

map1.set('IN', "India");
map1.set('US', "United States");
map1.set('AUS', "Australia");

for(const [key, value] of map1){
    console.log(`${key} for ${value}`)
}
*/

const games = {
    football: "football",
    cricket: "cricket",
    hockey: "hockey"
}
for (const [key, value] of Object.entries(games)){
    console.log(`${key} for ${value}`)
}