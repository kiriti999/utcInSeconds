#!/usr/bin/env node

const args = process.argv.slice(2);

// UTC in seconds
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
        console.log(`utcTime + ${num} minutes:: ${utcTime}, utcSeconds:: ${utcSeconds}`);
    } else {
        console.log(`utcTime:: ${utcTime}, utcSeconds:: ${utcSeconds}`);
    }
    return utcSeconds;
}

utcs(args[0] || 0);

module.exports = {
    utcs
    // ists
};

