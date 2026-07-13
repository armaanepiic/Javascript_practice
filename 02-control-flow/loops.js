let message = "I am learning Javascript";
let food = ["Cake", "Biscuit", "Lemon", "Apple"];
let person = {
  name: "Arman",
  age: 28,
  profession: "Web Developer",
};
let scores = new Map([
  ["math", 90],
  ["english", 85],
  ["physics", 95],
]);
let colors = new Set(["red", "green", "blue", "red"]);

let x = 1;
while (x <= 10) {
  console.log("Hi", x);
  x++;
}

let y = 1;
do {
  console.log("Hello", y);
  y++;
} while (y <= 5);

let i = 0;
while (i < message.length) {
  console.log(`index ${i} = ${message[i]}`);
  i++;
}

let j = 0;
while (j < food.length) {
  console.log(food[j]);
  j++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < message.length; i++) {
  console.log(`index (${i}) = ${message[i]}`);
}

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

let colorArr = [...colors];
for (let i = 0; i < colorArr.length; i++) {
  console.log(colorArr[i]);
}

for (let x in message) {
  console.log(`index ${x}, item = ${message[x]}`);
}

for (let x in food) {
  console.log(`index ${x}, item = ${food[x]}`);
}

for (let x in person) {
  console.log(`${x}: ${person[x]}`);
}

for (let x of message) {
  console.log(x);
}

for (let x of food) {
  console.log(x);
}

for (let [key, value] of scores) {
  console.log(`${key} => ${value}`);
}

for (let key of scores.keys()) console.log(key);
for (let value of scores.values()) console.log(value);

for (let x of colors) {
  console.log(x);
}

for (let [key, value] of Object.entries(person)) {
  console.log(key + ": " + value);
}

food.forEach((item, index) => console.log(index, item));
scores.forEach((value, key) => console.log(key, "=>", value));
colors.forEach((value) => console.log(value));

let n = 5;
let sum = 0;
let series = "";
for (let i = 1; i <= n; i++) {
  sum += i * i;
  series += (i ** 2).toString();
  if (i < n) series += " + ";
}
console.log(`${series} = ${sum}`);
