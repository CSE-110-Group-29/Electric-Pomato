import TaskList from './TaskList.js';

class TaskListUI extends HTMLElement {
  constructor() {
    super();

    this.template = document.querySelector('template').content;
    this.data = new TaskList();
    this.resetEditingState();

    this.data.todo.forEach(({ name, expected }, i) => {
      this.insertRow(i + 1, name, expected);
    });
  }

  resetEditingState() {
    this.editingRow = null;
    this.editingInputs = null;
    this.originalValues = null;
  }

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
  }

  saveEdit() {
    const newValues = this.editingInputs.map((input) => input.value);
    this.data.updateTask(Number(this.editingRow.dataset.id), ...newValues);
    this.originalValues = newValues;
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingRow.classList.remove('edit-mode');

    this.editingInputs.forEach((input, i) => {
      input.disabled = true;
      input.value = this.originalValues[i];
    });

    this.resetEditingState();
  }

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
