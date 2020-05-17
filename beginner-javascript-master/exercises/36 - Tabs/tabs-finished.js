// Grab elements to be acted on by JS
// Selecting tab & tabpanel means you can have multiple tabs on a site and reuse this code
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

// Callback functions
function handleTabClick(event) {
  // write pseudocode to lay out code to write
  // hide all tab panels; easier to hide them all
  // tabPanels.forEach(function(panel) {panel.hidden = true;}); becomes an arrow function
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;  doesn't work - doesn't work for custom or aria attributes
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  // deconstructoring pulles event.currentTarget.id to {id}
  const { id } = event.currentTarget;

  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find in the array of tabPanels
  console.log(tabPanels); // shows that it is a nodelist not an array so change variable above (find only works on arrays)
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
