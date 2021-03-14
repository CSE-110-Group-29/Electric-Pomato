/**
 * @file The main controller of the HTML of the last page.
 * @author Annika Hatcher
 * @author Andy Young
 */

import zingchart from './zingchart-es6.min.js';
import lineConfig from './lineConfig.js';

function handleOnLoad() {
  const { tasklists } = JSON.parse(localStorage.getItem('History'));

  const line = {
    text: 'Expected',
    values: tasklists.map((tasklist) => tasklist.reduce((total, task) => total + task.expected, 0)),
    lineColor: '#ff9800',
    lineWidth: '2px',
    marker: {
      type: 'square',
      backgroundColor: '#ff9800',
      borderColor: '#ff9800',
      shadow: false,
      size: 3,
    },
    highlightMarker: {
      backgroundColor: '#ff9800',
      borderColor: '#ff9800',
      size: 5,
    },
    palette: 0,
    shadow: false,
    visible: true,
  };

  lineConfig.series.push(line);

  console.log(lineConfig);

  zingchart.render({
    id: 'lineChart',
    data: lineConfig,
    height: '100%',
    width: '100%',
  });
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
