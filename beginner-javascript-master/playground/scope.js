// Global variable ran in console or a script tag in .html. Not in a function, statement...
// Global scope is in Window object (var variable are attached, const & let not attached to the window
// Functions declared globally are also attached to the Window object
// Global variables are a recipe for bugs (Wes)
// const age = 100;

// Function scope: When variables are created inside a function they are only available to that function unless explicitely "returned" and put into its own variable.
// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/* eslint-disable*/

// Block scope. Will keep variables in. If need outside, declare variable above it then update the variable in the block. See video for more details.
// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Scope lookup. lexical scope or static scope. Where functions are defined not where they're run.
const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('sunny');
}

go();

// Function scoping. 
function yell() {
  console.log(name.toUpperCase())
}

function sayHi(name) {

  yell();
}


yell();
