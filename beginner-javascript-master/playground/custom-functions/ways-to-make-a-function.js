// Declare a function with a name
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function (without a name) Not valid JS. Can be used case as a callback or IFFE(?)
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression store a function as a value in a variable. An anonymous function in a variable. Will not be hoisted.
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

/* eslint-disable */
// Arrow functions. Don't have their own scope with "this" keyword. Are anonymous functions
// This:
// function inchToCM(inches) {
//    const cm = inches * 2.54;
//    return cm;
//}
// Could become this:
//  function inchToCM(inches) {
//     return inches * 2.54;
//};
// Refactored to an anonymous function
//  const incheToCM = functions(inches) {
//  return inches * 2.54;
//};
// Becomes this: remove "function", add fat arrow, implicit return (all on one line, remove curly, delete "return", remove extra ";")
// If only one parameter can get rid of parentheses
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }
// Implicitly return a object - surround what you are returning with paretheses
// Don't have to write an arrow function if it leads to less readable code
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression // Or Immediately Run Function Expression (rather than called later?)
// Wrap in parentheses (parentheses always run first)
(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
// A function that lives inside of an object (console.log: log is a function, console is the object. So this is a method)
const wes = {
  name: 'Westopher Bos',
  // Method! this is it :) (btw, the name of this function is inferred)
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method (common)
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function (less common)
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}

// Callback Functions
// Something will happen when something is done. When someone clicks something do this or when an amount of time has passed, do this.
// A function is passed to a function to be called later
// Click Callback
const button = document.querySelector('.clickMe');
// button.addEventListener('click', wes.yellHI); // When click happens "callback" to the yellHI function

// Can be called outside of the 
function handleClick() {
  console.log('Great Clicking!!');
}

// Passing in an anonymous function
button.addEventListener('click', function() {
  console.log('NIce Job!!!');
});
// This is refactored three... times - see video
// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
