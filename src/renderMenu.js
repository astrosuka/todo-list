import renderTasks from './renderTasks.js';
import { allLists, currentList, removeList, setCurrentList } from './manageProjects.js';

export function renderMenu() {
    const listMenu = document.querySelector('#list-menu');
    listMenu.textContent = '';

    for (let i of allLists) {
        const listName = document.createElement('li');
        listName.textContent = i.title;
        listMenu.append(listName);
        listName.addEventListener('click', () => {
            setCurrentList(i);
            renderTasks(currentList);
        });
        const removeListButton = document.createElement('button');
        removeListButton.textContent = 'x';
        listMenu.append(removeListButton);
        removeListButton.addEventListener('click', () => {
            removeList(allLists.indexOf(i));
            renderMenu();
        });
    }
}
