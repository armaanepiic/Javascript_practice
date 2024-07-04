// Numbers

let x = 0.2, y = 0.1;
console.log(x + y);

let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);


let x = 10, y = 20;
let z = "Sum = " + x + y;
console.log(z);
let p = x + y + " is the Sum";
console.log(p);


let x = "100", y = "10";
let z = x * y;
console.log(z); // 11000
let p = x / y;
console.log(p); // 10


// Nan
let a = "250";
console.log("\"250\"");
console.log(isNaN(a));
let b = 250;
console.log(b);
console.log(isNaN(b));
let c = "a250";
console.log(c);
console.log(isNaN(c));
let d = "1.25e-5";
console.log(d);
console.log(isNaN(d));


console.log(typeof (NaN)); // Number


let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
    myNumber *= myNumber;
    txt += myNumber + "<br>";
}
document.getElementById('demo').innerHTML = txt;

console.log(2 / 0); // infinity
console.log(typeof (Infinity));


let x = 0xFF;
console.log(x);
console.log(x.toString(10)); // "255" string


let x = 123456789012345678901234567890n;
console.log(typeof (x));
let y = BigInt("123456789012345678901234567890");
console.log(typeof (y));

console.log(Number.MIN_SAFE_INTEGER);












