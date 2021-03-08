/**
 * @file TODO
 * @author Andy Young
 * @author Justin Lee
 */

import TaskList from './TaskList.js';

/**
 * TODO
 * @extends HTMLElement
 */
class StartButtons extends HTMLElement {
  /**
  * constructor for StartButtons
  */
  constructor() {
    super();

    this.classList.add('row');

    const leftContainer = StartButtons.createButtonContainer();
    leftContainer.classList.add('mb-3', 'mb-xxl-0');
    const rightContainer = StartButtons.createButtonContainer();
    this.appendChild(leftContainer);
    this.appendChild(rightContainer);

    leftContainer.appendChild(StartButtons.createButton());
    const taskList = new TaskList();
    if (taskList.todo.length > 0 || taskList.completed.length > 0) {
      rightContainer.appendChild(StartButtons.createAnchor());
    }
  }

  /* <div class="col-12 col-lg-6"></div> */
  static createButtonContainer() {
    const div = document.createElement('div');
    div.classList.add('col-12', 'col-xxl-6');
    return div;
  }

  /**
     * Create a HTML object for the 'Create Session' button.
     * <button type="button" class="btn btn-secondary btn-lg">Create New Session</button>
     */
  static createButton() {
    const button = document.createElement('button');
    const text = document.createTextNode('Create New Session');
    button.classList.add('btn', 'btn-success', 'btn-lg', 'btn-block');
    button.appendChild(text);

    button.addEventListener('click', () => {
      // TODO show warning alert
      // Wipe stuff from last session from local storage
      localStorage.removeItem('TaskList');
      localStorage.removeItem('Started');
      localStorage.removeItem('TotalPomos');
      localStorage.removeItem('Timer');
      window.location.href = './app.html';
    });

    return button;
  }

  /**
   * Create a HTML object for the 'Returning User' button.
   * <button type="button" class="btn btn-secondary btn-lg">Returning User</button>
   */
  static createAnchor() {
    const a = document.createElement('a');
    const text = document.createTextNode('Resume My Session');
    a.href = 'app.html';
    a.classList.add('btn', 'btn-secondary', 'btn-lg', 'btn-block');
    a.appendChild(text);
    return a;
  }
}

customElements.define('start-buttons', StartButtons);
export default StartButtons;
