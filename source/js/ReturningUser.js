/**
 * @file Will determine if the 'Returning User' button is displayed based on localStorage.
 * @author Andy Young
 * @author Justin Lee
 * @author Donald Wolfson
 */

/**
 * @class Appends a text element containing the current year from a Date() object.
 * @classdesc Construct the HTML Button for Returning Users.
 */
class ReturningUser extends HTMLElement {
  constructor() {
    super();

    // Only create the button if 'Username' in localStorage.
    if (localStorage.getItem('Username')) {
      this.appendChild(ReturningUser.createAnchor());
    }
  }

  /**
   * Create a HTML object for the 'Returning User' button.
   * <button type="button" class="btn btn-secondary btn-lg">Returning User</button>
   */
  static createAnchor() {
    const a = document.createElement('a');
    const text = document.createTextNode('Open App');
    a.href = 'app.html';
    a.classList.add('btn', 'btn-secondary', 'btn-lg');
    a.appendChild(text);
    return a;
  }
}

customElements.define('returning-user', ReturningUser);
export default ReturningUser;
