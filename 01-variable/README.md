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