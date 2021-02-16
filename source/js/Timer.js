/* *
 * Author: Donald Wolfson, Justin Lee, Enrique Gan
 * Updated By: Enrique Gan
 * Date: 02/15/2021
 * */

class Timer {
  /* *
   * Constructor for the timer object.
   * @param {number} minutes - Numerical value of maximum minutes.
   * @param {number} seconds - Numerical value of maximum seconds.
   * @input {?@link timerElement} timerElement - HTML element for timer.
   * */
  constructor(minutes, seconds, timerElement) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.timerElement = timerElement;
  }

  /* *
   * Starts the timer. Timer cannot be reset to original time after ticking.
   * Note: This doesn't not check system date/time. It ticks at 1 second
   * intervals, possibly being ahead or behind by negligible amounts.
   * */
  startTimer() {
    return new Promise((resolve) => {
      const countdown = setInterval(() => {
        // This would be the line where HTML timer updates.
        // console.log(`${this.parseMinutes()}:${this.parseSeconds()}`);
        this.timerElement(this.minutes, this.seconds);
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

  /* *
   * Returns a string representing the minutes left with the format "MM".
   * ie: If 25 minuts are left, "25". If 9 minutes are left "09"
   * @returns {String} Minutes Left
   * */
  parseMinutes() {
    if (this.minutes < 10) { return `0${String(this.minutes)}`; }
    return String(this.minutes);
  }

  /* *
   * Returns a string representing the seconds left with the format "SS".
   * ie: If 25 seconds are left, "25". If 9 seconds are left "09"
   * @returns {String} Seconds Left
   * */
  parseSeconds() {
    if (this.seconds === 60) return '00';
    if (this.seconds < 10) return `0${String(this.seconds)}`;
    return String(this.seconds);
  }
}

module.exports = { Timer };
