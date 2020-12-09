"use strict";


function msToTime(duration) {
  let milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
console.log(msToTime(1607507218969));

console.log((new Date()).toLocaleString());

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
    this.description = "";
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


let mylist = new Tasklist("New");
let reservelist = new Tasklist("Reserve");

let task1 = mylist.addTask("my task N 0001");
task1.setDescription( "This is description for my task called TASK1" );

let task44545 = reservelist.addTask('reserveTaskInReserveList');
task44545.setDescription('description for task44545')

let task2 = mylist.addTask("my task N 0234");
let task3 = mylist.addTask("my task N 99999");

//mylist.removeTask("my task N 0234");
task3.setDeadline('10.06.2021');
task3.setImportance(8);
task3.setCategory('category-125478');
task3.setDescription('This is description for task3');

console.log(mylist);
console.log(task1);
console.log(task2);
console.log(task3);
console.log(task44545);


