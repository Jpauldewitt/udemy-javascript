// DOM Selectors  - DocumentObjectMethods

// single element selectors 
// - can only be used for one thing

//document.getElementById() - by id
console.log(document.getElementById('task-title'));    
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Able to Change styling, but should use CSS for this not JS
document.getElementById('task-title').style.background ='red';
document.getElementById('task-title').style.color = 'blue';
document.getElementById('task-title').style.padding ='5px';
// document.getElementById('task-title').style.display = 'none';

// Change Content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span>Task List</span>'

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  should be used in variables ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ examples v
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = 'green';

console.log(document.querySelector('task-title'));

//document.querySelector - more powerful
console.log(document.querySelector('#task-title'));             // able to get items by id
console.log(document.querySelector('.task-title'));             // able to get items by class
console.log(document.querySelector('h5'));                      // the first element found if multiple

document.querySelector('li').style.color = 'red';                   // example: only the first element found will be effected
document.querySelector('ul li').style.color = 'red';                // able to specify ul li
document.querySelector('li:last-child').style.color = 'yellow';     // able to specify the last child
document.querySelector('li:nth-child(3)').style.color = 'orange';   //able to specify specific child
