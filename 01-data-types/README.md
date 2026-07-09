# JavaScript Values

Everything in JavaScript is built around values.

A value is simply a piece of data that JavaScript can work with.

For example:

```
10
"Arman"
true
null
```

These are all values.

Whenever you write JavaScript code, you're either:

- Writing a value directly (Literal)
- Storing a value inside a variable (Variable)

```
JavaScript Values
│
├── Literals (Fixed Values)
│
└── Variables (Variable Values)
```

## 1. Literals (Fixed Values)

A Literal is a value that you write directly into your code. You don't need another variable or calculation to get it.

Think of it as the actual value itself.

Example

```js
100
```

`100` is a literal. `"Hello"` is also a literal. `true` is also a literal.

### Types of Literals

#### Number Literal

```js
console.log(100);  // 100
```

#### String Literal

```js
console.log("JavaScript");  // JavaScript
```

#### Boolean Literal

```js
let isLoggedIn = true;
```

#### Null Literal

```js
let user = null;
```

#### Undefined

```js
let value = undefined;
```

#### Object Literal

```js
{
    name: "Arman",
    age: 23
}
```

#### Array Literal

```js
[10, 20, 30]
```

#### Function Literal

```js
function greet() {}
```

### Why are they called "Fixed Values"?

Because they are written exactly as they are. JavaScript immediately knows the value without looking anywhere else.

## 2. Variables (Variable Values)

Variables are containers that store values.

Example

```js
let age = 100;
```

Here `100` is the literal and `age` is the variable.

### Why use Variables?

Without variables

```js
console.log("Arman");
console.log("Arman");
console.log("Arman");
```

If you change your name, you must edit every line.

With variables

```js
let name = "Arman";

console.log(name);
console.log(name);
console.log(name);

name = "Rahim"; // Everything updates automatically
```

### Variables are called "Variable Values"

Because the value inside them can change.

```js
let score = 50;
score = 80;
score = 95;
```

The variable remains the same. Only its value changes.

## Literal vs Variable

```js
// Literal
console.log(100);

// Variable
let age = 100;
console.log(age);
```

Both output `100`, but with a variable, JavaScript first looks inside `age`.

## Interview Question

```js
let x = 10;
```

- Variable → `x`
- Literal → `10`

```js
const country = "Bangladesh";
```

- Variable → `country`
- Literal → `"Bangladesh"`

## Key Difference

| Literals | Variables |
|---|---|
| Actual values written directly in code | Named containers that store values |
| Fixed at the place they are written | Can hold different values over time (except `const`) |
| Examples: `10`, `"Hello"`, `true`, `[1,2]`, `{}` | Examples: `age`, `name`, `isLoggedIn` |

## Quick Revision

- A value is any piece of data JavaScript can work with.
- A literal is a value written directly in the code (e.g., `42`, `"Hello"`, `true`).
- A variable is a named container that stores a value.
- Variables make code reusable and easier to maintain.
- In `let age = 25;`, `age` is the variable and `25` is the literal.
- Numbers, strings, booleans, arrays, objects, null, and even function definitions can all be written as literals.

---

# JavaScript Keywords

## Definition

Keywords are reserved words that have a predefined meaning in JavaScript.

JavaScript uses them to perform specific actions — like declaring variables, creating loops, or returning values from functions.

You cannot use keywords as variable names, function names, or identifiers.

## Real-Life Analogy

Imagine traffic signals.

- **Red** → Stop
- **Green** → Go
- **Yellow** → Slow

You cannot change the meaning of these signals. Similarly, JavaScript keywords have fixed meanings.

## Common Keywords

| Keyword | Purpose |
|---|---|
| `let` | Declare a block-scoped variable |
| `const` | Declare a constant variable |
| `var` | Declare a function-scoped variable (old way) |
| `if` | Conditional statement |
| `else` | Alternative condition |
| `switch` | Multiple condition checking |
| `for` | Loop |
| `while` | Loop |
| `do` | Loop |
| `function` | Declare a function |
| `return` | Return a value from a function |
| `break` | Exit a loop or switch |
| `continue` | Skip current loop iteration |
| `class` | Create a class |
| `new` | Create an object |
| `this` | Refer to the current object |
| `typeof` | Check the type of a value |
| `try` | Handle errors |
| `catch` | Catch errors |
| `throw` | Throw an error |
| `import` | Import modules |
| `export` | Export modules |
| `delete` | Delete an object property |
| `in` | Check if a property exists in an object |
| `instanceof` | Check if an object is an instance of a class |

## Example

```js
let age = 22;

if (age >= 18) {
    console.log("Adult");
}
```

Here `let` and `if` are keywords.

## Invalid Example

```js
let if = 10; // ❌ SyntaxError
```

Output

```
SyntaxError: Unexpected token 'if'
```

Because `if` is a reserved keyword. Keywords also apply to casing — `Let` and `LET` are not valid keywords, only `let`.

---

# JavaScript Variables

## Definition

A variable is a named container used to store data.

Instead of writing values repeatedly, we store them in variables.

## Real-Life Analogy

```
Water Bottle → Contains Water
Variable     → Contains Value
```

## Three ways to declare a variable

```
var    → function-scoped, old way (avoid in modern code)
let    → block-scoped, can be reassigned
const  → block-scoped, cannot be reassigned
```

## `var`

```js
var name = "Arman";
console.log(name); // Arman
```

`var` is function-scoped and was the original way to declare variables. It has quirky behavior (hoisting, no block scope) so it is avoided in modern JavaScript.

## `let`

```js
let age = 23;
age = 24; // ✅ can be reassigned

console.log(age); // 24
```

Use `let` when the value will change over time.

## `const`

```js
const country = "Bangladesh";
country = "India"; // ❌ TypeError
```

Output

```
TypeError: Assignment to constant variable.
```

Use `const` when the value should never change.

## Variables can store any type

```js
let num = 10;
let city = "Dhaka";
let isStudent = true;
let colors = ["Red", "Blue"];
let person = { name: "Arman" };
```

## Declaring without a value

```js
let score;
console.log(score); // undefined
```

A variable declared without a value is automatically `undefined`.

## var vs let vs const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Reassignable | ✅ | ✅ | ❌ |
| Hoisted | ✅ (as `undefined`) | ✅ (but not initialized) | ✅ (but not initialized) |
| Modern usage | ❌ Avoid | ✅ Use | ✅ Prefer |

## Interview Question

```js
var x = 1;
let y = 2;
const z = 3;

x = 10; // ✅
y = 20; // ✅
z = 30; // ❌ TypeError
```

---

# JavaScript Hoisting

## What is Hoisting?

Before JavaScript runs your code line by line, it first scans the entire file and allocates memory for all variables and functions. This phase is called the **Memory Creation Phase**.

This behavior — where declarations are processed before execution — is called **Hoisting**.

> Hoisting does NOT move code to the top. It only allocates memory for declarations before execution begins.

## Common Misconception

Many people say:

> "let and const are not hoisted."

❌ This is wrong.

The correct statement is:

> **var, let, and const — all three are hoisted.**

The difference is in how they are initialized in memory.

## Memory Creation Phase

Given this code:

```js
console.log(a);
console.log(b);

var a = 10;
let b = 20;
```

Before any line executes, JavaScript scans and sets up memory like this:

```
a → undefined
b → <uninitialized>
```

Both `a` and `b` get memory. But their initial state is different.

## Execution Phase

```js
console.log(a); // undefined  ← memory has a value (undefined)
console.log(b); // ❌ ReferenceError ← memory exists but no value yet
```

Notice the exact error for `b`:

```
ReferenceError: Cannot access 'b' before initialization
```

Not `b is not defined` — JavaScript **knows** `b` exists in memory. It just has no value yet. This itself is proof that `let` is hoisted.

## var vs let vs const in Hoisting

| | `var` | `let` | `const` |
|---|---|---|---|
| Memory allocated? | ✅ | ✅ | ✅ |
| Initialized immediately? | ✅ `undefined` | ❌ | ❌ |
| Accessible before declaration? | ✅ (returns `undefined`) | ❌ TDZ error | ❌ TDZ error |

## Temporal Dead Zone (TDZ)

The time between when `let` / `const` is hoisted (memory allocated) and when its declaration line is actually executed is called the **Temporal Dead Zone**.

During TDZ, accessing the variable throws a `ReferenceError`.

```js
console.log(name); // ❌ TDZ — ReferenceError
let name = "Arman";
console.log(name); // ✅ "Arman" — TDZ is over
```

## Real-Life Analogy

Think of a new employee joining a company.

**`var`** — HR sets up the desk before they arrive and puts a placeholder name tag on it. You can visit the desk, but the employee isn't there yet.

```
Desk → "Unnamed Employee" (undefined)
```

**`let` / `const`** — HR reserves the desk but puts a "Reserved — Do Not Enter" sign on it. If you try to go there before the employee officially joins, you get stopped.

```
Desk → Reserved (Temporal Dead Zone)
```

## Interview Tip

If asked *"Is `let` hoisted?"* — just saying "No" or "Yes" is incomplete.

The correct answer:

> `let` is hoisted — memory is allocated during the Memory Creation Phase. However, unlike `var`, it is not initialized with `undefined`. It stays in the **Temporal Dead Zone** until its declaration line is executed, which is why accessing it early throws a `ReferenceError`.

---

# JavaScript Identifiers

## Definition

An identifier is the name given to variables, functions, classes, objects, arrays, etc.

Every variable name is an identifier. Every function name is an identifier.

```js
let firstName = "Arman"; // firstName → identifier

function greet() {}      // greet → identifier
```

## Identifier Naming Rules

### Rule 1 — Must start with a letter, `_`, or `$`

```js
let name;    // ✅
let _age;    // ✅
let $price;  // ✅
let 1name;   // ❌ cannot start with a number
```

### Rule 2 — Cannot contain spaces

```js
let firstName;   // ✅
let first name;  // ❌
```

### Rule 3 — Cannot use keywords

```js
let for = 10;  // ❌ reserved keyword
```

### Rule 4 — Can contain letters, numbers, `_`, `$`

```js
let student1;     // ✅
let user_name;    // ✅
let totalPrice2;  // ✅
let my-score;     // ❌ hyphens not allowed
```

## Rules Summary

| Rule | ✅ Correct | ❌ Wrong |
|---|---|---|
| Start with letter, `_`, or `$` | `name`, `_id`, `$price` | `2name` |
| No spaces | `firstName` | `first name` |
| No keywords | `myClass` | `class` |
| No hyphens | `my_score` | `my-score` |
| Case sensitive | `name` ≠ `Name` | — |

## Interview Question

```js
let _name = "A";     // ✅
let $amount = 100;   // ✅
let 9lives = true;   // ❌ starts with a number
let for = 10;        // ❌ reserved keyword
let my_score = 50;   // ✅
let my-score = 50;   // ❌ hyphen not allowed
```

---

# JavaScript Operators

## Definition

Operators are symbols that perform operations on values or variables.

```js
5 + 3
```

Here `+` is the operator. `5` and `3` are the operands.

## Types of Operators

### 1. Arithmetic Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 2` | `5` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `x++` | adds 1 |
| `--` | Decrement | `x--` | subtracts 1 |

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

### 2. Assignment Operators

| Operator | Example | Same As |
|---|---|---|
| `=` | `x = 10` | `x = 10` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `%=` | `x %= 5` | `x = x % 5` |

```js
let x = 10;
x += 5;
console.log(x); // 15
```

### 3. Comparison Operators

Always returns `true` or `false`.

| Operator | Name | Example | Result |
|---|---|---|---|
| `==` | Equal (loose) | `5 == "5"` | `true` |
| `===` | Equal (strict) | `5 === "5"` | `false` |
| `!=` | Not equal (loose) | `5 != 3` | `true` |
| `!==` | Not equal (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater or equal | `5 >= 5` | `true` |
| `<=` | Less or equal | `4 <= 5` | `true` |

```js
console.log(5 == "5");   // true  → only checks value
console.log(5 === "5");  // false → checks value AND type
```

Same logic applies for `!=` and `!==`:
 
```js
console.log(5 != "5");   // false → values are equal, so "not equal" is false
console.log(5 !== "5");  // true  → value is equal but type is different, so strictly not equal
```

Always prefer `===` over `==` to avoid unexpected bugs.

### 4. Logical Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |

```js
let age = 20;
let isStudent = true;

console.log(age > 18 && isStudent); // true
console.log(age < 18 || isStudent); // true
console.log(!isStudent);            // false
```

### 5. String Operator

`+` is also used to join (concatenate) strings.

```js
let firstName = "Arman";
let lastName = "Hossain";

console.log(firstName + " " + lastName); // Arman Hossain
```

### 6. Ternary Operator

A shorthand for `if/else`.

```js
condition ? valueIfTrue : valueIfFalse
```

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Child";

console.log(result); // Adult
```

### 7. typeof Operator

Returns the data type of a value.

```js
console.log(typeof 42);        // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (known bug)
```

## Interview Question

```js
console.log(5 == "5");   // ?
console.log(5 === "5");  // ?
```

Output

```
true
false
```

`==` only compares values. `===` compares both value and type.

---

# JavaScript Expressions

## Definition

An expression is any valid piece of code that produces a value.

Think of it as:

```
Input → Calculation → Output (Value)
```

## Examples

```js
10 + 20          // produces 30
age + 5          // produces a value
true && false    // produces false
"Arman" + " Hossain"  // produces "Arman Hossain"
```

Everything below is an expression:

```js
100
"Hello"
true
age + 10
5 * 8
x > y
age >= 18 ? "Adult" : "Minor"
"Arman".length
```

## Types of Expressions

### Arithmetic Expression

```js
let result = 10 * 3; // 30
```

### String Expression

```js
let greeting = "Hello" + " " + "Arman"; // "Hello Arman"
```

### Boolean Expression

```js
let isAdult = 20 >= 18; // true
```

### Variable Expression

```js
let x = 10;
let y = x; // x is an expression — it evaluates to 10
```

### Ternary Expression

```js
let status = 20 >= 18 ? "Adult" : "Minor"; // "Adult"
```

## Expression vs Statement

An **expression** produces a value.

```js
5 + 5      // produces 10
age > 18   // produces true or false
"Hi"       // produces "Hi"
```

A **statement** performs an action.

```js
let age = 20;     // declares a variable
if (x > 0) {}    // performs a conditional check
for (...) {}     // runs a loop
```

Every expression can be used inside a statement, but not every statement is an expression.

---

# JavaScript is Case Sensitive

JavaScript treats uppercase and lowercase letters as completely different characters.

```js
age
Age
AGE
aGe
```

All four are different identifiers.

## Example

```js
let name = "Arman";
let Name = "Rahim";
let NAME = "Karim";

console.log(name); // Arman
console.log(Name); // Rahim
console.log(NAME); // Karim
```

## Common Mistake

```js
let city = "Dhaka";

console.log(city);  // Dhaka
console.log(City);  // ❌ ReferenceError: City is not defined
```

`city` and `City` are completely different variables.

## Keywords are also case sensitive

```js
let x = 10;  // ✅

Let x = 10;  // ❌ SyntaxError
LET x = 10;  // ❌ SyntaxError
```

Only `let`, `const`, `var` (all lowercase) are valid keywords.

---

# JavaScript and Camel Case

## What is Camel Case?

Camel Case is the most common naming convention in JavaScript.

- The first word starts with a **lowercase** letter
- Every next word starts with an **uppercase** letter

```
firstName
lastName
totalPrice
studentAge
isLoggedIn
```

## Why "Camel"?

The capital letters look like camel humps.

```
firstName
    ↑
Camel hump
```

## Why use it in JavaScript?

JavaScript does not allow spaces in identifiers.

```js
let first name = "Arman"; // ❌ SyntaxError
let firstName = "Arman";  // ✅
```

## Naming Conventions

| Convention | Example | Used In |
|---|---|---|
| Camel Case | `firstName` | JS variables, functions |
| Pascal Case | `FirstName` | JS classes |
| Snake Case | `first_name` | Python, databases |
| Kebab Case | `first-name` | CSS, HTML (not valid in JS) |
| Screaming Snake Case | `FIRST_NAME` | Constants |

## JavaScript Convention

```js
// Variables and functions → camelCase
let userName = "Arman";
function calculateTotal() {}

// Classes → PascalCase
class Student {}

// Constants → SCREAMING_SNAKE_CASE
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";
```

## Good vs Bad

```js
// ✅ Good
let totalPrice = 500;
let isUserLoggedIn = true;
function calculateTax() {}

// ❌ Bad (valid JS but not conventional)
let totalprice = 500;
let total_price = 500;
let TotalPrice = 500;
```

All three work, but `totalPrice` is the JavaScript standard.

---

# JavaScript Statements

## Definition

A statement is a complete instruction that tells JavaScript to perform an action.

JavaScript programs are made up of statements executed one by one, top to bottom.

```js
let x = 10;       // Statement 1
let y = 20;       // Statement 2
let z = x + y;    // Statement 3
console.log(z);   // Statement 4
```

## A Statement is Made of

```
Values + Operators + Expressions + Keywords + Comments
```

### Breakdown Example 1

```js
let age = 20 + 5;
```

| Part | What it is |
|---|---|
| `let` | Keyword |
| `age` | Identifier (variable name) |
| `=` | Assignment Operator |
| `20` | Literal Value |
| `+` | Arithmetic Operator |
| `5` | Literal Value |
| `20 + 5` | Expression |
| `;` | Statement Terminator |

### Breakdown Example 2

```js
if (age >= 18) {
    console.log("Adult");
}
```

| Part | What it is |
|---|---|
| `if` | Keyword |
| `age` | Variable |
| `>=` | Comparison Operator |
| `18` | Literal |
| `age >= 18` | Expression |
| `console.log()` | Function Call Statement |

## Semicolons

Semicolons mark the end of a statement.

```js
let a = 10;
let b = 20;
let c = a + b;
```

JavaScript has Automatic Semicolon Insertion (ASI), so semicolons are often optional — but including them is a good habit to avoid subtle bugs.

## Code Blocks

Multiple statements grouped inside `{}` form a code block.

```js
if (true) {
    let x = 10;      // Statement 1
    console.log(x);  // Statement 2
}
```

## Types of Statements

### Declaration Statement

```js
let name = "Arman";
const PI = 3.14;
```

### Conditional Statement

```js
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Loop Statement

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

Output

```
0
1
2
```

### Function Declaration Statement

```js
function greet() {
    console.log("Hello");
}
```

### Return Statement

```js
function add(a, b) {
    return a + b;
}
```

## Comments

Comments are notes for developers and are completely ignored by JavaScript.

Single-line comment

```js
// This is a single-line comment
let age = 23; // age of the user
```

Multi-line comment

```js
/*
  This is a multi-line comment.
  JavaScript ignores everything here.
*/
let score = 100;
```

## Full Example — All parts together

```js
// Calculate the total price after tax
const TAX_RATE = 0.1;
let price = 500;
let tax = price * TAX_RATE;
let total = price + tax;

console.log(total);
```

Output

```
550
```

## Summary

| Topic | Definition | Example |
|---|---|---|
| **Keyword** | Reserved word with a predefined meaning | `let`, `if`, `return` |
| **Variable** | Named container that stores data | `let age = 20;` |
| **Identifier** | Name given to variables, functions, classes | `age`, `firstName`, `calculateTotal` |
| **Operator** | Symbol that performs an operation | `+`, `-`, `&&`, `===` |
| **Expression** | Code that evaluates to a value | `5 + 5`, `age > 18` |
| **Case Sensitive** | Uppercase and lowercase are treated differently | `name` ≠ `Name` |
| **Camel Case** | First word lowercase, next words capitalized | `firstName`, `totalPrice` |
| **Statement** | A complete instruction executed by JavaScript | `let age = 20;`, `if(age >= 18){}` |

---


# JavaScript Data Types

JavaScript data types are divided into 2 categories:

```
JavaScript Data Types
│
├── Primitive Data Types
│
└── Object (Reference) Data Types
```

## 1. Primitive Data Types

Primitive values are the most basic values in JavaScript.

They are immutable (cannot be changed directly).

JavaScript has 7 primitive data types.

| Data Type | Example |
|---|---|
| String | "Arman" |
| Number | 25, 3.14 |
| Boolean | true, false |
| Undefined | undefined |
| Null | null |
| Symbol | Symbol("id") |
| BigInt | 12345678901234567890n |

Example:

```js
let name = "Arman";
let age = 23;
let isStudent = true;
let city = undefined;
let salary = null;
let id = Symbol("id");
let big = 999999999999999999999999999n;
```

### Characteristics of Primitive Types

#### 1. Stored by Value

When you assign a primitive variable to another variable, JavaScript copies the actual value.

Example:

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output

```
10
20
```

Memory Visualization

Stack Memory

```
a → 10
b → 10
```

After `b = 20`

```
a → 10
b → 20
```

Changing `b` does NOT affect `a`. Because each variable has its own copy.

#### 2. Immutable

Strings cannot be changed.

Example

```js
let name = "Arman";

name[0] = "B";

console.log(name);
```

Output

```
Arman
```

Nothing changes. Instead, JavaScript creates a new string.

Correct way

```js
let name = "Arman";

name = "Brman";

console.log(name);
```

Output

```
Brman
```

Notice: the original string wasn't modified. A new string was created.

## 2. Object (Reference) Data Types

Everything else is an Object.

Examples:

```js
let person = {
    name: "Arman",
    age: 23
};

let colors = ["red", "blue"];

function greet() {}

let date = new Date();

let map = new Map();
```

Common Object Types

```
Object
Array
Function
Date
Map
Set
RegExp
Error
```

### Characteristics of Object Types

#### Stored by Reference

Unlike primitives, objects are stored using a reference (address).

Example

```js
let person1 = {
    name: "Arman"
};

let person2 = person1;

person2.name = "Rahim";

console.log(person1.name);
console.log(person2.name);
```

Output

```
Rahim
Rahim
```

Many beginners expect

```
Arman
Rahim
```

But that's incorrect.

Memory Visualization

Stack

```
person1 → 0x100
person2 → 0x100
```

Both variables point to the same memory address.

Heap

```
0x100

{
    name: "Arman"
}
```

After `person2.name = "Rahim";`

Heap becomes

```
0x100

{
    name: "Rahim"
}
```

Both variables point to the same object.

## Primitive vs Object

### Primitive

```js
let a = 5;
let b = a;

b = 100;

console.log(a);
```

Output

```
5
```

### Object

```js
let a = {
    value: 5
};

let b = a;

b.value = 100;

console.log(a.value);
```

Output

```
100
```

### Why?

Primitive

```
a ----> 5

b ----> 5
```

Different copies.

Object

```
a --------\
           \
            ----> Object
           /
b --------/
```

Same object.

## typeof

Primitive

```js
typeof "hello"     // "string"
typeof 100         // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof Symbol()    // "symbol"
typeof 100n        // "bigint"
```

### Weird Interview Question

```js
typeof null
```

Output

```
"object"
```

Why?

This is a historical bug in JavaScript. `null` is actually a primitive data type, but `typeof null` returns `"object"` because of a legacy implementation mistake that has been kept for backward compatibility.

## Interview Questions

### Interview Question 1

```js
let x = 10;
let y = x;

y = 20;

console.log(x);
```

Output? ✅ `10`

### Interview Question 2

```js
let x = {
    age: 20
};

let y = x;

y.age = 50;

console.log(x.age);
```

Output? ✅ `50`

### Interview Question 3

```js
let arr1 = [1, 2, 3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output

```
[1, 2, 3, 4]
```

Because arrays are objects.

### Interview Question 4

```js
let a = {};
let b = {};

console.log(a === b);
```

Output

```
false
```

Why?

Although they look identical, each object is created at a different memory address. `===` compares object references, not object contents.

## Quick Revision

| Primitive | Object |
|---|---|
| 7 types | Everything else |
| Stored by value | Stored by reference |
| Immutable | Mutable |
| Copied by value | Copied by reference |
| Stored directly | Stored in heap, referenced from stack |

## Easy Way to Remember

Imagine this:

- **Primitive** = A photocopy of a document. If you write on your copy, the original doesn't change.
- **Object** = Two people sharing the same Google Doc. If one person edits it, everyone sees the changes.

This mental model explains why primitives behave independently while objects reflect shared changes.

## Practice Questions

Try predicting the output before running the code:

```js
let a = "Hello";
let b = a;
b = "World";

console.log(a);
console.log(b);
```

Output

```
Hello
World
```

```js
let user1 = { name: "Alice" };
let user2 = user1;

user2.name = "Bob";

console.log(user1.name);
```

Output

```
Bob
```

```js
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function(){});
```

Output

```
object
object
object
function
```