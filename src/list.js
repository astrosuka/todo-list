export default class List {
  constructor(title) {
    this.title = title;
    this.list = [];
  }

  removeTask(index) {
    this.list.splice(index, 1);
  }

  addTask(item) {
    this.list.push(item);
  }
}
