"use strict";
(function (){

    let taskTemplate = document.querySelector('#task-template').content.querySelector('.task');
    let taskViewContainer = document.querySelector('.tab-content'); // create place for task
    let addTaskBtn = document.querySelector('.btn-add-task'); // create button for add task
    let setupWindow = document.querySelector('.setup-window').content.querySelector('.setup-window-1');

    let setupWindowForm = setupWindow.querySelector('.setup-window-form');
    let titleSetField = setupWindow.querySelector('.set-title-input');
    let importanceSetField = setupWindow.querySelector('.set-importance-input');
    let deadlineSetField = setupWindow.querySelector('.set-deadline-input');
    let categorySetField = setupWindow.querySelector('.set-category-input');
    let descriptionSetField = setupWindow.querySelector('.set-description-input');
    let f; // pseudo-array rendered tasks
    let redX = document.querySelector('.setup-window').content.querySelector('.close-button');
    let okBtn = document.querySelector('.setup-window').content.querySelector('.ok-button');
    let blur = document.querySelector('.blur');

    let hideTaskBtn = document.querySelector('.btn-hide-task');  // create button for hide task

    const taskFieldObj = {
        title: '.task-field-title',
        createDate: '.task-field-create-date',
        importance: '.task-field-importance',
        deadline: '.task-field-deadline',
        category: '.task-field-category',
        description: '.task-field-description',
                    };

    let rererender = () => {
        (function(){ () => f.forEach( item => item.remove() )})();
    };

    let renderCurrentTasks = array => {
        (array.list).forEach( (item, i, arr) => {
            let a = taskTemplate.cloneNode(true);
            for (let key in taskFieldObj){
                console.log(item[key]);
                console.log(a.querySelector(taskFieldObj[key]));
            }
            a.querySelector(taskFieldObj.title).innerText = (array.list)[i].title;
            a.querySelector(taskFieldObj.createDate).innerText = (array.list)[i].createDate;
            a.querySelector(taskFieldObj.importance).innerText = (array.list)[i].importance;
            a.querySelector(taskFieldObj.deadline).innerText = (array.list)[i].deadline;
            a.querySelector(taskFieldObj.category).innerText = (array.list)[i].category;
            a.querySelector(taskFieldObj.description).innerText = (array.list)[i].description;
            taskViewContainer.appendChild(a);
        });
        f = taskViewContainer.querySelectorAll('.task');
    };

    let openTaskSetter = () => {
        blur.classList.remove('hidden');
        taskViewContainer.append(setupWindow);
    };

    let taskCreator = () => {
        let b = taskTemplate.cloneNode(true);
        taskViewContainer.appendChild(b);
        newTaskList.addTask();  // add new task (object) to array NEW
        let i = (newTaskList.list).length - 1;
        let NEWi = (newTaskList.list)[i];  // last task in array NEW
        NEWi.setTitle(titleSetField.value);  // set title for newly created task
        NEWi.setImportance(importanceSetField.value);
        NEWi.setDeadline(deadlineSetField.value);
        NEWi.setCategory(categorySetField.value);
        NEWi.setDescription(descriptionSetField.value);
        b.querySelector('.task-field-title').textContent = (newTaskList.list)[i].title;
        b.querySelector('.task-field-create-date').textContent = (newTaskList.list)[i].createDate;
        b.querySelector('.task-field-importance').textContent = (newTaskList.list)[i].importance;
        b.querySelector('.task-field-deadline').textContent = (newTaskList.list)[i].deadline;
        b.querySelector('.task-field-category').textContent = (newTaskList.list)[i].category;
        b.querySelector('.task-field-description').textContent = (newTaskList.list)[i].description;
        setupWindowForm.reset();
        setupWindow.remove();
        blur.classList.add('hidden');
        rererender();
    };

    let closeTaskSetter = () => {
        setupWindowForm.reset();
        setupWindow.remove();
        blur.classList.add('hidden');
    };

    let escapeTaskSetter = evt => {
        if(evt.keyCode === 27 && !setupWindow.classList.contains('hidden')) {
            setupWindowForm.reset();
            setupWindow.remove();
            blur.classList.add('hidden');
        }
    };

    renderCurrentTasks(newTaskList);
    renderCurrentTasks(reservelist);
    addTaskBtn.addEventListener('click', openTaskSetter);
    redX.addEventListener('click', closeTaskSetter);
    document.addEventListener('keydown', escapeTaskSetter);
    okBtn.addEventListener('click', taskCreator );

})(); //IIFE
