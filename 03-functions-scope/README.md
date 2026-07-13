# JavaScript Functions — Complete Guide

A companion guide to [`functions.js`](./functions.js). Functions are reusable blocks of code — you define the logic once and run it as many times as you want. This guide explains every example in the file, section by section.

## Table of Contents

1. [Function Basics](#function-basics)
2. [Function Expressions](#function-expressions)
3. [Arrow Functions](#arrow-functions)
4. [Callbacks](#callbacks)
5. [Array Iteration: forEach](#array-iteration-foreach)
6. [Array Iteration: map](#array-iteration-map)
7. [More Function Features](#more-function-features)

---

## Function Basics

### 1. Function Declaration

The classic way to define a function using the `function` keyword. Declarations are **hoisted** — you can call them even before the line where they are defined.

```js
function saySomething() {
  console.log("Hello");
  console.log("I am learning JavaScript.");
}
saySomething();
```

### 2. Parameters and Arguments

Two words that are often mixed up:

- A **parameter** is the placeholder in the definition (`name`)
- An **argument** is the actual value passed when calling (`"Bohubrihi"`)

```js
function greetUser(name) {
  console.log(`Hello ${name}`);
}
greetUser("Bohubrihi"); // "Hello Bohubrihi"
```

### 3. Default Parameters

If an argument is missing, the parameter falls back to its default value instead of being `undefined`:

```js
function add(x = 0, y = 0) {
  return x + y;
}
add(4, 5); // 9
add(4);    // 4 — y falls back to 0
add();     // 0 — both fall back to 0
```

### 4. Return Values

`return` sends a value back to the caller and **immediately stops** the function. A function with no `return` gives back `undefined`.

```js
function multiply(a, b) {
  return a * b;
}
let product = multiply(6, 7); // 42
```

---

## Function Expressions

### 5. Function Expression

A function stored inside a variable. Unlike declarations, expressions are **not hoisted** — they can only be called after the line that creates them:

```js
let funcExpression = function (name) {
  console.log(`Hello ${name}`);
};
funcExpression("Arman"); // "Hello Arman"
```

### 6. Anonymous Function

A function without a name — most often passed directly as an argument to another function:

```js
setTimeout(function () {
  console.log("This anonymous function ran after 0ms");
}, 0);
```

---

## Arrow Functions

### 7. Arrow Function (Basic)

A shorter, modern (ES6) syntax for function expressions:

```js
let arrowFunction = (name) => {
  console.log(`${name} is learning JavaScript`);
};
arrowFunction("Arman");
```

### 8. Implicit Return

If the body is a single expression, drop the `{}` and the `return` keyword — the expression's value is returned automatically:

```js
let double = (number) => number * 2;
double(21); // 42
```

### 9. Single Parameter Without Parentheses

With exactly one parameter, the parentheses around it are optional:

```js
let square = number => number * number;
square(9); // 81
```

> **Note:** arrow functions do not have their own `this`, so avoid them as object methods (see `01-data-types/object.md`). For standalone helpers and callbacks, they're perfect.

---

## Callbacks

### 10. Callback Function

A function passed **as an argument** to another function, which calls it back later. This pattern powers `forEach`, `map`, event handlers, and much of asynchronous JavaScript:

```js
function processUserInput(name, callback) {
  callback(name.toUpperCase());
}
processUserInput("arman", function (result) {
  console.log(`Processed name: ${result}`); // "Processed name: ARMAN"
});
```

---

## Array Iteration: forEach

`forEach` runs a callback once for every element of an array. The callback can receive up to **3 parameters**:

| Position | Parameter | Meaning |
|---|---|---|
| 1st | `item` | The current element |
| 2nd | `index` | The current position |
| 3rd | `fullArray` | The entire array |

`forEach` returns nothing (`undefined`) — use it for side effects like logging, not for building new data.

### 11. One Parameter (item only)

```js
let foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];
foods.forEach(function (item) {
  console.log(item);
});
```

### 12. Two Parameters (item + index)

```js
foods.forEach(function (item, index) {
  console.log(`index : ${index} -> ${item}`);
});
```

### 13. Three Parameters (item + index + whole array)

```js
foods.forEach(function (item, index, fullArray) {
  console.log(item, index, fullArray);
});
```

### 14. Named Callback

Define the callback separately and pass it **by name** — no parentheses, because you're passing the function itself, not calling it:

```js
let printEverything = function (item, index, all) {
  console.log(`index : ${index} -> ${item}`);
};
foods.forEach(printEverything);
```

### 15. Arrow Function Callback

The most common modern style:

```js
foods.forEach((food, index) => console.log(`item no ${index + 1} is ${food}`));
```

---

## Array Iteration: map

`map` builds and **returns a new array**, where each element is whatever the callback returns. The original array is never altered — this is the key difference from `forEach`.

| | `forEach` | `map` |
|---|---|---|
| Returns | `undefined` | A **new array** |
| Use for | Side effects (logging, etc.) | Transforming data |

### 16. map with a Named Callback

```js
let cars = ["BMW", "Audi", "Ferrari", "Lamborghini"];
let describeCar = function (car) {
  return `${car} is beautiful`;
};
let carNotes = cars.map(describeCar);
console.log(cars);     // original — unchanged
console.log(carNotes); // ["BMW is beautiful", "Audi is beautiful", ...]
```

### 17. map with Item + Index

The map callback also receives the index (and the whole array), just like `forEach`:

```js
let labeledFoods = foods.map(function (item, index) {
  return `${index}: ${item} is a food`;
});
```

### 18. map with an Arrow Function

Implicit return makes transformations one-liners:

```js
let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = numbers.map(number => number * 2);
// [2, 4, 6, 8, 10, 12]
```

---

## More Function Features

### 19. Rest Parameters (`...`)

Collects any number of arguments into a real array — useful when you don't know in advance how many values will be passed:

```js
function sumAll(...values) {
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
}
sumAll(1, 2, 3);        // 6
sumAll(10, 20, 30, 40); // 100
```

### 20. IIFE (Immediately Invoked Function Expression)

A function that runs the moment it is defined — wrapped in `()` and called with `()` right away. Used to run setup code once without leaving a name behind in the outer scope:

```js
(function () {
  console.log("This IIFE ran immediately");
})();
```

### 21. Functions Returning Functions (Higher-Order Functions)

A function can return another function. The returned function remembers the variables of its creator — this is called a **closure**:

```js
function makeMultiplier(factor) {
  return (number) => number * factor;
}
let triple = makeMultiplier(3);
triple(5);               // 15
makeMultiplier(10)(5);   // 50
```

---

## Quick Reference

| # | Concept | One-liner |
|---|---------|-----------|
| 1 | Declaration | `function name() {...}` — hoisted |
| 2 | Parameters vs arguments | Placeholder vs actual value |
| 3 | Default parameters | `function f(x = 0) {...}` |
| 4 | Return | Sends a value back, stops the function |
| 5 | Expression | `let f = function() {...}` — not hoisted |
| 6 | Anonymous | Nameless, passed inline |
| 7–9 | Arrow functions | `(x) => x * 2` — short callbacks |
| 10 | Callback | Function passed as an argument |
| 11–15 | `forEach` | Loop with side effects, returns nothing |
| 16–18 | `map` | Transform into a **new** array |
| 19 | Rest `...` | Any number of arguments → array |
| 20 | IIFE | Define and run immediately |
| 21 | Higher-order + closure | Functions that return functions |
