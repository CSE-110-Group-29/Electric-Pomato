/**
 * @file Creates custom HTML element for a break timer prompt.
 * @author Andy Young
 * @author Arman Mansourian
 */

/**
 * Prompt HTML element to be displayed on break timer.
 * @extends HTMLElement
 */
class BreakPrompt extends HTMLElement {
  /**
  * Create the HTML prompt element.
  */
  constructor() {
    super();
    this.classList.add('text-center');
    this.appendChild(document.querySelector('#prompt-template').content.cloneNode(true));
  }

  /**
  * Get whether checkbox is checked.
  * @return {boolean} checked property
  */
  getChecked() {
    return this.lastElementChild.checked;
  }
}

customElements.define('break-prompt', BreakPrompt);
export default BreakPrompt;
