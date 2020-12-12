"use strict";
(function (){
    let newTaskList = new Tasklist("New");
    let reservelist = new Tasklist("Reserve");

    let task1 = newTaskList.addTask("my task N 0001");
    task1.setDescription( "This is description for my task called TASK1" );

    let task44545 = reservelist.addTask('reserveTaskInReserveList');
    task44545.setDescription('description for task44545')

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

    let redX = document.querySelector('.setup-window').content.querySelector('.close-button');
    let okBtn = document.querySelector('.setup-window').content.querySelector('.ok-button');
    let blur = document.querySelector('.blur');

    let hideTaskBtn = document.querySelector('.btn-hide-task');  // create button for hide task

    let renderCurrentTasks = array => {
        for (let i = 0; i < (array.list).length; i++) {
            let a = taskTemplate.cloneNode(true);
            a.querySelector('.task-field-title').textContent = (array.list)[i].title;
            a.querySelector('.task-field-create-date').textContent = (array.list)[i].createDate;
            a.querySelector('.task-field-importance').textContent = (array.list)[i].importance;
            a.querySelector('.task-field-deadline').textContent = (array.list)[i].deadline;
            a.querySelector('.task-field-category').textContent = (array.list)[i].category;
            a.querySelector('.description').textContent = (array.list)[i].description;
            taskViewContainer.appendChild(a);
        }
    };

    let openTaskSetter = () => {
        blur.classList.remove('hidden');
        taskViewContainer.append(setupWindow);
    };

    let taskCreator = () => {
        let elem2 = taskTemplate.cloneNode(true);
        taskViewContainer.appendChild(elem2);
        newTaskList.addTask();  // add new task (object) to array NEW
        let i = (newTaskList.list).length - 1;
        let NEWi = (newTaskList.list)[i];  // last task in array NEW
        NEWi.setTitle(titleSetField.value);  // set title for newly created task
        NEWi.setImportance(importanceSetField.value);
        NEWi.setDeadline(deadlineSetField.value);
        NEWi.setCategory(categorySetField.value);
        NEWi.setDescription(descriptionSetField.value);
        elem2.querySelector('.task-field-title').textContent = (newTaskList.list)[i].title;
        elem2.querySelector('.task-field-create-date').textContent = (newTaskList.list)[i].createDate;
        elem2.querySelector('.task-field-importance').textContent = (newTaskList.list)[i].importance;
        elem2.querySelector('.task-field-deadline').textContent = (newTaskList.list)[i].deadline;
        elem2.querySelector('.task-field-category').textContent = (newTaskList.list)[i].category;
        elem2.querySelector('.description').textContent = (newTaskList.list)[i].description;
        setupWindowForm.reset();
        setupWindow.remove();
        blur.classList.add('hidden');
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
    console.log(newTaskList);
    console.log(reservelist);
    renderCurrentTasks(newTaskList);
    renderCurrentTasks(reservelist);
    addTaskBtn.addEventListener('click', openTaskSetter);
    redX.addEventListener('click', closeTaskSetter);
    document.addEventListener('keydown', escapeTaskSetter);
    okBtn.addEventListener('click', taskCreator );
})(); //IIFE
