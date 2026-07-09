/* ============================================================
   JAVASCRIPT STRING METHODS — COMPLETE PRACTICE TEMPLATE
   Each method: meaningful variable name + console.log output
   ============================================================ */


/* ------------------ BASIC STRING METHODS ------------------ */

// 1. length
// A property (not a function, so no parentheses) that returns how many
// UTF-16 code units are in the string. Counts spaces and symbols too.
let countryName = "Bangladesh";
console.log(countryName.length); // 10

// 2. charAt()
// Returns the character at the given index as a new string.
// If the index is out of range, it returns an empty string "" (not undefined).
let cityName = "Dhaka";
let firstChar = cityName.charAt(0);
console.log(firstChar); // "D"

// 3. charCodeAt()
// Returns the UTF-16 numeric code (0–65535) of the character at the given
// index. Useful for ASCII/Unicode math, like checking letter ranges.
let letterGrade = "A";
let asciiCode = letterGrade.charCodeAt(0);
console.log(asciiCode); // 65

// 4. codePointAt()
// Like charCodeAt(), but correctly handles characters outside the Basic
// Multilingual Plane (e.g. emojis) that are stored as surrogate pairs.
let emojiText = "😀Hello";
let codePoint = emojiText.codePointAt(0);
console.log(codePoint); // 128512

// 5. concat()
// Joins one or more strings onto the original and returns a new string.
// Works the same as using the + operator, just less commonly used in practice.
let firstName = "Arman";
let fullName = firstName.concat(" ", "Hossain");
console.log(fullName); // "Arman Hossain"

// 6. at()
// Returns the character at a given index, but also accepts negative indexes
// to count from the end of the string (unlike bracket notation or charAt()).
let studentName = "Rafiq";
let lastLetter = studentName.at(-1);
console.log(lastLetter); // "q"

// 7. [ ] (bracket notation)
// Reads a character by index directly, similar to arrays.
// Returns undefined for an out-of-range index (no negative-index support).
let fruitName = "Mango";
let bracketChar = fruitName[2];
console.log(bracketChar); // "n"

// 8. slice()
// Extracts a section of a string from a start index up to (not including)
// an end index. Accepts negative indexes, which count backward from the end.
let sentenceOne = "Bangladesh";
let slicedText = sentenceOne.slice(1, 4);
console.log(slicedText); // "ang"

// 9. substring()
// Similar to slice(), but does NOT accept negative indexes (they're treated
// as 0) and automatically swaps start/end if start is greater than end.
let sentenceTwo = "Bangladesh";
let subStringText = sentenceTwo.substring(1, 4);
console.log(subStringText); // "ang"

// 10. substr() (legacy, still works in most engines)
// Takes a start index and a LENGTH (not an end index) of characters to
// extract. Deprecated in the spec — prefer slice() or substring() instead.
let sentenceThree = "Bangladesh";
let subStrText = sentenceThree.substr(1, 4);
console.log(subStrText); // "angl"

// 11. toUpperCase()
// Returns a new string with every character converted to uppercase.
// Does not modify the original string (strings are immutable).
let lowerCaseWord = "dhaka";
let upperCaseWord = lowerCaseWord.toUpperCase();
console.log(upperCaseWord); // "DHAKA"

// 12. toLowerCase()
// Returns a new string with every character converted to lowercase.
let upperCaseCity = "CHATTOGRAM";
let lowerCaseCity = upperCaseCity.toLowerCase();
console.log(lowerCaseCity); // "chattogram"

// 13. isWellFormed() (ES2024)
// Checks whether a string has valid UTF-16 encoding, meaning every
// surrogate pair is complete. Returns false if there's a "lone surrogate"
// (half of a broken emoji/character), which can crash things like
// encodeURIComponent() if left unchecked.
let unicodeStringGood = "Hello 🌍";
console.log(unicodeStringGood.isWellFormed()); // true

let unicodeStringBad = "Hello \uD800"; // lone surrogate = malformed
console.log(unicodeStringBad.isWellFormed()); // false

// 14. toWellFormed() (ES2024)
// Returns a new string where any lone surrogates are replaced with the
// Unicode replacement character (U+FFFD, shown as �), making it safe to use.
let fixedUnicodeString = unicodeStringBad.toWellFormed();
console.log(fixedUnicodeString); // "Hello �"

// 15. trim()
// Removes whitespace from both the start and end of a string
// (spaces, tabs, newlines) without affecting whitespace in the middle.
let paddedText = "    Bangladesh    ";
let trimmedText = paddedText.trim();
console.log(trimmedText); // "Bangladesh"

// 16. trimStart()
// Removes whitespace only from the beginning of the string, leaving
// any trailing whitespace untouched.
let leftPaddedText = "   Dhaka";
let trimmedStartText = leftPaddedText.trimStart();
console.log(trimmedStartText); // "Dhaka"

// 17. trimEnd()
// Removes whitespace only from the end of the string, leaving
// any leading whitespace untouched.
let rightPaddedText = "Dhaka   ";
let trimmedEndText = rightPaddedText.trimEnd();
console.log(trimmedEndText); // "Dhaka"

// 18. padStart()
// Pads the string at the start with a given character until it reaches
// a target length. Commonly used for formatting IDs, times, or zero-fill.
let orderNumber = "45";
let paddedOrderNumber = orderNumber.padStart(5, "0");
console.log(paddedOrderNumber); // "00045"

// 19. padEnd()
// Pads the string at the end with a given character until it reaches
// a target length.
let productCode = "AB";
let paddedProductCode = productCode.padEnd(6, "*");
console.log(paddedProductCode); // "AB****"

// 20. repeat()
// Returns a new string with the original repeated a given number of times.
// Throws an error if given a negative number.
let laughText = "ha";
let repeatedLaugh = laughText.repeat(3);
console.log(repeatedLaugh); // "hahaha"

// 21. replace()
// Replaces the FIRST match of a substring or regex with a new value.
// If you pass a plain string as the search term, only one occurrence
// is replaced, even if the string appears multiple times.
let originalWord = "Bangladesh";
let replacedWord = originalWord.replace("a", "k");
console.log(replacedWord); // "Bkngladesh"

// 22. replaceAll()
// Same as replace(), but replaces EVERY match instead of just the first.
// If using a regex, it must have the global (g) flag or it throws an error.
let repeatedLetterWord = "banana";
let replacedAllWord = repeatedLetterWord.replaceAll("a", "o");
console.log(replacedAllWord); // "bonono"

// 23. split()
// Breaks a string into an array of substrings based on a separator
// (a string or regex). An empty separator "" splits into individual characters.
let csvLine = "apple,banana,mango";
let fruitArray = csvLine.split(",");
console.log(fruitArray); // ["apple", "banana", "mango"]


/* ------------------ STRING SEARCH METHODS ------------------ */

// 24. indexOf()
// Returns the index of the FIRST occurrence of a substring, or -1 if
// it isn't found. Search is case-sensitive.
let searchTextOne = "Bangladesh is beautiful";
let indexPosition = searchTextOne.indexOf("is");
console.log(indexPosition); // 11

// 25. lastIndexOf()
// Returns the index of the LAST occurrence of a substring, searching
// from the end of the string backward. Returns -1 if not found.
let searchTextTwo = "go go go";
let lastIndexPosition = searchTextTwo.lastIndexOf("go");
console.log(lastIndexPosition); // 6

// 26. search()
// Searches for a match using a regular expression and returns the index
// of the first match, or -1 if none is found. Unlike indexOf(), it
// understands regex patterns (like \d for digits).
let searchTextThree = "Hello World 2026";
let searchPosition = searchTextThree.search(/\d+/);
console.log(searchPosition); // 12

// 27. match()
// Matches a string against a regex and returns an array of results.
// Without the "g" flag it returns just the first match with extra details;
// with "g" it returns all matches as a simple array of strings.
let matchText = "The rain in Spain";
let matchResult = matchText.match(/ain/g);
console.log(matchResult); // ["ain", "ain"]

// 28. matchAll()
// Similar to match() with the "g" flag, but returns an ITERATOR of full
// match objects (including capture groups and index positions) instead
// of just plain strings, so it needs to be spread into an array to view.
let matchAllText = "cat bat hat";
let matchAllResult = [...matchAllText.matchAll(/(\w)at/g)];
console.log(matchAllResult.map(m => m[0])); // ["cat", "bat", "hat"]

// 29. includes()
// Checks whether a string contains a given substring anywhere inside it,
// returning true or false. Case-sensitive.
let phraseText = "I love programming";
let containsWord = phraseText.includes("love");
console.log(containsWord); // true

// 30. startsWith()
// Checks whether a string begins with a given substring, returning
// true or false. An optional second argument sets the starting index to check from.
let urlText = "https://example.com";
let startsWithHttps = urlText.startsWith("https");
console.log(startsWithHttps); // true

// 31. endsWith()
// Checks whether a string ends with a given substring, returning
// true or false. An optional second argument limits how much of the
// string is considered (treats it as if the string ended there).
let fileName = "report.pdf";
let endsWithPdf = fileName.endsWith(".pdf");
console.log(endsWithPdf); // true


// let x , z;
// string
// x = "Bangladesh";
// console.log(x.length);
// console.log(x[x.length]); // undefined

// string methods
// x = "Bangladesh";
// z = x.toUpperCase();
// console.log(z);

// trim method
// x = "    Bangladesh    ";
// z = x.trim();
// console.log(z);

// slice method
// x = "Bangladesh";
// z = x.slice(1); // 1 to end
// z = x.slice(1, 4); // 1 to 4-1
// z = x.slice(-4, -1); // count reversely next to -4 to -1
// console.log(z); 

// substr method
// x = "Bangladesh";
// z = x.substr(1, 4); // index, length of substring
// console.log(z); 

// replace method
// x = "Bangladesh";
// z = x.replace("a", "k")
// console.log(z); 

// concat method
// x = "arman";
// z = x.concat(" hossain");
// console.log(z);