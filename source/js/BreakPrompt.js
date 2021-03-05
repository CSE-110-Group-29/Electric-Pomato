/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 */

/**
 * @class Appends a text element containing the current year from a Date() object.
 * @classdesc Updates the HTML with the current year.
 */
class BreakPrompt extends HTMLElement {
  constructor() {
    super();

    this.classList.add('text-center');
    this.appendChild(document.querySelector('#prompt-template').content.cloneNode(true));
  }

  getChecked() {
    return this.lastElementChild.checked;
  }
}

customElements.define('break-prompt', BreakPrompt);
export default BreakPrompt;
