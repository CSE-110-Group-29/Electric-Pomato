const Timer = require('../js/Timer');

test('Check Timer\'s Initialized Values', () => {
  const FiveSecondCountdown = new Timer(0, 5, null);
  expect(FiveSecondCountdown.parseMinutes()).toBe('00');
  expect(FiveSecondCountdown.parseSeconds()).toBe('05');
});
