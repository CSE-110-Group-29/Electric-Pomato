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
      <h2 class="text-white">Did you complete your task?</h2>
      <input type="checkbox">
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
    bp.lastElementChild.checked = true;
    expect(bp.getChecked()).toBe(true);
  });
});
