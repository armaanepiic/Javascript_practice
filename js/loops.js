// loops
// while loop

let x = 1;
while (x<=10) {
    console.log("Hi");
    x++;
}


for (var i = 0; i <= 10; i++){
    console.log(i)
}


let x = "Bangladesh";
for (var i = 0; i < x.length; i++){
    console.log(`index (${i}) = ${x[i]}`)
}

let food = ["cake", "ice-cream", "chocolate"];
for (let i = 0; i < food.length; i++){
    console.log(food[i]);

let Name = "Bangladesh";
let food = ["cake", "ice-cream", "chocolate"];
let person = {
    firstName: "Arman",
    age: 26,
    profession: "Student",
    hobby: "Travelling"
};
// for in = string, array, object
// string
for (var x in Name) {
    // console.log(x);// print the index of a string
    console.log(Name[x]); // print the character of a string
}
for (var x in food) {
    // console.log(x); // print the index
    console.log(food[x]) // print the value of the array
}
for (var x in person){
    console.log(`Property : ${x}
value : ${person[x]}`);
}
// for of string, array
for (var x of Name) {
    console.log(x); // print the value of string
}
for (var x of food) {
    console.log(x);
}


let x = prompt();
let sum = 0;
let series = "";
for (var i = 1;i <= x; i++){
    sum += i * i;
    series += (i ** 2).toString();
    if (i < x)
        series += " + ";
}
console.log(`${series} = ${sum}`);
