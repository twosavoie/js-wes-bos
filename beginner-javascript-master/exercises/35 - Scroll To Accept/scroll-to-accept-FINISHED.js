// ?Why not choose the button?
// look at other observers like resize...
// Select the elements and assign variables.
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// Any callback functions (a function that gets called at a certain point)
function obCallback(payload) {
  // console.log(payload[0].isIntersecting);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false; // button shows
    // if you want the button to be disabled again
    //  } else {button.disable = true;}
    // stop observing the button
    ob.unobserve(terms.lastElementChild); // an hr in this case
  }
}
// watches to see if an element is on or off the page // can watch for multiple items
const ob = new IntersectionObserver(obCallback, {
  root: terms, // default is the body
  threshold: 1, // how much must be on the page
});

// Call the function
ob.observe(terms.lastElementChild);

// Run only on specific page... At the top of the page
// function scrollToAccept( {
//  const terms = document.querySelector('.terms-and-conditions');
//  if(!terms) {
//    return; // quit this there isn't that item on the page
//  }
// })

// Another option: not used as much any longer; trigger function when you've reached an element height
// terms.addEventListener('scroll', function(e) {
//  console.log(e.currentTarget.scrollTop);
//  console.log(e.currentTarget.scrollHeight);
// });
