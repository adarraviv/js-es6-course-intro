# JavaScript, ES6, React JS
Course gitHub Repo - https://github.com/15Dkatz/es6-in-depth-tutorial
Course on Udemy - https://www.udemy.com/es6-in-depth/

JS - a small, lightweight, object-oriented scripting language that connects to objects in hosts environments and controls them.

JS client-side - accesses the Document Object Model to handle user interaction.

JS server-side - run servers and communicate to databases.

## JS vs. Java

Java - compiles on systems of classes.
JS - supports a system of small data types.

JS also is more-free form, with less requirements than Java.

EcmaScript - ECMA International standardized script

DOM - Document Object Model - gives full access from JavaScript to dynamically create HTML with specific methods that modify the object representations of HTML elements.

HTML, “HyperText Markup Language”

JS Objects

Sudo code

EcmaScript 6 - Arrow Functions, enhanced collection, generators, etc., ES6 code feels very clean, intuitive, and well designed
	- Babel and Webpack help create an ES6 development environment

## Why We Need Transpilers (aka. Babel for ES6)https://babeljs.io/
* Transpilers - read code written in one language and produce the equivalent code in another (ex. CoffeeScript and TypeScript)
* Why Transpilers - because browsers only currently have widespread support of older JS.
* Transpilers convert advanced TypeScript and CoffeeScript code back into the original JS.
* Babel - Transpiles es6 back into the supported pre-es6 JS.
Tryout Babel - https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.9.6&externalPlugins=

## Webpack - https://webpack.js.org/
Webpack in GitHub - https://github.com/webpack/webpack

The benefits of webpack
* Bundles modules into one js file
* Comes with a dev-server.

### Create New ES6 Environment(Need Node.js and NPM)
$ mkdir es6
$ cd es6
$ npm init -y
$ npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev (for more info https://webpack.js.org/guides/installation/)

Add a src folder with a index.js file

Edit the script section on package.json file with….
<!--
  "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
 -->

Then

$ npm run start
$ npm run build (For production meaning minified and uglyfied)

Create a webpack.config.js file in the main folder and add to the file...

<!--
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'app'), //grabs code from the app folder
  output:{
    path: path.resolve(__dirname, 'build'), //create a build folder
    filename: 'bundle.js' // and compiles it into a bundle.js file in the build folder
  }
};
-->
Install developer server.
$ npm i webpack-dev-server@3.1.4 --save-dev

Change the script start section on package.json file with….
<!--
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
-->

Create an index.html file in the build folder with this code.
<!--
<html>
  <header></header>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html> -->

Setup Babel with Webpack
$ npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev

add to webpack.config.js a module...
<!--
module:{
  rules:[
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]
}
 -->
Create a .babelrc file in the main(es6) folder with thiss code inside...
{
  "preset": ["env"]
}

## ES6 Syntax
var limit = 100; to let limit = 100; or const limit = 100;

Block Scoping - {...}  ex. print(){console.log("ES6 rocks!")};

Local scope vs. Global scope

Template Literals - Strings with embedded expressions
let insert = 'world';
`Hello, ${insert}...` //example of template Literals
Eases updating strings and concetation

### Let and Const
let and const are variations of var.
let can be changed while const cannot.
the one exception is that a const array can push or pop more variables to the already existing array.

### Block Scoping
Can use let and const can create both local and global scopes in the code using a block scope while var cannot.
Most block scoping can be found in functions.

### Template Literals
example:
let a = `good`;
let greeting = `${a} morning`;
console.log(greeting);

### Operating and Destructuring Assignment
Spread Operator: {...}
Rest Parameters: function(..){.};
Destructuring Assignment: simplifies extracting data on arrays and object into distinct variables

#### Spread Operator
example:
let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

example2:
function collect(...a){
  console.log(a);
}
collect(1,2,3,4,5);

#### Destructuring Assignment
example:
let z = [4,5,6];
let [four, five] = z;
console.log(four, five);

example2:
let son = { name: 'Simba', parents: 2 };
let name, parents;
({ name, parents } = son);
console.log(name, parents);

## Methods and Modules
Arrow Functions - are anonymous es6 syntax, ex: ()=>{...}
Helper Methods - map method(creates new arrays by calling a function on individual elements in a original array) and filter method(creates new arrays based on an original array and a certain test on each of its element)
Modules - Split code into unique files based on relevant data.(handled using export and import keywords)

function expression
example:
setTimeout(function(){
  console.log('Woohoo!');
}, 3000);

### Arrow functions
example:
let cheer = () => {
  console.log('Woohoo!');
}
cheer();

### Map and Filter Methods(Helper Methods)

#### Map Example
let values = [20, 30, 40];
let doubled = values.map((n) => n*2);
console.log(doubled);

#### Filter Method
let points = [7, 16, 21, 4, 3, 22, 5];
let highScores = points.filter((n) => n>15)
console.log(highScores);

### ES6 Built-in Helper Methods
**String Manipulation and Number Checking**
String.repeat() -returns a new string of concatenated copies.
Searching with startsWith, endsWith, includes, and more...
Number checking for type and safety

#### String Helper Methods
example:
let b = `wooh${"oo".repeat(50)}`;
console.log(b);

example2:
console.log("butterfly".startsWith("butter"));
example3:
console.log("butterfly".endsWith("fly"));
example4:
console.log("butterfly".includes("tt"));

### Modules
Using import and export you can bring in modules from other pages.
export {add, multiply};
export default multiply;

import { add, multiply } from './math';

## Classes in JavaScript
Relate to each other through inheritance
Defined with the class key keyword and uses a constructor.
The extends keyword creates child classes.
example:
Class Animal{...};
this.name;
this.height;
this.hello{log("Hi! I'm {this.name} from the land!")}

Class Lion{...} extends Animal
this.name;
this.height;
this.hello{log("Hi! I'm {this.name} from the Pride Rock!")}

### Defining Classes
example:
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  hello(){
    console.log(`Hi! I'm ${this.name} form the Animal Kingdom!`);
  }
}
let king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();

### inheriting Classes
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  hello(){
    console.log(`Hi! I'm ${this.name} form the Animal Kingdom!`);
  }
}

class Lion extends Animal {
  constructor(name, height, color) {
    super(name,height);
    this.color = color
  }
  hello(){
    console.log(`Hi! I'm ${this.name} form the from Pride Rock!`);
  }
}

let son = new Lion("Sinba", 2, "golden");
console.log(son);
son.hello();

### Statis Methods in Classes
example:
class Calculator {
  static multiply(a, b){
    return a*b;
  }
  static add(a, b){
    return a+b;
  }
}

let a = Calculator.add(5,7);
console.log(a);

### Classes & Prototypes
Object-Oriented Programming(OOP) - Objects or classes hold relevant data that interact with each other.
Major languages like C, Java, and Ruby support OOP.
JavaScript supports a prototypal inheritance model.
JavaScript Prototypes - Classes are extractions on top of JavaScript prototypes. A prototype reveals an object's parent. All objects(Arrays, Dates, etc.) have a prototype.

#### Prototypes
example:
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}`
};

 let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry);
console.log(harry.greet());

## Data Structures in es6
Algorithms solve various problems in different running times.
Algorithms differ in their efficientcy with resource usage.

### The Set
The set stores unique values.
Sets prove advantageous in storing no duplicates.

example:
let a = new Set();
a.add(5);
a.add(43);
a.add("Woohoo");
a.add({x: 50, y: 200});
console.log(a);
console.log(a.size);
console.log(a.has(5));
console.log(a.has(7));

example2:
let chars = 'eytejyytehffdshdjdgdasdteqytdsfrhtykr';
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);

### Maps
Maps have keys and values.
Maps share much similarity to objects.
But maps beat objects with super keys, and the size property.

examples:
let a = new Map();
let key_1 = "string key";
let key_2 = { a: 'key'};
let key_2 = function() {};

a.set(key_1, 'return value for a string key');
a.set(key_2, 'return value for a object key');
a.set(key_3, 'return value for a function key');
console.log(a);

example2:
let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(twoDee);
console.log(valMap);

exmple3:
let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(twoDee);
for (let [key, value] of valMap.entries()) {
  console.log(`${key} => ${value}`);
}

example4:
let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
let letters = new Map();
for (let i=0; i<string.length; i++) {
  let letter = string[i];
  if (!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}
console.log(letters);

## Closures
Remember their creation environment and can reference independent variables within that environment.
Enable function factories.
Enable private data.

#### Closures and Scoping
Lexical Scoping
example:
let call = () => {
  let secret = 'ES6 rocks';
  let reveal = () => {
    console.log(secret);
  }
  reveal();
}
call();

example2:(unveil variable)
let call = () => {
  let secret = 'ES6 rocks';
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}
let unveil = call();
unveil();

#### Function Factories
example:
const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}
let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);

example2:
const product = (x) => y => x * y;
let double = product(2);
console.log(double(9));

#### Private Methods
example:
const budget = () => {
  let balance = 0;
  const changeBal = (val) => {
    return balance += val;
  }

  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;
  return {
    deposit20,
    withdraw20,
    check
  };
};

let wallet = budget();
wallet.deposit20();
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
console.log(wallet.check());

**module pattern** = Closures - used to wrap a set of variables and functions together in a single scope.

## ES6 Generators
Break the typical "run to completion" model for functions.
Generators can pause, and resume, with **yield** and **next()**.
Construct controlled-flow functions and iterators.

#### Defining a Generators
example:
function* countMaker() {
  let count = 0;
  while (count < 3) {
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value); // undefined

#### Controlling Flow with Generators
example:
function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    var reset = yield count;
    if (reset) {
      count = 0;
    }
  }
}
let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);

#### Generator vs. Iterators
Iterator example:
const arrayIterator = (array) => {
  let index = 0;

  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index += 1;
        return next;
      }
    }
  }
}

var it = arrayIterator([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

Generator have a push, start, and reset.

## Synchronous & Asynchronous Programming
Synchronous - run in sequence without blocking.
Asynchronous - divert blocking to event handlers.
user interfaces and browsers handle events asynchronously.
Asynchronous programming underlies database, server, and api interaction.
Promises - handle asynchronous functions in es6. three states: Pending, Fulfilled, & Rejected.

### Promises
example:
let p = new Promise((resolve, reject) => {
  resolve('Resolved promise data');
});
p.then(response => console.log(response));

example2:
let p = new Promise((resolve, reject) => {
  reject('Rejected promise data');
});
p.then(response => console.log(response))
 .catch(error => console.log(error));

example3:
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved promise data'), 3000);
});
p.then(response => console.log(response));
console.log("after promise consumption");

### Http & Fetch
Http - HyperText Transfer Protocol - A server provides resources based on http requests.
HTTP Request Methods
	- GET - retrieves data and has no secondary effect.
	- POST - sends data to a server to add resources.
	- HEAD, DELETE, PATCH...

#### APIs and Fetch
JSONPlaceholder

example:
const root = 'http://jsonplaceholder.typicode.com/posts/1';
fetch(root, {method: 'GET'})
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(json => console.log(json));



## ES7 and ES8 Proposals
ES7 2016 - New Features: Exponent Operator, More support for Arrays
Proposal for ES8 - More object manipulate with .value() and .entries()., Async Functions

#### ES7
update environment for ES7 features...
$npm install babel-preset-es2016 --save-dev

Features Examples:
let a = Math.pow(2, 5);
console.log(a);

let c = 2**5;
console.log(c);

let b = "wonderful".includes("wonder");
console.log(b);

let d = [2, 3, 4, 5, 6].includes(7);
console.log(d);

#### ES8 Proposal
update environment for ES8 proposals...
$npm install babel-preset-es2017 --save-dev
Object Proposal Example:
let obj = {
  a: 'one',
  b: 'two',
  c: 'three'
}
let keys = Object.keys(obj);
console.log(keys);
let values = Object.values(obj);
console.log(values);
let entries = Object.entries(obj);
console.log(entries);
for (let entry of entries) {
  console.log(`key: ${entry[0]} | value: ${entry[1]}`);
}

Async Proposal Example:
async function async_one() {
  return "one";
}
async_one().then(response => console.log(response));
async function async_two() {
  throw new Error('Issue with async!');
}
async_two().catch(error => console.log(error));
async function async_three() {
  const one = await async_one();
  console.log(one);
  const two = await async_two();
  console.log(two);
}
async_three();
async function async_four() {
  const [res_one, res_two] = await Promise.all([
    async_one(), async_two()
  ])
  console.log(res_one, res_two);
}
async_four();


## A React and ES6 Application
update environment for ES8 proposals...
$ npm install babel-preset-react react react-dom react-bootstrap --save-dev
