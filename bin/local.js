#!/usr/bin/env node

const args = process.argv.slice(2);

function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
}

function timeToMs(time) {
    var splits = time.split(':');
    return (+splits[0]) * 60 * 60 + (+splits[1]) * 60 + (+splits[2]);
}

function getMinutesToAdd(num) {
    const currentDate = new Date();
    const offset = -(currentDate.getTimezoneOffset());
    return currentDate.getTime() + ((offset + +num) * 60 * 1000);
}

function local(num) {
    const minsToAdd = getMinutesToAdd(num);
    const time = msToTime(minsToAdd);
    const seconds = timeToMs(time);
    if (num) {
        console.log(`time + ${num} minutes:: ${time}, seconds:: ${seconds}`);
    } else {
        console.log(`time:: ${time}, seconds:: ${seconds}`);
    }
    return seconds;
}

local(args[0] || 0);

module.exports = local;