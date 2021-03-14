/**
 * @file The main controller of the HTML of the last page.
 * @author Annika Hatcher
 * @author Andy Young
 */

import zingchart from './zingchart-es6.min.js';
import lineConfig from './lineConfig.js';
import { hex } from './lineColors.js';

function line(name, data, color) {
  return {
    text: name.charAt(0).toUpperCase() + name.slice(1),
    values: data,
    lineColor: color,
    lineWidth: '2px',
    marker: {
      type: 'square',
      backgroundColor: color,
      borderColor: color,
      shadow: false,
      size: 3,
    },
    highlightMarker: {
      backgroundColor: color,
      borderColor: color,
      size: 5,
    },
    palette: 0,
    shadow: false,
    visible: true,
  };
}

function handleOnLoad() {
  const { tasklists } = JSON.parse(localStorage.getItem('History'));

  const lines = ['expected', 'actual'];

  lines.forEach((name) => {
    const data = [];
    tasklists.forEach((session) => {
      let total = 0;
      session.forEach((task) => {
        total += task[name];
      });
      data.push(total);
    });
    lineConfig.series.push(line(name, data, hex.pop()));
  });

  /* functional version
  lineConfig.series = lines.map((name) =>
    line(name, tasklists.map((tasklist) =>
      tasklist.reduce((total, task) => total + task[name], 0)
    ), rgba.pop())
  );
  */
  zingchart.render({
    id: 'lineChart',
    data: lineConfig,
    height: 500,
    width: '100%',
  });
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
