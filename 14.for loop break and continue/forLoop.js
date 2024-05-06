// for loop

// const n = 10;
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i=0; i <= 10; i++){
//     const element = i;
//     console.log(element);
// }
// ctrl+d

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i * j);
//     }
// }

/*let myArr = ['flash', 'batman', 'dobarman'];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}*/

// break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`);
}
