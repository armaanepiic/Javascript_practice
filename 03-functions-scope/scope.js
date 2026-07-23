// Global Scope
var a = 1;
let b = 2;
const c = 3;
let d = 10;

console.log(`Global scope, ${a}, ${b}, ${c}`);

// function scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  let e = 30;
  console.log(`Function scope, ${a}, ${b}, ${c}, ${d}`);
}
test();

console.log(`Global scope, ${a}, ${b}, ${c}`);
// console.log(`Global scope, ${e}`); // Uncaught ReferenceError: e is not defined
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  let d = 120;
  console.log(`If scope, ${a}, ${b}, ${c}, ${d}`);
}
 console.log(`Global scope, ${a}, ${b}, ${c}`);

 // variable decaled using var keyword can be their value can be changed in if scope and loop scope
 
