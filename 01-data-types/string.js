/* ------------------ BASIC STRING METHODS ------------------ */

// 1. length
let countryName = "Bangladesh";
console.log(countryName.length); // 10

// 2. charAt()
let cityName = "Dhaka";
let firstChar = cityName.charAt(0);
console.log(firstChar); // "D"

// 3. charCodeAt()
let letterGrade = "A";
let asciiCode = letterGrade.charCodeAt(0);
console.log(asciiCode); // 65

// 4. codePointAt()
let emojiText = "😀Hello";
let codePoint = emojiText.codePointAt(0);
console.log(codePoint); // 128512

// 5. concat()
let firstName = "Arman";
let fullName = firstName.concat(" ", "Hossain");
console.log(fullName); // "Arman Hossain"

// 6. at()
let studentName = "Rafiq";
let lastLetter = studentName.at(-1);
console.log(lastLetter); // "q"

// 7. [ ] (bracket notation)
let fruitName = "Mango";
let bracketChar = fruitName[2];
console.log(bracketChar); // "n"

// 8. slice()
let sentenceOne = "Bangladesh";
let slicedText = sentenceOne.slice(1, 4);
console.log(slicedText); // "ang"

// 9. substring()
let sentenceTwo = "Bangladesh";
let subStringText = sentenceTwo.substring(1, 4);
console.log(subStringText); // "ang"

// 10. substr() (legacy, still works in most engines)
let sentenceThree = "Bangladesh";
let subStrText = sentenceThree.substr(1, 4);
console.log(subStrText); // "angl"

// 11. toUpperCase()
let lowerCaseWord = "dhaka";
let upperCaseWord = lowerCaseWord.toUpperCase();
console.log(upperCaseWord); // "DHAKA"

// 12. toLowerCase()
let upperCaseCity = "CHATTOGRAM";
let lowerCaseCity = upperCaseCity.toLowerCase();
console.log(lowerCaseCity); // "chattogram"

// 13. isWellFormed()  (checks for valid Unicode/UTF-16 surrogate pairs)
let unicodeStringGood = "Hello 🌍";
console.log(unicodeStringGood.isWellFormed()); // true

let unicodeStringBad = "Hello \uD800"; // lone surrogate = malformed
console.log(unicodeStringBad.isWellFormed()); // false

// 14. toWellFormed() (replaces bad surrogates with U+FFFD)
let fixedUnicodeString = unicodeStringBad.toWellFormed();
console.log(fixedUnicodeString); // "Hello �"

// 15. trim()
let paddedText = "    Bangladesh    ";
let trimmedText = paddedText.trim();
console.log(trimmedText); // "Bangladesh"

// 16. trimStart()
let leftPaddedText = "   Dhaka";
let trimmedStartText = leftPaddedText.trimStart();
console.log(trimmedStartText); // "Dhaka"

// 17. trimEnd()
let rightPaddedText = "Dhaka   ";
let trimmedEndText = rightPaddedText.trimEnd();
console.log(trimmedEndText); // "Dhaka"

// 18. padStart()
let orderNumber = "45";
let paddedOrderNumber = orderNumber.padStart(5, "0");
console.log(paddedOrderNumber); // "00045"

// 19. padEnd()
let productCode = "AB";
let paddedProductCode = productCode.padEnd(6, "*");
console.log(paddedProductCode); // "AB****"

// 20. repeat()
let laughText = "ha";
let repeatedLaugh = laughText.repeat(3);
console.log(repeatedLaugh); // "hahaha"

// 21. replace() (replaces first match only)
let originalWord = "Bangladesh";
let replacedWord = originalWord.replace("a", "k");
console.log(replacedWord); // "Bkngladesh"

// 22. replaceAll() (replaces every match)
let repeatedLetterWord = "banana";
let replacedAllWord = repeatedLetterWord.replaceAll("a", "o");
console.log(replacedAllWord); // "bonono"

// 23. split()
let csvLine = "apple,banana,mango";
let fruitArray = csvLine.split(",");
console.log(fruitArray); // ["apple", "banana", "mango"]


/* ------------------ STRING SEARCH METHODS ------------------ */

// 24. indexOf()
let searchTextOne = "Bangladesh is beautiful";
let indexPosition = searchTextOne.indexOf("is");
console.log(indexPosition); // 11

// 25. lastIndexOf()
let searchTextTwo = "go go go";
let lastIndexPosition = searchTextTwo.lastIndexOf("go");
console.log(lastIndexPosition); // 6

// 26. search() (accepts regex)
let searchTextThree = "Hello World 2026";
let searchPosition = searchTextThree.search(/\d+/);
console.log(searchPosition); // 12

// 27. match() (returns matches based on regex)
let matchText = "The rain in Spain";
let matchResult = matchText.match(/ain/g);
console.log(matchResult); // ["ain", "ain"]

// 28. matchAll() (returns iterator with full match details)
let matchAllText = "cat bat hat";
let matchAllResult = [...matchAllText.matchAll(/(\w)at/g)];
console.log(matchAllResult.map(m => m[0])); // ["cat", "bat", "hat"]

// 29. includes()
let phraseText = "I love programming";
let containsWord = phraseText.includes("love");
console.log(containsWord); // true

// 30. startsWith()
let urlText = "https://example.com";
let startsWithHttps = urlText.startsWith("https");
console.log(startsWithHttps); // true

// 31. endsWith()
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