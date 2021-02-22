import EditableTaskList from './EditableTaskList.js';
import ViewOnlyTaskList from './ViewOnlyTaskList.js';

const e = new EditableTaskList();
const v = new ViewOnlyTaskList();
document.querySelector('.task-list-container').appendChild([e, v][Math.floor(Math.random() * 2)]);
