// Function Definition (with parameters (which are variables in a function) will be passed arguments)
// Parameters are Placeholders (or Possibles) and Arguments are Actual values (mnemonic device)
// Functions are "First Class Citizens" meaning they can be passed into other functions, variables... treated as
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body within the function block
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total; // Need to return (keyword) to store the result of calculation in order to access it
}

// Function Call. Or **Run** of the function
// calculateBill();
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate); //Passing variables to arguments //Capturing the returned value of the function?

// Looks first to local scope for defined variable. If not then to higher or agument passed
// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

// can also pass expressions and functions as arguments

// can also pass functions as arguments
function doctorize(name) {
  return `Dr. ${name}`;
}

// Set a default value in function definition (to avoid breaking code). Can be an empty string
function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// Pass undefined to a function so that it uses the default value
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);

// Can pass mutiple things to the parameters of a function. Default value (use undefined when calling a function to access it), Variables scoped locally or globally (including empty string) arguments, returns from functions, functions, expressions
