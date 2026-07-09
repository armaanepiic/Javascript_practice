/* ============================================================
   JAVASCRIPT: undefined vs null vs NaN vs "" (empty string)
   Each comparison: explanation of WHY + console.log output
   ============================================================ */


/* ------------------ WHAT EACH VALUE ACTUALLY MEANS ------------------ */

// undefined
// A variable that has been DECLARED but never given a value.
// JavaScript automatically assigns this — you never have to write it
// yourself (though you technically can).
let declaredButEmpty;
console.log(declaredButEmpty); // undefined
console.log(typeof declaredButEmpty); // "undefined"

// null
// Represents "intentionally no value" — a programmer explicitly sets
// this to say "this variable is empty ON PURPOSE." JS never assigns
// this automatically; a human always writes it.
let intentionallyEmpty = null;
console.log(intentionallyEmpty); // null
console.log(typeof intentionallyEmpty); // "object" (a famous, long-standing JS bug —
// null has always incorrectly reported as "object" due to how types
// were encoded in the very first JS engine; kept for backward compatibility)

// NaN ("Not a Number")
// The result of a math operation that doesn't produce a valid number,
// like dividing text by a number, or 0/0. Despite its name, its
// typeof is still "number" — it just represents an INVALID number.
let invalidMath = "abc" / 5;
console.log(invalidMath); // NaN
console.log(typeof invalidMath); // "number"

// "" (empty string)
// A real, valid string — it just happens to contain zero characters.
// It is a completely different TYPE from undefined, null, or NaN.
let emptyText = "";
console.log(emptyText); // "" (prints nothing visible, but it IS a string)
console.log(typeof emptyText); // "string"


/* ------------------ undefined vs undefined ------------------ */

// A variable compared to undefined using == or === behaves the same
// way, because both sides are already the exact same type and value.
let notSet;
console.log(notSet == undefined); // true  -> same value, loose equality passes
console.log(notSet === undefined); // true -> same value AND same type ("undefined")
// WHY: there's nothing to coerce here — both sides are literally
// the undefined value, so both == and === agree.


/* ------------------ null vs undefined ------------------ */

console.log(null == undefined); // true
// WHY: this is a SPECIAL RULE built into JavaScript's == algorithm.
// The spec says: null and undefined are loosely equal ONLY to each
// other (and to nothing else in the entire language). Think of them
// as two different ways of saying "no value" that JS treats as
// interchangeable when you use ==.

console.log(null === undefined); // false
// WHY: === never does type coercion — it checks type FIRST.
// typeof null is "object", typeof undefined is "undefined".
// Different types instantly means false, no matter the value.


/* ------------------ "" (empty string) vs null ------------------ */

console.log('' == null); // false
console.log('' === null); // false
// WHY: the special == rule above ONLY applies to null and undefined
// comparing to EACH OTHER. It does not extend to any other falsy
// value like "", 0, or false. Even though '' and null are both
// "falsy" and both feel like "nothing", JavaScript's == algorithm
// does not consider a string and null interchangeable — that special
// exception is reserved exclusively for null/undefined.


/* ------------------ "" (empty string) vs undefined ------------------ */

console.log('' == undefined); // false
console.log('' === undefined); // false
// WHY: same reasoning as above — undefined's only == "partner" is
// null. A string, even an empty one, is never loosely equal to
// undefined, because undefined isn't converted into a string for
// comparison the way numbers sometimes are.


/* ------------------ NaN vs everything (including itself!) ------------------ */

console.log(NaN == undefined); // false
console.log(NaN == null); // false
console.log(NaN == ""); // false
console.log(NaN == NaN); // false  <-- the most famous JS quirk
console.log(NaN === NaN); // false <-- true even with strict equality
// WHY: by IEEE 754 floating-point specification (which JS numbers
// follow), NaN is defined to never equal ANY value, including
// another NaN. This isn't a JS-specific bug — it's a mathematical
// rule: NaN means "the result of an operation that makes no sense,"
// so two "nonsense" results are never considered equal, since we
// can't guarantee they represent the "same" invalid result.

// Because of this, you should NEVER check for NaN using == or ===.
// Use one of these instead:
console.log(Number.isNaN(invalidMath)); // true -> the reliable modern way
console.log(isNaN(invalidMath)); // true -> older global function (but coerces first, less safe)


/* ------------------ QUICK SUMMARY TABLE (as console output) ------------------ */

console.log("---- SUMMARY ----");
console.log("undefined == null:", undefined == null); // true (special exception)
console.log("undefined === null:", undefined === null); // false (different types)
console.log("'' == null:", '' == null); // false (no special exception for strings)
console.log("'' == undefined:", '' == undefined); // false (same reason)
console.log("NaN == NaN:", NaN == NaN); // false (NaN never equals anything)
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (historical bug)
console.log("typeof NaN:", typeof NaN); // "number"
console.log("typeof '':", typeof ''); // "string"


/* ------------------ THE CORE TAKEAWAY ------------------ */

// == (loose equality) allows type conversion, but JavaScript only
// hard-codes ONE cross-type exception into its rules: null == undefined.
// Every other "empty-feeling" value (NaN, "", 0, false) is compared
// using its own type's rules, and none of them are secretly treated
// as equal to null or undefined. NaN is even stricter — it's the one
// value in JavaScript that isn't equal to itself, by design.


// undefined, empty value, null, NaN
let a;
console.log(a) // undefined
console.log(a == undefined) // true
console.log(a === undefined) // true

console.log(null == undefined); // true (value same)
console.log(null === undefined); // false(type not same)

console.log('' == null) // false
console.log('' === null) // false
console.log('' == undefined) // false

let c = "abc" / 5;
console.log(c); // NaN
console.log(NaN == undefined) // false
console.log(NaN == null) // false
console.log(NaN == "") // false

