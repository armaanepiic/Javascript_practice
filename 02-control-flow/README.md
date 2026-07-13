# JavaScript Loops — `while`, `for`, `for...in`, `for...of`, `forEach`

A clean reference covering the core loop structures in JavaScript,
how they behave with **strings, arrays, objects, Maps, and Sets**,
when to use each one, and why `for...of` fails on plain objects.

**Sample data used throughout (matches `loops.js`):**

```javascript
let message = "I am learning Javascript";
let food = ["Cake", "Biscuit", "Lemon", "Apple"];
let person = {
  name: "Arman",
  age: 28,
  profession: "Web Developer",
};
let scores = new Map([
  ["math", 90],
  ["english", 85],
  ["physics", 95],
]);
let colors = new Set(["red", "green", "blue", "red"]); // duplicate "red" is ignored
```

---

## 1. `while` Loop

Use `while` when you don't know in advance how many times you'll loop —
only that it should keep going as long as a condition stays `true`.
The condition is checked **before** every pass.

```javascript
let x = 1;
while (x <= 10) {
  console.log("Hi", x); // "Hi 1" ... "Hi 10"
  x++;
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

**`while` over a string (manual index):**
```javascript
let i = 0;
while (i < message.length) {
  console.log(`index ${i} = ${message[i]}`);
  i++;
}
```

**`while` over an array (manual index):**
```javascript
let j = 0;
while (j < food.length) {
  console.log(food[j]); // "Cake", "Biscuit", "Lemon", "Apple"
  j++;
}
```

**`do...while`** — a close cousin that always runs the code block **at
least once**, since the condition is checked *after* the first pass:

```javascript
let y = 1;
do {
  console.log("Hello", y); // runs once even before checking
  y++;
} while (y <= 5);
```

---

## 2. Basic `for` Loop

The classic loop — use it when you know exactly how many times you want
to repeat something, or need direct control over the counter.

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i); // 0, 1, 2, ..., 10
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

**Looping over a string with a basic `for` loop:**
```javascript
for (let i = 0; i < message.length; i++) {
  console.log(`index (${i}) = ${message[i]}`);
}
```

**Looping over an array with a basic `for` loop:**
```javascript
for (let i = 0; i < food.length; i++) {
  console.log(food[i]); // "Cake", "Biscuit", "Lemon", "Apple"
}
```

**Map/Set have no numeric index** — a basic `for` can't reach into them
directly. Spread them into an array first:

```javascript
let colorArr = [...colors];
for (let i = 0; i < colorArr.length; i++) {
  console.log(colorArr[i]); // "red", "green", "blue"
}
```

---

## 3. `for...in` Loop — loops over KEYS

Designed for **objects** — walks through the object's enumerable
property names (keys), one at a time.

```javascript
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

`for...in` **can** technically be used on strings and arrays too, but it's
discouraged there — it loops over *indexes as strings* and can also pick up
inherited enumerable properties, which `for...of` avoids entirely.

```javascript
// string -> x is the index ("0", "1", "2", ...)
for (let x in message) {
  console.log(`index ${x}, item = ${message[x]}`);
}

// array -> x is the index as a STRING, not a number
for (let x in food) {
  console.log(`index ${x}, item = ${food[x]}`);
  console.log(typeof x); // "string"
}
```

**`for...in` does NOT work with Map/Set** — their entries are stored
internally, not as enumerable properties, so the loop body simply never
runs (no error, just silence):

```javascript
for (let x in scores) {
  console.log(x); // prints nothing
}
```

---

## 4. `for...of` Loop — loops over VALUES

Designed for **iterables** — strings, arrays, Maps, and Sets — walks
through the actual **values** directly, in order.

**With a string (value = each character):**
```javascript
for (let x of message) {
  console.log(x); // "I", " ", "a", "m", ...
}
```

**With an array (value = each item):**
```javascript
for (let x of food) {
  console.log(x); // "Cake", "Biscuit", "Lemon", "Apple"
}
```

**With a Map (value = a `[key, value]` pair — destructure it):**
```javascript
for (let [key, value] of scores) {
  console.log(`${key} => ${value}`);
}
// "math => 90"
// "english => 85"
// "physics => 95"

// or walk just one side of the Map:
for (let key of scores.keys()) console.log(key);     // "math", "english", "physics"
for (let value of scores.values()) console.log(value); // 90, 85, 95
```

**With a Set (value = each unique item):**
```javascript
for (let x of colors) {
  console.log(x); // "red", "green", "blue" -> duplicate "red" appears only once
}
```

### Why `for...of` fails on plain objects

```javascript
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
console.log(typeof food[Symbol.iterator]);   // "function"  -> arrays DO have this
console.log(typeof scores[Symbol.iterator]); // "function"  -> Maps DO have this
console.log(typeof colors[Symbol.iterator]); // "function"  -> Sets DO have this
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

## 5. `forEach` — the built-in loop *method*

Not a loop statement — a **method** available on arrays, Maps, and Sets.
You hand it a callback function, and it calls that function once per
element. Note: you **cannot** `break` out of a `forEach` — use `for...of`
if you need early exit.

**With an array — callback receives `(item, index)`:**
```javascript
food.forEach((item, index) => console.log(index, item));
// 0 "Cake"
// 1 "Biscuit"
// 2 "Lemon"
// 3 "Apple"
```

**With a Map — callback receives `(value, key)` (value comes FIRST!):**
```javascript
scores.forEach((value, key) => console.log(key, "=>", value));
// "math => 90"
// "english => 85"
// "physics => 95"
```

**With a Set — callback receives just the value:**
```javascript
colors.forEach((value) => console.log(value));
// "red", "green", "blue"
```

Plain objects don't have `.forEach()` — convert first, same as with
`for...of`:

```javascript
Object.entries(person).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
```

---

## 6. Quick Comparison Table

| Loop | Best for | What you get | String | Array | Object | Map / Set |
|---|---|---|---|---|---|---|
| `while` / `do...while` | Unknown repetitions, condition-based | — | manual index | manual index | manual index | via `[...spread]` |
| `for` | Known repetitions, counter control | index / count | ✅ | ✅ | manual keys | via `[...spread]` |
| `for...in` | Objects | keys (as strings) | ✅ index | ⚠️ discouraged | ✅ | ❌ silently prints nothing |
| `for...of` | Iterables | values | ✅ | ✅ | ❌ needs `Object.entries()` | ✅ |
| `forEach` | Side-effects per element | value (+ index/key) | ❌ (no method) | ✅ | ❌ needs `Object.entries()` | ✅ |

---

## 7. The Core Takeaway

- **`while` / `do...while`** — general-purpose loops, controlled by a
  condition you write yourself; `do...while` always runs at least once.
- **`for`** — counter-controlled repetition; index into strings/arrays,
  spread Maps/Sets into an array first.
- **`for...in`** — walks an object's **keys**; the natural fit for plain
  objects. Silently does nothing on Maps/Sets.
- **`for...of`** — walks an iterable's **values**; requires
  `Symbol.iterator`, which plain objects don't have, but strings, arrays,
  Maps, and Sets do. Maps yield `[key, value]` pairs you can destructure.
- **`forEach`** — callback-style method on arrays, Maps, and Sets; no
  `break` possible. Watch the Map argument order: `(value, key)`.
- To loop an object's data **with `for...of` or `forEach`**, convert it
  first using `Object.keys()`, `Object.values()`, or `Object.entries()` —
  all three return arrays, which are iterable.