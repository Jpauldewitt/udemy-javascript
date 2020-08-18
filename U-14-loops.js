/* // for loop - when you know the amount of times its needs to run

for (let i = 0; i < 10; i++){
    console.log(i);
}
// prints 1 -10

for (let i = 0; i < 10; i++){
    console.log('Number ' + i);
}
// prints Number 1 - Number 10



for (let i = 0; i < 10; i++){
    if (i=== 2){
    console.log ('2 is My favorite number');
}
console.log('Number ' + i);
}
// still logs 2 after 2



for (let i = 0; i < 10; i++){
    if (i=== 2){
    console.log ('2 is My favorite number');
    continue 
}
console.log('Number ' + i);
}
// no longer logs 2 after 2



for (let i = 0; i < 10; i++){
    if (i=== 2){
    console.log ('2 is My favorite number');
    continue 
    }
    if (i=== 5){
        break;
    }
console.log('Number ' + i);
}
// stops after 4
 */



//while loop - when you don't know how many times it will need to run

/* let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
} */

//do while  - - do always runs first, and runs at least once
/* let i = 0;

do{
    console.log('Number ' + i);
    i++;
}
while(i < 10); */

/* const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(i);
}
// gets number value */



// loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
/* for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// gets string values within array */


/* 
//for each loop
cars.forEach(function(car){
    console.log(car);
}); */

// Map - - used to return a different array
/* const users = [
    {id: 1, name: 'Jesse'},
    {id: 2, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);
// returns array of id numbers */

cars.forEach(function(car, index){
    console.log(`${index}:${car}`);
})
//returns each index and car



// for in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user){
    console.log(x);
}
//returns all variables within user


for (let x in user){
    console.log(`${x} : ${user[x]}`);
}
//returns variables name, and variable
