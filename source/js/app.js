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
  } else if (nextTask && length === 1) {
    title = 'End of Session';
  } else if (nextTask && length - 1 === 1) {
    title = `Last Task: ${taskList.todo[1].name}`;
  } else if (nextTask && length - 1 > 1) {
    title = `Next Task: ${taskList.todo[1].name}`;
  } else if (length === 1) {
    title = `Last Task: ${taskList.todo[0].name}`;
  } else {
    title = `Current Task: ${taskList.todo[0].name}`;
  }
  document.querySelector('.app-title').innerHTML = title;
}

/**
 * A callback function used in the BreakPrompt on changing of the checkbox.
 * @param {Object} object - A BreakPrompt object.
 */
function changeTitle(object) {
  updateAppTitle(object.getChecked());
}

/**
 * Initialize the timer based on current STATE.
 * @param {Object} timer - The Timer object.
 */
function initTimer(timer) {
  // Change to done page if no more tasks in todo.
  if (JSON.parse(localStorage.getItem('TaskList')).todo.length === 0) {
    window.location.href = 'done.html';
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
    const sound = new Audio('audio/pomo_end.mp3');
    sound.play();
  } else {
    const breakAlert = new Notification('Electric Pomato', {
      icon: 'img/red-tomato.ico',
      body: "Break time is over. It's time to plug in!",
    });
    setTimeout(breakAlert.close.bind(breakAlert), 5000);
    breakAlert.addEventListener('click', () => {
      window.focus();
    });
    const sound = new Audio('audio/break_end.mp3');
    sound.play();
  }
}

/**
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

        if (Notification.permission === 'granted') {
          showTimerNotification();
        }
        localStorage.setItem('Timer', timerState === 'false');
        initTimer(timer);
        active = false;
      });
    }
  });
}

/**
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
    document.querySelector('.app-title').innerHTML = `${localStorage.getItem('Username')}'s Day`;
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
