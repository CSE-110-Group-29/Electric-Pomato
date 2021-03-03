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
 *  Timer: (1, 0, -1)
 *    1: Pomodoro
 *    0: Short Break
 *   -1: Long Break
 * }
 */

import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';
import TimerUI from './TimerUI.js';

// Edge Case: Redirect to index.html if not logged in.
// TODO: Run this on load
if (!localStorage.getItem('Username')) {
  window.location.href = 'index.html';
}

const appContainer = document.querySelector('.app-container');

function showTimer() {
  const timerUI = new TimerUI();
  appContainer.appendChild(timerUI);
  appContainer.appendChild(new ViewOnlyTaskList());
  console.log('started');
}

if (localStorage.getItem('Started')) {
  showTimer();
} else {
  appContainer.appendChild(new EditableTaskList());
  appContainer.querySelector('button').addEventListener('click', () => {
    if (body.data.todos.length > 0) {
      localStorage.setItem('Started', true);
      showTimer();
    }
  });
}

// TODO: Update header with either 'Current Task', 'Next Task', 'Final Task', '<Name>'s Day'
if (localStorage.getItem('Started')) {
  // TODO: If working on unfinished task, display 'Current Task: <task_name>'
} else {
  const AppTitle = `${localStorage.getItem('Username')}'s Day`;
  document.querySelector('.app-title').innerHTML = AppTitle;
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
