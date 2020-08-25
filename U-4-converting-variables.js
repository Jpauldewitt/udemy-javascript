let value;

//Number
value1 = 5;
console.log(value1);
console.log(typeof value1);
console.log(value1.length); //only works on strings


//convert number to a string
value2 = String(5);
console.log(value2);
console.log(typeof value2);
console.log(value2.length);         //only works on strings

//Number to String - by formula
value3 = String(4 + 4);
console.log(value3);
console.log(typeof value3);
console.log(value3.length); //only works on strings


//Boolean to string
value4 = String(true)
console.log(value4);
console.log(typeof value4);
console.log(value4.length); //only works on strings

//Date to string
value5 = String(new Date());
console.log(value5);
console.log(typeof value5);
console.log(value5.length); //only works on strings

//Array to string
value6 = String([1, 2, 3, 4]);
console.log(value6);
console.log(typeof value6);
console.log(value6.length); //only works on strings

//2nd Method to convert to String
// toString()
value7 = (5).toString();
console.log(value7);
console.log(typeof value7);

value8 = (true).toString();
console.log(value8);
console.log(typeof value8);

//1st Method to convert Strings to numbers
value9 = Number('5');
console.log(typeof value9);
console.log(value9.toFixed());

//Boolean to number
value10 = Number(true);
console.log(typeof value10);
console.log(value10.toFixed()); // equals 1

value11 = Number(false);
console.log(typeof value11);
console.log(value11.toFixed()); // equals 0

value12 = Number(null);
console.log(typeof value12);
console.log(value12.toFixed()); // equals 0

//NaN - not a number
value13 = Number('word');
console.log(typeof value13);
console.log(value13.toFixed()); // equals NaN

value14 = Number([1, 2, 3]);
console.log(typeof value14);
console.log(value14.toFixed()); // equals NaN

//2nd Method to convert to numbers- parseInt - only returns integers
value15 = parseInt('100.30');
console.log(typeof value15);
console.log(value15.toFixed());

//parseFloat - returns integer and number of decimals defined
value16 = parseFloat('100.30');
console.log(typeof value16);
console.log(value16.toFixed(2)); // 2 defines the number of decimals

const value17 = 5;
const value18 = 6;
const sum = value17 + value18;
console.log(sum);
console.log(typeof sum);

const value19 = String(5);
const value20 = 6; //converts to string - and gives incorrect number
const sum1 = value19 + value20;
console.log(sum1);
console.log(typeof sum1);
