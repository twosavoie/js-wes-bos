// to listen, must get the element first
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

//
function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

// then add an event listener - usually with two arguments, what is the event & callback function
// callback function is a regular function - the browser will call (or run) the function when the button is clicked (anonymous function)
// can also pass in a function defined elsewhere for instance a handleClick or hooray
// Go get something, listen for something, do something
// Don't need the parentheses after the call back functions that are previously defined because the browser is calling them, not us
butts.addEventListener('click', function() {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);
// benefit to having the function outside of the event listener: can use the same callback function for other event listener functions including removeEventListner. It's DRY and it's necessary to use a named function or an arrow function (using the variable)
// handleClick is BOUND to butts. removing it UNBINDS

// Listen on multiple items: querySelectorAll
const buyButtons = document.querySelectorAll('button.buy');

// Can call parameter anything because the browser is calling it
// event must be the first parameter
function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target; // shows which button the user has clicked on and anything associated with can be specified
  // console.lot(event.target.dataset)
  // console.lot(event.target.dataset.price)
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price)); // change the string price to number
  console.log(event.target); // what got clicked
  console.log(event.currentTarget); // what fired the event listener
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation(); // stop bubbling up from where the use clicked through the DOM tree
}

// Will run a function for each of our nodes (passed as a parameter)
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
// the same but wouldn't be able to unbind because, since it is an arrow function, it is an anonymous function
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('You Clicked It!');
  });
});

// window is the entire browser window
// Propogation is that a user is clicking on multiple elements/nodes at once
window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true } // third argument halting capture/bubbling (learn more)
);

const photoEl = document.querySelector('.photo');

// mouseenter is a specific thing also mousemove...
photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this); // this is a keyword; this is what is left of the dot. This keyword, using an arrow function, this isn't scoped any longer (say nested functions) so don't maybe use this in this situation
});
// the whole point is that multiple things can be listening for clicks and you want to make sure you're only triggering listening for what you want to.
