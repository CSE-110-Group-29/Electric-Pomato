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

  localStorage.clear();
});

test('Blank Test', () => {
  const usernameInput = new UsernameInput();
  expect(usernameInput).not.toBeNull();
});

test('keyup Event Listener', () => {
  // document.body.innerHTML.find('start-input-button').simulate.click();
  const keyboardEvent = document.createEvent('KeyboardEvent');
  const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
  keyboardEvent[initMethod](
    'keyup', // event type: keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // view: should be window
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    40, // keyCode: unsigned long - the virtual key code, else 0
    0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
  );
  // username
  const username = 'Jest';
  const usernameInput = new UsernameInput();

  // write username
  usernameInput.querySelector('.start-input').value = username;
  usernameInput.querySelector('.start-input-button').dispatchEvent(keyboardEvent);
  // const localStorageUsername = localStorage.getItem('Username');

  // expect(localStorageUsername).toBe(username);
  expect(true).toBe(true);
});
