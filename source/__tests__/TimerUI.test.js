import { expect, jest } from '@jest/globals';
import TimerUI from '../js/TimerUI.js';

// Initialize the DOM with a TimerUI element.
beforeEach(() => {
  document.body.innerHTML = '<template id="timer-template"><div class="timer-container position-relative mh-100 mw-100"><img class="timer-image w-100 h-100 position-absolute top-50 start-50 translate-middle" src="./img/green-tomato.svg"><div class="timer-text w-100 h-0 text-center position-absolute top-50 start-50 translate-middle"><span id="minutes"></span>:<span id="seconds"></span></div></div></template>';
  jest.useFakeTimers();
});

test('HTML Properly Initialized', () => {
  expect(document.body.innerHTML).toContain('timer-template');
  expect(document.body.innerHTML).toContain('timer-text');
  expect(document.body.innerHTML).toContain('timer-image');
});

test('TimerUI Properly Initialized', () => {
  const timerUI = new TimerUI();
  // timerUI's classList should hold everything given in its constructor.
  expect(timerUI.classList).toContain('position-absolute', 'w-100', 'h-100', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center');
  // timerUI's text should hold the entire HTML element within the timer-template block.
  expect(timerUI.text.innerHTML).toContain('<span id="minutes"></span>:<span id="seconds"></span>');
});

test('TimerUI Properly Resets', () => {
  const timerUI = new TimerUI();
  timerUI.reset();
  // timerUI's text should just be START.
  expect(timerUI.text.innerHTML).toContain('START');
});

test('TimerUI Properly Initializes Timer', () => {
  const timerUI = new TimerUI();
  timerUI.createTimer(0, 5);
  // Check if the Timer was set.
  expect(timerUI.timer.minutes).toBe(0);
  expect(timerUI.timer.seconds).toBe(5);
});

test('TimerUI Properly Prints Time', () => {
  const timerUI = new TimerUI();
  timerUI.createTimer(0, 5);
  // Check if the Timer was set.
  expect(timerUI.timer.minutes).toBe(0);
  expect(timerUI.timer.seconds).toBe(5);
});

test('TimerUI Properly Updates to Green Tomato', () => {
  const timerUI = new TimerUI();
  // Check if the timer-image was set.
  timerUI.setColorGreen();
  expect(timerUI.querySelector('.timer-image').src).toContain('img/green-tomato.svg');
});

test('TimerUI Properly Updates to Red Tomato', () => {
  const timerUI = new TimerUI();
  // Check if the timer-image was set.
  timerUI.setColorRed();
  expect(timerUI.querySelector('.timer-image').src).toContain('img/red-tomato.svg');
});

test('TimerUI Properly runs the Timer Object', () => {
  const timerUI = new TimerUI();
  timerUI.createTimer(0, 2, (newMinute, newSecond) => {
    this.text.innerHTML = `${TimerUI.parseMinutes(newMinute)} : ${TimerUI.parseSeconds(newSecond)}`;
  });
  timerUI.startTimer();

  // advance one second
  jest.advanceTimersByTime(1000);
  expect(timerUI.timer.minutes).toBe(0);
  expect(timerUI.timer.seconds).toBe(1);

  // advance another second second
  jest.advanceTimersByTime(1000);

  expect(timerUI.timer.minutes).toBe(0);
  expect(timerUI.timer.seconds).toBe(0);
});
