"use strict";
////////////////////
// [Forwarded from Den Ri]
// class Task {
//     constructor(name, crateDate = new Date()) {
//         this.name = name;
//         this.crateDate = crateDate;
//         this.taskElement = this._getTaskElement(name, crateDate)
//         return this.taskElement
//     }
//
//     _getElement = (path) => document.createElement(path)
//
//     remove = () => {
//         this.taskElement.remove();
//     }
//
//     _getTaskElement(name, crateDate) {
//         const li = this._getElement('li')
//         const taskName = this._getElement('div')
//         const date = this._getElement('div')
//         const button = this._getElement('button')
//
//         button.addEventListener('click', this.remove)
//
//         taskName.innerHTML = name
//         date.innerHTML = crateDate
//         button.innerHTML = 'del'
//
//         li.append(taskName, date, button)
//
//         return li;
//     }
// }
//
// class Tasks {
//     constructor() {
//         this.inputAddTaskElement = document.querySelector('#input')
//         this.tasksWrapper = document.querySelector('ul')
//         this.addTaskElement = document.querySelector('button')
//         this.DATA = [
//             { name: 'Сгенерировть проект', status: false, createDate: '16.10.2020' },
//             { name: 'Создать компоненты', status: false, createDate: '16.10.2020' },
//             { name: 'Описать роутинг', status: false, createDate: '16.10.2020' },
//             { name: 'Завершить приложение', status: false, createDate: '16.10.2020' },
//         ]
//     }
//
//     _getElement = (path) => document.createElement(path)
//
//     addTask = () => {
//         const text = this.inputAddTaskElement.value
//         if (text.trim().length === 0) {
//             alert('Нельзя добавить пустую задачу')
//             return
//         }
//         this.tasksWrapper.append(new Task(text))
//         this.inputAddTaskElement.value = ''
//     }
//
//     render() {
//         const tasks = this.DATA.map(task => new Task(task.name, task.createDate))
//         tasks.forEach(task => {
//             this.tasksWrapper.append(task)
//         })
//         this.addTaskElement.addEventListener('click', this.addTask)
//     }
// }
//
// const tasks = new Tasks()
// tasks.render()
////////////////////


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
        return this.list.sort( (a, b) => {
            if (a.title > b.title){return 1} else if (a.title < b.title) {return -1} else {return 0}
        } );
    }
    sortByImportance() {
        return this.list.sort( (a,b) => b.importance - a.importance );
    }
    sortByDeadLine() {
        return this.list.sort( (a,b) => b.deadline - a.deadline );
    }
    sortByCategory() {
        return this.list.sort( (a,b) => {
            if (a.category > b.category){return 1} else if (a.category < b.category) {return -1} else {return 0}
        } );
    }
    sortById() {
        return this.list.sort( (a,b) => {
            if (a.id > b.id){return 1} else if (a.id < b.id) {return -1} else {return 0}
        } );
    }
    sortByCreateDate() {
        return this.list.sort( (a,b) => b.createDate - a.createDate );
    }
    sortByOwned() {
        return this.list.sort( (a,b) => {
            if (a.owned > b.owned){return 1} else if (a.owned < b.owned) {return -1} else {return 0}
        } );
    }
    filterByTitle(title) {
        return this.list.filter( item => item.title === title);
    }
    filterByCreateDate(createDate) {
        return this.list.filter( item => item.createDate === createDate );
    }
    filterByID(id) {
        return this.list.filter( item => item.id === id );
    }
    filterByCategory(category) {
        return this.list.filter( item => item.category === category );
    }
    filterByImportance(importance) {
        return this.list.filter( item => item.importance === importance );
    }
    filterByOwned(owned) {
        return this.list.filter( item => item.owned === owned );
    }
    filterByDeadLine(deadline) {
        return this.list.filter( item => item.deadline === deadline );
    }
}


class Task {
    constructor(title) {
        this.title = title;
        this.id = null;
        this.category = "";
        this.importance = null;
        this.createDate = (new Date()).toLocaleString();
        this.deadline = null;
        this.description = '';
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

}

/////////////////////////////////////////////////////////////
// function msToTime(duration) {
//     let milliseconds = parseInt((duration % 1000) / 100),
//         seconds = parseInt((duration / 1000) % 60),
//         minutes = parseInt((duration / (1000 * 60)) % 60),
//         hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
//
//     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }

///////////////////////////////////
// _createPublishedAt(value) {
//     const publishedAt = document.createElement('span');
//     const dateContainer = document.createElement('div');
//
//     const date = new Date(value);
//
//     const hours = ('0' + date.getHours()).slice(-2);
//     const minutes = ('0' + date.getUTCMinutes()).slice(-2);
//     const seconds = ('0' + date.getUTCSeconds()).slice(-2);
//     const days = ('0' + date.getDate()).slice(-2);
//     const months = ('0' + (date.getMonth() + 1)).slice(-2);
//     const years = date.getFullYear();
//
//     const currentDate = `Опубликовано ${days}.${months}.${years} в ${hours}:${minutes}:${seconds}`;
//     publishedAt.textContent = currentDate;
//
//     dateContainer.classList.add('date-container');
//     publishedAt.classList.add('date');
//
//     dateContainer.append(publishedAt);
//
//     return dateContainer;
// }
//////////////////////