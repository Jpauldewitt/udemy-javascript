//variable basics

//var, let, const

var name = 'John Doe';
console.log(name);

//reassign variable
name = 'Steve Smith';
console.log(name);

// Init var - used for if statements
var greeting;
greeting = 'Hello';
console.log(greeting);

// variable characters =  letters, numbers, _ , $ , and cannot start with a number

// Multi word variables
var firstName = 'John'; //camelCase
var first_name = 'Sara'; // Underscore - php
var FirstName = 'Tom'; // Pascal case - object oriented - classes

// Let
let name2 = 'John Doe';
console.log(name2);
name2 = 'Steve Smith';
console.log(name2);

//Const - cannot be changed or reassigned
/*unable to Init variable, and have to assign value*/
const name3 = 'John';
console.log(name3);
//name3 = 'Sara' /*will not change*/

const person = {
    name: 'John',
    age: 30
}

console.log(person);

// can add to const variables, but cannot change them
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);