// To work with canvas, must grab the canvas and then the context (2d or 3d) (Canvas is element, the place where we draw is the context)
// Then a set of methods used to draw on the canvas

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 15; // set a variable that can be used throughout the code & changed easily // all caps as a "true constant"

// Setup our canvas for drawing
// Set a couple of defaults.
// set a variable from a property on an object to be able to be used later. this is destructoring which is nice if you have several properties for the same object
const { width, height } = canvas;

// Create random x and y starting points on canvas
// Having this as a variable allow you to make the starting point random rather than fixed
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Define the line
// These default will make the line smooth (default is square, not round)
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT; // doesn't need to be px

// Color
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// REFACTOR:
// ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

// Start and stop the line and fill in those two points with a stroke
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // Where to start
ctx.lineTo(x, y); // First stop point (?)
ctx.stroke(); // will draw the line between moveTo and lineTo

// Write a draw function
// Will pass an options object containing everything you want to pass
// function draw(options){}
// REFACTOR: Destructuring options into options properties (like width & height above)
function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  // how much we want the line to move
  //  x -= MOVE_AMOUNT; this would be a line that goes up and to the right
  //  y -= MOVE_AMOUNT;
  // REFACTOR: switch statement - good for readability
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break; // after will stop the switch from running
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      // always need a default
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); // prevent the arrow keys from moving the screen // can't just have e.preventDefault(); because it keeps you from using any keys
    draw({ key: e.key });
    // console.log(e.key);
    // console.log('HANDLING KEY');
  }
}

// Clear shake function
function clearCanvas() {
  canvas.classList.add('shake'); // Add in a class of shake
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
