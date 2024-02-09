import renderCard from './renderCard';
import Task from './task';
import { getCurrentList } from './manageProjects';
import { populateStorage } from './storageAvailable';

const dialog = document.querySelector('#add-task');

export default function renderTasks(list) {
  const wrapper = document.querySelector('#wrapper');
  const listTitle = document.createElement('h1');
  wrapper.textContent = '';
  listTitle.textContent = list.title;
  wrapper.appendChild(listTitle);

  const addItemButton = document.createElement('button');
  addItemButton.classList.add('add-new-task');
  addItemButton.textContent = 'add new task';
  addItemButton.addEventListener('click', () => {
    dialog.showModal();
  });

  wrapper.appendChild(addItemButton);

  list.list.forEach((item) => {
    wrapper.appendChild(renderCard(item, list));
  });
}

function newTaskForm() {
  const title = document.querySelector('#title');

  const description = document.querySelector('#description');

  const date = document.querySelector('#date');

  const priority = document.querySelectorAll('[name="priority"]');
  let selectedPriority;

  function submit() {
    getCurrentList().addTask(
      new Task(title.value, description.value, date.value, +selectedPriority)
    );
    populateStorage();
    renderTasks(getCurrentList());
    dialog.close();
    document.querySelector('form').reset();
  }

  const submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    priority.forEach((radioButton) => {
      if (radioButton.checked) {
        selectedPriority = radioButton.value;
      }
    });

    submit();
  });

  const cancelButton = document.querySelector('#cancel-button');
  cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
    document.querySelector('form').reset();
  });
}

newTaskForm();
