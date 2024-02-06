import { createList } from './index.js';

export function renderButton() {
    const navMenu = document.querySelector('#nav-menu');
    const createListButton = document.createElement('button');
    createListButton.textContent = 'add new list';
    navMenu.appendChild(createListButton);
    createListButton.addEventListener('click', createList);
}
