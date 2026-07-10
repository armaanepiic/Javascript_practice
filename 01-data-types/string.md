# JavaScript String Methods

Strings in JavaScript come with built-in methods and properties to work with text.

These are divided into two groups:

```
String Methods
│
├── Basic String Methods
│
└── String Search Methods
```

> Strings are immutable — none of these methods modify the original string. They always return a new one.

---

## Basic String Methods

### 1. `length`

A **property** (not a method — no parentheses) that returns the total number of characters in a string. Counts spaces and symbols too.

```js
let countryName = "Bangladesh";
console.log(countryName.length); // 10
```

---

### 2. `charAt(index)`

Returns the character at the given index. If the index is out of range, it returns an empty string `""` — not `undefined`.

```js
let cityName = "Dhaka";
console.log(cityName.charAt(0)); // "D"
```

---

### 3. `charCodeAt(index)`

Returns the UTF-16 numeric code (0–65535) of the character at the given index. Useful for ASCII/Unicode math like checking if a character is a letter or digit.

```js
let letterGrade = "A";
console.log(letterGrade.charCodeAt(0)); // 65
```

---

### 4. `codePointAt(index)`

Like `charCodeAt()`, but correctly handles characters outside the Basic Multilingual Plane — such as emojis — which are stored as surrogate pairs.

```js
let emojiText = "😀Hello";
console.log(emojiText.codePointAt(0)); // 128512
```

---

### 5. `concat(...strings)`

Joins one or more strings onto the original and returns a new string. Works the same as `+` but is less commonly used in practice.

```js
let firstName = "Arman";
let fullName = firstName.concat(" ", "Hossain");
console.log(fullName); // "Arman Hossain"
```

---

### 6. `at(index)`

Returns the character at a given index. Unlike `charAt()` or bracket notation, it also accepts **negative indexes** to count from the end of the string.

```js
let studentName = "Rafiq";
console.log(studentName.at(-1)); // "q"
```

---

### 7. `[index]` — Bracket Notation

Reads a character by index, similar to arrays. Returns `undefined` for out-of-range indexes. Does not support negative indexes.

```js
let fruitName = "Mango";
console.log(fruitName[2]); // "n"
```

| Method | Out-of-range returns | Negative index |
|---|---|---|
| `charAt()` | `""` | ❌ |
| `at()` | `undefined` | ✅ |
| `[]` | `undefined` | ❌ |

---

### 8. `slice(start, end)`

Extracts a section of a string from `start` up to (not including) `end`. Accepts negative indexes.

```js
let word = "Bangladesh";

console.log(word.slice(1, 4));   // "ang"
console.log(word.slice(1));      // "angladesh"  → start to end
console.log(word.slice(-4, -1)); // "des"        → count from the end
```

---

### 9. `substring(start, end)`

Similar to `slice()`, but does NOT accept negative indexes (they are treated as `0`). Also automatically swaps `start` and `end` if start is greater.

```js
let word = "Bangladesh";
console.log(word.substring(1, 4)); // "ang"
```

| | `slice()` | `substring()` |
|---|---|---|
| Negative indexes | ✅ | ❌ (treated as 0) |
| Swaps if start > end | ❌ | ✅ |

---

### 10. `substr(start, length)` ⚠️ Legacy

Takes a start index and a **length** (not an end index) of characters to extract. Deprecated — prefer `slice()` or `substring()` instead.

```js
let word = "Bangladesh";
console.log(word.substr(1, 4)); // "angl"  → start at 1, take 4 characters
```

---

### 11. `toUpperCase()`

Returns a new string with every character converted to uppercase.

```js
let city = "dhaka";
console.log(city.toUpperCase()); // "DHAKA"
```

---

### 12. `toLowerCase()`

Returns a new string with every character converted to lowercase.

```js
let city = "CHATTOGRAM";
console.log(city.toLowerCase()); // "chattogram"
```

---

### 13. `isWellFormed()` — ES2024

Checks whether a string has valid UTF-16 encoding. Returns `false` if there is a lone surrogate (a broken/incomplete emoji or character).

```js
let good = "Hello 🌍";
console.log(good.isWellFormed()); // true

let bad = "Hello \uD800"; // lone surrogate
console.log(bad.isWellFormed());  // false
```

---

### 14. `toWellFormed()` — ES2024

Returns a new string where any lone surrogates are replaced with the Unicode replacement character `U+FFFD` (shown as `<replacement char>`), making the string safe to use.

```js
let bad = "Hello \uD800";
console.log(bad.toWellFormed()); // "Hello <replacement char>"
```

---

### 15. `trim()`

Removes whitespace (spaces, tabs, newlines) from **both** the start and end of a string. Does not affect whitespace in the middle.

```js
let text = "    Bangladesh    ";
console.log(text.trim()); // "Bangladesh"
```

---

### 16. `trimStart()`

Removes whitespace only from the **beginning** of the string.

```js
let text = "   Dhaka";
console.log(text.trimStart()); // "Dhaka"
```

---

### 17. `trimEnd()`

Removes whitespace only from the **end** of the string.

```js
let text = "Dhaka   ";
console.log(text.trimEnd()); // "Dhaka"
```

---

### 18. `padStart(targetLength, padString)`

Pads the string at the **start** with a given character until it reaches the target length. Commonly used to format IDs or zero-fill numbers.

```js
let orderNumber = "45";
console.log(orderNumber.padStart(5, "0")); // "00045"
```

---

### 19. `padEnd(targetLength, padString)`

Pads the string at the **end** with a given character until it reaches the target length.

```js
let productCode = "AB";
console.log(productCode.padEnd(6, "*")); // "AB****"
```

---

### 20. `repeat(count)`

Returns a new string with the original repeated a given number of times. Throws a `RangeError` if given a negative number.

```js
let laugh = "ha";
console.log(laugh.repeat(3)); // "hahaha"
```

---

### 21. `replace(search, replacement)`

Replaces the **first** match of a substring or regex with a new value. Only one occurrence is replaced even if the string appears multiple times.

```js
let word = "Bangladesh";
console.log(word.replace("a", "k")); // "Bkngladesh"
```

---

### 22. `replaceAll(search, replacement)`

Same as `replace()`, but replaces **every** match instead of just the first. If using a regex, it must have the global `g` flag.

```js
let word = "banana";
console.log(word.replaceAll("a", "o")); // "bonono"
```

| | `replace()` | `replaceAll()` |
|---|---|---|
| Replaces | First match only | All matches |
| Regex support | ✅ | ✅ (must use `g` flag) |

---

### 23. `split(separator)`

Breaks a string into an **array** of substrings based on a separator. An empty separator `""` splits into individual characters.

```js
let csv = "apple,banana,mango";
console.log(csv.split(","));  // ["apple", "banana", "mango"]

let word = "hi";
console.log(word.split(""));  // ["h", "i"]
```

---

## String Search Methods

### 24. `indexOf(substring)`

Returns the index of the **first** occurrence of a substring. Returns `-1` if not found. Case-sensitive.

```js
let text = "Bangladesh is beautiful";
console.log(text.indexOf("is")); // 11
```

---

### 25. `lastIndexOf(substring)`

Returns the index of the **last** occurrence of a substring, searching from the end. Returns `-1` if not found.

```js
let text = "go go go";
console.log(text.lastIndexOf("go")); // 6
```

| | `indexOf()` | `lastIndexOf()` |
|---|---|---|
| Searches from | Start | End |
| Returns | First match index | Last match index |

---

### 26. `search(regex)`

Searches for a match using a **regular expression** and returns the index of the first match. Returns `-1` if not found. Unlike `indexOf()`, it understands regex patterns.

```js
let text = "Hello World 2026";
console.log(text.search(/\d+/)); // 12
```

---

### 27. `match(regex)`

Matches a string against a regex and returns an array of results.

- Without `g` flag → returns first match with extra details
- With `g` flag → returns all matches as a simple array

```js
let text = "The rain in Spain";
console.log(text.match(/ain/g)); // ["ain", "ain"]
```

---

### 28. `matchAll(regex)`

Similar to `match()` with the `g` flag, but returns an **iterator** of full match objects — including capture groups and index positions. Must spread into an array to view.

```js
let text = "cat bat hat";
let results = [...text.matchAll(/(\w)at/g)];
console.log(results.map(m => m[0])); // ["cat", "bat", "hat"]
```

| | `match()` | `matchAll()` |
|---|---|---|
| Returns | Array of strings | Iterator of match objects |
| Capture groups | ❌ (with `g`) | ✅ |
| Requires `g` flag | Optional | ✅ Required |

---

### 29. `includes(substring)`

Checks whether a string contains a given substring anywhere inside it. Returns `true` or `false`. Case-sensitive.

```js
let text = "I love programming";
console.log(text.includes("love")); // true
```

---

### 30. `startsWith(substring)`

Checks whether a string **begins** with a given substring. An optional second argument sets which index to start checking from.

```js
let url = "https://example.com";
console.log(url.startsWith("https")); // true
```

---

### 31. `endsWith(substring)`

Checks whether a string **ends** with a given substring. An optional second argument treats the string as if it ended at that position.

```js
let fileName = "report.pdf";
console.log(fileName.endsWith(".pdf")); // true
```

---

## Quick Revision

| Method | What it does | Returns |
|---|---|---|
| `length` | Total characters | Number |
| `charAt()` | Character at index | String |
| `charCodeAt()` | UTF-16 code of character | Number |
| `codePointAt()` | Unicode code point (emoji-safe) | Number |
| `concat()` | Join strings | String |
| `at()` | Character at index (supports negative) | String |
| `[]` | Character at index | String |
| `slice()` | Extract part (supports negative) | String |
| `substring()` | Extract part (no negative) | String |
| `substr()` | Extract by start + length (legacy) | String |
| `toUpperCase()` | Convert to uppercase | String |
| `toLowerCase()` | Convert to lowercase | String |
| `isWellFormed()` | Check valid UTF-16 | Boolean |
| `toWellFormed()` | Fix lone surrogates | String |
| `trim()` | Remove whitespace both sides | String |
| `trimStart()` | Remove whitespace from start | String |
| `trimEnd()` | Remove whitespace from end | String |
| `padStart()` | Pad from the start | String |
| `padEnd()` | Pad from the end | String |
| `repeat()` | Repeat string N times | String |
| `replace()` | Replace first match | String |
| `replaceAll()` | Replace all matches | String |
| `split()` | Break into array | Array |
| `indexOf()` | First match index | Number |
| `lastIndexOf()` | Last match index | Number |
| `search()` | Regex first match index | Number |
| `match()` | All regex matches | Array |
| `matchAll()` | All matches with capture groups | Iterator |
| `includes()` | Contains substring? | Boolean |
| `startsWith()` | Starts with substring? | Boolean |
| `endsWith()` | Ends with substring? | Boolean |