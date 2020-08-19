// Creating Elements
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item Title');

// Create text node and append - - put something inside of something
li.appendChild(document.createTextNode('Hello World'));


// create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class= "fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);