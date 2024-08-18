
// http://www.icndb.com/api/
// API
// RESTful API
document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.valye.joke;
            console.log(joke);
        }
    }
    xhr.send();
}









/*
// AJAX = Asynchronous JS and XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);
function loadData() {
    // create XHR object
    // XML HTTP Request
    let xhr = new XMLHttpRequest();
    // open
    xhr.open('GET', 'data.txt', true);
    xhr.onprogress = function () {
        console.log(xhr.readyState);
    }
    xhr.onload = function () {
        if (this.status === 200) {
            //  HTTP statuses
            // 200 : "OK"
            // 403: "Forbidden"
            // 404: "Not Found"
           
            if (this.status === 200) {
                // console.log(this.responseText);
                document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
            }
        }
    }
    xhr.send();
    // console.log(xhr);
}
 */
































/*
// what type of data supports JSON
// string
// Number
// Object (JSON object)
// Array
// Boolean
// null

// doesn't support undefined, date, function

var person = {
    name: "Arman",
    age: 26,
    hometown: "Chittagong",
    married: false,
    dob: 1995-5-12,
    test_null: null,
    test_undefined: undefined,
    greet: function () {
        console.log(`Hello $(this.name)`)
    }
}
var person_json = JSON.stringify(person);
console.log(person_json);
// person.greet();
*/














/*
var student = {
    name: "Arman",
    age: 26,
    hometown: "Chittagong"
};

// js obj -> JSON data format using JSON.stringify

var student_json = JSON.stringify(student);
console.log(student_json);

// JSON data format -> js obj using JSON.parse

var student_new = JSON.parse(student_json);
console.log(student_new);


// var student_json = {
//     "name": "Arman",
//     "age": 26,
//     "hometown": "Chittagong"
// };
*/




























/*
let re, str;

// postal code
// 4780, 8954
re = /^[0-9]{4}$/;
str = "4578";

// phone number
// 01789658488, +8801819658745, 8801819658745
re = /^(\+)?(88)?01[0-9]{9}$/;
str = "8801789658488";

// Email-address
// xyz.abc@pqr.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]$/

str = "xyz.abc@pqr.com.bd"
console.log(re.test(str));


*/
























/*
// Regular expression
// pattern matching technique

let re = /hello/;

// remove caase sensitivity
re = /hello/i;

let str;

console.log(re);
console.log(re.source);
str = "Hello world";
str = "Again Hello world";
str = "hgfhgdddHegffgghello";

//exec() - return result in an array on null
let result = re.exec(str);

// test
result = re.test(str);

// match -> return array or nll
result = str.match(re);

// search() -> returns index of the first match or -1

str = "hello world";
re = /world/i;
result = str.search(re);


// replace() -> return new string
str = "Again hello world Hello";
let newString = str.replace(re, "Hi");

console.log(result);
console.log(newString);

*/


























/*
// Error Handling
console.log("Before error");
try {
    undefined.test();
} catch (err) {
    // console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally");
}
console.log("After error");




let a = 2;
try {
    if (a > 15) throw "Too big";
    else if (a < 5) throw "Too small";
} catch (err) {
    console.log(err);
}

*/























// Events of Javascript
/*
function message() {
    console.log("Mouse over button");
}


// even listener
// document.getElementById('sample-btn').addEventListener('click', message);
document.querySelector(".container").addEventListener('mousemove', message);


function message(e) {
    let val = e;
    val = e.target;
    val = e.target.id;
    val = e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.clientX;
    val = e.offsetY;
    val = e.offsetX;
    // console.log(val);
    val = this;
    this.style.background = `#${e.offsetX}`;
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    console.log(val);
}


document.querySelector("#name").addEventListener('focus', test);
document.querySelector("#name").addEventListener('keyup', test2);

function test(e) {
    this.style.background = 'pink';
}

function test2() {
    // console.log(this.value);
    document.getElementById("demo").innerText = this.value;
}

*/




















/*
// removing an element

let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');
// listItems[0].remove();
// listItems[5].remove();

// list.removeChild(listItems[4]);

list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("sample-class");

let val = list.hasAttribute('titile');
list.setAttribute("title", "New Title");
list.removeAttribute("title");

console.log(listItems);
console.log(list);
console.log(val);
*/






/*
// replacing elements

let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";
let oldHeading = document.querySelector('h3');
let parent = document.querySelector('.container');
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);
*/




























/*
// Adding Element to DOM
// Create Element

let olItem = document.createElement('li');

// Add id and class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute

olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('Javascript'));

document.querySelector('ol').appendChild(olItem);

// Javascript is added

// console.log(olItem);


let ulitem = document.createElement('li');
let link = document.createElement('a');
link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');
ulitem.appendChild(link);
document.querySelector('ul').appendChild(ulitem);

console.log(ulitem);
console.log(link);
*/






















/*
// Traversing the DOM
let val;

let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');


val = list;
val = listItem;

// Get the child nodes
val = list;
val = list.childNodes;
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;
// element = 1 
// Attribute = 2 
// Text Node = 3 
// Comment = 4 
// Document itself = 9 
// Doctype 10
val = list.childNodes;
val = list.children;
list.children[0].textContent = "hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount; 

val = listItem;
val = listItem.children;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

listItem = document.querySelector('ul li:first-child');
val = listItem.nextSibling.nextSibling;

val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

listItem = document.querySelector('ul li:last-child');
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
*/




























/*
// Multiselector
// document.getElementByClassName()
let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'hello';
// console.log(list[0]);
// console.log(list[2]);

// document.getElementByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');
let lis = Array.from(list);
lis.forEach(element => {
    // console.log(element);
});

// document.querySelectorAll()
// id -> #
// className -> .
// tagName -> nothing

list = document.querySelectorAll('.sample-class');
list = document.querySelectorAll('li');
list = document.querySelectorAll('#document-title');
list = document.querySelectorAll('ol li');
list = document.querySelectorAll('ul li');
list.forEach(item => {
    // console.log(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(element => {
    // console.log(element);
    element.style.background = 'skyblue';
    element.style.color = 'white';
});
liEven.forEach(element => {
    // console.log(element);
    element.style.color = 'blue';
    element.style.background = 'red';
});
// console.log(list);

*/



















/*
// getting an element
let val;
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// changing style
document.getElementById('document-title').style.background = '#faf';
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.display = 'block';


// changing content
document.getElementById('document-title').textContent = 'New Title';
document.getElementById('document-title').innerText = 'Again New Title';
document.getElementById('document-title').innerHTML = '<i> Again new title</i>';

val = document.getElementById('document-title');
val.innerText = 'Heading';


// query selector
// id
val = document.querySelector('#document-title'); // id call korle #

// class
val = document.querySelector('.sample-class');

// html tag
val = document.querySelector('h3');

// list
val = document.querySelector('ol');
val = document.querySelector('ol li');
val.style.background = 'red';
val.style.color = 'white';
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(3)');

console.log(val);
*/







