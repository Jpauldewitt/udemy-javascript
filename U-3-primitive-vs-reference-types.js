//primitive data types 
//- String, Number, Boolean, Null, Undefined, Symbols (ES6)
//- stored directly in the location the variable accesses
//- stored on the stack

//String
const name = 'John Doe';
console.log(typeof name);
const numberString = '45';
console.log(typeof numberString);


//Number
const age = 45;
console.log(typeof age);

//Boolean
const hasKids = false;
console.log(typeof hasKids);

//Null - returns as Object
const car = null;
console.log(typeof car);

//Undefined
let noValueAssigned;
console.log(typeof noValueAssigned);

//Symbol
const sym = Symbol();
console.log(typeof sym);

// reference data types
//- Arrays, Object Literals, Functions, Dates, Anything else you can store
//- accessed by reference
//- objects that are stored on the heap
//- a pointer to a location in memory

//Array
const hobbies = ['movies', 'music'];
console.log(hobbies);

//Object Literal
const address ={
    city: 'Columbus',
    state: 'Ohio'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);