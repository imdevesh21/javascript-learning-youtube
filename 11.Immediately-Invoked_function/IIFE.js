// Immediately Invoked Function
/*
Is example mein, (function(n) { ... }) ek anonymous function hai, jise 3 ke parameter ke saath turant call kiya ja raha hai. Isse jo result aata hai, woh turant console mein print ho jata hai, yahaan pe 27.

IIFE ka fayda yeh hai ki yeh aapke global environment ko clean rakhta hai, kyunki jo bhi variables function ke andar defined hoti hain, woh sirf us function tak limited rehti hain aur baahar nahi jaati. Is tarah se aap apne code ko organized aur safe rakhte hain, kisi aur code ke sath interference se bachate hain.

In summary, IIFE ek tarah se "apne aap chalne wala function" hai jo ki aapke main code se isolate rehta hai aur turant execute ho jata hai jab usko define kiya jata hai.

*/ 

// (function (n) {
//     console.log(n*n*n);
// })();
// (3);

(function networkOne(){
    console.log("NetworkOne is working");
}) ();//<= by using this parenthesis using executed iife.

(function natworkTwo(){
    console.log("NetworkTwo is working");
})();
// we use iife because something problem was occurs due to global scope pollution to remove those global scope variable we use iife.

//IIFE with arrow function
(() =>{
    console.log(`NetworkThree is working`); //using arrow syntax
}) (); 

//IIFE with parameters
((name) =>{
    console.log(`NetworkThree of user ${name}is working`); //using arrow syntax
}) (`Devesh`);

// //IIFE with return
((hello) =>{
    return `NetworkThree of user ${hello} is working `; //using arrow syntax
}) (`den`);
