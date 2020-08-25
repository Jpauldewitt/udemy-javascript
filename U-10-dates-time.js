//dates and times

let value;

const today = new Date();
let birthday = new Date('8-1-1990');


value = today;                              // prints todays date
value = today.toString();                   // converts date to string
value = birthday;                           // prints date set by variable

birthday = new Date ('August 1 1990');      // 2nd method that prints date set by variable

value = today.getMonth();                   // 0 January, 1 February, 2 March, 3 April, 4 May .. etc
value = today.getDate();                    // gets date of today
value = today.getDay();                     // 0 Sunday, 1 Monday, 2 Tuesday ..etc
value = today.getHours();                   // gets hour
value = today.getMinutes();                 // gets minutes
value = today.getSeconds();                 // gets seconds
value = today.getMilliseconds               // gets milliseconds
value = today.getTime();                    // gets time stamp - seconds past since date

birthday.setMonth(2);                       // March
birthday.setDate(12);                       // March 12
birthday.setFullYear(1985);                 // March 12 1985
birthday.getHours(3);                       // March 12 1985 3am
birthday.setMinutes(30);                    // March 12 1985 3:30am
birthday.setSeconds(25);                    // March 12 1985 3:30:30am
console.log(birthday);