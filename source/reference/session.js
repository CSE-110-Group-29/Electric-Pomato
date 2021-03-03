/* *
 * Author: Donald Wolfson, Justin Lee, Enrique Gan, Andy Young
 * Date: 02/25/2021
 * */

// Imports:
import TimerUI from '../js/TimerUI.js';

// Global Variables:
const body = document.querySelector('.container');
const timerUI = new TimerUI();

body.appendChild(timerUI);
timerUI.createTimer(0, 10);
timerUI.setColorGreen();

async function testTimer() {
  await timerUI.startTimer();
  console.log('BOOM :)');
  timerUI.setColorRed();
}

testTimer();
