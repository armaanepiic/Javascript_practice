
// string methods
/*
// string.length() method
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById('demo').innerHTML = "The length of " + text + " = " + text.length;

// string.charAt() method
let text = "Hello World";
let char = text.charAt(0);
document.getElementById('demo').innerHTML = "The character at index 0 of Hello World is " + char; 


// string.charCodeAt()
let text = "ABCD";
let char = text.charCodeAt(0);
document.getElementById('demo').innerHTML = "The code of index 0 of 'ABCD' is " + char;


// string.at()
let text = "Canada";
let char = text.at(4); // d
// let char = text.at(-2); // d
// let char = text[3];
console.log(char);


// string.slice()
let text = "Apple, Banana, Kiwi";
let part1 = text.slice(7, 13);
console.log(part1); // Banana
let part2 = text.slice(7);
console.log(part2); // Banana, Kiwi
let part3 = text.slice(-12);
console.log(part3); // Banana, Kiwi
let part4 = text.slice(-12, -6);
console.log(part4); // Banana


// string.substring()
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); // Banana
let part1 = str.substring(7);
console.log(part);
console.log(part1);  // Banana, Kiwi


// string.substr()
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 10);
let part1 = str.substr(7);
let part2 = str.substr(-4);
console.log(part); // Banana, Ki
console.log(part1); // Banana, Kiwi
console.log(part2); // Kiwi


// string.toUpperCase()
// A string is converted to upper case with toUpperCase()
let text1 = "Hello World!";
document.getElementById('demo').innerHTML = text1.toUpperCase();


// string.toLowerCase()
// A string is converted to lower case with toLowerCase()
let text2 = "HELLO WORLD!";
document.getElementById('demo').innerHTML = text2.toLowerCase();


// string.concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
document.getElementById('demo').innerHTML = text3;


// string.trim()
// The trim() method removes whitespace from both sides of a string
let text1 = "     Hello World!     ";
let text2 = text1.trim();
// document.getElementById('demo').innerHTML = text2.length; // 11
let text3 = text1.trimStart(); // removes white space from the start of a string
document.getElementById('demo').innerHTML = text3.length; // 11

let text4 = text1.trimEnd(); // removes white space from the start of a string
document.getElementById('demo').innerHTML = text4.length; // 11



// string.padStart(length, char)
let text = "5";
let paddedText = text.padStart(5, "x0");
document.getElementById('demo').innerHTML = paddedText;


// string.padEnd()
let text = "5";
let paddedText = text.padEnd(4, "x");
document.getElementById('demo').innerHTML = paddedText;


// string.repeat()
let text = "Hello";
let result = text.repeat(2);
document.getElementById('demo').innerHTML = result;

function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace(/Arman/g,"Nusrat");
}


// string.replaceAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular. I have 2 cats.";
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");
console.log(text);


// converting a string to an array
//string.split()
let text = "Hello";
let myArray = text.split("");
text = "";
for (let index = 0; index < myArray.length; index++) {
    text += myArray[index]  + "<br>";
}
document.getElementById('demo').innerHTML = text;

*/










