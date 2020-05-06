// select the cog in the console if the console log disappears
const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault(); // prevents default action
  }
});
// user receives a popup asking if they want to proceed. If they select no then the default action is prevented and they stay on the page

const signupForm = document.querySelector('[name="signup"]'); // [] to select based on its name - attribute selector

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault(); // prevents default action
  }
});
// console.dir(event.currentTarget) to get properties for inputs
// because elements have a name
// console.log(event.currentTarget.name.value);
// event.currentTarget.querySelector('[name="email"]')

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
// creates a function to console.log - cool :)

// accessibility
// buttons are for actions inside an application
// links are to change the page
// things that are not keyboard accessible should not have clicks on them (can't tab through)
// solution is to give the photo... a role="button", tabindex="0", or wrap with a button tag - then can tab through
// change event listener to add a 'keyup'
const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
