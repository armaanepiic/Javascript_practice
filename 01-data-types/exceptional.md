# JavaScript String Objects (`new String()`) — Reference vs Value

A focused guide on a commonly confusing JS topic: what happens when you wrap
a string in an object using `new String(...)`, how its internal value
differs from a regular property, and why `===` behaves the way it does when
comparing these objects.

---

## 1. Primitive String vs String Object

JavaScript actually has **two different things** that look similar:

```javascript
let primitive = "John";        // a primitive string (typeof: "string")
let wrapper   = new String("John"); // a String OBJECT (typeof: "object")
```

| | `let x = "John"` | `let x = new String("John")` |
|---|---|---|
| `typeof x` | `"string"` | `"object"` |
| Can you add properties? | No (silently ignored) | Yes |
| Compared with `===` | By value | By reference |

The object version wraps `"John"` as its **internal value** — not as a
named property you can access directly.

---

## 2. Where does `"John"` live if it's not a property?

```javascript
let y = new String("John");
y.age = 28;

console.log(y[0]);        // "J"      -> character access, like an array
console.log(y.length);    // 4        -> length of the wrapped text
console.log(y.valueOf()); // "John"   -> unwraps back to the primitive
console.log(typeof y);    // "object" -> it's a wrapper, not a real string
```

- `"John"` is the object's **internal primitive value** — exposed through
  numeric indexes, `.length`, and `.valueOf()` / `.toString()`.
- `age` is a genuine, user-added **property** — it shows up in
  `Object.keys(y)` and `for...in` loops. `"John"` does not show up as a
  named key at all.

```javascript
console.log(Object.keys(y)); // ["0", "1", "2", "3", "age"]
```

> **Why this matters:** this split between "internal wrapped value" and
> "regular properties" is exactly why `new String(...)` is discouraged in
> real code — plain string primitives don't have this confusing duality.

---

## 3. Why does `===` return `false` for two identical-looking String objects?

```javascript
let x = new String("John");
let y = new String("John");
console.log(x === y); // false
```

- **Primitives compare by value.** `"John" === "John"` → `true`.
- **Objects compare by reference (identity).** `===` only asks: *"are
  these two variables pointing at the exact same object in memory?"*

`x` and `y` were created by two **separate** `new String(...)` calls, so
JavaScript allocated two distinct objects. They contain identical text, but
they are not the *same* object — so `===` says `false`.

**Proof it's about reference, not content:**

```javascript
let x = new String("John");
let z = x; // z points to the SAME object, no new object created
console.log(x === z); // true
```

This isn't unique to `String` — it applies to every object type:

```javascript
console.log({} === {});       // false
console.log([] === []);       // false
console.log({a:1} === {a:1}); // false -> same content, different objects
```

**Why JavaScript works this way:** objects can be arbitrarily complex
(nested data, methods, mutable state). There's no single obvious rule for
"these two objects count as equal," so JS avoids guessing — two objects are
only `===` equal if they are literally the same object in memory.

---

## 4. Unwrapping with `valueOf()` restores value comparison

```javascript
let x = new String("John");
let y = new String("John");
console.log(x.valueOf() === y.valueOf()); // true
```

`valueOf()` unwraps each object back down to its plain primitive string.
Once both sides are primitives, `===` goes back to comparing **value**, not
reference — and `"John" === "John"` is `true`.

### Common mistake: assuming unwrapping makes *any* two strings equal

```javascript
let x = new String("Arman");
let y = new String("John");
console.log(x.valueOf() === y.valueOf()); // false
```

`valueOf()` only solves the **reference-vs-value** problem — it does
nothing to make genuinely different text equal. `"Arman"` will never equal
`"John"`, wrapped or not.

---

## 5. The Core Takeaways

1. `new String(...)` creates an **object wrapper**, not a real string —
   `typeof` reports `"object"`.
2. The wrapped text (`"John"`) is an **internal value**, accessed via
   indexing, `.length`, or `.valueOf()`/`.toString()` — never as a named
   property.
3. Regular properties you assign (like `.age`) sit alongside that internal
   value and show up in `Object.keys()`.
4. `===` on objects checks **reference/identity**, not content — two
   separately created wrapper objects are never `===` equal, even with
   identical text.
5. `.valueOf()` unwraps an object to its primitive, switching the
   comparison from reference-based to value-based — but it still only
   returns `true` if the underlying text actually matches.

**Practical rule of thumb:** avoid `new String(...)` in real code. Use
plain string literals (`let x = "John"`) — they avoid this entire
reference-vs-value trap altogether.