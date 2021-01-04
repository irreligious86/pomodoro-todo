"use strict";

const newTaskList = new Tasklist("New");
const currentArray = newTaskList;

const handgenTasks = () => {
    let task12345 = currentArray.addTask("task N 0001");
    let task27451 = currentArray.addTask("rtyjryjuryuj");
    task12345.setDescription("This is description for my task called TASK1");
    task27451.setDescription("qqqqqwwweee");
    return currentArray;
};

let randomTitle = (n = 6) => {
    let text = "";
    let symbolAZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbolaz = "abcdefghijklmnopqrstuvwxyz";
    let symbol09 = "0123456789";
    for (let i = 0; i < 1; i++)
        text += symbolAZ.charAt(Math.floor(Math.random() * symbolAZ.length));
    for (let i = 0; i < (n - 5); i++)
        text += symbolaz.charAt(Math.floor(Math.random() * symbolaz.length));
    for (let i = 0; i < 4; i++)
        text += symbol09.charAt(Math.floor(Math.random() * symbol09.length));
    return text;
}

let randomCat = () => {
    let r = Math.ceil(Math.random() * 10);
    let d = `Category ${r}`;
    return d;
}

let randomId = (n) => {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

let randomNum = (n) => {
    let numb = "";
    let possible = "0123456789";
    for (let i = 0; i < n; i++)
        numb += possible.charAt(Math.floor(Math.random() * possible.length));
    return +numb;
}

let randomDate = () => {
    const day = (Math.ceil(Math.random() * 31));
    const month = (Math.ceil(Math.random() * 12));
    // const year = 2020 + (Math.ceil(Math.random() * 3) );
    const year = new Date().getFullYear();
    const autodate = `${year}/${month}/${day}`;
    const result = new Date(autodate).getTime();
    return result;
}

let autogenTasks = n => {
    Array(n).fill().forEach(() => {
        let t = randomTitle(8);
        let f = currentArray.addTask(t);
        f.setCreateDate(new Date().getTime());
        f.setImportance(Math.ceil(Math.random() * 10));
        f.setDeadline(randomDate());
        f.setCategory(randomCat());
        f.setId(randomId(8));
    });
    return currentArray;
};

let autoTaskHandler = document.createElement('p');
autoTaskHandler.classList.add('mini-button')
autoTaskHandler.innerText = 'AUTO tasks';

let handTaskHandler = document.createElement('p');
handTaskHandler.classList.add('mini-button');
handTaskHandler.innerText = 'HAND tasks';

