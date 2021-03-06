/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 */

/**
 * @class Appends a text element containing the current year from a Date() object.
 * @classdesc Updates the HTML with the current year.
 */
class BreakPrompt extends HTMLElement {
  constructor(callback) {
    super();

    this.classList.add('text-center');
    this.appendChild(document.querySelector('#prompt-template').content.cloneNode(true));
    this.lastElementChild.addEventListener('change', callback.bind(this, this));
  }

  getChecked() {
    return this.lastElementChild.checked;
  }
}

customElements.define('break-prompt', BreakPrompt);
export default BreakPrompt;
