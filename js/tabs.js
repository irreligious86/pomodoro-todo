// TABS
"use strict";
const tabSettings = () => {
    const init = () => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach( (item) => {
            item.style.display = 'none';
        })
    }

    const showTabs = function() {
        let data = this.getAttribute('data');
        init();
        document.querySelector(`.tab[data="${data}" ]`).style.display = 'grid';

    }

    const tabHandler = function() {
        let data = +(this.getAttribute('data'));
        console.log(data)
        switch (data) {
            case 1:
                console.log(`case of switch: ${data}`);
                todayTasks();
                break;
            case 2:
                console.log(`case of switch: ${data}`);
                tomorrowTasks();
                break;
            case 3:
                console.log(`case of switch: ${data}`);
                onWeekTasks();
                break;
            case 4:
                console.log(`case of switch: ${data}`);
                onMonthTasks();
                break;
            case 5:
                console.log(`case of switch: ${data}`);
                forthcomingTasks();
                break;
            case 6:
                console.log(`case of switch: ${data}`);
                failedTasks();
                break;
            case 7:
                console.log('not exist handler function for this event');
                break;
            case 8:
                console.log('not exist handler function for this event');
                break;
            case 9:
                console.log('not exist handler function for this event');
                break;
            case 10:
                console.log('not exist handler function for this event');
                break;
            case 11:
                console.log('not exist handler function for this event');
                break;
            default:
                console.log('ERR: error in tabHandler');
        }
    }

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach( (item) => {
        // item.onclick = showTabs;
        // item.onclick = tabHandler;
        item.addEventListener('click', showTabs);
        item.addEventListener('click', tabHandler);
    })

    init();
}
tabSettings();