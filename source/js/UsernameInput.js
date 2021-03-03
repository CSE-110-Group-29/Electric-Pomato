/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 * @author Justin Lee
 * @author Teresa Truong
 * @author Donald Wolfson
 */

class UsernameInput extends HTMLElement {
  /**
   * Appends a text element containing the current year from a Date() object.
   */
  constructor() {
    super();

    this.appendChild(document.querySelector('#start-container-template').content.cloneNode(true));
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
