// Class
// Constructor


let person1 = {
    firstName : "Arman",
    lastName : "Hossain",
    dob: "30/04/1997",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
let person2 = {
    firstName : "Nusrat",
    lastName : "Nabi",
    dob: "26/02/1999",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
console.log(person1);
console.log(person2);

class Person {
    constructor(firstName,lastName,birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = birthdate;
    }
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person1 = new Person("Arman", "Hossain", "04-30-1997");
let person2 = new Person("Nusrat", "Nowmi", "02-26-1999");
let person3 = new Person("Al", "Amin", "03-06-2011");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());




// Sub Class
// Inheritance

class Person { // base class
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person { // sub class
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }
    fullName() {
        console.log(this.firstName, this.lastName);
    }
}

let person1 = new Person("arman", "hossain");
console.log(person1);
console.log(person1.greeting());
let customer1 = new Customer("Rony", "Chy", "01874015451", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullName());
// console.log(person1.fullName()); //error



// static function
class Person { // base class
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    static test() {
        console.log("I am static function");
    }
}
let person1 = new Person("Arman", "Hossain");
console.log(person1.greeting());
console.log(person1.test()); // error karn obj theke static function call kora jabena

