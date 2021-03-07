/**
 * @file Creates and defines the ViewOnlyTaskList custom HTLMElement.
 * @author Andy Young
 * @author Annika Hatcher
 * @author Liam Stone
 * Date: 03/04/2021
 */
import TaskList from './TaskList.js';

/**
 * Defines the ViewOnlyTaskList and its helper functions.
 * @extends HTMLElements
 */
class ViewOnlyTaskList extends HTMLElement {
  constructor() {
    super();

    this.data = new TaskList();

    this.titleTemplate = document.querySelector('#view-title-template').content;
    this.headerRowTemplate = document.querySelector('#view-header-row-template').content;
    this.rowTemplate = document.querySelector('#view-row-template').content;

    this.appContainer = document.querySelector('.app-container');
    this.appHeader = document.querySelector('.app-header');
    this.visible = false;

    this.classList.add('task-list-container', 'view-only');

    this.addEventListener('click', () => {
      this.visible = !this.visible;
      this.position();
    });

    this.render();
  }

  /**
   * Callback function.
   */
  connectedCallback() {
    this.position();
  }

  render() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }

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

  /**
   * Insert a row.
   * @param  {...any} args data.
   */
  insertRow(...args) {
    const clone = this.rowTemplate.cloneNode(true);
    this.appendChild(clone);

    const row = this.lastElementChild;
    const inputs = row.querySelectorAll('input');

    inputs.forEach((input, i) => {
      input.value = args[i];
    });
  }

  /**
   * Insert a title.
   * @param {*} title The title.
   */
  insertTitle(title) {
    this.appendChild(this.titleTemplate.cloneNode(true));
    this.lastElementChild.appendChild(document.createTextNode(title));
  }

  /**
   * Update the position.
   */
  position() {
    if (this.visible) {
      this.style.top = `${this.appHeader.offsetHeight}px`;
    } else {
      this.style.top = `${this.appContainer.offsetHeight - (this.querySelector('.header').getBoundingClientRect().top - this.getBoundingClientRect().top)}px`;
    }
  }

  addPomo() {
    this.data.addPomo();
    this.render();
  }

  finishTask() {
    this.data.finishTask();
    this.render();
  }
}

customElements.define('view-only-task-list', ViewOnlyTaskList);

export default ViewOnlyTaskList;
