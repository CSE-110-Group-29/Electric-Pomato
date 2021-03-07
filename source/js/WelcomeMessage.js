/**
 * @file Creates a custom element to display a welcome back message to the user
 * @author Andy Young
 * @author Justin Lee
 * @author Liam Stone
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

    const message = document.createElement('h2');
    const text = document.createTextNode(`Welcome Back, ${username}!`);
    message.appendChild(text);
    message.classList.add('subtitle', 'mb-3');

    this.appendChild(message);
  }
}

customElements.define('welcome-message', WelcomeMessage);
export default WelcomeMessage;
