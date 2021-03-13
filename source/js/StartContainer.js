/**
 * @file Creates the start container that will create all buttons and inputs depending
 *       on state of localStorage
 * @author Andy Young
 * @author Justin Lee
 * @author Liam Stone
 */

import StartButtons from './StartButtons.js';
import UsernameInput from './UsernameInput.js';
import WelcomeMessage from './WelcomeMessage.js';

/**
 *Appends the start container that will contain all user-interactable elements
 *            in the landing page
 * @extends HTMLElement
 */
class StartContainer extends HTMLElement {
  constructor() {
    super();

    const username = localStorage.getItem('Username');

    if (username) { // Returning User
      this.appendChild(new WelcomeMessage(username));
      this.appendChild(new StartButtons());
    } else { // First time User
      this.appendChild(new UsernameInput());
    }
  }
}

export default StartContainer;
customElements.define('start-container', StartContainer);
