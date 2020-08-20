// replace element

// create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);




// Remove Element

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove List item
listItems[0].remove();

// Remove child element
list.removeChild(listItems[2]);



// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;
// Classes
value = link.className;     // link class name
value = link.classList;     // setup like an array for class list
value = link.classList[0];  // specific class list

link.classList.add('test');
link.classList.remove('test');

// Attributes
value = link.getAttribute('href');
value = link.setAttribute('href', 'http://google.com');     //able to modify attribute
value = link.setAttribute('title', 'Google');     // true or false
value = link.hasAttribute('title');
value = link;
link.removeAttribute('title');
console.log(value);