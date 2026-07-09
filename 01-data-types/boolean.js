/* ============================================================
   JAVASCRIPT BOOLEAN — TRUTHY & FALSY VALUES TEMPLATE
   Each value: meaningful variable name + explanation + console.log
   ============================================================ */


/* ------------------ WHAT IS Boolean() ------------------ */

// Boolean() is a built-in function that converts any value into
// true or false based on JavaScript's internal truthy/falsy rules.
// This is called "type coercion" — JS decides how "truthy" or "falsy"
// a value is even if it isn't literally true or false.


/* ------------------ FALSY VALUES ------------------ */
// There are ONLY 8 falsy values in JavaScript. Everything else is truthy.
// Memorize these — they are the complete list, nothing more:
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// 1. false (the boolean itself)
let boolFalse = false;
console.log(Boolean(boolFalse)); // false

// 2. 0 (the number zero)
// Any numeric zero is falsy, whether written as 0, -0, or produced by
// a calculation like (5 - 5).
let zeroNumber = 0;
console.log(Boolean(zeroNumber)); // false

// 3. -0 (negative zero)
// JavaScript has a distinct "negative zero", but it is still falsy.
let negativeZero = -0;
console.log(Boolean(negativeZero)); // false

// 4. 0n (BigInt zero)
// BigInt zero is falsy too, but note: BigInt(0) is falsy while
// a non-zero BigInt like 5n is truthy.
let bigIntZero = 0n;
console.log(Boolean(bigIntZero)); // false

// 5. "" (empty string)
// A string with absolutely no characters is falsy. Even a single
// space " " is enough to make it truthy (see truthy section).
let emptyString = "";
console.log(Boolean(emptyString)); // false

// 6. null
// Represents "intentionally no value" — often set manually to show
// a variable is empty on purpose.
let emptyValue = null;
console.log(Boolean(emptyValue)); // false

// 7. undefined
// Represents a variable that has been declared but not yet assigned
// a value, or a missing function argument/object property.
let notAssignedValue;
console.log(Boolean(notAssignedValue)); // false

// 8. NaN (Not a Number)
// The result of an invalid or undefined math operation, like dividing
// zero by zero or parsing text as a number. NaN is falsy even though
// its type is "number".
let invalidMath = 0 / 0;
console.log(Boolean(invalidMath)); // false


/* ------------------ TRUTHY VALUES ------------------ */
// Truthy means: everything that is NOT in the falsy list above.
// This includes some values that people often mistake for falsy —
// pay close attention to these "gotchas".

// 9. Any non-zero number (positive or negative)
let positiveNumber = 13;
console.log(Boolean(positiveNumber)); // true

let negativeNumber = -13;
console.log(Boolean(negativeNumber)); // true

// 10. Any non-empty string, INCLUDING the string "false" or "0"
// A string containing the text "false" is still just text —
// non-empty strings are always truthy, no matter what they contain.
let textString = "abc";
console.log(Boolean(textString)); // true

let trickyString = "false"; // looks falsy, but it's truthy!
console.log(Boolean(trickyString)); // true

let spaceString = " "; // a single space is still a character
console.log(Boolean(spaceString)); // true

// 11. true (the boolean itself)
let boolTrue = true;
console.log(Boolean(boolTrue)); // true

// 12. Any comparison or logical expression that evaluates to true
let comparisonTrue = 10 > 6;
console.log(Boolean(comparisonTrue)); // true

let comparisonFalse = 10 < 6;
console.log(Boolean(comparisonFalse)); // false

// 13. Objects and arrays — ALWAYS truthy, even when empty
// This is a common trap: an empty object {} or empty array []
// still counts as truthy because they are reference types (objects).
let emptyObject = {};
console.log(Boolean(emptyObject)); // true

let emptyArray = [];
console.log(Boolean(emptyArray)); // true

// 14. Functions — always truthy, since a function is an object in JS
let sampleFunction = function () {};
console.log(Boolean(sampleFunction)); // true

// 15. Infinity and -Infinity — both are truthy
let infiniteValue = Infinity;
console.log(Boolean(infiniteValue)); // true


/* ------------------ PRACTICAL USE: CONDITIONAL CHECKS ------------------ */

// Truthy/falsy rules are most useful inside if-statements, so you can
// check a value's "truthiness" without explicitly comparing it.

let userName = "";

if (userName) {
  console.log("Welcome, " + userName);
} else {
  console.log("No username provided"); // runs, because "" is falsy
}

// 16. Double NOT (!!) — a common shortcut instead of writing Boolean()
// The first ! flips the value to its opposite boolean, and the second !
// flips it back, giving you the true/false version of the original value.
let userAge = 0;
let hasValidAge = !!userAge;
console.log(hasValidAge); // false

// let x;
// x = 13; // true
// x = -13; // true
// x = "abc"; // true
// x = true; // true
// x = 10 > 6; // true


// x = 0; // false
// x = false; // false
// x = ""; // false
// x = undefined; // false
// x = NaN; // false
// x = null; // false
// x = 10 < 6; // false

// console.log(Boolean(x));
