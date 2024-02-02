export default class List {
    constructor(title) {
        this.title = title;
        this.list = [];
    }
    removeItem(index) {
        this.list.splice(index, 1);
    }
    addItem(item) {
        this.list.push(item);
    }
}