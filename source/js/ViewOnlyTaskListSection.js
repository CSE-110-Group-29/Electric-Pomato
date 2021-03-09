/**
 * @file TODO
 * @author Andy Young
 */

/**
 * TODO
 * @extends HTMLElement
 */
class ViewOnlyTaskListSection extends HTMLElement {
  /**
   * TODO
   */
  constructor(title, data) {
    super();

    this.headerRowTemplate = document.querySelector('#view-header-row-template').content;
    this.rowTemplate = document.querySelector('#view-row-template').content;

    this.insertTitle(title);
    this.insertHeaderRow();
    data.forEach(({ name, expected, actual }, i) => {
      this.insertRow(i + 1, name, expected, actual);
    });
  }

  /**
   * Insert a title.
   * @param {*} title - title The title.
   */
  insertTitle(title) {
    const h3 = document.createElement('h3');
    h3.classList.add('fw-bold', 'mb-0');
    h3.textContent = title;
    this.appendChild(h3);
  }

  insertHeaderRow() {
    this.appendChild(this.headerRowTemplate.cloneNode(true));
  }

  /**
   * Insert a row.
   * @param  {...any} arg - args data.
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
}

customElements.define('view-only-task-list-section', ViewOnlyTaskListSection);
export default ViewOnlyTaskListSection;
