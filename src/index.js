import addListButton from './newListButton';
import renderTasks from './renderTasks';
import './style.css';
import renderMenu from './renderMenu';
import {
  allLists,
  createDefault,
  getCurrentList,
  setCurrentList,
} from './manageProjects';
import { loadStorage, populateStorage } from './storageAvailable';

(function app() {
  if (localStorage.getItem('userdata')) {
    loadStorage();
    setCurrentList(allLists[0]);
    populateStorage();
  } else {
    createDefault();
  }
  renderMenu();
  addListButton();
  if (allLists.length !== 0) {
    renderTasks(getCurrentList());
  }
})();
