/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * @author Teresa Truong
 */

/* ******************************** Imports ********************************* */
import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';
import TimerUI from './TimerUI.js';
import TaskList from './TaskList.js';
import BreakPrompt from './BreakPrompt.js';

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
 * @function updateAppTitle
 * @param {boolean} nextTask
 * Update the .app-title based on the break's checkbox.
 */
function updateAppTitle(nextTask) {
  const taskList = JSON.parse(localStorage.getItem('TaskList'));
  const { length } = taskList.todo;
  let title = '';

  // Handle all forms of Title.
  if (length === 0) {
    // TODO: Maybe send user to end of session page.
    title = 'End of Session';
    // console.log('EOS');
  } else if (nextTask && length === 1) {
    title = 'End of Session';
    // console.log('EOS');
  } else if (nextTask && length - 1 === 1) {
    title = `Last Task: ${taskList.todo[1].name}`;
    // console.log('LAST NEXT');
  } else if (nextTask && length - 1 > 1) {
    title = `Next Task: ${taskList.todo[1].name}`;
    // console.log('NEXT');
  } else if (length === 1) {
    title = `Last Task: ${taskList.todo[0].name}`;
    // console.log('LAST CURR');
  } else {
    title = `Current Task: ${taskList.todo[0].name}`;
    // console.log('CURRENT');
  }
  document.querySelector('.app-title').innerHTML = title;
}

/**
 * @function changeTitle
 * A callback function used in the BreakPrompt on changing of the checkbox.
 */
function changeTitle(object) {
  // console.log('Checkbox call', object.getChecked());
  updateAppTitle(object.getChecked());
}

/**
 * @function initTimer
 * @param {Object} timer The Timer object.
 * Initialize the timer based on current STATE.
 */
function initTimer(timer) {
  const timerState = localStorage.getItem('Timer');
  timer.reset();

  // If timer is true set pomo, otherwise it is a break
  if (timerState === 'true') {
    timer.setColorGreen();
    timer.createTimer(0, 25);
    updateAppTitle(false);
    // console.log('Green Tomato call');
  } else {
    const totalPomos = Number(localStorage.getItem('TotalPomos'));
    const breakPrompt = new BreakPrompt(changeTitle);

    // Update the HTML
    updateAppTitle(false);
    // console.log('Red Tomato call');
    timer.setColorRed();
    timer.appendChild(breakPrompt);

    // If there has been 4 pomos then it is a long break
    if (totalPomos > 0 && totalPomos % 4 === 0) {
      // Long break
      timer.createTimer(0, 10);
    } else {
      // Short break
      timer.createTimer(0, 5);
    }
  }
}

/**
 * @function
 * @param {Object} timer The Timer object.
 * @param {Object} taskList The TaskList object.
 * Handle starting the timer and updating the Pomos.
 */
function handleClick(timer, taskList) {
  let active = false;

  timer.firstElementChild.addEventListener('click', () => {
    if (!active) {
      active = true;
      timer.startTimer().then(() => {
        const timerState = localStorage.getItem('Timer');

        if (timerState === 'true') {
          localStorage.setItem('TotalPomos', Number(localStorage.getItem('TotalPomos')) + 1);
          taskList.addPomo();
        }

        if (timerState === 'false') {
          if (timer.lastElementChild.getChecked()) {
            taskList.finishTask();
            taskList.render();
          }

          timer.lastElementChild.remove();
        }

        localStorage.setItem('Timer', timerState === 'false');

        initTimer(timer);

        active = false;
      });
    }
  });
}

/**
 * @function showTimer
 * Displays the Timer and begins to handle the events of interaction.
 */
function showTimer() {
  const timerUI = new TimerUI();
  const votl = new ViewOnlyTaskList();
  updateAppTitle(false);
  // console.log('showTimer call');
  handleClick(timerUI, votl);
  initTimer(timerUI);

  appContainer.appendChild(timerUI);
  appContainer.appendChild(votl);
}

/* ***************************** Event Handling ***************************** */

/**
 * @function handleOnLoad
 * Will hold all Edge Cases that should be check when a page is loaded.
 */
function handleOnLoad() {
  // Redirect to index.html if no name is in localStorage.
  if (!localStorage.getItem('Username')) {
    window.location.href = 'index.html';
  }
  // TODO: Add more edge cases here
  if (localStorage.getItem('Started')) {
    showTimer();
  } else {
    appContainer.appendChild(new EditableTaskList());
    document.querySelector('.app-title').innerHTML = `${localStorage.getItem('Username')}'s Day`;
    appContainer.querySelector('button').addEventListener('click', () => {
      const data = new TaskList();
      // Set values to default.
      if (data.todo.length > 0) {
        localStorage.setItem('Started', true);
        localStorage.setItem('Timer', true);
        localStorage.setItem('TotalPomos', 0);
        appContainer.lastElementChild.remove();
        showTimer();
      } else {
        handleOnLoad();
      }
    });
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
