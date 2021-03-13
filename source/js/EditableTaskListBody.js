/**
 * @author Andy Young
 * @author Teresa Truong
 * @author Annika Hatcher
 * @author Arman Mansourian
 * Date: 03/07/2021
 */

import TaskList from './TaskList.js';

/**
 * Creates a customer HTMLElement for editing the TaskList.
 * @extends HTMLElement
 */
class EditableTaskListBody extends HTMLElement {
  /**
   * Constructor for the Task List UI.
   * @param {Object} editableTaskList - An EditableTaskList object.
   */
  constructor(editableTaskList) {
    super();

    this.editableTaskList = editableTaskList;

    // Initialize instance variables.
    this.template = document.querySelector('#task-row-template').content;
    this.data = new TaskList();
    this.resetEditingState();

    // For each task in the TaskList, insert a row.
    this.data.todo.forEach(({ name, expected }, i) => {
      this.insertRow(i + 1, name, expected);
    });

    this.connected = false;
  }

  connectedCallback() {
    this.connected = true;
  }

  /**
   * Create a new task with the given inputs and update the UI.
   * @param {string} name - Name of new task.
   * @param {number} expected - Expected number of pomos.
   */
  addRow(name, expected) {
    this.data.createTask(name, Number(expected));
    this.insertRow(this.data.todo.length, name, expected);

    this.editableTaskList.updateButtonState();
  }

  /**
   * Resets the instance variables relating to row editing.
   */
  resetEditingState() {
    this.editingRow = null;
    this.editingInputs = null;
    this.originalValues = null;
  }

  /**
   * Edit task from todo at given index.
   * @param {number} index - Index of task to remove.
   * @param {HTMLElement[]} inputs - References to input tag of the row.
   */
  editRow(row, inputs) {
    if (this.editingRow) {
      this.cancelEdit();
    }

    this.editingRow = row;
    this.editingInputs = inputs;
    this.originalValues = inputs.map((input) => input.value);

    row.classList.add('edit-mode');

    inputs.forEach((input) => {
      input.disabled = false;
    });

    inputs[0].focus();
    inputs[0].setSelectionRange(inputs[0].value.length, inputs[0].value.length);
  }

  /**
   * Remove task from todo at given index.
   * @param {number} row - Row of task to remove.
   */
  removeRow(row) {
    if (this.editingRow) {
      this.cancelEdit();
    }

    this.data.deleteTask(Number(row.dataset.id));
    row.remove();

    Array.from(this.children).forEach((child, i) => {
      child.querySelector('input').value = i + 1;
      child.dataset.id = i;
    });

    this.editableTaskList.updateButtonState();

    this.nextElementSibling.reset();
  }

  /**
   * Save changes to the row.
   */
  saveEdit() {
    const [newName, newExpected] = this.editingInputs.map((input) => input.value);
    this.data.updateTask(Number(this.editingRow.dataset.id), newName, Number(newExpected));
    this.originalValues = [newName, newExpected];
    this.cancelEdit();
  }

  /**
   * Exit out of editing mode.
   */
  cancelEdit() {
    this.editingRow.classList.remove('edit-mode');

    this.editingInputs.forEach((input, i) => {
      input.disabled = true;
      input.value = this.originalValues[i];
    });

    this.resetEditingState();

    this.nextElementSibling.reset();
  }

  /**
   * Add a new row to the UI.
   * @param {number} number - Number of new task on the list.
   * @param {string} name - Name of new task.
   * @param {number} expected - Expected number of pomos.
   */
  insertRow(...args) {
    const clone = this.template.cloneNode(true);
    this.appendChild(clone);

    const row = this.lastElementChild;
    const inputs = row.querySelectorAll('input');
    const userInputs = Array.from(inputs).slice(-2);
    const [editIcon, removeIcon, saveIcon, cancelIcon] = row.querySelectorAll('i');
    const [number] = args;

    row.dataset.id = number - 1;

    inputs.forEach((input, i) => {
      input.value = args[i];
    });

    if (this.connected) {
      row.querySelector('tomato-slider').render();
    }

    userInputs.forEach((input) => {
      input.addEventListener('keyup', (e) => {
        if (e.code === 'Enter') {
          this.saveEdit();
        }
      });
    });

    editIcon.addEventListener('click', () => {
      this.editRow(row, userInputs);
    });

    removeIcon.addEventListener('click', () => {
      this.removeRow(row);
    });

    saveIcon.addEventListener('click', () => {
      this.saveEdit();
    });

    cancelIcon.addEventListener('click', () => {
      this.cancelEdit();
    });
  }
}

customElements.define('editable-task-list-body', EditableTaskListBody);

export default EditableTaskListBody;
