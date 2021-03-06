/**
 * @file Will determine if the 'Returning User' button is displayed based on localStorage.
 * @author Andy Young
 * @author Justin Lee
 */

/**
 * @class
 * @classdesc Construct the HTML Button for creating a new session
 */
class CreateSessionBtn extends HTMLElement {
  constructor() {
    super();

    // Only create the button if 'Username' in localStorage.
    if (localStorage.getItem('Username')) {
      this.appendChild(CreateSessionBtn.createAnchor());
    }
  }

  /**
     * Create a HTML object for the 'Returning User' button.
     * <button type="button" class="btn btn-secondary btn-lg">Returning User</button>
     */
  static createAnchor() {
    const a = document.createElement('a');
    const text = document.createTextNode('Create New Session');
    a.href = 'app.html';
    a.classList.add('btn', 'btn-secondary', 'btn-lg');
    a.appendChild(text);
    return a;
  }
}

customElements.define('create-session', CreateSessionBtn);
