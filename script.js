// Date Object

let val;
let today = new Date();
let birthday = new Date("01-13-2026 08:12:45")

val = today; // type - object
val = today.toString() // type - string
val = birthday
val = today.getMonth();
val = today.getDate(); 
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();
birthday.setMonth(2);
birthday.setDate(24);

console.log(birthday);
// console.log(val);
