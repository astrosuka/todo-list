export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }
    toggleComplete() {
        this.isComplete = this.isComplete ? false : true;
    } 
    set priority(newPriority) {
        if (newPriority >= 1 && newPriority <= 3){
            this._priority = newPriority;
        } else {
            console.error('Invalid Value!');
        }
    }
    get priority() {
        return this._priority;
    }
}