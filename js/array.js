
// Basic array methods
// Array.length()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);



// Array.toString()
// toString() converts an array to a string of
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let y = fruits.toString();
console.log(y);

// array joining
// array.join("separator")
let x = fruits.join(", ");
console.log(x);


// Array.pop()
// The pop() method removes the last element from an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);


// Array.push()
// The push() method adds a new element to an array (at the end)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Watermelon");
console.log(fruits);
// another way to push new element at the end is Array[Array.length] = value;


// Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); //  ['Orange', 'Apple', 'Mango']
console.log(fruits[0]); // Orange


// Array.unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits[0]); // Lemon


// Merging Two Arrays
// Array1.concat(Array2)
const myGirls = ["Rina", "Mina", "Jhumur"];
const myBoys = ["Kashem", "Rofiq", "Jony"];
const students = myGirls.concat(myBoys);
console.log(students);


// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 3); // 0 theke 3 index er ag porjonto copy korbe
console.log(fruits); //  ['Banana', 'Orange', 'Banana', 'Orange', 'Apple', 'Papaya']

// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.



// Array flat()
// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
console.log(newArr);
let x = "";
for (let i in newArr) {
    x += newArr[i] + " ";
}
document.getElementById('demo').innerHTML = x;


// Array splice()
// The splice() method adds new items to an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters (7, 8, 9) define the new elements to be added.
// The splice() method returns an array with the deleted items:

const myArr = [1, 2, 3, 7, 8, 9];
myArr.splice(3, 0, 4, 5, 6);
console.log(myArr);
let x = "";
for (let i in myArr) {
    x += myArr[i] + " ";
}
document.getElementById('demo').innerHTML = x;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
let x = "";
for (let i in fruits) {
    x += fruits[i] + " ";
}
document.getElementById('demo').innerHTML = x;


// to splice an array keeping the original array unchanged
// Array.toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
let x = "";
for (let i in spliced) {
    x += spliced[i] + " ";
}
document.getElementById('demo').innerHTML = x; // ["Feb", "Mar", "Apr"]
console.log(months); // ["Jan", "Feb", "Mar", "Apr"]


// Array.slice()
// The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = myArr.slice(3);
const Arr = myArr.slice(1, 3); // index 1 theke 3 er age porjonto slice korbe
document.getElementById('demo').innerHTML = myArr + "<br>" + newArr + "<br>" + Arr;
