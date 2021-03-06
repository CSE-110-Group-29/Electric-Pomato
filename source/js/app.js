/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 */

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

import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';
import TimerUI from './TimerUI.js';
import TaskList from './TaskList.js';
import BreakPrompt from './BreakPrompt.js';

// Edge Case: Redirect to index.html if not logged in.
// TODO: Run this on load
if (!localStorage.getItem('Username')) {
  window.location.href = 'index.html';
}

const appContainer = document.querySelector('.app-container');

// initialize the timer based on current state
function initTimer(timer) {
  const timerState = localStorage.getItem('Timer');

  timer.reset();

  // if timer is true set pomo, otherwise it is a break
  if (timerState === 'true') {
    timer.setColorGreen();
    timer.createTimer(0, 25);
  } else {
    const totalPomos = Number(localStorage.getItem('TotalPomos'));
    const breakPrompt = new BreakPrompt();

    timer.setColorRed();
    timer.appendChild(breakPrompt);

    // if there has been 4 pomos then it is a long break
    if (totalPomos > 0 && totalPomos % 4 === 0) {
      // long break
      timer.createTimer(0, 10);
    } else {
      // short break
      timer.createTimer(0, 5);
    }
  }
}

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
            document.querySelector('.app-title').innerHTML = `Next Task: ${taskList.data.todo[1].name}`;
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

function showTimer() {
  const timerUI = new TimerUI();
  const votl = new ViewOnlyTaskList();

  if (votl.data.todo[0].actual >= votl.data.todo[0].expected) {
    document.querySelector('.app-title').innerHTML = `Next Task: ${votl.data.todo[1].name}`;
  }

  document.querySelector('.app-title').innerHTML = `Current Task: ${votl.data.todo[0].name}`;

  handleClick(timerUI, votl);
  initTimer(timerUI);

  appContainer.appendChild(timerUI);
  appContainer.appendChild(votl);
}

if (localStorage.getItem('Started')) {
  appContainer.addEventListener('storage', () => {
    showTimer();
  });
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

// TODO: If New User, display Editable Task List.
// TODO: Once User has tasks list (start day button?) display timer and ViewOnlyTaskList.

/*
document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    appContainer.replaceChild(new ViewOnlyTaskList(), appContainer.lastElementChild);
  } else if (e.code === 'ArrowLeft') {
    appContainer.replaceChild(new EditableTaskList(), appContainer.lastElementChild);
  }
});

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
*/
