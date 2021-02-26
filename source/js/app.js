import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';

const e = new EditableTaskList();
const v = new ViewOnlyTaskList();
ocument.querySelector('.task-list-container').appendChild([e, v][Math.floor(Math.random() * 2)]);

const taskList = document.querySelector('.task-list-container');
const dropToggle = document.getElementById('toggle');

taskList.addEventListener('click', () => {
  if (dropToggle.checked === true) {
    taskList.classList.add('hidden');
    taskList.classList.remove('showing');
    dropToggle.checked = false;
  } else {
    taskList.classList.add('showing');
    taskList.classList.remove('hidden');
    dropToggle.checked = true;
  }
});
