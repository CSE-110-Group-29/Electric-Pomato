import { describe, expect } from '@jest/globals';
import StartContainer from '../js/StartContainer.js';

describe('StartContainer tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="col-12 col-lg-6">
      <start-container></start-container>
      <template id="username-input-template">
          <div class="d-flex justify-content-start align-items-center">
              <h2 class="subtitle">Are you ready to plug in?</h2>
              <img class="start-question-icon" src="img/plug.svg" alt="plug">
          </div>
          <div class="start-input-container mb-2">
              <input class="start-input" type="text" autofocus required>
              <div class="start-input-button">
                  <img src="img/bolt.png" alt="bolt">
              </div>
          </div>
          <h5>Enter your name to start.</h5>
      </template>
    </div>`;
    localStorage.clear();
  });

  test('Simple Constructor', () => {
    // create a start container
    const startContainer = new StartContainer();

    // should only create a Username Input child element if there
    // is no username in local storage
    expect(startContainer.childElementCount).toBe(1);
    expect(startContainer.firstChild.nodeName).toBe('USERNAME-INPUT');
  });

  test('Constructor with a Username in Local Storage', () => {
    const username = 'Jest';
    localStorage.setItem('Username', username);
    // create a start container
    const startContainer = new StartContainer();

    // Create two child elements, a WelcomeMessage element and
    // a startButtons element
    expect(startContainer.childElementCount).toBe(2);
    expect(startContainer.firstChild.nodeName).toBe('WELCOME-MESSAGE');
    expect(startContainer.lastChild.nodeName).toBe('START-BUTTONS');
    expect(startContainer.firstChild.innerHTML).toContain(username);
  });
});
