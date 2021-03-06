/**
 * @file Holds the Timer class and defines its functionality.
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * Date: 03/04/2021
 */

/**
 * @class Constructor for the timer object
 * @classdesc Defines the Timer class and defines its functionality.
 */
class Timer {
  /**
   * @param {number} minutes - Numerical value of maximum minutes.
   * @param {number} seconds - Numerical value of maximum seconds.
   * @param {callback} callbackEverySecond - callback called every second.
   */
  constructor(minutes, seconds, callbackEverySecond) {
    if (minutes > 99) minutes = 99;
    this.minutes = minutes;
    if (seconds > 59) seconds = 59;
    this.seconds = seconds;
    this.callbackEverySecond = callbackEverySecond;
  }

  /**
   * Starts the timer and immediately ticks down.
   * Timer cannot be reset to original time after ticking.
   * Note: This doesn't not check system date/time. It ticks at 1 second
   * intervals, possibly being ahead or behind by negligible amounts.
   */
  startTimer() {
    return new Promise((resolve) => {
      // This is where the timer callbacks a function every second
      if (this.callbackEverySecond !== null) {
        this.callbackEverySecond(this.minutes, this.seconds);
      }
      if (this.seconds === 0 && this.minutes !== 0) {
        this.minutes -= 1;
        this.seconds = 60;
      } else if (this.seconds === 0 && this.minutes === 0) {
        resolve();
      }
      this.seconds -= 1;
      const countdown = setInterval(() => {
        // This is where the timer callbacks a function every second
        if (this.callbackEverySecond !== null) {
          this.callbackEverySecond(this.minutes, this.seconds);
        }
        if (this.seconds === 0 && this.minutes !== 0) {
          this.minutes -= 1;
          this.seconds = 60;
        } else if (this.seconds === 0 && this.minutes === 0) {
          resolve();
          clearInterval(countdown);
        }
        this.seconds -= 1;
      }, 1000);
    });
  }
}

export default Timer;
