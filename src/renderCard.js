import renderTasks from './renderTasks';
import { populateStorage } from './storageAvailable';

export default function renderCard(task, list) {
  const taskToRender = task;
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h2');
  title.textContent = task.title;

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = task.description;

  const date = document.createElement('p');
  date.classList.add('date');
  if (task.dueDate !== '') {
    date.textContent = `due date: ${task.dueDate}`;
  } else {
    date.textContent = '';
  }

  const priority = document.createElement('div');
  priority.classList.add('priority');
  priority.textContent = task.priority;

  function getCurrentPriority() {
    priority.className = 'priority';
    priority.classList.add(`priority-${task.priority}`);
    return task.priority;
  }

  getCurrentPriority();

  priority.addEventListener('click', () => {
    if (task.priority === 1) {
      taskToRender.priority = 2;
    } else if (task.priority === 2) {
      taskToRender.priority = 3;
    } else if (task.priority === 3) {
      taskToRender.priority = 1;
    }
    priority.textContent = task.priority;
    getCurrentPriority();
    populateStorage();
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', () => {
    list.removeTask(list.list.indexOf(task));
    populateStorage();
    renderTasks(list);
  });

  card.append(title, deleteButton, priority, description, date);
  return card;
}
