// to learn jest.timers -> https://jestjs.io/docs/en/timer-mocks

const { Timer } = require('../js/Timer');

test('Check Timers Initialized Values', () => {
  const FiveSecondTimer = new Timer(0, 5, null);
  expect(FiveSecondTimer.parseMinutes()).toBe('00');
  expect(FiveSecondTimer.parseSeconds()).toBe('05');
});

jest.useFakeTimers();

test('Check Timer Count Down', () => {
  const jestCallback = jest.fn();
  let something = 1;
  const callback = function thing(a, b) {
    jestCallback();
    something = 2;
    console.log(a);
    console.log(b);
  };
  const OneSecondTimer = new Timer(0, 1, callback);

  expect(jestCallback).not.toBeCalled();
  OneSecondTimer.startTimer();
  jest.advanceTimersByTime(1001);

  expect(jestCallback).toHaveBeenCalledTimes(1);
  expect(something).toBe(2);
});

jest.useFakeTimers();

test('Check Timer Count Down 2', () => {
  const callbackFunction = jest.fn();
  const OneSecondTimer = new Timer(1, 0, callbackFunction);

  expect(callbackFunction).not.toBeCalled();
  OneSecondTimer.startTimer();
  jest.runAllTimers();

  expect(callbackFunction).toHaveBeenCalledTimes(61);
});
