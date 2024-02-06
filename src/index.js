import Task from './task.js'
import List from './list.js'
import renderList from './render-list.js';
import './style.css';

const allLists = [];
const defaultList = new List('My Tasks');
allLists.push(defaultList);
let currentList;
currentList = defaultList;

function createList(name) {
    allLists.push(new List(name));
}

const navMenu = document.querySelector('#nav-menu');
let createListButton = document.createElement('button');
createListButton.textContent = 'add new list'
navMenu.appendChild(createListButton);
createListButton.addEventListener('click', () => {
    createList(prompt('Name your new list', 'New List' ))
    displayAllLists();
});

displayAllLists();

// render list menu
function displayAllLists() {
    const listMenu = document.querySelector('#list-menu');
    listMenu.textContent = '';
    for (let i of allLists) {
        const listName = document.createElement('li');
        listName.textContent = i.title;
        listMenu.append(listName);
        listName.addEventListener('click', () => {
            currentList = i;
            renderList(currentList);
            
        })
        const removeListButton = document.createElement('button');
        removeListButton.textContent = 'x'
        listMenu.append(removeListButton);
        removeListButton.addEventListener('click', () => {
            removeList(allLists.indexOf(i));
            displayAllLists();
        })
    }

    function removeList(index) {
        // console.log(allLists)
        allLists.splice(index, 1);
        if ((index - 1) >= 0){
            renderList(allLists[index -1]);

        } else {
            const wrapper = document.querySelector('#wrapper');
            wrapper.textContent = '';
        }
    }
}


// document.body.addEventListener('click', () => {
//     console.log(allLists);
// })

renderList(currentList);

export { currentList };