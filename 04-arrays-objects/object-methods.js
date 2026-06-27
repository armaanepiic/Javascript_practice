// object Method

let person = {
    firstName : "Arman",
    lastName : "Hossain",
    age: 26,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(person.firstName);
console.log(person.fullName());


// Math Object
let val;
val = Math.PI;
val = Math.E;
val = Math.round(3.8);
val = Math.ceil(1.9);
val = Math.floor(1.9);
val = Math.sqrt(81);
val = Math.abs(-8);
val = Math.pow(2, 3);
val = Math.max(1, 2, 3, 4, 5);
val = Math.min(1, 2, 3, 4, 5);
val = Math.random();
// to get random value 0 - 100 inclusive
val = Math.random() * 100 + 1;
val = Math.round(val);
console.log(val);


// Date object
let val;
let today = new Date();
let birthday = new Date('08-26-1996 12:15');

val = today;
val = today.toString();
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes(); 
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime()
console.log(val);

let birthday = new Date('August 26 1996');
birthday.setMonth(2);
console.log(birthday);



