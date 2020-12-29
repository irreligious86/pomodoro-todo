// +7 996 961 00 07

"use strict";

// TABS

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

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach( (item) => {
        item.onclick = showTabs;
    })

    init();
}
tabSettings();