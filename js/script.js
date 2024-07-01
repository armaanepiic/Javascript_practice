
const person = {
    firstName: "Arman",
    lastName: "Hossain",
    age: 26,
    eyeColor: "Brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById('demo').innerHTML = person.firstName;
// document.getElementById('demo').innerHTML = person; // [object Object]
console.log(person);
console.log(person.age);
console.log(person.fullName().toUpperCase());
delete person.age;
console.log(person.age);


const car = new Object();
car.carName = "ferrari";
car.color = "Red";
car. model = 500;
document.getElementById('cars').innerHTML = car.carName;
// document.getElementById('cars').innerHTML = car["carName"];
console.log(car.model);

// nested object
const myObj = {
    firstName: "Arman",
    age: 26,
    myCars : {
        car1: "Ford",
        car2: "Ferrari",
        car3: "Lamborghini",
    },
    school: "CCPC",
    University: "IIUC"
};
console.log(myObj.firstName);
console.log(myObj.myCars.car1);
console.log(myObj.myCars.car2);
console.log(myObj.myCars.car3);
console.log(myObj.school);
console.log(myObj.University);


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