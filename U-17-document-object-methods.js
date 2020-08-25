let value;

value = document;                   // displays entire html document
value = document.all;               // displays array format of collect of html
value = document.all[0];            // displays first value in html array collection
value = document.all.length;        // displays the number of elements in html
value = document.head;              // displays the head of html
value = document.body;              // displays the body of html
value = document.doctype;           // displays doctype;
value = document.URL;               // displays URL
value = document.characterSet;      // displays characterset = UTF -8
value = document.contentType;       // displays content type = text/html

value = document.forms;             // displays html collection of forms
value = document.forms[0];          // displays the first form
// value = document.forms[0].id;       // displays the first forms id
// value = document.forms[0].method;   // displays the first form method
// value = document.forms[0].action;   // displays the first form action

// value = document.links;
// value = document.links [0];
// value = document.links[0].id;
// value = document.links[0].className;
// value = document.links[0].classList[0];

value = document.images;
value = document.scripts;
// value = document.scripts[1].getAttribute('src');


//create an array for scripts
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
    console.log(script);
});

console.log(value);