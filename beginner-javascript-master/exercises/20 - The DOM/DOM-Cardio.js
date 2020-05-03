// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list - Wes's solution code is different
const list = document.createElement('ul');
div.appendChild(list);
// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
div.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'two';
div.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = 'three';
// put that list into the above wrapper
div.appendChild(li3);

// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = 'https://picsum.photos/500';
// set the width to 250
myImage.src = 'https://picsum.photos/250';
// myImage.width = 250; Wes's code better because the image is better (?)
// myImage.height = 250; Reserve the space for the image to prevent jank
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'random photos';
// Append that image to the wrapper
div.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it - because Wes's solution for ul is different, this is different
const myHTML = `
  <div class="myDiv">
    <p>?</p>
    <p>x</p>
  </div>
`;
myHTML.innerHTML = myHTML;
// myDiv.innerHTML = myHTML; this doesn't work - replace ul & img with this div
// const myFragment = document.createRange().createContextualFragment(myHTML); - couldn't get this to work???

// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
      <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!
          <button class="delete" type="button">&times; Delete</button>
      </p>
  
      </div>
    `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
