/**
 * Author: Andy Young, Teresa Truong, Annika Hatcher
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/12/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/13
 */

import TaskList from './TaskList.js';

/**
* Constructor for the task list object.
*/
class TaskListUI extends HTMLElement {
  constructor() {
    super();

    this.template = document.querySelector('#task-row-template').content;
    this.data = new TaskList();
    this.resetEditingState();

    this.data.todo.forEach(({ name, expected }, i) => {
      this.insertRow(i + 1, name, expected);
    });

    this.addTaskRow = this.nextElementSibling;
  }

  addRow(...args) {
    this.data.createTask(...args);
    this.insertRow(this.data.todo.length, ...args);
  }

  resetEditingState() {
    this.editingRow = null;
    this.editingInputs = null;
    this.originalValues = null;
  }

  /**
   * Remove task from todo at given index.
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

    this.addTaskRow.reset();
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

    this.addTaskRow.reset();
  }

  /**
   * Add a row.
   */
  insertRow(...args) {
    const clone = this.template.cloneNode(true);
    this.appendChild(clone);

    const row = this.lastElementChild;
    const inputs = row.querySelectorAll('input');
    const [editIcon, removeIcon, saveIcon, cancelIcon] = row.querySelectorAll('i');
    const [number] = args;

    row.dataset.id = number - 1;

    inputs.forEach((input, i) => {
      input.value = args[i];
    });

    editIcon.addEventListener('click', () => {
      this.editRow(row, Array.from(inputs).slice(-2));
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

customElements.define('task-list', TaskListUI);
