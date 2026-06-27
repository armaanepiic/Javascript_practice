// function

function saySomething() {
    console.log("Hello");
    console.log("I am learning Javascript.");
    console.log("Arman");
}
saySomething();


function saySomething(x) {
    alert(`Hello ${x}`);
}
saySomething("Bohubrihi");


function add(x = 0, y = 0) {
    return x + y;
}
let x = add(4, 5);
console.log(x);

// for each
var foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];


// 3 parameters
// 1st paramater : items
// 2nd parameter : index
// 3rd parameter : whole array

foods.forEach(function (items) {
    console.log(items); // array elements
});


// 2 parameters
foods.forEach(function (items, index) {
    console.log(`index : ${index} -> ${items}`)
});

// 3 parameters
foods.forEach(function (items, index, full) {
    console.log(full); 
});

foods.forEach(function (items, index, full) {
    console.log(items);
    console.log(index);
    console.log(full); 
});


var foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];

let printEverything = function (items, index, all) {
    console.log(`index : ${index} -> ${items}`);
    console.log(all);
}
foods.forEach(printEverything);


// building a new array by the existing array

var foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];
function addSomething(item,index) {
    return `${item} and ${index} is a food`;
}
let myArray = foods.map(addSomething);
console.log(myArray);

var foods = ["Cake", "Ice-cream", "Chocolates", "Bread"];
function addSomething(item) {
    return `${item} is a food`;
}
let myArray = foods.map(addSomething);
console.log(myArray);

var numbers = [1, 2, 3, 4, 5, 6];
function addSquare(item) {
    return `${item} * ${item} = ${item*item}`
}
let squareArray = numbers.map(addSquare);
console.log(squareArray);


