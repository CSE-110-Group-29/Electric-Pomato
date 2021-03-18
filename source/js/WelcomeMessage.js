/**
 * @file Creates a custom element to display a welcome back message to the user
 * @author Andy Young
 * @author Justin Lee
 * @author Liam Stone
 * @author Annika Hatcher
 */

/**
 * Custom welcome back message shown to return user.
 * @extends HTMLElement
 */
class WelcomeMessage extends HTMLElement {
  /**
  * Constructor for WelcomeMessage
  */
  constructor(username) {
    super();
    this.container = document.createElement('div');
    this.container.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mb-3', 'flex-wrap');
    this.appendChild(this.container);
    this.enterDefaultMode(username);
  }

  createEditNameButton() {
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-pencil-alt', 'text-warning', 'edit-icon');
    editIcon.addEventListener('click', () => {
      this.enterEditMode();
    });
    return editIcon;
  }

  createFinishEditButton() {
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-check', 'text-success', 'save-icon');
    saveBtn.appendChild(icon);

    saveBtn.addEventListener('click', () => {
      let newName = this.container.firstChild.value;
      if (newName.length > 0) {
        localStorage.setItem('Username', newName);
      } else {
        newName = localStorage.getItem('Username');
      }
      this.enterDefaultMode(newName);
    });
    return saveBtn;
  }

  createCancelEditButton() {
    const cancelBtn = document.createElement('i');
    cancelBtn.classList.add('fas', 'fa-times', 'text-danger', 'cancel-icon');

    cancelBtn.addEventListener('click', () => {
      const name = localStorage.getItem('Username');
      this.enterDefaultMode(name);
    });
    return cancelBtn;
  }

  /**
   * Show the text input for user to change their name.
   */
  enterEditMode() {
    const input = document.createElement('input');
    input.value = localStorage.getItem('Username');
    input.classList.add('edit-name');

    // Clear old container
    while (this.container.lastElementChild) {
      this.container.removeChild(this.container.lastElementChild);
    }

    // Overwrite with text input and finish button
    this.container.appendChild(input);
    this.container.appendChild(this.createFinishEditButton());
    this.container.appendChild(this.createCancelEditButton());

    input.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        this.querySelector('.save-btn').click();
      }
    });

    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        this.querySelector('.save-btn').disabled = false;
      } else {
        this.querySelector('.save-btn').disabled = true;
      }
    });

    input.focus();
  }

  /**
   * Show the welcome message and user's saved username.
   */
  enterDefaultMode(username) {
    const message = document.createElement('h2');
    const text = document.createTextNode(`Welcome Back, ${username}!`);
    message.appendChild(text);
    message.classList.add('subtitle', 'mb-0');

    // Clear old container
    while (this.container.lastElementChild) {
      this.container.removeChild(this.container.lastElementChild);
    }
    this.container.appendChild(message);
    this.container.appendChild(this.createEditNameButton());
  }
}

customElements.define('welcome-message', WelcomeMessage);
export default WelcomeMessage;
