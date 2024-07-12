// Array

let numbers = [];
console.log(numbers.length);
numbers.push(12);
console.log(numbers.length);
console.log(numbers);

let x = "Bangladesh";
let y = x.split("");
console.log(y.length);
console.log(y); // ['B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']
console.log(typeof y);
let p = "Hello World";
let q = p.split(" ");
console.log(q);
let a = y.toString();
a = y.join("");
console.log(a);

let countries = ["UK", "USA", "Peru", "Pakistan"];
let text = countries.toString();
text = countries.join(", ");
console.log(text);

let name = "Arman";
let temp = name.split("");
console.log(temp);
let myName = temp.toString();
myName = temp.join("");
console.log(myName);

let countries = ["UK", "USA", "Peru", "Pakistan"];
let cars = ["BMW", "Ferrari", "Audi"];
let myArray = countries.concat(cars);
console.log(myArray);
let myString = myArray.toString();
myString = myArray.join("/");
console.log(myString);

let x = "Arman";
let cars = ["BMW", "Ferrari", "Audi"];
let y = x.split('');
console.log(y);


let x = "Arman";
let cars = ["BMW", "Ferrari", "Audi"];
let y = x.concat(cars);
console.log(y);



let countries = ["UK", "USA", "Peru", "Pakistan"];
console.log(countries);
countries.sort();
console.log(countries);
countries.reverse();
console.log(countries);



let countries = ["UK", "USA", "Peru", "Pakistan"];
console.log(countries);
console.log(countries[0]); // UK
console.log(countries.length);
countries[countries.length] = "Denmark";
console.log(countries);
countries.pop();
console.log(countries);
countries.push("Portugal", "Japan");
console.log(countries);
countries.shift();
console.log(countries);
countries.unshift("China");
console.log(countries);




















