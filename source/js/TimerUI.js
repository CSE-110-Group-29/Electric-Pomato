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
 * @classdesc Creates the Custom HTMLElement for the Timer class.
 */
class TimerUI extends HTMLElement {
  /**
   * @class Creates the Custom HTMLElement for the Timer class.
   */
  constructor() {
    super();

    this.appendChild(document.querySelector('#timer-template').content.cloneNode(true));

    this.minutes = this.querySelector('#minutes');
    this.seconds = this.querySelector('#seconds');

    // set default image
  }

  /**
   * @function Create an internal `Timer` object that sets its `callbackEverySecond`
   * callback function to a function that changes the timer html elements'
   * minute and second values for every second that it ticks down.
   * @param {Number} minutes minutes amount.
   * @param {Number} seconds seconds amount.
   */
  createTimer(minutes, seconds) {
    this.timer = new Timer(minutes, seconds, (newMinute, newSecond) => {
      this.minutes.innerHTML = TimerUI.parseMinutes(newMinute);
      this.seconds.innerHTML = TimerUI.parseSeconds(newSecond);
    });
  }

  /**
   * @function Start the internal `Timer` object by returning the Promise from startTimer()
   * in the Timer class. Call this function by using await, the caller will be
   * blocked until the timer is done counting down.
   * @returns {Promise} Countdown of timer
   */
  startTimer() {
    return this.timer.startTimer();
  }

  /**
   * @function Sets the Tomato image to a Green Tomato.
   */
  setColorGreen() {
    this.querySelector('.timer-image').src = 'img/green-tomato.svg';
  }

  /**
   * @function Sets the Tomato image to a Red Tomato.
   */
  setColorRed() {
    this.querySelector('.timer-image').src = 'img/red-tomato.svg';
  }

  /**
   * @function Returns a string representing the minutes left with the format "MM".
   * ie: If 25 minuts are left, "25". If 9 minutes are left "09"
   * @returns {String} Minutes Left
   */
  static parseMinutes(minute) {
    if (minute < 10) { return `0${String(minute)}`; }
    return String(minute);
  }

  /**
   * @function Returns a string representing the seconds left with the format "SS".
   * ie: If 25 seconds are left, "25". If 9 seconds are left "09"
   * @returns {String} Seconds Left
   */
  static parseSeconds(second) {
    if (second === 60) return '00';
    if (second < 10) return `0${String(second)}`;
    return String(second);
  }

  // TODO: Display/Hide "START" button. Session should be responsible for buttons?
}

customElements.define('pomo-timer', TimerUI);
export default TimerUI;
