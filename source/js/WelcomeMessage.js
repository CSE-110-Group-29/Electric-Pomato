/**
 * @file Creates a custom element to display a welcome back message to the user
 * @author Andy Young
 * @author Justin Lee
 */

/**
 * @class
 * @classdesc Custom welcome back message shown to return user.
 */
class WelcomeMessage extends HTMLElement {
  constructor() {
    super();
    this.appendChild(WelcomeMessage.createMessage());
  }

  static createMessage() {
    const name = localStorage.getItem('Username');
    const message = document.createElement('h2');
    const text = document.createTextNode(`Welcome Back ${name}!`);
    message.appendChild(text);
    message.classList.add('subtitle');
    return message;
  }
}

customElements.define('welcome-message', WelcomeMessage);
