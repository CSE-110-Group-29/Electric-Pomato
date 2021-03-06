/**
 * @file Creates the start container that will create all buttons and inputs depending 
 *       on state of localStorage
 * @author Andy Young
 * @author Justin Lee
 */

/**
 * @class
 * @classdesc Appends the start container that will contain all user-interactable elements
 *            in the landing page
 */
class StartContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild(document.querySelector('#start-container-template').content.cloneNode(true));
    const startContainerDiv = this.querySelector('#start-container');

    if (localStorage.getItem('Username')) { // Returning User
      const welcomeMessage = document.createElement('welcome-message');
      startContainerDiv.appendChild(welcomeMessage);
      const createNewSessionBtn = document.createElement('create-session');
      startContainerDiv.appendChild(createNewSessionBtn);
      const prevTaskList = JSON.parse(localStorage.getItem('TaskList'));
      if (prevTaskList.todo.length > 0 || prevTaskList.completed.length > 0) { // Tasklist exists
        const resumeSessionBtn = document.createElement('returning-user');
        startContainerDiv.appendChild(resumeSessionBtn);
      }
    } else { // First time User
      const usernameInput = document.createElement('username-input');
      startContainerDiv.appendChild(usernameInput);
    }
  }
}

customElements.define('start-container', StartContainer);
