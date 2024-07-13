
//primitive type
// number, string, boolean
// deals with value

let a = 7;
let b = a;
a = 45;
console.log(b);


// reference types
// array, object
let numbers = [1, 2, 3];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 800;
console.log(newNumbers);

let personal = {
    firstName: "Arman",
    age: 25,
    country: "Bangladesh"
}
let x = personal;
console.log(personal);
console.log(x);
personal.age++;
console.log(x);
