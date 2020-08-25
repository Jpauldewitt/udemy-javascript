//Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down -- click and hold
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up -- click and hold
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter - - when mouse enters field
clearBtn.addEventListener('mouseenter', runEvent);

// Mouse Leave -- when mouse leaves field
clearBtn.addEventListener('mouseleave', runEvent);

// Mouse Over - - when you go into an element inside of an element
clearBtn.addEventListener('mouseover', runEvent);

// Mouse Out - - similar to mouse over
clearBtn.addEventListener('mouseout', runEvent);

// Mouse Move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent =`MouseX: ${e.offsetX} MouseY${e.offsetY}`; // displays Coordinates of x and y axis within variable const heading - h5 element
    document.body.style.backgroundColor =`rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
