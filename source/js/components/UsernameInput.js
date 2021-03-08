/**
 * @file Creates a custom input for first time users to put their name in
 * @author Andy Young
 * @author Justin Lee
 * @author Teresa Truong
 * @author Donald Wolfson
 * @author Liam Stone
 */

/**
 * Appends a custom text input element for users to put their name
 * @extends HTLMElement
 */
class UsernameInput extends HTMLElement {
  /**
  * constructor for USernameInput
  */
  constructor() {
    super();
    this.appendChild(document.querySelector('#username-input-template').content.cloneNode(true));
    const input = this.querySelector('.start-input');
    const button = this.querySelector('.start-input-button');

    input.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        button.click();
      }
    });

    button.addEventListener('click', () => {
      // Ignore it if input item is empty
      if (input.value.length < 1) return;

      // Save name to localStorage
      localStorage.setItem('Username', input.value);

      // Redirect to app.html
      window.location.href = './app.html';
    });
  }
}

customElements.define('username-input', UsernameInput);
export default UsernameInput;
