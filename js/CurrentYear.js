/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 * @author Arman Mansourian
 */

/**
 * Appends a text element containing the current year from a Date() object.
 * @extends HTMLElement
 */
class CurrentYear extends HTMLElement {
  /**
   * Create the HTML text element and append.
   */
  constructor() {
    super();
    this.appendChild(document.createTextNode(new Date().getFullYear()));
  }
}

customElements.define('current-year', CurrentYear);
export default CurrentYear;
