import renderTasks from './renderTasks';
import {
  allLists,
  getCurrentList,
  removeList,
  setCurrentList,
} from './manageProjects';

export default function renderMenu() {
  const listMenu = document.querySelector('#list-menu');
  listMenu.textContent = '';

  allLists.forEach((i) => {
    const menuItem = document.createElement('li');
    const listNameInMenu = document.createElement('div');

    listNameInMenu.textContent = i.title;
    menuItem.append(listNameInMenu);
    listMenu.append(menuItem);
    listNameInMenu.addEventListener('click', () => {
      setCurrentList(i);
      renderTasks(getCurrentList());
    });
    const removeListButton = document.createElement('button');
    removeListButton.textContent = 'x';
    menuItem.append(removeListButton);
    removeListButton.addEventListener('click', () => {
      removeList(allLists.indexOf(i));
      renderMenu();
    });
  });
}
