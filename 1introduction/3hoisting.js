/*
    Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
*/ 

var x;  // hoisted many upore niye jay
x=undefined   //undefined set kore

x = 5;
console.log(x)
var x;

let x;  //ekhaneo upore niye jay
x=undefined //undefined set kore naaa, tai reference error dey..

x = 4;
console.log(x)
let x; 
