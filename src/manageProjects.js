import List from './list.js'
import renderTasks from './renderTasks.js';
import { populateStorage } from './storageAvailable.js';

const allLists = [];

function createDefault() {
    const defaultList = new List('My Tasks');
    allLists.push(defaultList);
    setCurrentList(defaultList);
}

let currentList;

function setCurrentList(selectedList) {
    currentList = selectedList;
} 

function createList(name) {
    allLists.push(new List(name));
    populateStorage();
    currentList = allLists[allLists.length - 1];
    renderTasks(currentList);
}

function removeList(index) {
    allLists.splice(index, 1);
    populateStorage();

    if (allLists.length === 0){
        setCurrentList([]);
        const wrapper = document.querySelector('#wrapper');
        wrapper.textContent = '';
    } else if (index === 0) {
        setCurrentList(allLists[0]);
        renderTasks(allLists[0]);
    } else {
        setCurrentList(allLists[index - 1]);
        renderTasks(allLists[index -1]);
    }
}

export { currentList, createList, setCurrentList, removeList, allLists, createDefault };