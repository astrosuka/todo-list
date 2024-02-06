import renderCard from './render-card.js'
import Task from './task.js';
import { currentList } from './index.js';

newTaskForm();
const dialog = document.querySelector('#add-task');

export default function renderList(list) {
    const wrapper = document.querySelector('#wrapper');
    const listTitle = document.createElement('h1');
    wrapper.textContent = '';
    listTitle.textContent = list.title;
    wrapper.appendChild(listTitle);
    
    for (let item of list.list) {        
        wrapper.appendChild(renderCard(item, list));
    }

    const addItemButton = document.createElement('button');
    addItemButton.textContent = 'Add New Task';
    addItemButton.addEventListener('click', () => {
        dialog.showModal();
    })

    wrapper.appendChild(addItemButton);
}

function newTaskForm() {
    const title = document.querySelector('#title');
    
    let description = document.querySelector('#description');

    let date = document.querySelector('#date');

    let priority = document.querySelectorAll('[name="priority"]');
    let selectedPriority;
    
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        for (const radioButton of priority) {
            if (radioButton.checked) {
                selectedPriority = radioButton.value;
                break;
            }
        }
        submit();
    })

    const cancelButton = document.querySelector('#cancel-button');
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
        document.querySelector('form').reset();
    })
    
   function submit() {
        currentList.addItem(new Task(title.value, description.value, date.value, +selectedPriority))
        renderList(currentList);
        dialog.close();
        document.querySelector('form').reset();
    }
}