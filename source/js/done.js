/**
 * @file The main controller of the HTML of the last page.
 * @author Annika Hatcher
 */

/* ******************************** Imports ********************************* */
import TimerUI from './TimerUI.js';

/**
 * STATE:
 * {
 *  Username: {String}
 *    null: redirect to index.html
 *  Started: {Boolean}
 *    true: display TimerUI & ViewOnlyTaskList,
 *    false: go to Editable Task List display.
 *  TotalPomos: {Number}
 *    Elapsed pomos.
 *  Timer: {Boolean}
 *    true: pomodoro
 *    false: break
 *      TotalPomos % 4 == 0: long break
 *      else: short break
 * }
 */

/* ******************************* DOM Values ******************************* */

const appContainer = document.querySelector('.app-container');

/* **************************** Helper Functions **************************** */

/**
 * @function showElements
 * Displays the Tomato and redirect buttons.
 */
function showElements() {
  const timerUI = new TimerUI();
  appContainer.appendChild(timerUI);
  timerUI.setColorGold();
  timerUI.clear();

  timerUI.appendChild(document.querySelector('#redirect-buttons-template').content.cloneNode(true));
}

/**
 * @function handleOnLoad
 * Will hold all Edge Cases that should be check when a page is loaded.
 */
function handleOnLoad() {
  // Redirect to index.html if no name is in localStorage.
  if (!localStorage.getItem('Username')) {
    window.location.href = 'index.html';
  } else {
    document.querySelector('.app-title').innerHTML = `Congrats, ${localStorage.getItem('Username')}!`;
    showElements();
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
