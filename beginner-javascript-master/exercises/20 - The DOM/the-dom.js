// An event listener that allow you to put your script tag in the <head> because you're saying to wait until the DOM is loaded before you initialize the console.log function.
// function init() {
//    const p = document.querySelector('p');
//    console.log(p);
// }
// document.addEventListener('DOMContentLoaded', init);

// Before you can work with items on a page, you need to go get them ie "select them". Then can listen for clicks, add content, remove content...

const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('p'); // search inside item to find the item you want
console.log(item2);
// can console.log any of them

// used to be harder to get the element (getElementById, getElementsByClassName, getsElementByName...)

const heading = document.querySelector('h2');
console.log(heading);
console.dir(heading);
// Gives properties
// Allows you to get getter and setters
console.dir(heading.textContent);
heading.textContent = 'Wes is cool';

console.log(heading.innerText);
console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// not:
pizzaList.textContent = `${pizzaList.textContent} pizza`;
// much better:
pizzaList.insertAdjacentText('beforeend', 'pizza');

// Use mdn docs "Element" to discover more

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// Adds an alt tag... to an element altered with getter and setters
pic.alt = 'Cute Pup'; // setter
pic.width = 200;
console.log(pic.alt); // getter
console.log(pic.naturalwidth); // getter
window.addEventListener('load', function() {
  console.log(pic.naturalWidth); // getter
});
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth); // getter
});
// html loads, script (JS) loads, downloads images - which makes Event Listener load work

// setter getter
pic.setAttribute('alt', 'Really Cute Pup'); // will work also for non-standard (don't)
console.log(pic.getAttribute('alt'));

// data attributes - attach a piece of metadata - data-then whatever you want
// data-name="wes"

const custom = document.querySelector('.custom');
console.log(custom.dataset); // gives an object with all the data properties set for element

// Click on element with class="custom" will result in a message box popping up "Welcome first last"
// Can use to add data, messages, change the element...
custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
