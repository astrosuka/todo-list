import { renderButton } from './newListButton.js';
import List from './list.js'
import renderTasks from './render-tasks.js';
import './style.css';


const allLists = [];
const defaultList = new List('My Tasks');
allLists.push(defaultList);
let currentList;
currentList = defaultList;

export function createList() {
    allLists.push(new List(prompt('Name your new list', 'New List' )));
    currentList = allLists[allLists.length - 1];
    renderTasks(currentList);
    renderMenu();
}

function removeList(index) {
    allLists.splice(index, 1);
    
    if (allLists.length === 0){
        currentList = [];
        const wrapper = document.querySelector('#wrapper');
        wrapper.textContent = '';
    } else if (index === 0) {
        currentList = (allLists[0]);
        renderTasks(allLists[0]);
    } else {
        currentList = (allLists[index - 1]);
        renderTasks(allLists[index -1]);
    }
}

function renderMenu() {
    const listMenu = document.querySelector('#list-menu');
    listMenu.textContent = '';

    for (let i of allLists) {
        const listName = document.createElement('li');
        listName.textContent = i.title;
        listMenu.append(listName);
        listName.addEventListener('click', () => {
            currentList = i;
            renderTasks(currentList);
        })
        const removeListButton = document.createElement('button');
        removeListButton.textContent = 'x'
        listMenu.append(removeListButton);
        removeListButton.addEventListener('click', () => {
            removeList(allLists.indexOf(i));
            renderMenu();
        })
    }
}

renderMenu();
renderButton();
renderTasks(currentList);

export { currentList };