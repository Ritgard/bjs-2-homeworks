'use strict';
class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, callback, id) {
    const clockObj = {
      id: id,
      time: time,
      callback: callback,
    };
    if (id === undefined) throw new Error('error text');
    if (this.alarmCollection.find((item) => item.id == id)) {
      console.error('error');
    } else {
      this.alarmCollection.push(clockObj);
    }
  }
  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.id !== id
    );
  }
  getCurrentFormattedTime() {
    let time = new Date().toLocaleTimeString().slice(0, -3);
    return time;
  }
  start() {
    function checkClock(alarm) {
      for (let j = 0; j < this.alarmCollection.length; j++) {
        if (this.alarmCollection[j].time === this.getCurrentFormattedTime()) {
          clock.callback();
        }
      }
    }
    if (this.id === null) {
      this.id = setInterval(
        this.alarmCollection.forEach((q) => {
          checkClock(q);
        }),
        1000
      );
    }
  }
  stop() {
    if (this.id !== null) {
      clearInterval(this.id);
      this.id === null;
    }
  }
  clearAlarms() {
    this.alarmCollection = [];
  }
  printAlarams() {
    this.alarmCollection.forEach(function (item) {
      console.log(item.id, item.time);
    });
  }
}
