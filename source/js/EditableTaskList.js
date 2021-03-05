/**
 * @file Creates and displays an editable task list.
 * @author Andy Young
 * Date: 03/04/2021
 */

import EditableTaskListBody from './EditableTaskListBody.js';
import EditableTaskListInput from './EditableTaskListInput.js';

/**
 * @class Constructs the HTML of the EditableTaskListBody and EditableTaskListInput.
 * @classdesc Constructs the HTML of the EditableTaskListBody and EditableTaskListInput.
 */
class EditableTaskList extends HTMLElement {
  constructor() {
    super();

    this.classList.add('task-list-container');
    this.appendChild(document.querySelector('#edit-title-template').content.cloneNode(true));
    this.appendChild(document.querySelector('#edit-header-row-template').content.cloneNode(true));
    this.appendChild(new EditableTaskListBody());
    this.appendChild(new EditableTaskListInput());
  }
}

customElements.define('editable-task-list', EditableTaskList);
export default EditableTaskList;
