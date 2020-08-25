// Built in constructors

// String

const name1 = 'Jesse';
const name2 = new String('Jesse');
name2.foo = 'bar'
console.log(typeof name1); // String
console.log(typeof name2); // Object

console.log(name1);
console.log(name2);

// Numbers
const num1 = 5;            // String
const num2 = new Number(5); // Object

// Boolean
const bool1 = true;
const bool2 = new Boolean (true);

// Function
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1+1');
console.log(getSum1(1, 1));
console.log(getSum2(1, 1));

// Object
const john = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array (1, 2, 3, 4);
console.log(arr2);
console.log(arr1);

// Regular Expressions
const re1 = /\w+/; // word character that occurs one or more times
const re2 = new RegExp('\\w+');
console.log(re1);
console.log(re2);