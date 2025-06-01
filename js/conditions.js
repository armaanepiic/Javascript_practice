// conditions
// control flow

let x = 3;
if (x == 3) {
    console.log("Yes");
} else {
    console.log("No");
}

let y = 4;
if (y == 3) {
    console.log("Yes");
} else {
    console.log("No");
}

let age = 20;
if (age >= 35) {
    console.log(`${age} is greater than 35`);
} else {
    console.log(`${age} is not greater than 35`);
}

// calculate gpa
// let gpa = prompt();
let result;
if (gpa >= 80 && gpa <= 100) {
    result = "A+";
} else if (gpa >= 70 && gpa <= 79) {
    result = "A";
} else if (gpa >= 60 && gpa <= 69) {
    result = "B+";
} else if (gpa >= 50 && gpa <= 59) {
    result = "B";
} else if (gpa >= 40 && gpa <= 49) {
    result = "B-"
} else if (gpa >= 33 && gpa <= 39) {
    result = "C";
} else if(gpa >= 0 && gpa < 32) {
    result = "F";
} else {
    result = "Invalid input";
}
console.log(result);

// switch statement

let choice = prompt();
let text;
switch (choice) {
    case "a": text = "Option 1 selected";
        break;
    case "b": text = "Option 2 selected";
        break;
    case "c": text = "Option 3 selected";
        break;
    default: text = "No option selected";
}
console.log(text);


let a = prompt("Enter first number");
let b = prompt("Enter second number");
let option = prompt(`Select an option
1 : Add
2 : Subtract
3 : Multiply
4 : Divide`);
var result = null;

a = parseInt(a);
b = parseInt(b);
option = parseInt(option);

let aCon = isNaN(a);
let bCon = isNaN(b);
let optionCon = isNaN(option);

if (aCon || bCon || optionCon) {
    console.log("invalid input");
} else {
    switch (option) {
        case 1: result = a + b;
            break;
        case 2: result = a - b;
            break;
        case 3: result = a * b;
            break;
        case 4: result = a / b;
            break;
        default:
            break;
    }
    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}
