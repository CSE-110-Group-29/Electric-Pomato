import CurrentYear from '../js/CurrentYear.js';

// Initialize the DOM with a TimerUI element.
beforeEach(() => {
  document.body.innerHTML = '<footer><div class="container"><div>Made with ❤️ by Team Pomato!</div><div>© Pomato <current-year></current-year></div></div></footer>';
});

test('If HTML is Initialized Correctly', () => {
  expect(document.body.innerHTML).toContain('current-year');
});

test('If CurrentYear Stores Correct Year', () => {
  const currentYear = new CurrentYear();
  const actualYear = new Date().getFullYear();
  expect(currentYear.innerHTML).toContain(actualYear);
});
