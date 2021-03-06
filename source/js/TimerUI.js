/**
 * @file TimerUI acts as the middle man between javascript and the html.
 * It creates a pomo timer that will update the html elements.
 * @author Justin Lee
 * @author Enrique Gan
 * @author Donald Wolfson
 * @author Andy Young
 */

import Timer from './Timer.js';

/**
 * @class Creates the Custom HTMLElement for the Timer class
 * @classdesc Creates the Custom HTMLElement for the Timer class.
 */
class TimerUI extends HTMLElement {
  constructor() {
    super();

    this.classList.add('position-absolute', 'w-100', 'h-100', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');
    this.appendChild(document.querySelector('#timer-template').content.cloneNode(true));

    this.text = this.querySelector('.timer-text');
  }

  reset() {
    this.text.innerHTML = 'START';
  }

  /**
   * Create an internal `Timer` object that sets its `callbackEverySecond`
   * callback function to a function that changes the timer html elements'
   * minute and second values for every second that it ticks down.
   * @param {Number} minutes minutes that will be stored in object.
   * @param {Number} seconds seconds that will be stored in object.
   */
  createTimer(minutes, seconds) {
    this.timer = new Timer(minutes, seconds, (newMinute, newSecond) => {
      this.text.innerHTML = `${TimerUI.parseMinutes(newMinute)} : ${TimerUI.parseSeconds(newSecond)}`;
    });
  }

  /**
   * Start the internal `Timer` object by returning the Promise from startTimer()
   * in the Timer class. Call this function by using await, the caller will be
   * blocked until the timer is done counting down.
   * @returns {Promise} Countdown of timer
   */
  startTimer() {
    this.text.innerHTML = `${TimerUI.parseMinutes(this.timer.minutes)} : ${TimerUI.parseSeconds(this.timer.seconds)}`;
    return this.timer.startTimer();
  }

  /**
   * Returns a string representing the minutes left with the format "MM".
   * ie: If 25 minuts are left, "25". If 9 minutes are left "09"
   * @param {Number} minute Number of minutes that will be formatted.
   * @returns {String} Minutes Left
   */
  static parseMinutes(minute) {
    if (minute < 10) { return `0${String(minute)}`; }
    return String(minute);
  }

  /**
   * Returns a string representing the seconds left with the format "SS".
   * ie: If 25 seconds are left, "25". If 9 seconds are left "09"
   * @param {Number} second Number of seconds that will be formatted.
   * @returns {String} Seconds Left
   */
  static parseSeconds(second) {
    if (second === 60) return '00';
    if (second < 10) return `0${String(second)}`;
    return String(second);
  }

  /**
   * Sets the Tomato image to a Green Tomato.
   */
  setColorGreen() {
    this.querySelector('.timer-image').classList.remove('red-tomato');
    this.querySelector('.timer-image').classList.add('green-tomato');
  }

  /**
   * Sets the Tomato image to a Red Tomato.
   */
  setColorRed() {
    this.querySelector('.timer-image').classList.remove('green-tomato');
    this.querySelector('.timer-image').classList.add('red-tomato');
  }
}

customElements.define('pomo-timer', TimerUI);
export default TimerUI;
