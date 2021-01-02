"use strict";

class Tasklist {
    constructor(title) {
        this.title = title;
        this.list = [];
    }

    addTask(title) {
        const task = new Task(title);
        task.owned = this.title;
        this.list.push(task);
        return task;
    }

    removeTask(title) {
        const i = this.list.findIndex(item => item.title === title);
        if (i >= 0) this.list.splice(i, 1);
    }

    sortByTitle() {
        return this.list.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        });
    }

    sortByImportance() {
        return this.list.sort((a, b) => b.importance - a.importance);
    }

    sortByDeadLine() {
        return this.list.sort((a, b) => a.deadline - b.deadline);
    }

    sortByCategory() {
        return this.list.sort((a, b) => {
            if (a.category > b.category) {
                return 1
            } else if (a.category < b.category) {
                return -1
            } else {
                return 0
            }
        });
    }

    sortById() {
        return this.list.sort((a, b) => {
            if (a.id > b.id) {
                return 1
            } else if (a.id < b.id) {
                return -1
            } else {
                return 0
            }
        });
    }

    sortByCreateDate() {
        return this.list.sort((a, b) => b.createDate - a.createDate);
    }

    sortByOwned() {
        return this.list.sort((a, b) => {
            if (a.owned > b.owned) {
                return 1
            } else if (a.owned < b.owned) {
                return -1
            } else {
                return 0
            }
        });
    }

    filterByTitle(title) {
        return this.list.filter(item => item.title === title);
    }
    filterByCreateDate(createDate) {
        return this.list.filter(item => item.createDate === createDate);
    }
    filterById(id) {
        return this.list.filter(item => item.id === id);
    }
    filterByCategory(category) {
        return this.list.filter(item => item.category === category);
    }
    filterByImportance(importance) {
        return this.list.filter(item => item.importance === importance);
    }
    filterByOwned(owned) {
        return this.list.filter(item => item.owned === owned);
    }
    filterByDeadLine(deadline) {
        return this.list.filter(item => item.deadline === deadline);
    }
}

class Task {
    constructor(title) {
        this.title = title;
        this.id = null;
        this.category = "";
        this.importance = null;
        // this.createDate = (new Date()).toLocaleString();
        this.createDate = null;
        this.deadline = null;
        this.description = '';
    }
    setId(value) {
        this.id = value;
    }
    setTitle(title) {
        this.title = title;
    }
    setImportance(value) {
        this.importance = value;
    }
    setDeadline(value) {
        this.deadline = value;
    }
    setDescription(value) {
        this.description = value;
    }
    setCategory(value) {
        this.category = value;
    }
    setOwned(title) {
    }
    setCreateDate(value) {
        this.createDate = value;
    }
}
