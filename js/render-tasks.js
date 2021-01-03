"use strict";

const qs = (selector, baseNode = document) => baseNode.querySelector(selector);
const qsa = (selector, baseNode = document) => baseNode.querySelectorAll(selector);

const tabContent = qs('.tab-forthcoming>.tab-content'); // create place for task
const tabAdditional = qs('.tab-forthcoming>.tab-additional');

const sortTaskBtn = qs('.btn-sort-task');
const filterTaskBtn = qs('.btn-filter-task');
const taskTemplate = qs('.task-template').content.querySelector('.task');

const $elm1 = qs('.elm');
const $child1 = qs('.child', tabContent);

const renderAllTasks = (arr) => {
    (arr.list).forEach((item, i, arr) => {
        const singleTask = taskTemplate.cloneNode(true);
        singleTask.querySelector('.task-field-title').innerText = item.title;
        singleTask.querySelector('.task-field-create-date').innerText = new Date(item.createDate).toDateString();
        singleTask.querySelector('.task-field-importance').innerText = item.importance;
        singleTask.querySelector('.task-field-deadline').innerText = new Date(item.deadline).toDateString();
        singleTask.querySelector('.task-field-category').innerText = item.category;
        singleTask.querySelector('.task-field-description').innerText = item.description;
        tabContent.appendChild(singleTask);
    });
};

// const renderSomeTasks = (arr, method) => arr.forEach( method );

const removeAllTasks = () => {
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
};

const sortTaskByValue = () => {
    let taskSortArgument = +prompt('Enter number 1-7:', '1');
    switch (taskSortArgument) {
        case 1:
            currentArray.sortByImportance();
            console.log(taskSortArgument + ' - sortByImportance');
            console.log(currentArray.sortByImportance());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        case 2:
            currentArray.sortByTitle();
            console.log(taskSortArgument + ' - sortByTitle');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        case 3:
            currentArray.sortById();
            console.log(taskSortArgument + ' - sortById');
            console.log(currentArray.sortById());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        case 4:
            currentArray.sortByDeadLine();
            console.log(taskSortArgument + ' - sortByDeadLine');
            console.log(currentArray.sortByDeadLine());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            ;
            break;
        case 5:
            currentArray.sortByCategory();
            console.log(taskSortArgument + ' - sortByCategory');
            console.log(currentArray.sortByCategory());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        case 6:
            currentArray.sortByCreateDate();
            console.log(taskSortArgument + ' - sortByCreateDate');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        case 7:
            currentArray.sortByOwned();
            console.log(taskSortArgument + ' - sortByOwned');
            console.log(currentArray.sortByOwned());
            console.log(currentArray);
            removeAllTasks();
            renderAllTasks(currentArray);
            break;
        default:
            console.log('input correct value of taskSortArgument (1-7)');
    }
};

const openSortModal = () => {

};

const filterTaskByValue = () => {
    let taskFilterArgument = +prompt('Enter number 1-7:', '1');
    let arg2 = +prompt(`Enter value of ${taskFilterArgument}: `, 'unknown');
    console.log(`property of ${taskFilterArgument} - ${arg2}`);
    switch (taskFilterArgument) {
        case 1:
            // currentArray.filterByTitle(arg2);
            console.log(taskFilterArgument + ' - filterByTitle');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterByTitle(arg2));
            break;
        case 2:
            // currentArray.filterByImportance(arg2);
            console.log(taskFilterArgument + ' - filterByImportance');
            console.log(currentArray);
            removeAllTasks();
            let justSortedArray = currentArray.filterByImportance(arg2);
            console.log(justSortedArray);
            break;
        case 3:
            // currentArray.filterById(arg2);
            console.log(taskFilterArgument + ' - filterById');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterById(arg2));
            break;
        case 4:
            // currentArray.filterByDeadLine(arg2);
            console.log(taskFilterArgument + ' - filterByDeadLine');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterByDeadLine(arg2));
            ;
            break;
        case 5:
            // currentArray.filterByCategory(arg2);
            console.log(taskFilterArgument + ' - filterByCategory');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterByCategory(arg2));
            break;
        case 6:
            // currentArray.filterByCreateDate(arg2);
            console.log(taskFilterArgument + ' - filterByCreateDate');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterByCreateDate(arg2));
            break;
        case 7:
            // currentArray.filterByOwned(arg2);
            console.log(taskFilterArgument + ' - filterByOwned');
            console.log(currentArray);
            removeAllTasks();
            renderSomeTasks(currentArray.filterByOwned(arg2));
            break;
        default:
            console.log('input correct value of taskSortArgument (1-7)');
    }
};

autogenTasks(3000);

const todayTasks = () => {
    const isSameDate = (a, b) => Math.abs(new Date(a).getTime() - new Date(b).getTime()) < (1000 * 3600 * 24) && new Date(a).getDay() === new Date(b).getDay();
    const deadlineIsNow = item => isSameDate(item.deadline, new Date());
    const filteredTasks = currentArray.list.filter(item => deadlineIsNow(item));
    console.log(filteredTasks);
    const tabToday = qs('.tab-today>.tab-content');
    filteredTasks.forEach( item => {
        const singleTask = taskTemplate.cloneNode(true);
        singleTask.querySelector('.task-field-title').innerText = item.title;
        singleTask.querySelector('.task-field-create-date').innerText = new Date(item.createDate).toDateString();
        singleTask.querySelector('.task-field-importance').innerText = item.importance;
        singleTask.querySelector('.task-field-deadline').innerText = new Date(item.deadline).toDateString();
        singleTask.querySelector('.task-field-category').innerText = item.category;
        singleTask.querySelector('.task-field-description').innerText = item.description;
        tabToday.appendChild(singleTask);
    });
};
todayTasks();



const isEndOfWeek = date => date.getDay() === 6;

console.log(isEndOfWeek(new Date(1609617090759)));

console.log((new Date(1968, 11, 2)).getDay() === 6);


const tomorrowTasks = () => {

};

const currentWeekTasks = () => {

};

const currentMonthTasks = () => {

};

const forthcomingTasks = () => {

};

const doneTasks = () => {

};


tabAdditional.prepend(handTaskHandler);
tabAdditional.prepend(autoTaskHandler);

removeAllTasks();
renderAllTasks(currentArray, tabContent);

handTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    handgenTasks();
    renderAllTasks(currentArray);
});
autoTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    autogenTasks(3);
    renderAllTasks(currentArray, tabContent);
});

sortTaskBtn.addEventListener('click', openSortModal);
sortTaskBtn.addEventListener('click', sortTaskByValue);
filterTaskBtn.addEventListener('click', filterTaskByValue);