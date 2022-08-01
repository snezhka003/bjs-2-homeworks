// тут вы можете вызывать функции из task.js
function testCase() {
    let phoneAlarmClock = new AlarmClock();

    phoneAlarmClock.addClock(phoneAlarmClock.getCurrentFormattedTime(), () => console.log("Подъем!"), 1);

    phoneAlarmClock.addClock("14:45", () => {
        console.log("Пора вставать!");
        phoneAlarmClock.removeClock(phoneAlarmClock.timerId)        
    }, 2);

    phoneAlarmClock.addClock("14:47", () => {
        console.log("Вставай уже наконец!!!");
        phoneAlarmClock.clearAlarms();
        phoneAlarmClock.printAlarms()        
    }, 3);

    phoneAlarmClock.printAlarms();

    phoneAlarmClock.start();
}

// testCase();