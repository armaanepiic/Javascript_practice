// number methods
// toString()
// The toString() method returns a number as a string.
/*
let x = 123;
console.log(typeof (x.toString())); // string
let y = 100 + 23;
console.log(typeof (y.toString())); // string


// toExponential()
let x = 9.65659248657;
let y = x.toExponential(4);
console.log(y); // 9.6566e+0
let a = 9.659;
let z = a.toExponential();
console.log(z); // 9.659e+0


// toFixed()
// toFixed() returns a string, with the number written with a specified number of decimals:
let x = 9.656;
console.log(x.toFixed(2)); // 9.66 it is a string
console.log(x.toFixed(6));


// toPrecision*(length)
// toPrecision() returns a string, with a number written with a specified length:
let x = 9.1256789;
console.log(x.toPrecision(5));



// Number methods
document.getElementById('demo').innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("10") + "<br>" +
    Number("10.30") + "<br>" +
    Number("10,30") + "<br>" +
    Number("119 45") + "<br>" +
    Number("ABC") + "<br>";


let x = new Date("2024-06-24");
document.getElementById('demo').innerHTML = Number(x);

// parseInt(number)
document.getElementById('demo').innerHTML =
    parseInt("-10") + "<br>" + // 10
    parseInt("-10.33") + "<br>" + // 10
    parseInt("10") + "<br>" + // 10
    parseInt("10.33") + "<br>" + // 10
    parseInt("10 6") + "<br>" + // 10
    parseInt("102 years") + "<br>" + // 10
    parseInt("years 10"); // Nan


// parseFloat(number)
document.getElementById('demo').innerHTML =
    parseFloat("10.31");


// Number.isInteger() Method
let x = 10;
document.getElementById('demo').innerHTML = Number.isInteger(x); // true


let x = 10.44;
document.getElementById('demo').innerHTML = Number.isInteger(x); // false


// constructor
let num = 134.5;
let text = num.constructor;
console.log(text);


let x = Number.EPSILON;
console.log(x);
// 2.220446049250313e-16
// The difference between 1 and the smallest floating point number greater than 1 is:

// Number.isFinite(x)
let x = 123;
console.log(Number.isFinite(x)); // true
let y = "124";
console.log(Number.isFinite(y)); // false
*/

Number.prototype.myMethod = function () {
    return this.valueOf() / 2;
}
let x = 50;
console.log(x.myMethod());
























