'use strict'
class Meditation {
  constructor(minutes) {
    this.minutes = minutes;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.minutes--);
      if (this.minutes === 0) {
        clearInterval(this.timerId);
        console.log('Jay Guru Dev');
      }
    }, 1000);
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log('Start meditation');
