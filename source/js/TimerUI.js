import Timer from './Timer.js';

class TimerUI extends HTMLElement {
  constructor() {
    super();
    this.timerContainer = document.getElementById('timer-container');
    this.minutes = this.timerContainer.getElementById('minutes');
    this.seconds = this.timerContainer.getElementById('seconds');
  }

  createTimer(minutes, seconds) {
    const timer = new Timer(minutes, seconds, (newMinutes, newSeconds) => {
      this.minutes.innerText = newMinutes;
      this.seconds.innerText = newSeconds;
    });
    timer.startTimer();
  }
}

customElements.define('timer', TimerUI);
