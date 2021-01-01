"use strict";

const qs = (selector, baseNode = document) => baseNode.querySelector(selector);
const qsa = (selector, baseNode = document) => baseNode.querySelectorAll(selector);

const tabContent = qs('.tab-content'); // create place for task
const tabAdditional = qs('.tab-additional')
const addTaskBtn = qs('.btn-add-task'); // create button for add task
const sortTaskBtn = qs('.btn-sort-task');
const taskTemplate = qs('.task-template').content.querySelector('.task');

const $elm1 = qs('.elm');
const $child1 = qs('.child', tabContent);

const overlay = qs('.setup-window-box');
const overlayForm = qs('.setup-window-form', overlay);
const closeBtn = qs('.close-button', overlayForm);
const acceptBtn = qs('.ok-button', overlayForm);
const blur = document.createElement('div');

const renderAllTasks = arr => {
    (arr.list).forEach((item, i, arr) => {
        const singleTask = taskTemplate.cloneNode(true);
        singleTask.querySelector('.task-field-title').innerText = item.title;
        singleTask.querySelector('.task-field-create-date').innerText = item.createDate;
        singleTask.querySelector('.task-field-importance').innerText = item.importance;
        singleTask.querySelector('.task-field-deadline').innerText = item.deadline;
        singleTask.querySelector('.task-field-category').innerText = item.category;
        singleTask.querySelector('.task-field-description').innerText = item.description;
        tabContent.appendChild(singleTask);
    });
};

const removeAllTasks = () => {
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
};

const openPortal = () => {
    if (overlay.classList.contains('hidden')) {
        overlayForm.reset();
        document.body.append(overlay);
        overlay.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
        document.body.append(blur);
        blur.classList.remove('hidden');
        blur.classList.add('blur');
    }
};

const closePortal = () => {
    overlayForm.reset();
    document.body.style.overflow = '';
    overlay.classList.toggle('hidden');
    overlay.remove();
    blur.classList.remove('blur');
    blur.classList.add('hidden');
};

const acceptPortal = () => {
        const newtask = currentArray.addTask();
        console.log(currentArray.list[currentArray.list.indexOf(newtask)]);
        newtask.setTitle(qs('.set-title-input', overlay).value);
        newtask.setImportance(qs('.set-importance-input', overlay).value);
        newtask.setCategory(qs('.set-category-input', overlay).value);
        newtask.setDeadline(qs('.set-deadline-input', overlay).value);
        newtask.setDescription(qs('.set-description-input', overlay).value);
};

const fullAccept = () => {
    acceptPortal();
    closePortal();
    removeAllTasks();
    renderAllTasks(currentArray);
}

const sortTaskByValue = () => {
    let taskSortArgument = +prompt('Enter number 1-7:', '1');
    switch (taskSortArgument) {
        case 1:
            currentArray.sortByImportance();
            console.log(taskSortArgument + ' - sortByImportance');
            console.log(currentArray.sortByImportance());
            console.log(currentArray);
            break;
        case 2:
            currentArray.sortByTitle();
            console.log(taskSortArgument + ' - sortByTitle');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            break;
        case 3:
            currentArray.sortById();
            console.log(taskSortArgument + ' - sortById');
            console.log(currentArray.sortById());
            console.log(currentArray);
            break;
        case 4:
            currentArray.sortByDeadLine();
            console.log(taskSortArgument + ' - sortByDeadLine');
            console.log(currentArray.sortByDeadLine());
            console.log(currentArray);
            ;
            break;
        case 5:
            currentArray.sortByCategory();
            console.log(taskSortArgument + ' - sortByCategory');
            console.log(currentArray.sortByCategory());
            console.log(currentArray);
            break;
        case 6:
            currentArray.sortByCreateDate();
            console.log(taskSortArgument + ' - sortByCreateDate');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            break;
        case 7:
            currentArray.sortByOwned();
            console.log(taskSortArgument + ' - sortByOwned');
            console.log(currentArray.sortByOwned());
            console.log(currentArray);
            break;
        default:
            console.log('input correct value of taskSortArgument (1-7)');
    }
};

const escapeTaskSetter = evt => {
    if(evt.keyCode === 27 && !overlay.classList.contains('hidden')) {
        overlayForm.reset();
        overlay.remove();
        blur.classList.add('hidden');
    }
};

tabAdditional.prepend(handTaskHandler);
tabAdditional.prepend(autoTaskHandler);
autogenTasks(3);
removeAllTasks();
renderAllTasks(currentArray);

handTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    handgenTasks() ;
    renderAllTasks(currentArray);
});
autoTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    autogenTasks(3) ;
    renderAllTasks(currentArray);
});
addTaskBtn.addEventListener('click', openPortal);
closeBtn.addEventListener('click', closePortal);
acceptBtn.addEventListener('click', fullAccept);
document.addEventListener('keydown', escapeTaskSetter);
