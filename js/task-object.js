"use strict";

class Tasklist {
    constructor(title) {
        this.title = title;
        this.list = [];
    }
    addTask(title) {
        const task = new Task(title);
        task.createTool = this.title;
        this.list.push(task);
        return task;
    }
    removeTask(title) {
        const i = this.list.findIndex((item) => item.title === title);
        if (i >= 0) this.list.splice(i, 1);
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
        this.description = "kj;nk";
    }

    // getByTitle(title, arr) {
    //   arr.filter((title) => this.title === title);
    //   return;
    // }
    // getByCreate() {}
    // getByID(id) {}

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
    setCreateTool(title) {
    }
}

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