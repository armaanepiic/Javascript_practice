let x;
x = 13; // true
x = -13; // true
x = "abc"; // true
x = true; // true
x = 10 > 6; // true


x = 0; // false
x = false; // false
x = ""; // false
x = undefined; // false
x = NaN; // false
x = null; // false
x = 10 < 6; // false

console.log(Boolean(x));
