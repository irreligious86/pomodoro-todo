"use strict";

const qs = (selector, baseNode = document) => baseNode.querySelector(selector);
const qsa = (selector, baseNode = document) => baseNode.querySelectorAll(selector);

const tabContent = qs('.tab-forthcoming>.tab-content'); // create place for task
const tabAdditional = qs('.tab-forthcoming>.tab-additional');

const navbar = qs('.navbar');

const sortTaskBtn = qs('.btn-sort-task');
const filterTaskBtn = qs('.btn-filter-task');
const taskTemplate = qs('.task-template').content.querySelector('.task');

const $elm1 = qs('.elm');
const $child1 = qs('.child', tabContent);

const assignListener = item => {
    item.addEventListener('click', () => {
        console.log(item.getAttribute('data-button'));
        switch (item.getAttribute('data-button')) {
            case 'hide':  item.parentNode.parentNode.style.display = 'none';
            break;
            case 'edit': openPortal();
            break;
            case 'remove':
                const param = item.parentNode.parentNode.querySelector('.task-field-title').textContent;
                item.parentNode.parentNode.style.display = 'none';
                currentArray.removeTask(param);
            break;
            case 'description': () => {};
            break;
            case 'importance': () => {};
            break;
            case 'category': () => {};
            break;
            case 'save': () => {};
            break;
            case 'done': () => {};
            break;
            default:
                console.log('unknown case!');
        }
    })
}

const buildTaskAccordingToTemplate = (item, place) => {
    const singleTask = taskTemplate.cloneNode(true);
    (qsa('button', singleTask)).forEach(item => assignListener(item));
    singleTask.querySelector('.task-field-title').innerText = item.title;
    singleTask.querySelector('.task-field-create-date').innerText = new Date(item.createDate).toDateString();
    singleTask.querySelector('.task-field-importance').innerText = item.importance;
    singleTask.querySelector('.task-field-deadline').innerText = new Date(item.deadline).toDateString();
    singleTask.querySelector('.task-field-category').innerText = item.category;
    singleTask.querySelector('.task-field-description').innerText = item.description;
    place.prepend(singleTask);
}


const renderAllTasks = (arr) => (arr.list).forEach((item) => buildTaskAccordingToTemplate(item, tabContent));

// const renderTasksByMethod = (arr, method) => arr.forEach( method );

const removeAllTasks = elem => {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
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
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            break;
        case 2:
            currentArray.sortByTitle();
            console.log(taskSortArgument + ' - sortByTitle');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            break;
        case 3:
            currentArray.sortById();
            console.log(taskSortArgument + ' - sortById');
            console.log(currentArray.sortById());
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            break;
        case 4:
            currentArray.sortByDeadLine();
            console.log(taskSortArgument + ' - sortByDeadLine');
            console.log(currentArray.sortByDeadLine());
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            ;
            break;
        case 5:
            currentArray.sortByCategory();
            console.log(taskSortArgument + ' - sortByCategory');
            console.log(currentArray.sortByCategory());
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            break;
        case 6:
            currentArray.sortByCreateDate();
            console.log(taskSortArgument + ' - sortByCreateDate');
            console.log(currentArray.sortByTitle());
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderAllTasks(currentArray);
            break;
        case 7:
            currentArray.sortByOwned();
            console.log(taskSortArgument + ' - sortByOwned');
            console.log(currentArray.sortByOwned());
            console.log(currentArray);
            removeAllTasks(tabContent);
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
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterByTitle(arg2));
            break;
        case 2:
            // currentArray.filterByImportance(arg2);
            console.log(taskFilterArgument + ' - filterByImportance');
            console.log(currentArray);
            removeAllTasks(tabContent);
            let justSortedArray = currentArray.filterByImportance(arg2);
            console.log(justSortedArray);
            break;
        case 3:
            // currentArray.filterById(arg2);
            console.log(taskFilterArgument + ' - filterById');
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterById(arg2));
            break;
        case 4:
            // currentArray.filterByDeadLine(arg2);
            console.log(taskFilterArgument + ' - filterByDeadLine');
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterByDeadLine(arg2));
            ;
            break;
        case 5:
            // currentArray.filterByCategory(arg2);
            console.log(taskFilterArgument + ' - filterByCategory');
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterByCategory(arg2));
            break;
        case 6:
            // currentArray.filterByCreateDate(arg2);
            console.log(taskFilterArgument + ' - filterByCreateDate');
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterByCreateDate(arg2));
            break;
        case 7:
            // currentArray.filterByOwned(arg2);
            console.log(taskFilterArgument + ' - filterByOwned');
            console.log(currentArray);
            removeAllTasks(tabContent);
            renderSomeTasks(currentArray.filterByOwned(arg2));
            break;
        default:
            console.log('input correct value of taskSortArgument (1-7)');
    }
};

const openFilterModal = () => {
};


const todayTasks = () => {
    const place = qs('.tab-today>.tab-content');
    removeAllTasks(place);
    const deadlineIsNow = item => isSameDate(item.deadline, new Date());
    const filteredTasks = currentArray.list.filter(item => deadlineIsNow(item));
    console.log(`today ${filteredTasks.length} tasks`);
    const scorePanel = qs('.tab-today>.score-panel');
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

const tomorrowTasks = () => {
    const place = qs('.tab-tomorrow>.tab-content');
    removeAllTasks(place);
    let today = new Date();
    let date = today.getDate();
    today.setDate(++date);
    const tomorrow = today;
    const deadlineIsTomorrow = item => isSameDate(item.deadline, tomorrow);
    const filteredTasks = currentArray.list.filter(item => deadlineIsTomorrow(item));
    console.log(`tomorrow ${filteredTasks.length} tasks`);
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

const onWeekTasks = () => {
    const place = qs('.tab-week>.tab-content');
    removeAllTasks(place);
    const isSameWeek = a => (a <= endCurrentWeek()) && (a > todayStartDay());
    const filteredTasks = currentArray.list.filter(item => isSameWeek(item.deadline));
    console.log(`on week ${filteredTasks.length} tasks`);
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

const onMonthTasks = () => {
    const place = qs('.tab-month>.tab-content');
    removeAllTasks(place);
    const isSameMonth = a => (a <= startNextMonth()) && (a > todayStartDay());
    const filteredTasks = currentArray.list.filter(item => isSameMonth(item.deadline));
    console.log(`on month ${filteredTasks.length} tasks`);
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

const forthcomingTasks = () => {
    const place = qs('.tab-forthcoming>.tab-content');
    removeAllTasks(place);
    const isForthcoming = a => a > todayStartDay();
    const filteredTasks = currentArray.list.filter(item => isForthcoming(item.deadline));
    console.log(`in forthcoming ${filteredTasks.length} tasks`);
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

const failedTasks = () => {
    const place = qs('.tab-failed>.tab-content');
    removeAllTasks(place);
    const isFailed = a => a < todayStartDay();
    const filteredTasks = currentArray.list.filter(item => isFailed(item.deadline));
    console.log(`failed ${filteredTasks.length} tasks`);
    filteredTasks.forEach(item => buildTaskAccordingToTemplate(item, place));
};

autogenTasks(1000);
removeAllTasks(tabContent);
renderAllTasks(currentArray, tabContent);

navbar.append(handTaskHandler);
navbar.append(autoTaskHandler);
handTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    handgenTasks();
    renderAllTasks(currentArray);
});
autoTaskHandler.addEventListener('click', () => {
    removeAllTasks();
    autogenTasks(100);
    renderAllTasks(currentArray, tabContent);
});

sortTaskBtn.addEventListener('click', openSortModal);
sortTaskBtn.addEventListener('click', sortTaskByValue);
filterTaskBtn.addEventListener('click', filterTaskByValue);

