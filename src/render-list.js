import renderCard from './render-card.js'

export default function renderList(list) {
    const wrapper = document.querySelector('#wrapper');
    const listTitle = document.createElement('h1');
    wrapper.textContent = '';
    listTitle.textContent = list.title;
    wrapper.appendChild(listTitle);
    console.log(list)
    for (let item of list.list) {        
        wrapper.appendChild(renderCard(item, list));
    }
}