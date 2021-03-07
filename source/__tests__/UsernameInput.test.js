import { expect } from '@jest/globals';
import UsernameInput from '../js/UsernameInput.js';

// Initialize the DOM with a UsernameInput element.
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
});

test('Blank Test', () => {
  const usernameInput = new UsernameInput();
  expect(usernameInput).not.toBeNull();
});
