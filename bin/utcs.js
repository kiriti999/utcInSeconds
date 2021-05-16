#!/usr/bin/env node

const args = process.argv.slice(2);

/* #region  UTCS */
function utcs(num) {
    let hours = new Date().getUTCHours();
    let minutes = new Date().getUTCMinutes();
    let seconds = new Date().getUTCSeconds();
    let utcTime = `${hours}:${minutes}:${seconds}`;
    let utcSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);

    if (num) {
        minutes = (minutes + parseInt(num, 10));
        utcTime = `${hours}:${minutes}:${seconds}`;
        utcSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
    }
    console.log(`  utc time:: ${utcTime}, seconds:: ${utcSeconds}`);
    return utcSeconds;
}
utcs(args[0] || 0);
/* #endregion */


/* #region  LOCAL */
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
    console.log(`local time:: ${time}, seconds:: ${seconds}`);
    return seconds;
}

local(args[0] || 0);
/* #endregion */

module.exports = {
    utcs,
    local
};

