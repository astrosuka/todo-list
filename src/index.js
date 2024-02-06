import { renderButton } from './newListButton.js';
import renderTasks from './renderTasks.js';
import './style.css';
import { renderMenu } from './renderMenu.js';
import { currentList } from './manageProjects.js';

(function () {
    renderMenu();
    renderButton();
    renderTasks(currentList);
})();