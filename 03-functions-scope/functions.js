/* ============================================================
   JAVASCRIPT FUNCTIONS — COMPLETE TEMPLATE
   Each concept: explanation + meaningful variable name + console.log
   ============================================================ */


/* ------------------ FUNCTION BASICS ------------------ */

// 1. Function declaration
// The classic way to define a function using the "function" keyword.
// Declarations are HOISTED — you can call them even before the line
// where they are defined.
function saySomething() {
  console.log("Hello");
  console.log("I am learning JavaScript.");
  console.log("Arman");
}
saySomething(); // runs all three console.logs

// 2. Parameters and arguments
// A PARAMETER is the placeholder in the definition (name);
// an ARGUMENT is the actual value passed when calling ("Bohubrihi").
function greetUser(name) {
  console.log(`Hello ${name}`);
}
greetUser("Bohubrihi"); // "Hello Bohubrihi"

// 3. Default parameters
// If an argument is missing, the parameter falls back to its default
// value instead of being undefined.
function add(x = 0, y = 0) {
  return x + y;
}
console.log(add(4, 5)); // 9
console.log(add(4)); // 4 (y falls back to 0)
console.log(add()); // 0 (both fall back to 0)

// 4. Return values
// "return" sends a value back to the caller and immediately stops
// the function. A function with no return gives back undefined.
function multiply(a, b) {
  return a * b;
}
let product = multiply(6, 7);
console.log(product); // 42


/* ------------------ FUNCTION EXPRESSIONS ------------------ */

// 5. Function expression
// A function stored inside a variable. Unlike declarations, expressions
// are NOT hoisted — they can only be called after this line runs.
let funcExpression = function (name) {
  console.log(`Hello ${name}`);
};
funcExpression("Arman"); // "Hello Arman"

// 6. Anonymous function
// A function without a name — most often passed directly as an
// argument to another function (see forEach below).
setTimeout(function () {
  console.log("This anonymous function ran after 0ms");
}, 0);


/* ------------------ ARROW FUNCTIONS ------------------ */

// 7. Arrow function (basic)
// A shorter, modern (ES6) syntax for function expressions.
let arrowFunction = (name) => {
  console.log(`${name} is learning JavaScript`);
};
arrowFunction("Arman"); // "Arman is learning JavaScript"

// 8. Arrow function (implicit return)
// If the body is a single expression, you can drop the {} and the
// "return" keyword — the expression's value is returned automatically.
let double = (number) => number * 2;
console.log(double(21)); // 42

// 9. Arrow function (single parameter, no parentheses)
// With exactly one parameter, the parentheses around it are optional.
let square = number => number * number;
console.log(square(9)); // 81


/* ------------------ CALLBACKS ------------------ */

// 10. Callback function
// A function passed AS AN ARGUMENT to another function, which calls
// it back later. This is the pattern behind forEach, map, event
// handlers, and much of asynchronous JavaScript.
function processUserInput(name, callback) {
  callback(name.toUpperCase());
}
processUserInput("arman", function (result) {
  console.log(`Processed name: ${result}`); // "Processed name: ARMAN"
});


/* ------------------ ARRAY ITERATION: forEach ------------------ */

// forEach runs a callback once for every element of an array.
// The callback can receive up to 3 parameters:
//   1st parameter : the current item
//   2nd parameter : the current index
//   3rd parameter : the whole array
// forEach returns nothing (undefined) — use it for side effects only.

let foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];

// 11. forEach with 1 parameter (item only)
foods.forEach(function (item) {
  console.log(item); // each array element, one per iteration
});

// 12. forEach with 2 parameters (item + index)
foods.forEach(function (item, index) {
  console.log(`index : ${index} -> ${item}`);
});

// 13. forEach with 3 parameters (item + index + whole array)
foods.forEach(function (item, index, fullArray) {
  console.log(item);
  console.log(index);
  console.log(fullArray); // the entire foods array, every iteration
});

// 14. forEach with a named callback
// Instead of an inline anonymous function, you can define the callback
// separately and pass it BY NAME (no parentheses — you're passing the
// function itself, not calling it).
let printEverything = function (item, index, all) {
  console.log(`index : ${index} -> ${item}`);
  console.log(all);
};
foods.forEach(printEverything);

// 15. forEach with an arrow function
// The most common modern style — short and readable.
foods.forEach((food, index) => console.log(`item no ${index + 1} is ${food}`));


/* ------------------ ARRAY ITERATION: map ------------------ */

// map builds and RETURNS A NEW ARRAY from an existing one, where each
// element is whatever the callback returns. The original array is
// never altered — this is the key difference from forEach.

// 16. map with a named callback
let cars = ["BMW", "Audi", "Ferrari", "Lamborghini"];
let describeCar = function (car) {
  return `${car} is beautiful`;
};
let carNotes = cars.map(describeCar);
console.log(cars); // original array — unchanged
console.log(carNotes); // ["BMW is beautiful", "Audi is beautiful", ...]

// 17. map with item + index
// Like forEach, the map callback also receives the index (and the
// whole array) as extra parameters.
let labeledFoods = foods.map(function (item, index) {
  return `${index}: ${item} is a food`;
});
console.log(labeledFoods); // ["0: Cake is a food", "1: Ice-cream is a food", ...]

// 18. map with an arrow function
let numbers = [1, 2, 3, 4, 5, 6];
let squareArray = numbers.map((item) => `${item} * ${item} = ${item * item}`);
console.log(squareArray); // ["1 * 1 = 1", "2 * 2 = 4", ...]

let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]


/* ------------------ MORE FUNCTION FEATURES ------------------ */

// 19. Rest parameters (...)
// Collects ANY number of arguments into a real array — useful when
// you don't know in advance how many values will be passed.
function sumAll(...values) {
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// 20. IIFE (Immediately Invoked Function Expression)
// A function that runs the moment it is defined — wrapped in ()
// and called with () right away. Used to run setup code once
// without leaving a name behind in the outer scope.
(function () {
  console.log("This IIFE ran immediately");
})();

// 21. Functions returning functions (higher-order functions)
// A function can RETURN another function. The returned function
// remembers the variables of its creator (this is a closure).
function makeMultiplier(factor) {
  return (number) => number * factor;
}
let triple = makeMultiplier(3);
console.log(triple(5)); // 15
console.log(makeMultiplier(10)(5)); // 50
