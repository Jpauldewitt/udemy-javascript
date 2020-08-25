/* document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('hello world');
    //e.preventDefault(); - - prevents refresh, or directing to href
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    console.log('clicked');
}
 */

 document.querySelector('.clear-tasks').addEventListener('click', onClick);

 // e = event
 function onClick(e){
    let value;
    value = e;                  //displays a lot of information about the event - and target element
    
    // event target element
    value = e.target;
    value = e.target.id;
    value = e.target.className;
    value = e.target.classList;
    e.target.innerText = 'Hello';       // changes text of button to hello

    //event type
    value = e.type;           //shoes type - mouse over/click
    value = e.timeStamp;

    // Coordinates event relative to window
    value = e.clientY;      // y position
    value = e.clientX;      // x position

    // Coordinates event relative to the element
    value = e.offsetY;
    value = e.offsetX;
     console.log(value);
 }