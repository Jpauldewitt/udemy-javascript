/* //window methods / objects / properties

// log - part of the window
console.log(123);



// alert - also part of the window
window.alert('hello world');



// prompt - input
const input = prompt();
alert(input); */



 //confirm
/*if(confirm('Are you sure')){
    console.log('Yes');
}
else {
    console.log('No');
} */

let value;

value = window.outerHeight;     // outer height
value = window.outerWidth;      // outer width
value = window.innerHeight      // inner height
value = window.innerWidth       // inner width
value = window.scrollY          // position of scroll for vertical Y axis
value = window.scrollX          // position of scroll for horizontal X axis

//location object
value = window.location;            // href, host, protocol .. etc
value = window.location.hostname;   // shows address 127.0.0.1
value = window.location.port;       // shows port 5500
value = window.location.search;     // shows - -  id=

/* // redirect location object
window.location.href = 'http://google.com';

// reload page
window.location.reload();           // reloads page   */ 



/* // history object
window.history.go(-2); */

// Navigator Object - - browser
value = window.navigator;           // user info
value = window.navigator.appName;   // appName
value = window.navigator.userAgent; // operating system
value = window.navigator.platform;  // operating system platform
value = window.navigator.vendor;    //
value = window.navigator.language;  // shows languages

console.log(value);