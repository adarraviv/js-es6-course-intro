//Syntax, Statements, & Data Types
// console.log('Hello from JavaScript in another file!');
// console.log(document);
// console.log(typeof document);
// document.getElementById('example').innerHTML = 'JavaScript rules!!';

//Variables Assignments
/*var a, b;
a = 'hello';
b = a + 'world';
// b = 'hello world';
*/

/*var a1 = 30;
document.getElementById('example').innerHTML = a1;
*/

// Functions
/*function print(){
  console.log('A working function!');
}
print();
*/

/*function print(a, b, c){
  console.log(a + b + c);
}
print('One ', 'Two ', 'Three');
*/

/*var print = function(a, b, c){
  console.log(a + b + c);
}
print('One ', 'Two ', 'Three');
*/

/*var multiply = function(a, b){
  return a * b ;
}

var product = multiply(5,10);
console.log(product);
*/

// JS Objects
/*var dog = {
  name: 'Buddy',
  breed: 'Golden Retriever',
  weight: 60,
  bark: function(){
    console.log('Woof!')
  }
};

console.log(dog);
console.log(dog.breed);
console.log(dog['breed']);
dog.bark();
*/

//Arrays & Array Methods
/*var points = [25, 16, 7 ,9, 31];
console.log('Points:', points);
points.push(8);
console.log('Points:', points);
var last = points.pop();
console.log('Last point:', last, 'Points:', points);
var first = points[0];
console.log('First point:', first, 'Points:', points);
console.log('Points Length:', points.length);
console.log('New Last Point:', points[points.length-1]);
*/


//Boolean
/*var a = true;
var b = 5==5;
var c = 5==7;
var d = 5>7;
var e = 5<7;
var f = 5>=7;
console.log(typeof a);
console.log(a,b,c,d,e,f);
*/

//If Statements
/*if(8>5){
  console.log('8 is greater!');
}

if(8>13){
  console.log('8 is greater!');
}else{
  console.log('8 is not greater!');
}

var x= 10
if(8>x){
  console.log('8 is greater!');
}else if(15>x){
  console.log('15 is greater!');
}else{
  console.log('8 and 15 is not greater!');
}

var check = function(number){
  if(number % 2 ==0){
    console.log(number +' is even');
  }else{
    console.log(number +' is odd');
  }
}

check(4);
check(7);
check(8);
*/

// Switch Statements
/*var x = 13;

switch(x){
  case 1:
    console.log('The number is one!');
    break;
  case 2:
    console.log('The number is two!');
    break;
  case 3:
    console.log('The number is three!');
    break;
  default:
    console.log('The number is '+ x);
    break;
}
*/

// For Loop
/*for(var i=0; i<5; i=i+1){
  console.log(i);
}
for(var i=0; i<5; i+=1){
  console.log(i);
}
for(var i=0; i<5; i++){
  console.log(i);
}
var names = ['Frodo', 'Sam', 'Merry', 'Pippin'];
for(var i=0; i<names.length; i++){
  console.log(names[i]);
}
*/

//While Loop
/*var names = ['Frodo', 'Sam', 'Merry', 'Pippin'];
var i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
}
*/

//Do While Loop
/*var names = ['Frodo', 'Sam', 'Merry', 'Pippin'];
var i = 0;
do {
  console.log(names[i]);
  i++;
} while (i < 0);

while(i < 0){
  console.log(names[i]);
}
*/

function count(x) {
  var numbers = [];
  var i;
  if (x%2===0) { // TODO check that x is even
    for (i=0; i<x; i+=2) { // TODO assign i to 0; give i the limit of x; and increment by 2
      numbers.push(i);
    }
    return numbers;
  } else {
    for (i=1; i<x; i+=2) { // TODO assign i to 1; give i the limit of x; and increment by 2
      numbers.push(i);
    }
    return numbers;
  }
}
console.log(count(11));

console.log(count(10));
