// to learn jest.timers -> https://jestjs.io/docs/en/timer-mocks

const { Timer } = require('../js/Timer');

// CONSTRUCTOR TESTS

test('Check Timers Initialized Values 1', () => {
  const minutes = 0;
  const seconds = 5;
  const FiveSecondTimer = new Timer(minutes, seconds, null);
  expect(FiveSecondTimer.minutes).toBe(minutes);
  expect(FiveSecondTimer.seconds).toBe(seconds);
  expect(FiveSecondTimer.parseMinutes()).toBe('00');
  expect(FiveSecondTimer.parseSeconds()).toBe('05');
});

test('Check Timers Initialized Values 2', () => {
  const minutes = 9;
  const seconds = 5;
  const FiveSecondTimer = new Timer(minutes, seconds, null);
  expect(FiveSecondTimer.minutes).toBe(minutes);
  expect(FiveSecondTimer.seconds).toBe(seconds);
  expect(FiveSecondTimer.parseMinutes()).toBe('09');
  expect(FiveSecondTimer.parseSeconds()).toBe('05');
});

test('Check Timers Initialized Values : Minutes > 99', () => {
  const minutes = 123;
  const seconds = 50;
  const FiveSecondTimer = new Timer(minutes, seconds, null);
  expect(FiveSecondTimer.minutes).toBe(minutes);
  expect(FiveSecondTimer.seconds).toBe(seconds);
  expect(FiveSecondTimer.parseMinutes()).toBe('123');
  expect(FiveSecondTimer.parseSeconds()).toBe('50');
});

test('Check Timers Initialized Values : Second > 59', () => {
  const minutes = 1;
  const seconds = 61;
  const FiveSecondTimer = new Timer(minutes, seconds, null);
  expect(FiveSecondTimer.minutes).toBe(minutes);
  expect(FiveSecondTimer.seconds).toBe(seconds);
  expect(FiveSecondTimer.parseMinutes()).toBe('01');
  expect(FiveSecondTimer.parseSeconds()).toBe('61');
});

// COUNT DOWN TESTS

jest.useFakeTimers();

test('Check Timer Count Down 2sec and Callback Each Sec', () => {
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  // callback jest function and increment mutableNum
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  const seconds = 2;
  const OneSecondTimer = new Timer(0, seconds, callback);

  expect(jestCallback).not.toBeCalled();
  OneSecondTimer.startTimer();
  jest.advanceTimersByTime(seconds * 1000);

  expect(jestCallback).toHaveBeenCalledTimes(seconds);
  expect(mutatableNum).toBe(seconds);
});

test('Check Timer Count Down 1min and Callback Each Sec', () => {
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  // callback jest function and increment mutableNum
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  const seconds = 60;
  const OneSecondTimer = new Timer(0, seconds, callback);

  expect(jestCallback).not.toBeCalled();
  OneSecondTimer.startTimer();
  jest.advanceTimersByTime(seconds * 1000);

  expect(jestCallback).toHaveBeenCalledTimes(seconds);
  expect(mutatableNum).toBe(seconds);
});

test('Check Timer Count Down 1min and Access Timer Numbers', () => {
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  // callback jest function and increment mutableNum
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  const minutes = 1;
  const seconds = 0;
  const OneMinuteTimer = new Timer(minutes, seconds, callback);

  expect(jestCallback).not.toBeCalled();
  OneMinuteTimer.startTimer();

  // count down 1 minute and check the values
  jest.advanceTimersByTime(1000);
  for (let i = 1; i <= minutes * 60; i += 1) {
    expect(OneMinuteTimer.seconds).toBe(60 - i);
    expect(OneMinuteTimer.minutes).toBe(0);
    jest.advanceTimersByTime(1000);
    // +1 because I ticked the timer 1 second prior to for loop
    expect(mutatableNum).toBe(i + 1);
  }
});

test('Null callbackEverySecond Member Variable', () => {
  const callbackFunction = jest.fn();
  const FiveSecondTimer = new Timer(0, 5, null);

  expect(callbackFunction).not.toBeCalled();
  FiveSecondTimer.startTimer();
  jest.runAllTimers();

  expect(callbackFunction).not.toBeCalled();
});
