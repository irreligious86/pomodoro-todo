"use strict";

const todayStartDay = () => Date.now() - Date.now() % (1000 * 3600 * 24);

const startDay = day => new Date(day) - new Date(day) % (1000 * 3600 * 24);

const todayEndDay = () => Date.now() - Date.now() % (1000 * 3600 * 24) + (1000 * 3600 * 24);

const endDay = day => startDay(day) + (1000 * 3600 * 24);

const endCurrentWeek = () => todayStartDay() + (7 - (new Date().getDay())) * 1000 * 3600 * 24;

const startNextMonth = () => {
    const date = new Date();
    let f = date.getMonth();
    if (f < 11) {
        date.setMonth(++f);
    } else {
        let y = date.getFullYear();
        date.setFullYear(++y);
        date.setMonth(0);
    }
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return Date.parse(date);
};

const endCurrentMonth = () => startNextMonth() - 1000;

const isSameDate = (a, b) => Math.abs(new Date(a).getTime() - new Date(b).getTime()) < (1000 * 3600 * 24) && new Date(a).getDay() === new Date(b).getDay();

const isEndOfWeek = date => date.getDay() === 6;

