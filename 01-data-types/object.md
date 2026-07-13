# JavaScript Objects — Complete Guide

A companion guide to [`object.js`](./object.js). Objects are collections of key–value pairs and are the foundation of almost everything in JavaScript. This guide explains every example in the file, section by section.

## Table of Contents

1. [Creating & Accessing Objects](#creating--accessing-objects)
2. [Object Methods & `this`](#object-methods--this)
3. [Checking & Inspecting Objects](#checking--inspecting-objects)
4. [Object Static Methods](#object-static-methods)
5. [Looping Over Objects](#looping-over-objects)
6. [Copying & Combining Objects](#copying--combining-objects)
7. [Advanced Property Features](#advanced-property-features)
8. [JSON Conversion](#json-conversion)
9. [Math Object (Built-in)](#math-object-built-in)
10. [Date Object (Built-in)](#date-object-built-in)

---

## Creating & Accessing Objects

### 1. Object Literal

The simplest way to create an object — key: value pairs wrapped in curly braces `{}`.

```js
let student = {
  name: "Arman",
  age: 29,
  greeting() {
    console.log("Hello");
  }
};
```

Values can be any type: strings, numbers, arrays, other objects, or even functions (which are then called **methods**).

### 2. Dot Notation

The most common way to read a property: `object.propertyName`.

```js
console.log(student.name); // "Arman"
console.log(student.age);  // 29
```

### 3. Bracket Notation

Reads a property using a string key inside square brackets. Required when the key:

- contains spaces or special characters (`obj["first name"]`)
- is stored in a variable

```js
let propertyKey = "name";
console.log(student["age"]);      // 29
console.log(student[propertyKey]); // "Arman" — key comes from a variable
```

### 4. Adding a New Property

Just assign a value to a new key — no special method needed.

```js
student.occupation = "Student";
```

### 5. Updating an Existing Property

Reassigning an existing key simply overwrites its value.

```js
student.age = 30;
```

### 6. The `delete` Operator

Completely removes a property from an object. Unlike arrays, no "hole" is left behind — the key is just gone.

```js
delete student.age;
console.log(student); // "age" no longer exists
```

### 7. Empty Object

Objects can start empty and gain properties later.

```js
let customer = {};
console.log(typeof customer); // "object"
```

---

## Object Methods & `this`

### 8. Defining a Method (Shorthand Syntax)

A method is a property whose value is a function. ES6 shorthand lets you skip `showDetails: function() {...}`.

```js
let employee = {
  name: "Rafiq",
  salary: 50000,
  showDetails() {
    console.log(this.name + " earns " + this.salary);
  }
};
employee.showDetails(); // "Rafiq earns 50000"
```

Inside a method, **`this` refers to the object the method is called on** — here `employee`, because the call is `employee.showDetails()`.

### 9. `this` Depends on HOW a Function Is Called

`this` is determined at **call time**, not at definition time. If you detach a method from its object, `this` is no longer bound:

```js
let detachedShow = employee.showDetails;
// detachedShow(); // "undefined earns undefined" in non-strict mode,
//                 // or throws an error in strict mode / modules
```

### 10. Arrow Functions and `this`

Arrow functions do **not** have their own `this` — they inherit it from the enclosing scope. That makes them a poor choice for object methods that rely on `this`:

```js
let manager = {
  name: "Karim",
  showName: () => {
    console.log(this.name); // "this" is NOT manager here
  }
};
manager.showName(); // undefined
```

> **Rule of thumb:** use regular (shorthand) functions for object methods; use arrow functions for callbacks inside methods.

### 11. Methods with Parameters

Object methods accept parameters just like regular functions:

```js
let calculator = {
  add(a, b) {
    return a + b;
  }
};
console.log(calculator.add(5, 3)); // 8
```

---

## Checking & Inspecting Objects

### 12. The `in` Operator

Checks whether a key exists anywhere in an object — **including inherited properties**. Returns `true`/`false`.

```js
let bookInfo = { title: "JS Basics", pages: 250 };
console.log("title" in bookInfo);  // true
console.log("author" in bookInfo); // false
```

### 13. `hasOwnProperty()`

Checks whether a key exists **directly on the object itself**, ignoring inherited properties — usually more reliable than `in`.

```js
console.log(bookInfo.hasOwnProperty("pages"));    // true
console.log(bookInfo.hasOwnProperty("toString")); // false — inherited, not own
```

### 14. `typeof`

Returns `"object"` for plain objects **and** arrays alike (arrays are a special kind of object), so `typeof` alone can't tell them apart.

```js
console.log(typeof bookInfo); // "object"
```

---

## Object Static Methods

### 15. `Object.keys()`

Returns an array of the object's **keys**, in insertion order.

```js
let country = { name: "Bangladesh", capital: "Dhaka", population: 170000000 };
Object.keys(country); // ["name", "capital", "population"]
```

### 16. `Object.values()`

Returns an array of the object's **values**, in the same order as `Object.keys()`.

```js
Object.values(country); // ["Bangladesh", "Dhaka", 170000000]
```

### 17. `Object.entries()`

Returns an array of `[key, value]` pairs — perfect for looping over both together with `for...of`:

```js
Object.entries(country);
// [["name","Bangladesh"], ["capital","Dhaka"], ["population",170000000]]

for (let [key, value] of Object.entries(country)) {
  console.log(key + ": " + value);
}
```

### 18. `Object.assign()`

Copies all enumerable properties from one or more **source** objects into a **target** object and returns the target. Commonly used to merge objects or make a shallow copy. Later sources overwrite earlier ones:

```js
let baseSettings = { theme: "dark", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalSettings = Object.assign({}, baseSettings, userSettings);
// { theme: "dark", fontSize: 18 }
```

### 19. `Object.freeze()`

Prevents **any** changes — no adding, removing, or modifying properties. Changes fail silently in non-strict mode:

```js
let frozenConfig = { apiUrl: "https://api.example.com" };
Object.freeze(frozenConfig);
frozenConfig.apiUrl = "https://changed.com"; // ignored
console.log(frozenConfig.apiUrl); // "https://api.example.com"
```

### 20. `Object.isFrozen()`

Checks whether an object has been frozen:

```js
Object.isFrozen(frozenConfig); // true
```

### 21. `Object.seal()`

Prevents adding or removing properties, but **existing properties can still be modified** (unlike `freeze`, which locks everything):

```js
let sealedProfile = { username: "arman99" };
Object.seal(sealedProfile);
sealedProfile.username = "arman100";     // allowed — existing key
sealedProfile.email = "test@mail.com";   // ignored — new keys blocked
// { username: "arman100" }
```

| Method | Add | Remove | Modify |
|---|---|---|---|
| `Object.freeze()` | ❌ | ❌ | ❌ |
| `Object.seal()` | ❌ | ❌ | ✅ |

### 22. `Object.create()`

Creates a new object using an existing object as its **prototype** — the "template" it inherits properties and methods from:

```js
let personPrototype = {
  introduce() {
    console.log("Hi, I'm " + this.name);
  }
};
let newPerson = Object.create(personPrototype);
newPerson.name = "Salma";
newPerson.introduce(); // "Hi, I'm Salma" — introduce() is inherited
```

### 23. `Object.fromEntries()`

The reverse of `Object.entries()` — converts an array of `[key, value]` pairs back into a plain object:

```js
let entryPairs = [["a", 1], ["b", 2], ["c", 3]];
Object.fromEntries(entryPairs); // { a: 1, b: 2, c: 3 }
```

---

## Looping Over Objects

### 24. `for...in`

Loops over the **enumerable keys** of an object (not the values directly). This is the standard way to iterate over plain objects — unlike arrays, where `for...in` is discouraged:

```js
let vehicle = { brand: "Toyota", model: "Corolla", year: 2022 };
for (let key in vehicle) {
  console.log(key + " -> " + vehicle[key]);
}
```

---

## Copying & Combining Objects

### 25. Spread Operator (`...`)

Expands an object's own properties into a new object — a modern, shorter alternative to `Object.assign()` for shallow copies and merges:

```js
let originalUser = { name: "Nasrin", role: "admin" };
let copiedUser = { ...originalUser, active: true };
// { name: "Nasrin", role: "admin", active: true }
```

### 26. Destructuring Assignment

Unpacks object properties directly into individual variables, avoiding repeated dot-notation. You can also rename while destructuring with `key: newName`:

```js
let { name: userName, role: userRole } = originalUser;
console.log(userName, userRole); // "Nasrin" "admin"
```

---

## Advanced Property Features

### 27. Computed Property Names

Lets a variable or expression (wrapped in `[]`) be used **as the key itself** when creating an object:

```js
let dynamicKey = "score";
let gameResult = {
  [dynamicKey]: 95
};
// { score: 95 }
```

### 28. Getters

A special method that behaves like a property when **read** — the value is computed on the fly instead of being stored:

```js
let rectangle = {
  width: 10,
  height: 5,
  get area() {
    return this.width * this.height;
  }
};
console.log(rectangle.area); // 50 — no parentheses, reads like a property
```

### 29. Setters

A special method that behaves like a property when **assigned** a value, letting you run logic on every assignment:

```js
let temperature = {
  celsius: 0,
  set fahrenheit(value) {
    this.celsius = (value - 32) * (5 / 9);
  }
};
temperature.fahrenheit = 98.6;
console.log(temperature.celsius.toFixed(1)); // "37.0"
```

### 30. Optional Chaining (`?.`)

Safely accesses a nested property **without throwing an error** if a parent doesn't exist — returns `undefined` instead of crashing:

```js
let userProfile = { name: "Hossain" };
console.log(userProfile.address?.city); // undefined — no error
```

### 31. Nullish Coalescing (`??`)

Provides a fallback value **only** when the left side is `null` or `undefined`. Unlike `||`, it does not trigger on `0`, `""`, or `false`. Often paired with optional chaining:

```js
let cityName = userProfile.address?.city ?? "City not provided";
console.log(cityName); // "City not provided"
```

---

## JSON Conversion

### 32. `JSON.stringify()`

Converts a JavaScript object into a JSON-formatted **string** — commonly used to send data to a server or save it as text:

```js
let productInfo = { title: "Laptop", price: 55000 };
let productJSON = JSON.stringify(productInfo);
// '{"title":"Laptop","price":55000}'
console.log(typeof productJSON); // "string"
```

### 33. `JSON.parse()`

The reverse of `JSON.stringify()` — converts a JSON string back into a real JavaScript object:

```js
let parsedProduct = JSON.parse(productJSON);
// { title: "Laptop", price: 55000 }
console.log(typeof parsedProduct); // "object"
```

---

## Math Object (Built-in)

`Math` is a **built-in object** — you never create it with `new`; you call its properties and methods directly on `Math` itself.

### 34. Math Constants

Fixed mathematical values stored as properties — no parentheses needed:

```js
Math.PI; // 3.141592653589793
Math.E;  // 2.718281828459045 — Euler's number
```

### 35. `Math.round()`

Rounds to the **nearest** whole number — `.5` and above goes up, below `.5` goes down:

```js
Math.round(4.49); // 4
Math.round(4.6);  // 5
```

### 36. `Math.ceil()`

Always rounds **up** to the next whole number ("ceiling"), no matter how small the decimal part is:

```js
Math.ceil(1.1); // 2
Math.ceil(1.9); // 2
```

### 37. `Math.floor()`

Always rounds **down** to the previous whole number ("floor"), no matter how large the decimal part is:

```js
Math.floor(1.9); // 1
```

| Input | `round()` | `ceil()` | `floor()` |
|---|---|---|---|
| `4.49` | 4 | 5 | 4 |
| `4.6` | 5 | 5 | 4 |

### 38. `Math.sqrt()`

Returns the square root of a number:

```js
Math.sqrt(81); // 9
```

### 39. `Math.abs()`

Returns the **absolute value** — the distance from zero, so negatives become positive:

```js
Math.abs(-1.5); // 1.5
```

### 40. `Math.pow()`

Raises a base to a power: `Math.pow(base, exponent)`. The modern `**` operator does the same thing:

```js
Math.pow(2, 3); // 8
2 ** 3;         // 8 — same result
```

### 41. `Math.min()` / `Math.max()`

Return the smallest / largest of the numbers passed in. For an **array** of numbers, spread it first: `Math.min(...arr)`.

```js
Math.min(8, 6, 9, -7, 0); // -7
Math.max(8, 6, 9, -7, 0); // 9
```

### 42. `Math.random()`

Returns a random decimal from `0` (inclusive) up to `1` (exclusive):

```js
Math.random(); // e.g. 0.7231589...
```

### 43. Random Whole Number in a Range

The classic combo: scale `Math.random()` up, then `Math.floor()` it. Formula for 1 to N inclusive: `Math.floor(Math.random() * N + 1)`.

```js
let randomDice = Math.floor(Math.random() * 6 + 1);      // 1 to 6
let randomPercent = Math.floor(Math.random() * 100 + 1); // 1 to 100
```

---

## Date Object (Built-in)

Unlike `Math`, `Date` **is** created with the `new` keyword — each Date object represents one specific moment in time.

### 44. Creating Dates

`new Date()` with no arguments gives the current date and time. Passing a date string creates that specific moment instead:

```js
let today = new Date();
console.log(typeof today); // "object"

let birthday = new Date("01-13-2026 08:12:45");
// Tue Jan 13 2026 08:12:45
```

### 45. `toString()`

Converts a Date object into a human-readable string:

```js
today.toString();        // e.g. "Mon Jul 13 2026 ..."
typeof today.toString(); // "string"
```

### 46. Getting Date Parts

Each part of a date has its own getter method. Watch the two classic quirks:

- `getMonth()` is **zero-based** — `0` = January, `11` = December
- `getDay()` is the **weekday** (`0` = Sunday), not the day of the month — that's `getDate()`

```js
today.getFullYear(); // e.g. 2026
today.getMonth();    // 0-11 (0 = January!)
today.getDate();     // 1-31 — day of the MONTH
today.getDay();      // 0-6 — day of the WEEK (0 = Sunday)
```

### 47. Getting Time Parts

```js
today.getHours();   // 0-23
today.getMinutes(); // 0-59
today.getSeconds(); // 0-59
```

### 48. `getTime()` — the Timestamp

Returns the number of **milliseconds since Jan 1, 1970** (the "Unix epoch"). Useful for comparing dates or measuring elapsed time:

```js
today.getTime(); // e.g. 1783922400000
```

### 49. Setting Date Parts

Every getter has a matching setter that **modifies** the date object. Remember `setMonth()` is zero-based too (`2` = March):

```js
birthday.setMonth(2); // month becomes March
birthday.setDate(24); // day of month becomes 24
console.log(birthday); // Tue Mar 24 2026 08:12:45
```

---

## Quick Reference

| # | Concept | One-liner |
|---|---------|-----------|
| 1 | Object literal | `let obj = { key: value }` |
| 2 | Dot notation | `obj.key` |
| 3 | Bracket notation | `obj["key"]` or `obj[variable]` |
| 4–5 | Add / update | `obj.newKey = value` |
| 6 | Delete | `delete obj.key` |
| 8 | Method shorthand | `obj = { greet() {...} }` |
| 9–10 | `this` | Set at call time; arrows inherit it |
| 12 | `in` | Key exists (incl. inherited) |
| 13 | `hasOwnProperty()` | Key exists (own only) |
| 15–17 | Keys / values / entries | Arrays of keys, values, or pairs |
| 18 | `Object.assign()` | Merge / shallow copy |
| 19–21 | Freeze / seal | Lock everything / lock structure only |
| 22 | `Object.create()` | New object from a prototype |
| 23 | `Object.fromEntries()` | Pairs → object |
| 24 | `for...in` | Loop over keys |
| 25 | Spread `...` | Modern shallow copy / merge |
| 26 | Destructuring | `let { a, b } = obj` |
| 27 | Computed keys | `{ [expr]: value }` |
| 28–29 | Getters / setters | Property-like methods |
| 30–31 | `?.` and `??` | Safe access + fallback |
| 32–33 | JSON | Object ↔ string |
| 34 | Math constants | `Math.PI`, `Math.E` |
| 35–37 | Rounding | `round()` nearest / `ceil()` up / `floor()` down |
| 38–40 | `sqrt` / `abs` / `pow` | Root, absolute value, power |
| 41 | `Math.min()` / `max()` | Smallest / largest of the arguments |
| 42–43 | `Math.random()` | Random 0–1; `floor(random() * N + 1)` for 1–N |
| 44 | `new Date()` | Current moment, or from a date string |
| 45 | `toString()` | Date → readable string |
| 46–47 | Getters | Year, month (0-based!), date, day, hours… |
| 48 | `getTime()` | Milliseconds since 1970 (timestamp) |
| 49 | Setters | `setMonth()`, `setDate()` — modify the date |
