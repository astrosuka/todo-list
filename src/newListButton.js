import { createList } from './manageProjects.js';
import { renderMenu } from './renderMenu.js';

export function addListButton() {
    const dialog = document.querySelector('#add-list');
    const createListButton = document.querySelector('#create-list-button')
    createListButton.addEventListener('click', () => {
        dialog.showModal();
    });
    

    const listTilte = document.querySelector('#list-title');
    const cancelButton = document.querySelector('#list-cancel-button');
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
        document.querySelector('#add-list-form').reset();
    })
    
    const submitButton = document.querySelector('#list-submit-button');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        createList(listTilte.value);
        renderMenu();
        dialog.close();
        document.querySelector('#add-list-form').reset();

    })

}
