import EditableTaskListBody from './EditableTaskListBody.js';
import EditableTaskListInput from './EditableTaskListInput.js';

class EditableTaskList extends HTMLElement {
  constructor() {
    super();

    this.appendChild(document.querySelector('#edit-title-template').content.cloneNode(true));
    this.appendChild(document.querySelector('#edit-header-row-template').content.cloneNode(true));
    this.appendChild(new EditableTaskListBody());
    this.appendChild(new EditableTaskListInput());
    this.lastElementChild.reset();
  }
}

customElements.define('editable-task-list', EditableTaskList);

export default EditableTaskList;
