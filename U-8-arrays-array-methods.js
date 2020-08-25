// Arrays
const numbers1 = [42, 16, 20,19, 100];              //number array method 1
const numbers2 = new Array (40, 19, 100);           //number array method 2
const fruits = ['Apple', 'Banana', 'Orange'];       //String array

const mixed = [                                     //mixed array
    22, 
    'Hello',
     true,
      undefined,
       null,
        {a:1, b:1},
         new Date()
        ];

let value;
value = numbers1.length;                            // array length
value = Array.isArray(numbers1);                    // check if an array is an array = true
value = Array.isArray('words');                     // check if an array is an array = false
value = numbers1[3];                                // get single value - equals 4th value = 19

numbers1[3] = 100;                                  // insert into array - replaces [3] 4th value 19 with  100
value = numbers1[3];                                // equals [3] 4th value = 100

value = numbers1.indexOf(100);                      // equals [3] 4th value


// Mutating Arrays
numbers1.push(250);                                 // adds 250 to end of Array
numbers1.unshift(120);                              // adds 120 to beginning of Array
numbers1.pop();                                     // removes the last number of an Array
numbers1.shift();                                   // removes the first number of an Array
numbers1.splice(1,3);                               // removes number positions 1-3
numbers1.reverse();                                 // reverses order


// Concatenate Arrays
value = numbers1.concat(numbers2);                  // adds 2nd array list to 1st array list
value = fruits.sort();                              // alphabetizes list
value = numbers1.sort();                            // does not work
                                              

value = numbers1.sort(function(x,y){                // reverse function required in order to sort numbers
    return y-x;
});

value = numbers1.sort(function(x,y){                // function required in order to sort numbers
    return x-y;
});   

// Find
function under50(num){
    return num < 50;
}

function over50(num){
    return num > 50;
}

value = numbers1.find(over50);

console.log(numbers1);
console.log(value);