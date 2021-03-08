import { beforeEach, jest, test } from '@jest/globals';
import WelcomeMessage from '../js/WelcomeMessage.js';

beforeEach(() => {
  document.body.innerHTML = '<h1> Something </h1>';
});

test('WelcomeMessage construction', () => {
  const username = 'Jest';
  const welcomeMessage = new WelcomeMessage(username);
  expect(welcomeMessage.innerHTML).toContain(username);
  expect(welcomeMessage.getElementsByTagName('h2')[0].classList.contains('subtitle')).toBe(true);
  expect(welcomeMessage.getElementsByTagName('h2')[0].classList.contains('mb-3')).toBe(true);
});
