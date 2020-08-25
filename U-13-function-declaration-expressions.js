// function declarations

function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}

// undefined - - 
console.log(greet('Jesse', 'DeWitt'));

// function expression - - anonymous function
const square = function(x){
    return x*x;
};
console.log (square(8));

// immediately invocable function expressions
// without variable
(function(){
    console.log ('words words words');
})();

//with variable
(function(name){
    console.log('Hello.. ' + name);
})('Jesse');



//property methods
const toDo = {
    add: function(){
        console.log('Add toDo..');
    }
}
toDo.add();

const toDo2 = {
    add: function(){
        console.log('Add toDo2..');
    },
    edit: function(id){
        console.log(`Edit toDo2.. ${id}`);
    }
}

toDo.delete = function(){
    console.log('Delete toDo');
}

toDo2.add();
toDo2.edit(2);
toDo.delete();