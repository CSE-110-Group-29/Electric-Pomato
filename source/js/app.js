/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * @author Annika Hatcher
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

// TODO: Once User has tasks list (start day button?) display timer and ViewOnlyTaskList.

/**
 * @function handleOnLoad
 * Will hold all Edge Cases that should be check when a page is loaded.
 */
function handleOnLoad() {
  // Redirect to index.html if no name is in localStorage.
  if (!localStorage.getItem('Username')) {
    window.location.href = 'index.html';
  }
}

/**
 * @function initTimer
 * @param {Object} timer The Timer object.
 * Initialize the timer based on current STATE.
 */
function initTimer(timer) {
  // Change to done page if no more tasks in todo.
  if (JSON.parse(localStorage.getItem('TaskList')).todo.length === 0) {
    document.querySelector('.app-title').innerHTML = `Congrats, ${localStorage.getItem('Username')}!`;
    timer.clear();
    timer.setColorGold();
  } else {
    const timerState = localStorage.getItem('Timer');
    timer.reset();

    // If timer is true set pomo, otherwise it is a break
    if (timerState === 'true') {
      timer.setColorGreen();
      timer.createTimer(0, 25);
      document.querySelector('.app-title').innerHTML = `Current Task: ${JSON.parse(localStorage.getItem('TaskList')).todo[0].name}`;
    } else {
      const totalPomos = Number(localStorage.getItem('TotalPomos'));
      const breakPrompt = new BreakPrompt();

      timer.setColorRed();
      timer.appendChild(breakPrompt);
      document.querySelector('.app-title').innerHTML = 'Break!';

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

  handleClick(timerUI, votl);
  initTimer(timerUI);

  appContainer.appendChild(timerUI);
  appContainer.appendChild(votl);
}

/* ***************************** Event Handlign ***************************** */

if (localStorage.getItem('Started')) {
  showTimer();
} else {
  appContainer.appendChild(new EditableTaskList());
  document.querySelector('.app-title').innerHTML = `${localStorage.getItem('Username')}'s Day`;

  appContainer.querySelector('button').addEventListener('click', () => {
    const data = new TaskList();
    if (data.todo.length > 0) {
      localStorage.setItem('Started', true);
      localStorage.setItem('Timer', true);
      localStorage.setItem('TotalPomos', 0);
      appContainer.lastElementChild.remove();
      showTimer();
    }
  });
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
