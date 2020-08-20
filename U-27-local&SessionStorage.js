// // set local storage item
// localStorage.setItem('name', 'Jesse');
// localStorage.setItem('age', '30');

// // // set session storage item
// // sessionStorage.setItem('name', 'Meow');

// // // remove from storage
// // localStorage.removeItem('name'); 

// // get from local storage item
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// localStorage.clear; // turns values to null


/* // only stores one at a time
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    //console.log(task);
    localStorage.setItem('task', task);
    alert('Task saved');
    e.preventDefault();
}); */



document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    let tasks;
    //console.log(task);
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});
