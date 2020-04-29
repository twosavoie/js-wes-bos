/* eslint-disable */

// Can check type of by checking in console: type of (variable name)

// Begin strings notes
/*
const name = 'wes';
const middle = "topher";
const last = `bos`;

// The backslash allows the apostrophy character. Could also alternate single and double quotes as needed. Or backtics
const sentence = "shes's so \"cool\""; 
const sentence2 = `shes's so "cool"`;

// Can use backstics to create multiple lines
const song = `Ohhh 

ya

I like
pizza`;

// Backtics allow relief from concatination and interpolation. All of these result in Hello my name is Wes. Nice to meet you.
const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;
// End strings notes
*/

// Begin numbers notes. 
// Numbers and floats. 
// + can add or concatinate string or strings + numbers. All other operators will perform math between strings.
// NaN is not a number but NaN is a number type.

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;
/*

// Math methods include round, floor, ceil...
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids; // modular (sp?) ie what is the remainder
console.log(`Each kids gets ${eachKidGets}`);

// Always store money in whole cents, not fractions or floats because of Float Point Math - true in most languages
const price = 1034;

// End numbers
*/

// Start objects
// Objects contain a collection of properties
// Can query with dot notation: person.first person.last...
/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};

// End objects

// Begin undefined (variable defined but not set, etc.)
let dog;
console.log(dog);
dog = 'snickers';

// Begin null (value of nothing)
let somethingUndefined;
const somethingNull = null;

// Undefined
const cher = {
  first: 'cher'
};

// Null
const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

// End Undefined & Null
*/

// Bouleen (True/False)
let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
let age2 = 100;

// Almost always use === rather than ==
// === checks for value and type
// == checks for value