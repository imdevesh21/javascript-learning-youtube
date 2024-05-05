const marvelHeros = ["hulk", "spyderman", "iron-man", "captain-America"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.concat(dcHeros);
// marvelHeros.push(dcHeros);
// let allHeros = marvelHeros.concat(dcHeros);

let allHeros = [...marvelHeros, ...dcHeros]; //using spread operator
console.log(allHeros);

const arr1 = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
const arr = arr1.flat(Infinity);
console.log(arr);

console.log(Array.from("devesh"));

const score1 = 300;
const score2 = 400;
const score3 = 200;

console.log(Array.of(score1, score2, score3));