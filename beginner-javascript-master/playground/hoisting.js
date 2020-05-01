// JS "hoists" the (regular) function or variable declarations (but not values) to the top of file. Better to define functions then use them or use modules and import into file.
// some people prefer to have "What does this file do" and then "How does this file do it?"

/* esline-disable */
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

const add = (a, b) => a + b;
