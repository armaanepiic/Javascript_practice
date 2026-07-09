/* ============================================================
   JAVASCRIPT OBJECT — COMPLETE PROPERTIES & METHODS TEMPLATE
   Each concept: explanation + meaningful variable name + console.log
   ============================================================ */


/* ------------------ CREATING & ACCESSING OBJECTS ------------------ */

// 1. Object literal
// The simplest way to create an object — a comma-separated list of
// key: value pairs wrapped in curly braces {}.
let student = {
  name: "Arman",
  age: 29,
  greeting() {
    console.log("Hello");
  }
};
console.log(student); // { name: "Arman", age: 29, greeting: [Function] }

// 2. Dot notation (accessing properties)
// The most common way to read a property, using object.propertyName.
console.log(student.name); // "Arman"
console.log(student.age); // 29

// 3. Bracket notation (accessing properties)
// Reads a property using a string key inside square brackets.
// Required when the key has spaces/special characters, or is stored
// in a variable.
let propertyKey = "name";
console.log(student["age"]); // 29
console.log(student[propertyKey]); // "Arman" (using a variable as the key)

// 4. Adding a new property
// Simply assign a value to a new key — no special method needed.
student.occupation = "Student";
console.log(student.occupation); // "Student"

// 5. Updating an existing property
// Reassigning a key that already exists just overwrites its value.
student.age = 30;
console.log(student.age); // 30

// 6. delete operator
// Completely removes a property from an object (unlike arrays,
// there's no "hole" left behind — the key is just gone).
delete student.age;
console.log(student); // age is no longer present in the object

// 7. Empty object
// Objects can start with nothing and have properties added later.
let customer = {};
console.log(customer); // {}
console.log(typeof customer); // "object"


/* ------------------ OBJECT METHODS & "this" ------------------ */

// 8. Defining a method (shorthand syntax)
// A method is simply a property whose value is a function.
// ES6 shorthand lets you skip writing "greeting: function() {...}".
let employee = {
  name: "Rafiq",
  salary: 50000,
  showDetails() {
    // "this" refers to the object the method is called ON —
    // here, "this" means "employee" because employee.showDetails()
    // is what triggers the call.
    console.log(this.name + " earns " + this.salary);
  }
};
employee.showDetails(); // "Rafiq earns 50000"

// 9. "this" changes depending on HOW a function is called
// The same function can behave differently if detached from its object,
// because "this" is determined at call-time, not at definition-time.
let detachedShow = employee.showDetails;
// detachedShow(); // would log "undefined earns undefined" in non-strict
// mode, or throw an error in strict mode / modules — because "this" is
// no longer bound to "employee".

// 10. Arrow functions and "this"
// Arrow functions do NOT have their own "this" — they inherit "this"
// from the surrounding (enclosing) scope. This is why arrow functions
// are usually a poor choice for object methods that rely on "this".
let manager = {
  name: "Karim",
  showName: () => {
    console.log(this.name); // "this" here is NOT manager, so this is undefined
  }
};
manager.showName(); // undefined

// 11. Method that takes parameters
// Object methods can accept parameters just like regular functions.
let calculator = {
  add(a, b) {
    return a + b;
  }
};
console.log(calculator.add(5, 3)); // 8


/* ------------------ CHECKING & INSPECTING OBJECTS ------------------ */

// 12. in operator
// Checks whether a key exists anywhere in an object (including
// inherited properties), returning true/false.
let bookInfo = { title: "JS Basics", pages: 250 };
console.log("title" in bookInfo); // true
console.log("author" in bookInfo); // false

// 13. hasOwnProperty()
// Checks whether a key exists directly ON the object itself
// (ignoring inherited properties) — usually more reliable than "in".
console.log(bookInfo.hasOwnProperty("pages")); // true
console.log(bookInfo.hasOwnProperty("toString")); // false (inherited, not own)

// 14. typeof
// Returns "object" for plain objects and arrays alike (arrays are a
// special type of object in JS), so typeof alone can't distinguish them.
console.log(typeof bookInfo); // "object"


/* ------------------ Object STATIC METHODS ------------------ */

// 15. Object.keys()
// Returns an array containing only the KEYS (property names) of
// an object, in insertion order.
let country = { name: "Bangladesh", capital: "Dhaka", population: 170000000 };
let countryKeys = Object.keys(country);
console.log(countryKeys); // ["name", "capital", "population"]

// 16. Object.values()
// Returns an array containing only the VALUES of an object,
// matching the same order as Object.keys().
let countryValues = Object.values(country);
console.log(countryValues); // ["Bangladesh", "Dhaka", 170000000]

// 17. Object.entries()
// Returns an array of [key, value] pairs — useful for looping over
// both the key and value together, often combined with for...of.
let countryEntries = Object.entries(country);
console.log(countryEntries);
// [["name","Bangladesh"], ["capital","Dhaka"], ["population",170000000]]

for (let [key, value] of countryEntries) {
  console.log(key + ": " + value);
}

// 18. Object.assign()
// Copies all enumerable properties from one or more SOURCE objects
// into a TARGET object, and returns the modified target. Often used
// to merge objects or create a shallow copy.
let baseSettings = { theme: "dark", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalSettings = Object.assign({}, baseSettings, userSettings);
console.log(finalSettings); // { theme: "dark", fontSize: 18 }

// 19. Object.freeze()
// Prevents ANY changes to an object — you can't add, remove, or
// modify its properties afterward (fails silently in non-strict mode).
let frozenConfig = { apiUrl: "https://api.example.com" };
Object.freeze(frozenConfig);
frozenConfig.apiUrl = "https://changed.com"; // this change is ignored
console.log(frozenConfig.apiUrl); // "https://api.example.com" (unchanged)

// 20. Object.isFrozen()
// Checks whether an object has been frozen, returning true/false.
console.log(Object.isFrozen(frozenConfig)); // true

// 21. Object.seal()
// Prevents adding or removing properties, but EXISTING properties
// can still be modified (unlike freeze, which locks everything).
let sealedProfile = { username: "arman99" };
Object.seal(sealedProfile);
sealedProfile.username = "arman100"; // allowed, since it's an existing key
sealedProfile.email = "test@mail.com"; // ignored, since seal blocks new keys
console.log(sealedProfile); // { username: "arman100" }

// 22. Object.create()
// Creates a brand-new object using an existing object as its
// prototype (the "template" it inherits properties/methods from).
let personPrototype = {
  introduce() {
    console.log("Hi, I'm " + this.name);
  }
};
let newPerson = Object.create(personPrototype);
newPerson.name = "Salma";
newPerson.introduce(); // "Hi, I'm Salma" (introduce is inherited)

// 23. Object.fromEntries()
// The reverse of Object.entries() — converts an array of [key, value]
// pairs back into a plain object.
let entryPairs = [["a", 1], ["b", 2], ["c", 3]];
let rebuiltObject = Object.fromEntries(entryPairs);
console.log(rebuiltObject); // { a: 1, b: 2, c: 3 }


/* ------------------ LOOPING OVER OBJECTS ------------------ */

// 24. for...in
// Loops over the ENUMERABLE KEYS of an object (not the values directly).
// This is the standard way to iterate over plain objects (unlike arrays,
// where for...in is discouraged).
let vehicle = { brand: "Toyota", model: "Corolla", year: 2022 };
for (let key in vehicle) {
  console.log(key + " -> " + vehicle[key]);
}


/* ------------------ COPYING & COMBINING OBJECTS ------------------ */

// 25. Spread operator (...) with objects
// Expands an object's own properties into a new object — a modern,
// shorter alternative to Object.assign() for shallow copies/merges.
let originalUser = { name: "Nasrin", role: "admin" };
let copiedUser = { ...originalUser, active: true };
console.log(copiedUser); // { name: "Nasrin", role: "admin", active: true }

// 26. Destructuring assignment
// Unpacks object properties directly into individual variables,
// avoiding repeated dot-notation access.
let { name: userName, role: userRole } = originalUser;
console.log(userName, userRole); // "Nasrin" "admin"


/* ------------------ ADVANCED PROPERTY FEATURES ------------------ */

// 27. Computed property names
// Allows a variable/expression (wrapped in []) to be used AS the key
// name itself when creating an object.
let dynamicKey = "score";
let gameResult = {
  [dynamicKey]: 95
};
console.log(gameResult); // { score: 95 }

// 28. Getters
// A special method that behaves like a property when READ, letting
// you compute a value on the fly instead of storing it directly.
let rectangle = {
  width: 10,
  height: 5,
  get area() {
    return this.width * this.height;
  }
};
console.log(rectangle.area); // 50 (no parentheses needed — reads like a property)

// 29. Setters
// A special method that behaves like a property when ASSIGNED a value,
// letting you run logic whenever that property is set.
let temperature = {
  celsius: 0,
  set fahrenheit(value) {
    this.celsius = (value - 32) * (5 / 9);
  }
};
temperature.fahrenheit = 98.6;
console.log(temperature.celsius.toFixed(1)); // "37.0"

// 30. Optional chaining (?.)
// Safely accesses a nested property WITHOUT throwing an error if a
// parent property doesn't exist — returns undefined instead of crashing.
let userProfile = { name: "Hossain" };
console.log(userProfile.address?.city); // undefined (no error, even though address doesn't exist)

// 31. Nullish coalescing (??) — often paired with optional chaining
// Provides a fallback value ONLY when the left side is null or
// undefined (unlike ||, which also triggers on 0, "", or false).
let cityName = userProfile.address?.city ?? "City not provided";
console.log(cityName); // "City not provided"


/* ------------------ JSON CONVERSION (COMMONLY USED WITH OBJECTS) ------------------ */

// 32. JSON.stringify()
// Converts a JavaScript object into a JSON-formatted string —
// commonly used to send data to a server or save it as text.
let productInfo = { title: "Laptop", price: 55000 };
let productJSON = JSON.stringify(productInfo);
console.log(productJSON); // '{"title":"Laptop","price":55000}'
console.log(typeof productJSON); // "string"

// 33. JSON.parse()
// The reverse of JSON.stringify() — converts a JSON-formatted string
// back into a real JavaScript object.
let parsedProduct = JSON.parse(productJSON);
console.log(parsedProduct); // { title: "Laptop", price: 55000 }
console.log(typeof parsedProduct); // "object"

// let student = {
//   name: "arman",
//   age: 29,
//   greeting() {
//     console.log("Hello");
//   },
// };
// student.occupation = "student";
// console.log(student.name);
// console.log(student.age);
// student.greeting();
// console.log(student.occupation);
// delete student.age;
// console.log(student);

// // empty object
// let customer = {};
// console.log(customer);
// console.log(typeof customer);
