import TaskList from './TaskList.js';

class ViewOnlyTaskList extends HTMLElement {
  constructor() {
    super();

    this.data = new TaskList();
    this.titleTemplate = document.querySelector('#view-title-template').content;
    this.headerRowTemplate = document.querySelector('#view-header-row-template').content;
    this.rowTemplate = document.querySelector('#view-row-template').content;

    this.insertTitle('Task List');
    this.appendChild(this.headerRowTemplate.cloneNode(true));
    this.data.todo.forEach(({ name, expected, actual }, i) => {
      this.insertRow(i + 1, name, expected, actual);
    });

    this.insertTitle('Completed');
    this.lastElementChild.classList.add('mt-4');
    this.appendChild(this.headerRowTemplate.cloneNode(true));
    this.data.completed.forEach(({ name, expected, actual }, i) => {
      this.insertRow(i + 1, name, expected, actual);
    });
  }

  insertRow(...args) {
    const clone = this.rowTemplate.cloneNode(true);
    this.appendChild(clone);

    const row = this.lastElementChild;
    const inputs = row.querySelectorAll('input');

    inputs.forEach((input, i) => {
      input.value = args[i];
    });
  }

  insertTitle(title) {
    this.appendChild(this.titleTemplate.cloneNode(true));
    this.lastElementChild.appendChild(document.createTextNode(title));
  }
}

customElements.define('view-only-task-list', ViewOnlyTaskList);

export default ViewOnlyTaskList;
