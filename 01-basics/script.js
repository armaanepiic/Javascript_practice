/*
// forEach
const productList = ['pen', 'paper', 'rice', 'soap', 'oil'];

function showProduct(product, index) {
    console.log(`item: ${index}, product: ${product}`);
}
productList.forEach((product, index) => console.log(`item: ${index + 1}, product: ${product}`));

console.log(productList);
*/

// map
// const a = [2, 4, 6, 8, 10];
// const b = a.map((item) => item * 2);
// console.log(b);
// console.log(a);

// const persons1 = {
//   name: "arman",
//   age: 28,
//   address: {
//     city: "ctg",
//     zip: 4214,
//   },
// };
// const persons = [
//   {
//     name: "arman",
//     age: 28,
//     address: {
//       city: "ctg",
//       zip: 4214,
//     },
//   },
//   {
//     name: "nusrat",
//     age: 25,
//     address: {
//       city: "mirsorai",
//       zip: 4210,
//     },
//   },
//   {
//     name: "piku",
//     age: 60,
//     address: {
//       city: "dhaka",
//       zip: 2140,
//     },
//   },
// ];
// const personNames = persons.map((person) => {
//   if(person.name === 'arman') return person.name;
//   else return;
// });

// const personNames = persons.filter(person => person.name === 'arman').map(person => person.name);


// const personNames = persons.flatMap(person => 
//   person.name === 'arman' ? [person.name] : []
// );

// console.log(personNames);

// const cities = persons.map(person => person.address.city);
// console.log(cities);

// const products = [{id:1, name:'pen'},{id:1, name:'rice'},{id:2, name:'soap'}, {id:3, name:'paper'}];
// const productNames = products.map((product) => product.name.toUpperCase());

// // push : add at the end
// productNames.push('MASALA');

// // unshift : add at beginning
// productNames.unshift('SALT');

// // pop : remove from the last
// productNames.pop();

// // shift : remove from the beginning
// productNames.shift();

// // slice : slice(from where , to where)
// let newProductList = productNames.slice(1,3);

// console.log(newProductList);

// console.log(productNames);
/*
// splice
const numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.splice(2,3);
const addNumber = [20, 30, 40];
numbers.splice(2,0, ...addNumber);

// concat
const newNumbers = numbers.concat(addNumber);
console.log(numbers);
console.log(newNumbers);

// join : make string
// str.join('separate with what')
let numberString = numbers.join(';');
console.log(numberString);

// split
let str = numberString.split(';');
console.log(str);

let fruits = ['apple', 'rice', 'soap', 'oil'];

let newFruits = fruits.join(';');
newFruits = newFruits.split(';').map(el => el.toUpperCase()).join(' ');
console.log(newFruits);

*/

// includes
// const products = ['apple', 'orange', 'pineapple'];
// if(!products.includes('grape')){
//     console.log('ok');
// }

// find
// const index = products.findIndex((product) => (product === 'orange'));
// console.log(index);



const text = `Wikipedia is a free online encyclopedia that anyone can edit, and millions already have.Wikipedia's purpose is to benefit readers by presenting information on all branches of knowledge. Hosted by the Wikimedia Foundation, Wikipedia consists of freely editable content, with articles that usually contain numerous links guiding readers to more information.Written collaboratively by volunteers known as Wikipedians, Wikipedia articles can be edited by anyone with Internet access, except in limited cases in which editing is restricted to prevent disruption or vandalism. Since its creation on January 15, 2001, it has grown into the world's largest reference website, attracting over a billion visitors each month. Wikipedia currently has more than sixty-five million articles in more than 300 languages, including 7,023,370 articles in English, with 107,146 active contributors in the past month.Wikipedia's fundamental principles are summarized in its five pillars. While the Wikipedia community has developed many policies and guidelines, new editors do not need to be familiar with them before they start contributing.Anyone can edit Wikipedia's text, data, references, and images. The quality of content is more important than the expertise of who contributes it. Wikipedia's content must conform with its policies, including being verifiable by published reliable sources. Contributions based on personal opinions, beliefs, or personal experiences, unreviewed research, libellous material, and copyright violations are not allowed, and will not remain. Wikipedia's software makes it easy to reverse errors, and experienced editors watch and patrol bad edits.Wikipedia differs from printed references in important ways. Anyone can instantly improve it, add quality information, remove misinformation, and fix errors and vandalism. Since Wikipedia is continually updated, encyclopedic articles on major news events`;

let words = text.split(' ').map((word) => word.split('\n')).flat();
console.log(words.some((word) => word.length == 0));

// words = new Set(words);
words = Array.from(new Set(words));
words = words.filter((w) => w.length >= 3);
words.sort();
console.log(words);

// sort()
const numbers = [10, 5, 40, 25, 1000, 1];
const sortedNumbers = [...numbers].sort((a,b) => a-b);
console.log(numbers);
console.log(sortedNumbers);
// const sum = numbers.reduce((acc, curr) => {return acc + curr}, 0);
// console.log(sum);
const letters = words.reduce((accLetters, currWord) => {
    const currLetters = currWord.toLowerCase().split('');
    const uniqueLetter = new Set(accLetters.concat(currLetters));
    return Array.from(uniqueLetter);
}, []).sort();
console.log(letters);
