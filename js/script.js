
// string templates
let text = `It's my life.`;
console.log(text);

//interpolation
// Automatic replacing of variables with real values is called string interpolation.
let firstName = "Arman", lastName = "Hossain";
let text = `Welcome ${firstName} ${lastName}`;
console.log(text);

let country = "Germany";
let a = 17, b = 1;
let sentence = `I love ${country} and it's population is ${a+b} crore`;
console.log(sentence);


let price = 10;
let vat = 0.25;
let total = `Total: ${price * (1 + vat)}`;
console.log(total);


let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += "</ul>";
document.getElementById('demo').innerHTML = html;













