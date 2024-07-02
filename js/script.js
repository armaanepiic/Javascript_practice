let text = "Bangladesh";
console.log(text.length);
let text1 = "We are the so-called \r \"Vikings\" from the north";
console.log(text1.length);

document.getElementById('demo').innerHTML = text1;



  





/*
function displayDate() {
    document.getElementById('demo').innerHTML = Date();
    alert("test");
}
*/







/*
// constructor function of an object

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
    this.nationality = "English";
    this.fullname = function () {
        return this.firstName + " " + this.lastName;
    }
}
const myFather = new Person("John", "Doe", 50, "Blue");
myFather.blood_group = "A+";
let text = "";
for (let [x, y] of Object.entries(myFather)) {
    text += x + " : " + y + "<br>";
};
document.getElementById('demo').innerHTML = text;

*/
// let myString = JSON.stringify(myFather);
// document.getElementById('demo').innerHTML = myString;

/*
let text = "";
for (let x in myFather) {
    text += myFather[x] + " ";
};
document.getElementById('demo').innerHTML = text;


const myArray = Object.values(myFather);
document.getElementById('demo').innerHTML = myArray;



let text = "";
for (let [x, y] of Object.entries(myFather)) {
    text += x + " : " + y + "<br>"
}
document.getElementById('demo').innerHTML = text;

*/

// let myString = JSON.stringify(myFather);
// document.getElementById('demo').innerHTML = myString;





/*
// displaying the property of an object
const person = {
    firstName: "Arman",
    age: 26,
    city: "Chattogram"
};
document.getElementById('demo').innerHTML = person; // [object Object]

// displaying the properties of an object as a string

document.getElementById('demo').innerHTML = person.firstName + " , " + person.age + " , " + person.city;

// displaying the properties of an object in a loop



let text = "";
for (let x in person) {
    text += person[x] + " ";
};
document.getElementById('demo').innerHTML = text;



// displaying the properties of an object Using
// ------- Object.values()

const myArray = Object.values(person);
document.getElementById('demo').innerHTML = myArray;

// displaying the properties of an object Using
// ------- Object.entries()


const fruits = {
    Bananas: 100,
    Oranges: 200,
    Mangoes: 300,
    Apples: 400
};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
}
document.getElementById('demo').innerHTML = text;


// Using JSON.stringify()

const fruits = {
    Bananas: 100,
    Oranges: 200,
    Mangoes: 300,
    Apples: 400
};
let myString = JSON.stringify(fruits);
document.getElementById('demo').innerHTML = myString;

*/
// const person = {
//     firstName: "Arman",
//     lastName: "Hossain",
//     age: 26,
//     eyeColor: "Brown",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// document.getElementById('demo').innerHTML = person.firstName;
// // document.getElementById('demo').innerHTML = person; // [object Object]
// console.log(person);
// console.log(person.age);
// console.log(person.fullName().toUpperCase());
// delete person.age;
// console.log(person.age);


// const car = new Object();
// car.carName = "ferrari";
// car.color = "Red";
// car. model = 500;
// document.getElementById('cars').innerHTML = car.carName;
// // document.getElementById('cars').innerHTML = car["carName"];
// console.log(car.model);

// // nested object
// const myObj = {
//     firstName: "Arman",
//     age: 26,
//     myCars : {
//         car1: "Ford",
//         car2: "Ferrari",
//         car3: "Lamborghini",
//     },
//     school: "CCPC",
//     University: "IIUC"
// };
// console.log(myObj.firstName);
// console.log(myObj.myCars.car1);
// console.log(myObj.myCars.car2);
// console.log(myObj.myCars.car3);
// console.log(myObj.school);
// console.log(myObj.University);


// function myFunc(a, b) {
//     console.log("hello");
//     return a * b;
// }
// let x = myFunc(4, 2);
// console.log(x);






// const person = { firstName: "Arman", age: 26, eyecolor: "brown" };
// document.getElementById('demo').innerHTML = person.eyecolor;
// console.log(typeof person.age);

// function sleep(person, time) {
//     console.log(person + " is sleeping from " + time);
// }
// sleep("Arman", "10 PM");
// sleep("Nusrat", "11 PM");
// sleep("Dolli", "12 PM");




// let x = 5;
// let y = 5;
// let z = 10;
// document.getElementById('demo').innerHTML = (x == y) + "<br>" + (x == z);

// const cars = ["BMW", "AUDI", "FERRARI", "LAMBORGHINI", "BUGHATI"];
// let element;
// for (let index = 0; index < cars.length; index++) {
//     element = cars[index];
//     document.getElementById('demo').innerHTML = element;
//     console.log(element);
// }

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// let p = 5 + 5 + "11";

// console.log(x); // 10
// console.log(typeof x);
// console.log(y); // 55
// console.log(typeof y);
// console.log(z); // hello5
// console.log(typeof z);
// console.log(p); // 1011
// console.log(typeof p);


// console.log(5 & 1);




// let x = 10;
// let y = 3;
// x **= y;
// document.getElementById('demo').innerHTML = x++;


// const pi = 3.1416;
// pi = 3.14;
// console.log(pi); // error


// carName = "ferari";
// let carName;
// console.log(carName);


// carName = "ferari";
// var carName;
// console.log(carName);



// using var
// var x = 3;
// console.log(x); // x = 3
// {
//     var x = 4;
//     console.log(x); // x = 4

// }
// console.log(x); // x = 4

// using let
// let x = 3;
// console.log(x); // x = 3
// {
//     let x = 4;
//     console.log(x); // x = 4

// }
// console.log(x); // x = 3









// let carName = "Volvo";
// document.getElementById('carName').innerHTML = carName;

// let x = "Arman" + " " + "Hossain";
// document.getElementById('myName').innerHTML = x;

// let y = "6" + 1 + 3;
// document.getElementById('sum1').innerHTML = y;

// let z = 10 + 20 + "77";
// document.getElementById('sum2').innerHTML = z;