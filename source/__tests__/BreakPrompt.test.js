import { jest, test } from '@jest/globals';
import BreakPrompt from '../js/BreakPrompt.js';

describe('BreakPrompt testing', () => {
  let jestFunc; // jest mock function
  let bp; // BreakPrompt object
  beforeEach(() => {
    document.body.innerHTML = `
    <template id="view-title-template">
      <h2 class="subtitle text-center"></h2>
    </template>
    <template id="prompt-template">
    <div class="one-line">
    <h2 class="text-white">Did you complete your task?</h2>
    <input type="checkbox" id="break-checkbox" style="display: none;">
    <label for="break-checkbox" class="check">
    <svg width="18px" height="18px" viewBox="0 0 18 18">
        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
        <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
    </label>
    </div>
    </template>
    `;

    jestFunc = jest.fn();
    bp = new BreakPrompt(jestFunc);
  });

  test('Simple Construction', () => {
    expect(bp.getChecked()).toBe(false);
  });

  test('Checking Checkbox', () => {
    // check checkbox
    bp.querySelector('button').click();
    expect(bp.getChecked()).toBe(true);
  });
});
