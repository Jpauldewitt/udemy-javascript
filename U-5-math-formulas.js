const num1 = 100;
const num2 = 50;
let value;

//Simple math with numbers
value = num1 + num2;                    // addition
value = num1 * num2;                    // multiplication
value = num1 - num2;                    // subtraction
value = num1 / num2;                    // division
value = num1 % num2;                    // remainder

// Math Object
value = Math.PI;                                // pi
value = Math.E;                                 // Euler's number
value = Math.round(2.8);                        // rounds to closest number
value = Math.ceil(2.4);                         // rounds up
value = Math.floor(2.8);                        // rounds down
value = Math.sqrt(64);                          // square root
value = Math.abs(-3);                           // absolute/positive version
value = Math.pow(8, 2);                         // power of a number
value = Math.min(4, 10, -3);                    // returns minimum number
value = Math.max(4, 10, -3);                    // returns maximum number
value = Math.random();                          // random number
value = Math.random() * 20;                     // random number between 0-19 with decimals
value = Math.random() * 20 + 1                  // random number between 1-20 with decimals
value = Math.floor(Math.random() * 20 + 1);     // random number between 1-20 without decimals


console.log(value);

