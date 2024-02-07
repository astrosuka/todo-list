import renderTasks from './renderTasks.js';
import { allLists, currentList, removeList, setCurrentList } from './manageProjects.js';

export function renderMenu() {
    const listMenu = document.querySelector('#list-menu');
    listMenu.textContent = '';

    for (let i of allLists) {
        const menuItem = document.createElement('li');
        const listNameInMenu = document.createElement('div');

        listNameInMenu.textContent = i.title;
        menuItem.append(listNameInMenu);
        listMenu.append(menuItem);
        listNameInMenu.addEventListener('click', () => {
            setCurrentList(i);
            renderTasks(currentList);
        });
        const removeListButton = document.createElement('button');
        removeListButton.textContent = 'x';
        menuItem.append(removeListButton);
        removeListButton.addEventListener('click', () => {
            removeList(allLists.indexOf(i));
            renderMenu();
        });
    }
}
