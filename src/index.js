import './styles.css';

class CountdownTimer {
  constructor(selector, targetDate) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.daysRef = document.querySelector('.value[data-value="days"]');
    this.hoursRef = document.querySelector('.value[data-value="hours"]');
    this.minsRef = document.querySelector('.value[data-value="mins"]');
    this.secsRef = document.querySelector('.value[data-value="secs"]');
  }
  start() {
    setInterval(() => {
      const timeObj = {
        targetTime: this.targetDate.getTime(),
        currentTime: Date.now(),
      };

      let days = this.getDays(timeObj);
      let hours = this.getHours(timeObj);
      let mins = this.getMins(timeObj);
      let secs = this.getSecs(timeObj);

      this.daysRef.textContent = days;
      this.hoursRef.textContent = hours;
      this.minsRef.textContent = mins;
      this.secsRef.textContent = secs;
    }, 1000);
  }
  getDays({ targetTime, currentTime }) {
    let time = targetTime - currentTime;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    return days;
  }
  getHours({ targetTime, currentTime }) {
    let time = targetTime - currentTime;
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return hours;
  }
  getMins({ targetTime, currentTime }) {
    let time = targetTime - currentTime;
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    return mins;
  }
  getSecs({ targetTime, currentTime }) {
    let time = targetTime - currentTime;
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    return secs;
  }
}

const timer = new CountdownTimer('#timer-1', new Date('Jul 8, 2021'));

timer.start();
