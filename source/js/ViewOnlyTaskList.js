import TaskList from './TaskList.js';

class ViewOnlyTaskList extends HTMLElement {
  constructor() {
    super();

    this.data = new TaskList();

    this.titleTemplate = document.querySelector('#view-title-template').content;
    this.headerRowTemplate = document.querySelector('#view-header-row-template').content;
    this.rowTemplate = document.querySelector('#view-row-template').content;

    this.appContainer = document.querySelector('.app-container');
    this.appTitle = document.querySelector('.app-title');
    this.visible = false;

    this.classList.add('task-list-container', 'view-only');

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

    this.addEventListener('click', () => {
      this.visible = !this.visible;
      this.position();
    });
  }

  connectedCallback() {
    this.position();
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

  position() {
    if (this.visible) {
      this.style.top = `${this.appTitle.offsetHeight}px`;
    } else {
      this.style.top = `${this.appContainer.offsetHeight - (this.querySelector('.header').getBoundingClientRect().top - this.getBoundingClientRect().top)}px`;
    }
  }
}

customElements.define('view-only-task-list', ViewOnlyTaskList);

export default ViewOnlyTaskList;
