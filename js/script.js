
// arrays
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById('demo').innerHTML = cars;

const items = new Array("PC", "Smart watch", "TV");
document.getElementById('demo').innerHTML = items;


// array.toString() method convert an array to a string separating the array elements
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lichi"];
let x = fruits.toString();
console.log(x); // Banana,Orange,Apple,Mango -> a string
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits[0]); // accessing the first element
console.log(fruits[fruits.length - 1]);


// looping the array elements
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lichi", "Grapes"];
let text = "<ul>";
for (const x of fruits) {
    text += "<li>" + x + "</li>"; 
}
text += "</ul>";
document.getElementById('demo').innerHTML = text;


// forEach
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lichi", "Grapes"];
let text = "<ul>";
fruits.forEach(myFuncion);
text += "</ul>";
document.getElementById('demo').innerHTML = text;
function myFuncion(x) {
    text += "<li>" + x + "</li>";
}



// Adding array element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lichi");
fruits.push("Grapes");
let text = "<ul>";
for (const x of fruits) {
    text += "<li>" + x + "</li>";
}
text += "</ul>";
document.getElementById('demo').innerHTML = text;


// New element can also be added to an array using the length property:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Grapes";
fruits[10] = "Lichi";
console.log(fruits[fruits.length-1]);
let text = "<ul>";
for (const x of fruits) {
    text += "<li>" + x + "</li>";
}
text += "</ul>";
document.getElementById('demo').innerHTML = text;


// These two different statements both create a new empty array
const points = new Array();
const cars = [];
console.log(points.length);
console.log(cars.length);


const points = new Array(40, 50, 60, 70, 80);
const cars = ["BMW", "Ferrari", "Audi"];
console.log(points.length);
console.log(cars.length);


const points = new Array(40);
document.getElementById('demo').innerHTML = points;  // undefinded
console.log(points);
const cars = new Array(40);
document.getElementById('demo').innerHTML = cars;  // undefinded



// to recognize an array
// type of
// Array.isArray(name)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// type of an array is object
console.log(typeof fruits);
console.log(Array.isArray(fruits));


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array);








