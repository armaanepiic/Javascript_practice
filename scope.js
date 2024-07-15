var a = 1;
let b = 2;
const c = 3;
console.log(`Global Scope : `, a, b, c);

function test() {
    var a = 4;
    let b = 5; 
    const c = 6;
    console.log(`Function scope : `, a, b, c);
}
test();
console.log(`Global Scope : `, a, b, c);
// function scope a value change korle sheta global scope er value k affect korbena
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If scope : `, a, b, c);
}
console.log(`Global Scope : `, a, b, c);
// if scope er var declared variable er value changable
// same as for loop er moddheo var er value change hoye jabe
