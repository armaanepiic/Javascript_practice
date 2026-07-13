# JavaScript Loops — `for`, `while`, `for...in`, `for...of`

A clean reference covering the four core loop structures in JavaScript,
when to use each one, and why `for...of` fails on plain objects.

---

## 1. Basic `for` Loop

The classic loop — use it when you know exactly how many times you want
to repeat something, or need direct control over the counter.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

**Structure:**
```javascript
for (initialization; condition; increment) {
  // code to repeat
}
```

- **Initialization** — runs once, before the loop starts (`let i = 0`).
- **Condition** — checked before every pass; loop continues while it's `true`.
- **Increment** — runs after every pass (`i++`).

**Looping over an array with a basic `for` loop:**
```javascript
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // "Apple", "Banana", "Mango"
}
```

---

## 2. `while` Loop

Use `while` when you don't know in advance how many times you'll loop —
only that it should keep going as long as a condition stays `true`.

```javascript
let count = 0;
while (count < 5) {
  console.log(count); // 0, 1, 2, 3, 4
  count++;
}
```

**Structure:**
```javascript
while (condition) {
  // code to repeat
  // something inside MUST eventually make the condition false,
  // or the loop runs forever
}
```

**`do...while`** — a close cousin that always runs the code block **at
least once**, since the condition is checked *after* the first pass:

```javascript
let attempts = 0;
do {
  console.log("Attempt " + attempts); // "Attempt 0" -> runs once even before checking
  attempts++;
} while (attempts < 3);
```

---

## 3. `for...in` Loop — loops over KEYS

Designed for **objects** — walks through the object's enumerable
property names (keys), one at a time.

```javascript
let person = {
  name: "Arman",
  age: 28,
  profession: "Web Developer",
};

for (let key in person) {
  console.log(key); // "name", "age", "profession"
}

// combine with the object to get values too
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// "name: Arman"
// "age: 28"
// "profession: Web Developer"
```

`for...in` **can** technically be used on arrays too, but it's discouraged
there — it loops over *indexes as strings* and can also pick up inherited
enumerable properties, which `for...of` avoids entirely.

```javascript
let colors = ["Red", "Green", "Blue"];
for (let index in colors) {
  console.log(index); // "0", "1", "2" -> strings, not numbers
}
```

---

## 4. `for...of` Loop — loops over VALUES

Designed for **iterables** — arrays, strings, Maps, and Sets — walks
through the actual **values** directly, in order.

```javascript
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color); // "Red", "Green", "Blue"
}

let word = "Hi!";
for (let letter of word) {
  console.log(letter); // "H", "i", "!"
}
```

### Why `for...of` fails on plain objects

```javascript
let person = {
  name: "Arman",
  age: 28,
  profession: "Web Developer",
};

for (let x of person) {
  console.log(x);
}
// TypeError: person is not iterable
```

`for...of` only works on things that are **iterable** — meaning they
implement a special internal method called `Symbol.iterator`. This method
tells `for...of` exactly how to step through values one at a time: which
comes first, which comes next, and when to stop.

```javascript
console.log(typeof person[Symbol.iterator]); // "undefined" -> plain objects don't have this
console.log(typeof colors[Symbol.iterator]);  // "function"  -> arrays DO have this
```

Plain objects represent a **collection of key-value pairs**, not an
**ordered list** — so JavaScript doesn't assume there's one "correct" way
to loop through them (keys? values? both?). Rather than guess, it simply
doesn't implement `Symbol.iterator` on plain objects, which is why you get
that `TypeError` the instant you try `for...of` directly on one.

### Making an object loopable with `for...of`

Convert the object into an iterable array first, using one of these:

```javascript
// Loop over KEYS
for (let key of Object.keys(person)) {
  console.log(key); // "name", "age", "profession"
}

// Loop over VALUES
for (let value of Object.values(person)) {
  console.log(value); // "Arman", 28, "Web Developer"
}

// Loop over [key, value] PAIRS together
for (let [key, value] of Object.entries(person)) {
  console.log(key + ": " + value);
}
// "name: Arman"
// "age: 28"
// "profession: Web Developer"
```

---

## 5. Quick Comparison Table

| Loop | Best for | What you get | Works on plain objects? |
|---|---|---|---|
| `for` | Known number of repetitions, counter control | index / count | Yes (with manual indexing) |
| `while` | Unknown repetitions, condition-based | — | Yes (with manual indexing) |
| `for...in` | Objects | keys (property names) | **Yes** |
| `for...of` | Iterables (arrays, strings, Maps, Sets) | values | **No** — needs `Object.keys()/values()/entries()` first |

---

## 6. The Core Takeaway

- **`for` / `while`** — general-purpose loops, controlled by a condition
  you write yourself.
- **`for...in`** — walks an object's **keys**; the natural fit for plain
  objects.
- **`for...of`** — walks an iterable's **values**; requires
  `Symbol.iterator`, which plain objects don't have, but arrays, strings,
  Maps, and Sets do.
- To loop an object's data **with `for...of`**, convert it first using
  `Object.keys()`, `Object.values()`, or `Object.entries()` — all three
  return arrays, which are iterable.