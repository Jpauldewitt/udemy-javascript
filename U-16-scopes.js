
// let and const - block level scope
//var  - function scope

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Initial Global Scope: ', a, b, c);

// Function Scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c) // variables within function - different than previously defined variables
}

test();

// Block Scope
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ; ', a, b, c);
}
console.log('Global Scope after If Scope: ', a, b, c); // Output: 4 2 3 - - -var and let changes - const remains same



for (var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}
console.log('Global scope after loop: ', a, b, c);
