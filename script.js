//your JS code here. If required.
// Select the element with id 'level'
const element = document.getElementById('level');

// Initialize level count
let level = 0;

// Traverse up the DOM tree until there are no parent nodes
let currentElement = element;
while (currentElement) {
  level++;
  currentElement = currentElement.parentElement;
}

// Display the level using alert
alert(`The level of the element is: ${level}`);
