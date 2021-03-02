/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 */

class CurrentYear extends HTMLElement {
  /**
   * Appends a text element containing the current year from a Date() object.
   */
  constructor() {
    super();

    this.appendChild(document.createTextNode(new Date().getFullYear()));
  }
}

customElements.define('current-year', CurrentYear);
