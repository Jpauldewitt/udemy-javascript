// document.getElementByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

let list = document.getElementsByTagName('li');
console.log(list);
console.log(list[0]);
list[0].style.color ='orange';
list[3].textContent = 'Hello';

// convert html collection into array
list = Array.from(list);

list.reverse();


list.forEach(function(li, index){
    console.log(li.className)
    li.textContent = `${index}: hello`; // changes all li's
});
console.log(list);

//document.querySelectorAll
const items2 = document.querySelectorAll('ul.collection li.collection-item'); // any kind of css selector
items2.forEach(function(item, index){
    item.textContent = `${index}: hello`;
});
console.log(items2);



const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// for each function odd
liOdd.forEach(function(li, index){
    li.style.background = 'gray';
});

// for loop evens
for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'yellow';
}