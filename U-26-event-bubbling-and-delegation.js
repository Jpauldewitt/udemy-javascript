// Event Bubbling -- going up

/* document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
})

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
})

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
})

document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
}) */

//Event Delegation -- drilling down from parent
/* const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem); */


document.body.addEventListener('click', deleteItem);
function deleteItem(e){
  
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    // better way to target link
    if (e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
}