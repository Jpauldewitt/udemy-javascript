// traverse the DOM - move up and down

let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = list;                           // ul
value = listItem;                       // li.collection-item:first-child
value = list.childNodes;                // node list of child nodes
value = list.childNodes[0];             // text node
value = list.childNodes[0].nodeName;    // #text
value = list.childNodes[0].nodeType;    // 3
// node types

// 1  - Element
// 2  - Attribute
// 3  - Text Node
// 8  - Comment
// 9  - Document Itself
// 10 - Doctype



// get children element nodes

value = list.children[0];                   // html collection of 1st element within list
list.children[1].textContent = 'hello';     // text of 2nd element changed to hello

// children of children
value = list.children[3].children;          // delete within list item


// first child
value = list.firstChild;                    // first text node
value = list.firstElementChild;             // first element

// last child
value = list.lastChild;                     // last text node
value = list.lastElementChild               // last element

// Count child Elements
value = list.childElementCount;             // gives numbers of list items

// Get parent node
value = listItem.parentNode;                        //gives parent -- ul
value = listItem.parentElement;                     // gives same parenet - ul
value = listItem.parentElement.parentElement;       // gives us the parent of parent

// Get next sibling - - - - traverse through the DOM
value = listItem.nextSibling;               // gives text node
value = listItem.nextElementSibling;        // gives us next list item
value = listItem.nextElementSibling.nextElementSibling;     //gives us the 2nd list tem
value = listItem.previousSibling;           // gives text node
value = listItem.previousElementSibling;    // null - no previous 



console.log(value);