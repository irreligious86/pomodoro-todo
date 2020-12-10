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
renderCurrentTasks(NEW);
renderCurrentTasks(reservelist);

let openTaskSetter = () => {
    blur.classList.remove('hidden');
    elem.append(setupWindow);
    areaForTask.append(elem);
};

let newTaskCreator = () => {
    NEW.addTask();
    console.log(NEW);
    let i = (NEW.list).length - 1;
    let NEWi = (NEW.list)[i];
    console.log(i);
    NEWi.setTitle(titleSetField.value);
    NEWi.setImportance(importanceSetField.value);
    NEWi.setDeadline(deadlineSetField.value);
    NEWi.setCategory(categorySetField.value);
    NEWi.setDescription(descriptionSetField.value);
    elem.querySelector('.task-field-title').textContent = NEWi.title;
    elem.querySelector('.task-field-create-date').textContent = NEWi.createDate;
    elem.querySelector('.task-field-importance').textContent = NEWi.importance;
    elem.querySelector('.task-field-deadline').textContent = NEWi.deadline;
    elem.querySelector('.task-field-category').textContent = NEWi.category;
    elem.querySelector('.description').textContent = NEWi.description;
    setupWindowForm.reset();
    setupWindow.remove();
    blur.classList.add('hidden');
};

let closeTaskSetter = () => {
    setupWindowForm.reset();
    setupWindow.remove();
    elem.remove();
    blur.classList.add('hidden');
};

let escapeTaskSetter = evt => {
        if(evt.keyCode === 27 && !setupWindow.classList.contains('hidden')) {
            setupWindowForm.reset();
            setupWindow.remove();
            elem.remove();
            blur.classList.add('hidden');
        }
};

addTaskBtn.addEventListener('click', openTaskSetter);
redX.addEventListener('click', closeTaskSetter);
document.addEventListener('keydown', escapeTaskSetter);
okBtn.addEventListener('click', newTaskCreator );