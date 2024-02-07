import renderTasks from "./renderTasks";
import { populateStorage } from "./storageAvailable";

export default function renderCard(task, list) {
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h2');
    title.textContent = task.title;

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = task.description;

    let date = document.createElement('p');
    date.classList.add('date');
    if (task.dueDate !== '') {
        date.textContent = 'due date: ' + task.dueDate;
    } else {
        date.textContent = '';
    }

    let priority = document.createElement('div');
    priority.classList.add('priority');
    priority.textContent = task.priority;
    getCurrentPriority();

    priority.addEventListener('click', () => {
        if (task.priority === 1) {
            task.priority = 2;
 
        } else
        if (task.priority === 2) {
            task.priority = 3;

        } else
        if (task.priority === 3) {
            task.priority = 1;

        }
        priority.textContent = task.priority;
        getCurrentPriority();
        populateStorage();
    })

    function getCurrentPriority() {
        priority.className = 'priority';
        priority.classList.add(`priority-${task.priority}`);
        return task.priority;
    }

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
        list.removeTask(list.list.indexOf(task));
        populateStorage();
        renderTasks(list);
        console.log('render card')
    })


    card.append(title, deleteButton, priority, description, date);
    return card;
}