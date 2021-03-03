/**
 * @file Will determine if the 'Returning User' button is displayed based on localStorage.
 * @author Andy Young
 * @author Justin Lee
 * @author Donald Wolfson
 */

class ReturningUser extends HTMLElement {
  /**
   * Appends a text element containing the current year from a Date() object.
   */
  constructor() {
    super();

    // Only create the button if 'Username' in localStorage.
    if (localStorage.getItem('Username')) {
      this.appendChild(ReturningUser.createButton());
    }
  }

  /**
   * Create a HTML object for the 'Returning User' button.
   * <button type="button" class="btn btn-secondary btn-lg">Returning User</button>
   */
  static createButton() {
    const button = document.createElement('button');
    const text = document.createTextNode('Open App');
    button.type = 'button';
    button.classList.add('btn', 'btn-secondary', 'btn-lg');
    button.appendChild(text);

    return button;
  }
}

customElements.define('returning-user', ReturningUser);
