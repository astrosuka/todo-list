import { renderButton } from './newListButton.js';
import renderTasks from './renderTasks.js';
import './style.css';
import { renderMenu } from './renderMenu.js';
import { allLists, createDefault, currentList, setCurrentList } from './manageProjects.js';
import { loadStorage, populateStorage } from './storageAvailable.js';

(function () {
    if (localStorage.getItem('userdata')) {
        loadStorage();
        setCurrentList(allLists[0]);
        populateStorage()
    } else {
        createDefault();
    }
    renderMenu();
    renderButton();
    renderTasks(currentList);
})();