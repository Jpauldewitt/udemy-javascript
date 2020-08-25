//Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);


taskInput.value = ' ';                                  // clears out input

// Key Down - registers event when key is pressed down
taskInput.addEventListener('keydown', runEvent);

// Key Up - when you release a key
taskInput.addEventListener('keyup', runEvent);

// Key Press
taskInput.addEventListener('keypress', runEvent);

// Focus - click inside
taskInput.addEventListener('focus', runEvent);

// Blur - click outside
taskInput.addEventListener('blur', runEvent);

// Cut - when you use the cut function
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input - any type of input
taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);            // each key value pressed
    heading.innerText = e.target.value;
    //e.preventDefault();                  // prevents default behavior from redirecting
}
