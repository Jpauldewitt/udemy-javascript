const firstName = 'Jesse';
const lastName = 'DeWitt';
const age = 30;
let value;
const str = 'Hello there my name is Jesse';
const tags = 'meow, cool, awesome';
console.log(value);

value = firstName + lastName;                   //Output: JesseDeWitt

// Concatenation
value = firstName + ' ' + lastName              //Output: Jesse DeWitt

// Append
value = 'Seggie ';
value += 'McTestie';                            //Output: Seggie McTestie

value = 'Hi ' + firstName + ' Age:' + age;      //Output: Hi Jesse Age: 30


// Escaping
value = "That's awesome, I can't wait";         //Output: That's awesome, I can't wait
value = 'That\'s awesome, I can\'t wait';       //Output: That's awesome, I can't wait

// Length of String
value = firstName.length;                       //Output: 5

// Concatenate
value = firstName.concat(' ', lastName);        //Output: Jesse DeWitt

// Change case
value = firstName.toUpperCase();                //Output: JESSE
value = firstName.toLocaleLowerCase             //Output: jesse

value = firstName[2];                           //Output: s
value = firstName.indexOf('J');                 //Output: 0
value = firstName.lastIndexOf('s');             //Output: 3  - - last S in Jesse
value = firstName.indexOf('z');                 //Output: -1 - - does not exist
value = firstName.charAt('2');                  //Output: s

// last character of String
value = firstName.charAt(firstName.length-1);   //Output: e - - last character

// substring()
value = firstName.substring(0, 4);              //Output: Jess - - characters 0-3

// slice()
value = firstName.slice(0,4);                   //Output: Jess - - characters 0-3
value = firstName.slice(-3);                    //Output: sse - - last 3 characters

// split
value = str.split(' ');                         //Output: Array of each word by space
value = tags.split(',');                        //Output: Arrays of each word by comma

// replace()
value = str.replace('Jesse', 'Seggie');         //Output: Hello my name is Seggie -- replaces Jesse with Seggie

// includes()
value = str.includes('Hello');                  //Output: true - - str contains the word Hello

console.log(value);      
