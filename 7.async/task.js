class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error ("Идентификатор будильника не передан!");
        } else if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Будильник с этим id уже существует!");
        } else {
            this.alarmCollection.push({time, callback, id});
        }
    };

    removeClock(id) {
        let deleteClock = this.alarmCollection.findIndex(item => item.id === id);

        if(deleteClock === -1) {
            return false;
        } else {
            this.alarmCollection.splice(deleteClock, 1);
            return true;
        }
    };

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0,5);
    };

    start() {
        let checkClock = clock => {
            if (clock.time === this.getCurrentFormattedTime()) {
                clock.callback();
            }
        };

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
    };

    stop() {
        if (this.timerId !== null && this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };

    printAlarms() {
        console.log(`Печать всех будильников: ${this.alarmCollection.length}`);

        this.alarmCollection.forEach(item => console.log(`Будильник № ${item.id} заведен на ${item.time}`));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
}