/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 */

import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';

const appContainer = document.querySelector('.app-container');

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    appContainer.replaceChild(new ViewOnlyTaskList(), appContainer.lastElementChild);
  } else if (e.code === 'ArrowLeft') {
    appContainer.replaceChild(new EditableTaskList(), appContainer.lastElementChild);
  }
});
