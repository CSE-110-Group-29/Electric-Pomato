import { beforeEach, jest, test } from '@jest/globals';
import WelcomeMessage from '../js/WelcomeMessage.js';

beforeEach(() => {
  document.body.innerHTML = '<h1> Something </h1>';
});

test('Blank Test', () => {
  const username = 'Jest';
  const welcomeMessage = new WelcomeMessage(username);
  expect(welcomeMessage.innerHTML).toContain(username);
});
