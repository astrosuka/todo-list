import List from './list.js'
import renderTasks from './renderTasks.js';
import { renderMenu } from './renderMenu.js';

export const allLists = [];
const defaultList = new List('My Tasks');
allLists.push(defaultList);
let currentList;
currentList = defaultList;

function setCurrentList(selectedList) {
    currentList = selectedList;
} 

function createList() {
    allLists.push(new List(prompt('Name your new list', 'New List' )));
    currentList = allLists[allLists.length - 1];
    renderTasks(currentList);
    renderMenu();
}

export function removeList(index) {
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

export { currentList, createList, setCurrentList };