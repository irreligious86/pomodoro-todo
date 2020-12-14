"use strict";

let newTaskList = new Tasklist("New");
let reservelist = new Tasklist("Reserve");

let makeTitle = (n) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

let makeCat = () => {
    let r = Math.ceil(Math.random() * 10);
    let d = `Category ${r}`;
    return d;
}

let makeId = (n) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}



let makeNum = (n) => {
    let numb = "";
    let possible = "0123456789";
    for (let i = 0; i < n; i++)
        numb += possible.charAt(Math.floor(Math.random() * possible.length));
    return +numb;
}


let makeDate = () => {
    let day = (Math.ceil(Math.random() * 31));
    let month = (Math.ceil(Math.random() * 12));
    let year = 2020+(Math.ceil(Math.random() * 3));
    let autodate = `${year}/${month}/${day}`;
    return autodate;
}


let autogenTasks = n => {
    Array(n).fill().forEach(() => {
        let t = makeTitle(8);
        let f = newTaskList.addTask(t);
        f.setImportance(Math.ceil(Math.random() * 10));
        f.setDeadline(makeDate());
        f.setCategory(makeCat());
        console.log(t);
    });
    return newTaskList;
};
autogenTasks(8);






// let task12345 = newTaskList.addTask("task N 0001");
// let task27451 = newTaskList.addTask("rtyjryjuryuj");
// let task34747 = newTaskList.addTask("fghmfgm");
// let task14472 = newTaskList.addTask("dfncghn");
// let task17444 = newTaskList.addTask("cghmfghm");
// let task12522 = newTaskList.addTask("fmfgmfgmjmj,");
// let task14542 = newTaskList.addTask("rfyumfymfymfyuyu");
// task12345.setDescription( "This is description for my task called TASK1" );
// task27451.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
// task34747.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
// task14472.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
// task17444.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
// task12522.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
// task14542.setDescription( "qqqqqqqqqqqqqwwwwwwwwwwwweeeeeeeeeee" );
//
// let task44545 = reservelist.addTask('reserveTaskInReserveList');
// task44545.setDescription('description for task44545')

//
// const names = [
//     'Yoda',
//     'Jack Sparrow',
//     'Captain Kirk',
//     'Spock',
//     'Optimus Prime',
//     'Gandalf',
//     'Inigo Montoya',
//     'Magneto',
//     'Tony Stark',
//     'Bilbo Baggins',
//     'Legolas',
//     'Inspector Clouseau',
//     'Obi Wan'
// ];
//
// let randomNames = [
//     "Gyaks",
//     "Evni",
//     "Soso",
//     "Fiyk",
//     "Nyichi",
//     "Kego",
//     "Epir",
//     "Lyichi",
//     "Zent",
//     "Syichi",
//     "Yanchi",
//     "Ebon",
//     "Deks",
//     "Fogo",
//     "Fyuer",
//     "Eslo",
//     "Lurk",
//     "Afst",
//     "Schaks",
//     "Shoni"
// ];
