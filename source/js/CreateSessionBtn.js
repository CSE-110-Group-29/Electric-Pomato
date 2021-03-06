/**
 * @file Will determine if the 'Create Session' button is displayed based on localStorage.
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
      this.appendChild(CreateSessionBtn.createButton());
    }
  }

  /**
     * Create a HTML object for the 'Create Session' button.
     * <button type="button" class="btn btn-secondary btn-lg">Create New Session</button>
     */
  static createButton() {
    const btn = document.createElement('btn');
    const text = document.createTextNode('Create New Session');
    btn.classList.add('btn', 'btn-secondary', 'btn-lg');
    btn.appendChild(text);
    btn.addEventListener('click', CreateSessionBtn.btnCallback);
    return btn;
  }

  static btnCallback() {
    // TODO show warning alert
    // Wipe stuff from last session from local storage
    localStorage.removeItem('TaskList');
    localStorage.removeItem('Started');
    localStorage.removeItem('TotalPomos');
    localStorage.removeItem('Timer');
    window.location.href = './app.html';
  }
}

customElements.define('create-session', CreateSessionBtn);
