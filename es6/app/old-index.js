// console.log('hello webpack');
// console.log('hello in the browser');

// const variables = ['34','345','456'];
// console.log(variables);
// variables.pop();
// console.log(variables);

// let a = `good`;
// let greeting = `${a} morning`;
// console.log(greeting);

// let a = [20, 30, 40];
// let b = [10, ...a, 50];
// console.log(b);

// function collect(...a){
//   console.log(a);
// }
// collect(1,2,3,4,5);

// let son = { name: 'Simba', parents: 2 };
// let name, parents;
// ({ name, parents } = son);
// console.log(name, parents);

// let cheer = () => {
//   console.log('Woohoo!');
// }
//
// cheer();

// let values = [20, 30, 40];
//
// let double = (n) => {
//   return n*2;
// }
//
// let doubled = values.map(double);
// console.log(doubled);

// let points = [7, 16, 21, 4, 3, 22, 5];
// let highScores = points.filter((n) => n>15)
// console.log(highScores);

// let b = `wooh${"oo".repeat(50)}`;
// console.log(b);


// console.log("butterfly".startsWith("butter"));
// import { fellowship, total } from './fellowship';
// console.log(fellowship, total);


// import { add, multiply } from './math';
// console.log(add(5,10));


// import Animal from './Animal';
//
// class Lion extends Animal {
//   constructor(name, height, color) {
//     super(name,height);
//     this.color = color
//   }
//   hello(){
//     console.log(`Hi! I'm ${this.name} form the from Pride Rock!`);
//   }
// }
//
// let son = new Lion("Sinba", 2, "golden");
// console.log(son);
// son.hello();


// class Calculator {
//   static multiply(a, b){
//     return a*b;
//   }
//   static add(a, b){
//     return a+b;
//   }
// }
//
// let a = Calculator.add(5,7);
// console.log(a);


// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//
//   this.greet = () => `I'm ${this.name} from ${this.house}`
// }
//
// Wizard.prototype.pet_name;
//
// Wizard.prototype.info = function() {
//   return `I have a ${this.pet} named ${this.pet_name}`
// };
//
//  let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";
// console.log(harry);
// console.log(harry.greet());



// let a = new Set();
// a.add(5);
// a.add(43);
// a.add("Woohoo");
// a.add({x: 50, y: 200});
// console.log(a);
// console.log(a.size);
// console.log(a.has(5));
// console.log(a.has(7));


// let numbers = [5, 7, 8, 13, 17];
// let numSet = new Set(numbers);
//
// for(let element of numSet.values()){
//   console.log(element);
// }
//
// let chars = 'eytejyytehffdshdjdgdasdteqytdsfrhtykr';
// let chars_arr = chars.split("");
// let chars_set = new Set(chars_arr);
// console.log(chars_set);

// let a = new Map();
// let key_1 = "string key";
// let key_2 = { a: 'key'};
// let key_2 = function() {};
//
// a.set(key_1, 'return value for a string key');
// a.set(key_2, 'return value for a object key');
// a.set(key_3, 'return value for a function key');
// console.log(a);

// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// console.log(valMap);

// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// for (let [key, value] of valMap.entries()) {
//   console.log(`${key} => ${value}`);
// }

// let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
// let letters = new Map();
// for (let i=0; i<string.length; i++) {
//   let letter = string[i];
//   if (!letters.has(letter)) {
//     letters.set(letter, 1);
//   } else {
//     letters.set(letter, letters.get(letter) + 1);
//   }
// }
// console.log(letters);

// let string = 'supercalifragilisticexpialidocious';
// const countLetter = (word, orig_letter) => {
//   let letters = new Map();
//   for (let i=0; i<word.length; i++) {
//     let letter = word[i];
//     if (!letters.has(letter)) {
//       letters.set(letter, 1);
//     } else {
//       letters.set(letter, letters.get(letter) + 1);
//     }
//   }
//   return letters.get(orig_letter);
// };
// let a_count = countLetter(string, 'a');
// let x_count = countLetter(string, 'x');


// let call = () => {
//   let secret = 'ES6 rocks';
// }
// console.log(secret); // error

// let call = () => {
//   let secret = 'ES6 rocks';
//   let reveal = () => {
//     console.log(secret);
//   }
//   reveal();
// }
// call();

// let call = () => {
//   let secret = 'ES6 rocks';
//   let reveal = () => {
//     console.log(secret);
//   }
//   return reveal;
// }
// let unveil = call();
// unveil();


// const addSuffix = (x) => {
//   const concat = (y) => {
//     return y + x;
//   }
//   return concat;
// }
// let add_ness = addSuffix("ness");
// console.log(add_ness);
// let h = add_ness("happi");
// console.log(h);

// const product = (x) => {
//   return y => {
//     return x * y;
//   }
// };
// let mult5 = product(5);
// console.log(mult5(3));
// let double = product(2);
// console.log(double(9));


// const product = (x) => {
//   return y => x * y;
// };
// let double = product(2);
// console.log(double(9));


// const product = (x) => y => x * y;
// let double = product(2);
// console.log(double(9));


// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   return { deposit20: deposit20 };
// };
//
// let wallet = budget();
// console.log(wallet);
// wallet.deposit20();

// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   const check = () => balance;
//   return {
//     deposit20: deposit20,
//     check: check
//   };
// };
//
// let wallet = budget();
// wallet.deposit20();
// console.log(wallet.check());

// const budget = () => {
//   let balance = 0;
//   const changeBal = (val) => {
//     return balance += val;
//   }
//
//   const deposit20 = () => changeBal(20);
//   const withdraw20 = () => changeBal(-20);
//   const check = () => balance;
//   return {
//     deposit20,
//     withdraw20,
//     check
//   };
// };
//
// let wallet = budget();
// wallet.deposit20();
// wallet.deposit20();
// wallet.withdraw20();
// wallet.deposit20();
// console.log(wallet.check());


// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker() {
//   let count = 0;
//   while (count < 3) {
//     yield count += 1;
//   }
// }
//
// let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value); // undefined

// function* evens() {
//   let count = 0;
//   while(true) {
//     count += 2;
//     yield count;
//   }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);

// function* evens() {
//   let count = 0;
//   while(true) {
//     count += 2;
//     var reset = yield count;
//     if (reset) {
//       count = 0;
//     }
//   }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(true).value);
// console.log(sequence.next().value);


// const arrayIterator = (array) => {
//   let index = 0;
//
//   return {
//     next: () => {
//       if (index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   }
// }
//
// var it = arrayIterator([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* arrayIterator() {
//   yield arguments;
// }
// var it = arrayIterator(1, 2, 3);
// console.log(it.next().value);

// function* arrayIterator() {
//   for (let arg of arguments) {
//     yield arg
//   }
// }
// var it = arrayIterator(1, 2, 3);

// function* arrayIterator() {
//   yield* arguments;
// }
// var it = arrayIterator(1, 2, 3);

// var array = [1, 2, 3];
// var it = arrayIterator(...array);

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// let p = new Promise((resolve, reject) => {
//   resolve('Resolved promise data');
// });
// p.then(response => console.log(response));

// let p = new Promise((resolve, reject) => {
//   reject('Rejected promise data');
// });
// p.then(response => console.log(response))
//  .catch(error => console.log(error));

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Resolved promise data'), 3000);
// });
// p.then(response => console.log(response));
// console.log("after promise consumption");

// const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
//
// fetch(root, {method: 'GET'})
//   .then(response => {
//     // console.log(response);
//     return response.json();
//   })
//   .then(json => console.log(json));


// let a = Math.pow(2, 5);
// console.log(a);
//
// let c = 2**5;
// console.log(c);
//
// let b = "wonderful".includes("wonder");
// console.log(b);
//
// let d = [2, 3, 4, 5, 6].includes(7);
// console.log(d);


// async function async_one() {
//   return "one";
// }
// async_one().then(response => console.log(response));
// async function async_two() {
//   throw new Error('Issue with async!');
// }
// async_two().catch(error => console.log(error));
// async function async_three() {
//   const one = await async_one();
//   console.log(one);
//   const two = await async_two();
//   console.log(two);
// }
// async_three();
// async function async_four() {
//   const [res_one, res_two] = await Promise.all([
//     async_one(), async_two()
//   ])
//   console.log(res_one, res_two);
// }
// async_four();

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>React Application</div>, document.getElementById('root')
);
