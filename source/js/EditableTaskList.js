/**
 * @file Creates and displays an editable task list.
 * @author Andy Young
 * Date: 03/04/2021
 */

import EditableTaskListBody from './EditableTaskListBody.js';
import EditableTaskListInput from './EditableTaskListInput.js';

/**
 * @classdesc Constructs the HTML of the EditableTaskListBody and EditableTaskListInput.
 */
class EditableTaskList extends HTMLElement {
  /**
   * @class Constructs the HTML of the EditableTaskListBody and EditableTaskListInput.
   */
  constructor() {
    super();

    this.classList.add('task-list-container');
    this.appendChild(document.querySelector('#edit-title-template').content.cloneNode(true));
    this.appendChild(document.querySelector('#edit-header-row-template').content.cloneNode(true));
    const body = new EditableTaskListBody();
    this.appendChild(body);
    this.appendChild(new EditableTaskListInput());

    this.querySelector('button').addEventListener('click', () => {
      if (body.data.todos.length > 0) {
        localStorage.setItem('Started', true);
      }
    });
  }
}

customElements.define('editable-task-list', EditableTaskList);

export default EditableTaskList;
