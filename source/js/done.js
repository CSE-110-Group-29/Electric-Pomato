/**
 * @file The main controller of the HTML of the last page.
 * @author Annika Hatcher
 */

/* ******************************** Imports ********************************* */
import TimerUI from './TimerUI.js';
import zingchart from '../../node_modules/zingchart/es6.js';
import '../../node_modules/zingchart/modules-es6/zingchart-pareto.min.js';

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
 * @function showTomato
 * Displays the glorious golden Tomato.
 */
function showTomato() {
  const timerUI = new TimerUI();
  appContainer.appendChild(timerUI);
  timerUI.setColorGold();
  timerUI.clear();
  appContainer.appendChild(document.querySelector('#pomato-data-template').content.cloneNode(true));
}

/**
 * @function setData
 * Compiles and renders the zingchart data.
 */
function setData() {
  const expecteds = [];
  const actuals = [];
  const taskList = JSON.parse(localStorage.getItem('TaskList'));
  const { completed } = taskList;
  const { length } = completed;
  const tasks = [length];

  // Load the data.
  for (let index = 0; index < length; index += 1) {
    expecteds[index] = completed[index].expected;
    actuals[index] = completed[index].actual;
    tasks[index] = completed[index].name;
  }

  const myConfig = {
    type: 'bar',
    title: {
      text: 'Session Data',
      fontSize: 24,
      color: '#333333',
    },
    legend: {
      draggable: true,
    },
    scaleX: {
      // set scale label
      label: {
        text: 'Task',
      },
      // convert text on scale indices
      labels: tasks,
    },
    scaleY: {
      values: '0:5:1',
      // scale label with unicode character
      label: {
        text: 'Pomodoros',
      },
    },
    plot: {
      // animation docs here:
      // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
      animation: {
        effect: 'ANIMATION_EXPAND_BOTTOM',
        method: 'ANIMATION_STRONG_EASE_OUT',
        sequence: 'ANIMATION_BY_NODE',
        speed: 275,
      },
    },
    series: [{
      // plot 1 values, linear data
      values: expecteds,
      text: 'Expected',
      backgroundColor: '#2fa027',
    },
    {
      // plot 2 values, linear data
      values: actuals,
      text: 'Actual',
      backgroundColor: '#f5c815',
    },
    ],
  };

  // render chart with width and height to
  // fill the parent container CSS dimensions
  zingchart.render({
    id: 'pomatoData',
    data: myConfig,
  });
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
    showTomato();
    setData();
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
