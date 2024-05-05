var a = 30;

if(true){
    var a  = 300;
    console.log("Inner-block: ", a);
}
console.log("Outer-global: ", a);