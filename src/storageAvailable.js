import { allLists, createList } from './manageProjects';
import Task from './task';

function loadStorage() {
  const userData = JSON.parse(localStorage.getItem('userdata'));

  let i = 0;

  userData.forEach((storedList) => {
    createList(storedList.title);
    storedList.list.forEach((storedTask) => {
      allLists[i].addTask(
        new Task(
          storedTask.title,
          storedTask.description,
          storedTask.dueDate,
          storedTask._priority
        )
      );
    });
    i += 1;
  });
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function populateStorage() {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('userdata', JSON.stringify(allLists));
  } else {
    // Too bad, no localStorage for us
  }
}

export { populateStorage, loadStorage };
