/* ============================================================
   JAVASCRIPT ARRAY — COMPLETE METHODS & PROPERTIES TEMPLATE
   Each method: explanation + meaningful variable name + console.log
   ============================================================ */


/* ------------------ BASIC ARRAY METHODS & PROPERTIES ------------------ */

// 1. length
// A property that returns the number of items in an array.
// It's always one more than the highest index (since indexes start at 0).
let countryList = ["UK", "Poland", "Canada"];
console.log(countryList.length); // 3

// 2. toString()
// Converts an array into a comma-separated string, with no brackets
// and no extra spaces. Runs automatically when an array is printed
// as text (e.g. inside template literals).
let fruitBasket = ["Apple", "Banana", "Mango"];
let fruitString = fruitBasket.toString();
console.log(fruitString); // "Apple,Banana,Mango"

// 3. at()
// Returns the element at a given index. Accepts negative indexes to
// count from the end, unlike bracket notation.
let animalList = ["Cat", "Dog", "Cow"];
let lastAnimal = animalList.at(-1);
console.log(lastAnimal); // "Cow"

// 4. join()
// Combines all array elements into a single string, using a custom
// separator you provide (default separator is a comma if omitted).
let capitalList = ["Bangladesh", "India", "China"];
let joinedCapitals = capitalList.join(" - ");
console.log(joinedCapitals); // "Bangladesh - India - China"

// 5. pop()
// Removes the LAST element from an array and returns that removed
// element. This mutates (changes) the original array.
let stackItems = ["Book", "Pen", "Notebook"];
let removedLastItem = stackItems.pop();
console.log(removedLastItem); // "Notebook"
console.log(stackItems); // ["Book", "Pen"]

// 6. push()
// Adds one or more new elements to the END of an array and returns
// the array's new length. This mutates the original array.
let shoppingCart = ["Milk", "Bread"];
let newCartLength = shoppingCart.push("Eggs");
console.log(shoppingCart); // ["Milk", "Bread", "Eggs"]
console.log(newCartLength); // 3

// 7. shift()
// Removes the FIRST element from an array and returns it. All
// remaining elements shift down one index. Mutates the original array.
let queueLine = ["Rafiq", "Karim", "Salma"];
let removedFirstPerson = queueLine.shift();
console.log(removedFirstPerson); // "Rafiq"
console.log(queueLine); // ["Karim", "Salma"]

// 8. unshift()
// Adds one or more new elements to the BEGINNING of an array and
// returns the new length. Mutates the original array.
let waitingList = ["Karim", "Salma"];
let newWaitingLength = waitingList.unshift("Saudi");
console.log(waitingList); // ["Saudi", "Karim", "Salma"]
console.log(newWaitingLength); // 3

// 9. isArray()
// A static method (called on Array itself, not an instance) that
// checks whether a given value is truly an array, returning true/false.
// Useful because typeof an array returns "object", not "array".
let sampleArray = [1, 2, 3];
let sampleObject = { a: 1 };
console.log(Array.isArray(sampleArray)); // true
console.log(Array.isArray(sampleObject)); // false

// 10. delete (operator, not a method)
// Removes a value at an index but leaves a hole (empty slot) behind —
// the length stays the same. This is why delete is rarely used;
// splice() is almost always the better choice for removing items.
let colorList = ["Red", "Green", "Blue"];
delete colorList[1];
console.log(colorList); // ["Red", <1 empty item>, "Blue"]
console.log(colorList.length); // 3 (length unchanged!)

// 11. concat()
// Merges two or more arrays (or values) into a brand-new array,
// without changing any of the original arrays.
let eastCountries = ["Bangladesh", "India"];
let westCountries = ["UK", "France"];
let allCountries = eastCountries.concat(westCountries);
console.log(allCountries); // ["Bangladesh", "India", "UK", "France"]

// 12. copyWithin()
// Copies part of an array to another location IN THE SAME array,
// overwriting existing elements, without changing the array's length.
// Syntax: copyWithin(target, start, end)
let numberBlock = [1, 2, 3, 4, 5];
numberBlock.copyWithin(0, 3);
console.log(numberBlock); // [4, 5, 3, 4, 5]

// 13. flat()
// Flattens nested arrays into a single-level array, up to a given
// depth (default depth is 1). Use Infinity to flatten all levels.
let nestedNumbers = [1, [2, 3], [4, [5, 6]]];
let flatOneLevel = nestedNumbers.flat();
let flatAllLevels = nestedNumbers.flat(Infinity);
console.log(flatOneLevel); // [1, 2, 3, 4, [5, 6]]
console.log(flatAllLevels); // [1, 2, 3, 4, 5, 6]

// 14. slice()
// Returns a shallow copy of a portion of an array (from start up to,
// but not including, end) as a NEW array. Does not change the original.
let cityList = ["Dhaka", "Chattogram", "Khulna", "Sylhet"];
let slicedCities = cityList.slice(1, 3);
console.log(slicedCities); // ["Chattogram", "Khulna"]
console.log(cityList); // unchanged: ["Dhaka", "Chattogram", "Khulna", "Sylhet"]

// 15. splice()
// Adds and/or removes elements at a specific index, directly
// MUTATING the original array. Syntax: splice(start, deleteCount, ...itemsToAdd)
let teamMembers = ["Arman", "Rafiq", "Karim", "Salma"];
let removedMembers = teamMembers.splice(1, 1, "Hossain", "Nasrin");
console.log(teamMembers); // ["Arman", "Hossain", "Nasrin", "Karim", "Salma"]
console.log(removedMembers); // ["Rafiq"] (the removed items are returned)

// 16. toSpliced() (ES2023)
// Works just like splice(), but returns a NEW array instead of
// mutating the original — a non-destructive alternative to splice().
let originalTeam = ["Arman", "Rafiq", "Karim"];
let newTeamVersion = originalTeam.toSpliced(1, 1, "Hossain");
console.log(newTeamVersion); // ["Arman", "Hossain", "Karim"]
console.log(originalTeam); // unchanged: ["Arman", "Rafiq", "Karim"]

// 17. indexOf()
// Returns the index of the FIRST matching element, or -1 if not found.
// Uses strict equality (===) for comparison.
let scoreList = [10, 20, 30, 20];
let firstIndexOf20 = scoreList.indexOf(20);
console.log(firstIndexOf20); // 1

// 18. lastIndexOf()
// Returns the index of the LAST matching element, searching from the
// end of the array backward. Returns -1 if not found.
let lastIndexOf20 = scoreList.lastIndexOf(20);
console.log(lastIndexOf20); // 3

// 19. includes()
// Checks whether an array contains a given value, returning true/false.
// Unlike indexOf(), includes() can correctly detect NaN.
let vowelList = ["a", "e", "i", "o", "u"];
let hasVowelE = vowelList.includes("e");
console.log(hasVowelE); // true

// 20. find()
// Returns the FIRST element that satisfies a given test function,
// or undefined if no element matches.
let mixedNumbers = [4, 9, 16, 25];
let firstBigNumber = mixedNumbers.find(num => num > 10);
console.log(firstBigNumber); // 16

// 21. findIndex()
// Same as find(), but returns the INDEX of the first matching element
// instead of the value itself. Returns -1 if nothing matches.
let firstBigNumberIndex = mixedNumbers.findIndex(num => num > 10);
console.log(firstBigNumberIndex); // 2

// 22. findLast() (ES2023)
// Same as find(), but searches from the END of the array backward,
// returning the LAST matching element.
let lastBigNumber = mixedNumbers.findLast(num => num > 10);
console.log(lastBigNumber); // 25

// 23. findLastIndex() (ES2023)
// Same as findIndex(), but searches from the end backward, returning
// the index of the LAST matching element.
let lastBigNumberIndex = mixedNumbers.findLastIndex(num => num > 10);
console.log(lastBigNumberIndex); // 3


/* ------------------ SORTING METHODS ------------------ */

// -- Alphabetic Sort --

// 24. sort()
// Sorts array elements IN PLACE (mutates original) as strings by
// default, comparing UTF-16 character codes — which is fine for
// alphabetic sorting but WRONG for plain numeric sorting.
let nameList = ["Karim", "Arman", "Salma"];
nameList.sort();
console.log(nameList); // ["Arman", "Karim", "Salma"]

// 25. reverse()
// Reverses the order of elements in an array IN PLACE (mutates original).
let orderedNumbers = [1, 2, 3, 4];
orderedNumbers.reverse();
console.log(orderedNumbers); // [4, 3, 2, 1]

// 26. toSorted() (ES2023)
// Works like sort(), but returns a NEW sorted array without touching
// the original array — a non-destructive alternative to sort().
let originalNames = ["Karim", "Arman", "Salma"];
let sortedNamesCopy = originalNames.toSorted();
console.log(sortedNamesCopy); // ["Arman", "Karim", "Salma"]
console.log(originalNames); // unchanged: ["Karim", "Arman", "Salma"]

// 27. toReversed() (ES2023)
// Works like reverse(), but returns a NEW reversed array without
// mutating the original.
let originalNumbers = [1, 2, 3, 4];
let reversedCopy = originalNumbers.toReversed();
console.log(reversedCopy); // [4, 3, 2, 1]
console.log(originalNumbers); // unchanged: [1, 2, 3, 4]

// -- Sorting Objects --

// 28. Sorting an array of objects
// sort() can take a compare function to sort based on a specific
// property of each object, rather than the objects themselves.
let studentRecords = [
  { name: "Arman", age: 25 },
  { name: "Karim", age: 20 },
  { name: "Salma", age: 30 }
];
studentRecords.sort((a, b) => a.age - b.age);
console.log(studentRecords); // sorted by age ascending: Karim(20), Arman(25), Salma(30)

// -- Numeric Sort --

// 29. Numeric Sort (ascending)
// Passing a compare function (a, b) => a - b to sort() forces proper
// numeric comparison instead of default string-based comparison.
let unsortedNumbersAsc = [40, 100, 1, 5, 25, 10];
unsortedNumbersAsc.sort((a, b) => a - b);
console.log(unsortedNumbersAsc); // [1, 5, 10, 25, 40, 100]

// 30. Numeric Sort (descending)
// Reversing the subtraction order (b - a) sorts numbers from
// highest to lowest.
let unsortedNumbersDesc = [40, 100, 1, 5, 25, 10];
unsortedNumbersDesc.sort((a, b) => b - a);
console.log(unsortedNumbersDesc); // [100, 40, 25, 10, 5, 1]

// -- Random Sort --

// 31. Random Sort
// Using Math.random() - 0.5 inside sort() shuffles elements into a
// (roughly) random order. Not perfectly uniform, but common for demos.
let shuffleDeck = [1, 2, 3, 4, 5];
shuffleDeck.sort(() => Math.random() - 0.5);
console.log(shuffleDeck); // random order each time, e.g. [3, 1, 5, 2, 4]


/* ------------------ Math.min() / Math.max() ------------------ */

// 32. Math.min()
// Returns the smallest of the given numbers. To use it on an array,
// spread the array into individual arguments using ...
let temperatureList = [22, 18, 30, 15];
let coldestTemp = Math.min(...temperatureList);
console.log(coldestTemp); // 15

// 33. Math.max()
// Returns the largest of the given numbers, same spread technique
// applies for arrays.
let hottestTemp = Math.max(...temperatureList);
console.log(hottestTemp); // 30

// 34. Home-made Min()
// A manual function that loops through an array to find the minimum
// value, useful for understanding what Math.min() does internally.
function findMinValue(numArray) {
  let minValue = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] < minValue) {
      minValue = numArray[i];
    }
  }
  return minValue;
}
console.log(findMinValue(temperatureList)); // 15

// 35. Home-made Max()
// Same idea as findMinValue(), but keeps track of the largest value seen.
function findMaxValue(numArray) {
  let maxValue = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > maxValue) {
      maxValue = numArray[i];
    }
  }
  return maxValue;
}
console.log(findMaxValue(temperatureList)); // 30


/* ------------------ ARRAY ITERATION METHODS ------------------ */
// These methods operate on every item in the array, one at a time.

// 36. for...of
// Loops directly over the VALUES of an iterable (arrays, strings, etc).
// Simplest way to loop over array elements without needing an index.
let seasonList = ["Summer", "Winter", "Monsoon"];
for (let season of seasonList) {
  console.log(season); // "Summer", then "Winter", then "Monsoon"
}

// 37. for...in
// Loops over the INDEXES (keys) of an array, not the values.
// Generally better suited for objects; using it on arrays is
// discouraged since it also picks up inherited enumerable properties.
for (let index in seasonList) {
  console.log(index); // "0", "1", "2" (indexes as strings)
}

// 38. forEach()
// Executes a given function once for every array element.
// Does not return a new array — used purely for side effects (like logging).
let priceList = [100, 200, 300];
priceList.forEach(function (price) {
  console.log(price * 1.1); // prints each price increased by 10%
});

// 39. map()
// Executes a function on every element and returns a brand-new array
// containing the RETURNED values, leaving the original array unchanged.
let doubledPrices = priceList.map(price => price * 2);
console.log(doubledPrices); // [200, 400, 600]

// 40. flatMap()
// Works like map(), but automatically flattens the result by one level —
// a combination of map() followed by flat(1).
let wordList = ["Hello world", "Good morning"];
let allWords = wordList.flatMap(sentence => sentence.split(" "));
console.log(allWords); // ["Hello", "world", "Good", "morning"]

// 41. filter()
// Returns a NEW array containing only the elements that pass a given
// test (return true), leaving out everything else.
let mixedAges = [12, 18, 25, 16, 30];
let adultAges = mixedAges.filter(age => age >= 18);
console.log(adultAges); // [18, 25, 30]

// 42. reduce()
// Reduces an array down to a SINGLE value by running an accumulator
// function on each element, left to right.
let orderPrices = [50, 100, 150];
let totalPrice = orderPrices.reduce((accumulator, price) => accumulator + price, 0);
console.log(totalPrice); // 300

// 43. reduceRight()
// Same as reduce(), but processes the array from RIGHT to LEFT instead.
// Useful when order of combination matters (e.g. string building).
let letterParts = ["c", "b", "a"];
let combinedRightToLeft = letterParts.reduceRight((acc, letter) => acc + letter, "");
console.log(combinedRightToLeft); // "abc"

// 44. every()
// Tests whether ALL elements pass a given condition, returning a
// single true/false. Stops early as soon as one element fails.
let allAgesAdult = mixedAges.every(age => age >= 18);
console.log(allAgesAdult); // false

// 45. some()
// Tests whether AT LEAST ONE element passes a given condition,
// returning true/false. Stops early as soon as one element passes.
let anyAgeAdult = mixedAges.some(age => age >= 18);
console.log(anyAgeAdult); // true

// 46. Array.from()
// A static method that creates a new array from an array-like or
// iterable object (like a string, Set, Map, or NodeList).
let stringToArray = Array.from("abc");
console.log(stringToArray); // ["a", "b", "c"]

let generatedRange = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(generatedRange); // [1, 2, 3, 4, 5]

// 47. keys()
// Returns a new Array Iterator containing the INDEXES of the array.
// Needs to be looped over or spread into an array to view directly.
let fruitNames = ["Apple", "Banana", "Cherry"];
let fruitKeys = [...fruitNames.keys()];
console.log(fruitKeys); // [0, 1, 2]

// 48. entries()
// Returns a new Array Iterator containing [index, value] pairs for
// every element — useful when you need both the position and the value.
let fruitEntries = [...fruitNames.entries()];
console.log(fruitEntries); // [[0, "Apple"], [1, "Banana"], [2, "Cherry"]]

// 49. with() (ES2023)
// Returns a NEW array with the element at the given index replaced,
// without mutating the original array — a non-destructive alternative
// to directly assigning arr[index] = value.
let originalFruits = ["Apple", "Banana", "Cherry"];
let updatedFruits = originalFruits.with(1, "Mango");
console.log(updatedFruits); // ["Apple", "Mango", "Cherry"]
console.log(originalFruits); // unchanged: ["Apple", "Banana", "Cherry"]

// 50. Array Spread (...)
// Expands an array's elements individually — commonly used to copy
// arrays, merge arrays, or pass array elements as function arguments.
let baseNumbers = [1, 2, 3];
let extendedNumbers = [...baseNumbers, 4, 5];
console.log(extendedNumbers); // [1, 2, 3, 4, 5]

// 51. Array Rest (...)
// The opposite of spread — gathers remaining function arguments (or
// remaining destructured elements) into a single array.
function sumAllNumbers(first, ...restNumbers) {
  console.log(restNumbers); // all arguments after the first, as an array
  return restNumbers.reduce((acc, num) => acc + num, first);
}
console.log(sumAllNumbers(1, 2, 3, 4)); // 10

// let countries = ["UK", "Poland", "Canada"];
// countries[countries.length] = "USA";
// countries.push("China");
// // countries.pop(); // removes the last item
// countries.shift(); // remove the first item
// countries.unshift("Saudi");

// console.log(countries);

// let numbers = []
// numbers.push(12)

// console.log(numbers);
// split method -> string to array    
// let x = "Bangladesh";
// let y = x.split(""); 
// y = x.split();
// console.log(y);
// console.log(y.length);
// console.log(typeof y); // object

// let x = "Hello World";
// let y = x.split(" ");
// y = x.split("o");
// y = x.split("");
// x = "Bangladesh, China, India, Poland";
// y = x.split(", ")
// console.log(y);  

// join method -> array to string
// let x = ["Bangladesh", "India", "China"];
// x.reverse();
// // x.sort();
// let y = x.join(" ");
// console.log(y);  
