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
let gpa = prompt();
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
