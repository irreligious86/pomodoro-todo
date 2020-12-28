"use strict";

// window.__jsonpCallback([
//     {"name": "object1" },
//     {"name": "object2" },
//     {"name": "object3" }
// ]);

// let renderItem = item => {
//     let dataDiv = document.createElement('div');
//     dataDiv.classList.add('orange');
//     dataDiv.textContent = item.name;
//     document.body.appendChild(dataDiv);
// };
//
// window.__jsonpCallback = data => {
//     for(let i = 0; i < data.length; i++) {
//         renderItem(data[i]);
//     }
// };
//
// let loader = document.createElement('script');
// loader.src = 'data.js';
// document.body.append(loader);
//






// let existKeeper; // pseudo-array of rendered tasks
//
// const taskFieldObj = {
//     title: '.task-field-title',
//     createDate: '.task-field-create-date',
//     importance: '.task-field-importance',
//     deadline: '.task-field-deadline',
//     category: '.task-field-category',
//     description: '.task-field-description',
// };
//
//
// let cleanAll = () => {};
//
// let renderAll = arr => {
//
//
//     existKeeper = taskViewContainer.querySelectorAll('.task');
//     console.log(existKeeper);
// };
//
//
// let buildTaskSetupWindowDOM = () => {
//     taskSetupWindowForm.classList.remove('hidden')
//     document.body.append('redX');
//     redX.addEventListener('click', redXListener);
//     document.body.append('okBtn');
//     okBtn.addEventListener('click', taskCreator);
//     okBtn.addEventListener('click', reloadTaskView);
//     document.body.append('titleField');
//     document.body.append('importanceField');
//     document.body.append('deadlineField');
//     document.body.append('categoryField');
//     document.body.append('descriptionField');
// };
//
//
//
//
//
//
//
//
// autogenTasks(3);
//
//
//     cleanAll();
//     renderAll(currentArray);
// };
// sortTaskBtn.addEventListener('click', sortTaskByValue);
//
//
//
// const openBlueWindow = () => {
//     let winset = taskSetupWindowForm.cloneNode(true);
//     winset.classList.add('setup-window-form');
//     document.body.append(winset);
// };
//
// addTaskBtn.addEventListener('click', () => {
//     console.log('hello! I am taskCreator');
//     openBlueWindow();
//
// });
//
// document.addEventListener('keydown', evt => {
//     if (evt.keyCode === 27 && !taskSetupWindowForm.classList.contains('hidden')) {
//         taskSetupWindowForm.reset();
//         taskSetupWindowForm.classList.add('hidden');
//     }
// });
//
// let redXListener = () => {
//
// };


