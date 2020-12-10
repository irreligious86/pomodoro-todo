"use strict";

let taskTemplate = document.querySelector('#task-template').content.querySelector('.task');
let elem = taskTemplate.cloneNode(true);
let areaForTask = document.querySelector('.tab-content'); // create place for task
let addTaskBtn = document.querySelector('.btn-add-task'); // create button for add task
let setupWindow = document.querySelector('.setup-window').content.querySelector('.setup-window-1');

let setupWindowForm = document.querySelector('.setup-window').content.querySelector('.setup-window-form');
let titleSetField = document.querySelector('.setup-window').content.querySelector('.set-title-input');
let importanceSetField = document.querySelector('.setup-window').content.querySelector('.set-importance-input');
let deadlineSetField = document.querySelector('.setup-window').content.querySelector('.set-deadline-input');
let categorySetField = document.querySelector('.setup-window').content.querySelector('.set-category-input');
let descriptionSetField = document.querySelector('.setup-window').content.querySelector('.set-description-input');

let redX = document.querySelector('.setup-window').content.querySelector('.close-button');
let okBtn = document.querySelector('.setup-window').content.querySelector('.ok-button');
let blur = document.querySelector('.blur');

let hideTaskBtn = document.querySelector('.btn-hide-task');  // create button for hide task

let renderCurrentTasks = tasklist => {
    for (let i = 0; i < (tasklist.list).length; i++) {
        let elem = taskTemplate.cloneNode(true);
        elem.querySelector('.task-field-title').textContent = (tasklist.list)[i].title;
        elem.querySelector('.task-field-create-date').textContent = (tasklist.list)[i].createDate;
        areaForTask.appendChild(elem);
    }
};
renderCurrentTasks(mylist);
renderCurrentTasks(reservelist);

let newTaskSettinger = () => {
    blur.classList.remove('hidden');
    elem.append(setupWindow);
    areaForTask.append(elem);
};
let settingWindowDeleter = () => {
    setupWindowForm.reset();
    setupWindow.remove();
    elem.remove();
    blur.classList.add('hidden');
};
let newTaskCreator = () => {
    mylist.addTask();
    console.log(mylist);
    let i = (mylist.list).length - 1;
    console.log(i);
    (mylist.list)[i].setTitle(titleSetField.value);
    (mylist.list)[i].setImportance(importanceSetField.value);
    (mylist.list)[i].setDeadline(deadlineSetField.value);
    (mylist.list)[i].setCategory(categorySetField.value);
    (mylist.list)[i].setDescription(descriptionSetField.value);
    elem.querySelector('.task-field-title').textContent = (mylist.list)[i].title;
    elem.querySelector('.task-field-create-date').textContent = (mylist.list)[i].createDate;
    elem.querySelector('.task-field-importance').textContent = (mylist.list)[i].importance;
    elem.querySelector('.task-field-deadline').textContent = (mylist.list)[i].deadline;
    elem.querySelector('.task-field-category').textContent = (mylist.list)[i].category;
    elem.querySelector('.description').textContent = (mylist.list)[i].description;
    setupWindowForm.reset();
    setupWindow.remove();
    blur.classList.add('hidden');
};

addTaskBtn.addEventListener('click', newTaskSettinger);
redX.addEventListener('click', settingWindowDeleter);
document.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 27 && !setupWindow.classList.contains('hidden')) {
        setupWindowForm.reset();
        setupWindow.remove();
        elem.remove();
        blur.classList.add('hidden');
    }
});
okBtn.addEventListener('click', newTaskCreator );