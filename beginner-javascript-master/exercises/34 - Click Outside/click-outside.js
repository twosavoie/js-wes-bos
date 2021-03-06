// start by gathering your effected elements
const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate the model with the new info
  // the width & height makes transition smoother by reserving space for the image
  // could also document.createElement to create an image then listen for the load event and then show modal - but janky
  modalInner.innerHTML = ` <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}"/>
  <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// loop over the buttons
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

// close the modal
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
