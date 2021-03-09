/**
 * @author Andy Young
 * @author Teresa Truong
 * @author Annika Hatcher
 * Date: 03/04/2021
 */

import TaskList from './TaskList.js';

/**
 * @class Constructor for the Task List UI
 * @classdesc Creates a customer HTMLElement for editing the TaskList.
 */
class EditableTaskListBody extends HTMLElement {
  constructor() {
    super();

    // Initialize instance variables.
    this.template = document.querySelector('#task-row-template').content;
    this.data = new TaskList();
    this.resetEditingState();

    // For each task in the TaskList, insert a row.
    this.data.todo.forEach(({ name, expected }, i) => {
      this.insertRow(i + 1, name, expected);
    });
  }

  /**
   * Create a new task with the given inputs and update the UI.
   * @param {String} name Name of new task.
   * @param {Number} expected Expected number of pomos.
   */
  addRow(...args) {
    this.data.createTask(...args);
    this.insertRow(this.data.todo.length, ...args);
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
   * @param {Number} index Index of task to remove.
   * @param {HTMLElement[]} inputs References to input tag of the row.
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
   * @param {Number} row Row of task to remove.
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

    this.nextElementSibling.reset();
  }

  /**
   * Save changes to the row.
   */
  saveEdit() {
    const newValues = this.editingInputs.map((input) => input.value);
    this.data.updateTask(Number(this.editingRow.dataset.id), ...newValues);
    this.originalValues = newValues;
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
   * @param {Number} number Number of new task on the list.
   * @param {String} name Name of new task.
   * @param {Number} expected Expected number of pomos.
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

    userInputs.forEach((input) => {
      input.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' && saveIcon.style.display !== 'none') {
          this.saveEdit();
        }
      });
      input.addEventListener('input', () => {
        const [newName, newExpected] = this.editingInputs.map((inputValue) => inputValue.value);
        if (newName.length === 0 || Number(newExpected) === 0) {
          saveIcon.style.display = 'none';
        } else {
          saveIcon.style.display = 'visible';
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
