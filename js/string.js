
// Javascript String
// string.indexOf(string)
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
// lastIndexOf(string)
let lastIndex = text.lastIndexOf("arman"); // -1 karon doesn't exist
console.log(index);
console.log(lastIndex);


// both methods thake 2 parameter
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
console.log(index);


let text = "d locate where 'locate' occurs!";
let index = text.lastIndexOf("locate", 15);
console.log(index);

// string.search(string)
// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


// String match()
// returns an array containing the results of matching a string against a string (or a regular expression).
let text = "The rain in SPAIN stays mainly in the plain";
const myArray = text.match("ain");
document.getElementById('demo').innerHTML = myArray.length + " " + myArray; // 1 ain

// Perform a global search for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
const myArray = text.match(/ain/g);
document.getElementById('demo').innerHTML = myArray.length + " " + myArray;
// 3 ain,ain,ain

// Perform a global, case-insensitive search for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
const myArray = text.match(/ain/gi);
document.getElementById('demo').innerHTML = myArray.length + " " + myArray;
// 4 ain,AIN,ain,ain



let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/gi);
document.getElementById('demo').innerHTML = Array.from(iterator);
let myArray = Array.from(iterator);
console.log(myArray);


//  String includes()
//includes() is case sensitive.
// The includes() method returns true if a string contains a specified value.

let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); // true
// this function can take 2 parameter
// second parameter is the index from where it starts searching


let text = "Hello world, welcome to the universe.";
console.log(text.includes("world", 12)); // false


// String startsWith()

// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:

let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello")); // true
// A start position for the search can be specified:

let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 6)); // true

// String endsWith()

// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:

let x = "Arman Hossain";
console.log(x.endsWith("ain")); // true
console.log(x.endsWith("g")); // false

let text = "Hello world, welcome to the universe.";
console.log(text.endsWith("world", 11));
// Check if the 11 first characters of a string ends with "world":