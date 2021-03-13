/**
 * @file The main controller of the HTML of the last page.
 * @author Annika Hatcher
 * @author Andy Young
 */

function handleOnLoad() {
  console.log(localStorage.get('History'));
  zingchart.render({
    id: 'lineChart',
    data: lineConfig,
    height: '100%',
    width: '100%',
  });
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
