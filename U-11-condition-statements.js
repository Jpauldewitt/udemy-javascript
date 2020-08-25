//Conditionals
/*if (something){
    do something
} 
else {
    do something else
}*/

const id = 100;

// Equal To ===
if(id == 100){
    console.log('correct');
}
else {
    console.log('incorrect');
}

// Not equal to !==
if(id!==101){
    console.log('correct');
}
else {
    console.log('incorrect');
}


//- - - - - shows incorrect if value is String
//- - - - - shows correct if value is an integer
if(id ===100){
    console.log('correct');
}
else {
    console.log('incorrect');
}


//- - - - - shows correct if value is String
//- - - - - shows incorrect if value is an integer
if(id !==100){
    console.log('correct');
}
else {
    console.log('incorrect');
}


// test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}
else{
    console.log('No Id');
}

// greater than or less than
if(id > 200){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

// greater than or equal to
if(id >= 100){
    console.log('Correct');
}
else{
    console.log('Incorrect');
}

// if else
const color = 'green';
if(color === 'red'){
    console.log('The color is red');
}
else if(color === 'blue'){
    console.log('The color is blue');
}
else {
    console.log('The color is not red or blue');
}

//logical operators 
const name = 'Jesse';
const age = '4';
// And &&
if(age > 0 && age <12){
    console.log(`${name} is a child`);
}
else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}
else {
    console.log(`${name} is an adult`);
}

// Or ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`);
console.log(`${name} is a teenager`);
}
else {
    console.log(`${name} is able to race`);
}

// Ternary Operator
console.log(id === 100 ? 'correct' : 'incorrect');      //if number = correct, if String = incorrect
// if id is equal to 100 ^ true, or false

// Without braces
if(id === 100)
console.log('correct');
else
console.log('incorrect');