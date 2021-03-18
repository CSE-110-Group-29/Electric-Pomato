/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * @author Teresa Truong
 * @author Annika Hatcher
 */

/* ******************************** Imports ********************************* */
import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';
import TimerUI from './TimerUI.js';
import BreakPrompt from './BreakPrompt.js';
import PopUp from './PopUp.js';
import TaskList from './TaskList.js';

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

/* ***************************** Finished State ***************************** */

let finished = false;

/* **************************** Helper Functions **************************** */

/**
 * @ignore
 * @function [handleEndOfSession]
 * Handles all things that need to be done at the end of the session, called by initTimer
 */
function handleEndOfSession() {
  // Move completed task list to history
  let history = JSON.parse(localStorage.getItem('History'));
  const { completed } = JSON.parse(localStorage.getItem('TaskList'));
  if (history) {
    history.tasklists.push(completed);
  } else {
    history = { tasklists: [completed] };
  }
  localStorage.setItem('History', JSON.stringify(history));

  // Wipe data from previous task list
  localStorage.removeItem('TaskList');
  localStorage.removeItem('Started');
  localStorage.removeItem('TotalPomos');
  localStorage.removeItem('Timer');

  // Pop up prompt
  const endMessage = {
    title: 'Congratulations, you have finished this session!',
    subtitle: 'What would you like to do next?',
    leftButton: 'Start New Session',
    rightButton: 'View Logs',
  };

  PopUp.prompt(endMessage, false).then((result) => {
    if (result === 'left') {
      window.location.href = './index.html';
    } else if (result === 'right') {
      window.location.href = './done.html';
    }
  });
}

/**
 * @ignore
 * @function [updateAppTitle]
 * Update the .app-title based on the break's checkbox.
 * @param {boolean} nextTask - Next task in list.
 */
function updateAppTitle(nextTask) {
  const taskList = JSON.parse(localStorage.getItem('TaskList'));
  const { length } = taskList.todo;
  let title = '';

  // Determine the header based on the length of the TODO list.
  if (length === 0) {
    title = 'End of Session';
    finished = true;
    const t = new TaskList();
    t.finishTask();
    handleEndOfSession();
  } else if (nextTask && length === 1) {
    title = 'End of Session';
    finished = true;
    const t = new TaskList();
    t.finishTask();
    handleEndOfSession();
  } else if (nextTask && length - 1 === 1) {
    title = `Final Task: ${taskList.todo[1].name}`;
  } else if (nextTask && length - 1 > 1) {
    title = `Next Task: ${taskList.todo[1].name}`;
  } else if (length === 1) {
    title = `Final Task: ${taskList.todo[0].name}`;
  } else {
    title = `Current Task: ${taskList.todo[0].name}`;
  }
  document.querySelector('.app-title').textContent = title;
}

/**
 * @ignore
 * @function [changeTitle]
 * A callback function used in the BreakPrompt on changing of the checkbox.
 * @param {Object} object - A BreakPrompt object.
 */
function changeTitle(object) {
  updateAppTitle(object.getChecked());
}

/**
 * @function [initTimer]
 * Initialize the timer based on current STATE.
 * @param {Object} timer - The Timer object.
 */
function initTimer(timer) {
  // Change to done page if no more tasks in todo.
  if (JSON.parse(localStorage.getItem('TaskList')).todo.length === 0) {
    handleEndOfSession();
  } else {
    const timerState = localStorage.getItem('Timer');
    timer.reset();

    // If timer is true set pomo, otherwise it is a break
    if (timerState === 'true') {
      // Update the HTML
      updateAppTitle(false);
      timer.setColorGreen();
      timer.createTimer(0, 3);
    } else {
      const totalPomos = Number(localStorage.getItem('TotalPomos'));
      const breakPrompt = new BreakPrompt(changeTitle);

      // Update the HTML
      updateAppTitle(false);
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
}

/**
 * @ignore
 * @function [showTimerNotification]
 * Displays notification and plays sound when timer ends
 */
function showTimerNotification() {
  const timerState = localStorage.getItem('Timer');
  if (timerState === 'true') {
    const pomoAlert = new Notification('Electric Pomato', {
      icon: 'img/green-tomato.ico',
      body: 'Good Work! Time to recharge.',
    });
    setTimeout(pomoAlert.close.bind(pomoAlert), 5000);
    pomoAlert.addEventListener('click', () => {
      window.focus();
    });
  } else {
    const breakAlert = new Notification('Electric Pomato', {
      icon: 'img/red-tomato.ico',
      body: "Break time is over. It's time to plug in!",
    });
    setTimeout(breakAlert.close.bind(breakAlert), 5000);
    breakAlert.addEventListener('click', () => {
      window.focus();
    });
  }
}

/**
 * @ignore
 * @function [handleClick]
 * Handle starting the timer and updating the Pomos.
 * @param {Object} timer - The Timer object.
 * @param {Object} taskList - The TaskList object.
 */
function handleClick(timer, taskList) {
  let active = false;

  timer.firstElementChild.addEventListener('click', () => {
    if (!active) {
      active = true;
      timer.startTimer().then(() => {
        if (!finished) {
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

          if (!('Notification' in window) && Notification.permission === 'granted') {
            showTimerNotification();
          }

          localStorage.setItem('Timer', timerState === 'false');
          initTimer(timer);
          active = false;
        }
      });
    }
  });
}

/**
 * @ignore
 * @function [showTimer]
 * Displays the Timer and begins to handle the events of interaction.
 */
function showTimer() {
  const timerUI = new TimerUI();
  const votl = new ViewOnlyTaskList();

  // Call any helper functions to handle user events.
  updateAppTitle(false);
  handleClick(timerUI, votl);
  initTimer(timerUI);

  appContainer.appendChild(timerUI);
  appContainer.appendChild(votl);
}

/* ***************************** Event Handling ***************************** */

/**
 * @ignore
 * @function [handleOnLoad]
 * Will hold all Edge Cases that should be check when a page is loaded.
 */
function handleOnLoad() {
  // Redirect to index.html if no name is in localStorage.
  if (!localStorage.getItem('Username')) {
    window.location.href = 'index.html';
  } else if (localStorage.getItem('Started')) {
    showTimer();
  } else {
    appContainer.appendChild(new EditableTaskList());
    document.querySelector('.app-title').textContent = `${localStorage.getItem('Username')}'s Day`;
    appContainer.querySelector('button').addEventListener('click', () => {
      localStorage.setItem('Started', true);
      localStorage.setItem('Timer', true);
      localStorage.setItem('TotalPomos', 0);
      appContainer.lastElementChild.remove();
      showTimer();
    });
  }

  // Request notification permission on page load
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else {
    console.log(Notification.permission);
    if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
