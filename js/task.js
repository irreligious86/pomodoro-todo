"use strict";

let taskTemplate = document.querySelector('#task-template').content.querySelector('.task');
// let taskHideButton = document.querySelector('#task-template').content.querySelector('.btn-hide-task');
// console.log(taskHideButton);
let areaForTask = document.querySelector('.tab-content'); // create place for task

let addTaskBtn = document.querySelector('.btn-add-task'); // create button for add task
let hideTaskBtn = document.querySelector('.btn-hide-task');  // create button for hide task


document.body.append('addTaskBtn');  // add button to document
document.body.append('hideTaskBtn');  // add button to document

// let elem1 = taskTemplate.cloneNode(true);
// areaForTask.appendChild(elem1);

for (let i = 0; i < (mylist.list).length; i++) {
    let elem = taskTemplate.cloneNode(true);
elem.querySelector('.task-field-title').textContent = (mylist.list)[i].title;
    elem.querySelector('.task-field-create-date').textContent = (mylist.list)[i].createDate;
    areaForTask.appendChild(elem);
};



// let newTaskCreator = () => {
//     let elem = taskTemplate.cloneNode(true);
//     areaForTask.appendChild(elem);
// };
// addTaskBtn.addEventListener('click', newTaskCreator);
