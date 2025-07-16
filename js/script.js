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