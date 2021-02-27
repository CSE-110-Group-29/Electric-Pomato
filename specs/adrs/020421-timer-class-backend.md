# Feb. 4th 2021, Timer Class for BackEnd ADR

Resources to get started:

- [Script](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TaskListUI.js)
- [Dev Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/Timer.js)

## Status: accepted, finished, tested

## Deciders: Justin, Enrique, Donald

## Context and Problem Statement

We need a way to keep track of time the passed when we start a pomo or a break, and a basic timer object felt like the most natural solution. We can create a new timer, run it, have it tell us how much time is left, and then throw it away when we're done.

NOTE: Anything having to do with the html representation and not so much the internal workings of how the clock keeps track of time has been offloaded to the TimerUI class. This will allow us to have classes with minimal responsibilities and be flexible if we decide to change how we render the time onto the screen. 

## Things to consider

1. The timer needs to know how much time has passed has passed since we started it.
   - Should we have the timer object store the time it was started and periodically check how much time has passed since?
   - Should we make use of javascript `setInteval()` exclusively to tick the timer down? 
2. How do we reflect the current time left onto html? (Now the job of the TimerUI class)
   - Should we have the timer class modify the html in some way?
   - Offload the responsibility to the user of the timer class?
3. How should we format the text representation of the time left? (Now the job of the TimerUI class)
4. Should we be able to pause it?
5. What are some constraints for the timer?

## Decision Outcome

1. We decided to have use `setInterval()` to tick the timer down every second. This may or may not be off by very negligible amounts, but will not be a problem for short periods of time like 25 minutes. Though, this method will not allow the app to know how much time has left if someone were to close the app tab. We decided that closing the tab will 'void' a pomo.
2. We initially had the timer class modify html elements, but since there are many ways to handle changing the html, we thought this might be giving too much responsibility to the simple timer class. So, we instead require a function pointer to be passed into the constructor and periodically called when we start the timer with the `startTimer()` function. That passed function will be called every second with the current time left as arguments. This function call looks like `callbackEverySecond(minutesLeft,secondsLeft)`. This will essentially allow the user of this class to do whatever they want with that information. For example, modyfing the html.
3. We decided that since we will most likely use 25 minute pomos and 5 minute breaks, we will use the format `MM:SS` where the M's are the minutes left and the S's are the seconds left. For example, 25 minutes and 0 seconds left will look like `'25:00'` and 1 minute left and 9 seconds left will look like `'01:09'`.
4. From our Pomodora design, we decided that it we would not give the end user the ability to pause the timer. This goes against our interpretation of Pomodora that encourages getting into flow and reducing the amount of decisions the user has to make. 
5. We will most likely want to enforce the 25 minute pomo and 5 minute break, but we will definitely not allow the user to create invalid second amounts (like 90 seconds). Nor will we want them to use pomo times beyond 60 or so minutes. Just to cover edge cases (and make sure we always use the format of `MM:SS`), in the constructor, any second amount beyond 59 will be clamped to 59 and and minute amount beyond 99 will be clamped to 99. So, creating a timer like: `new Timer(100,60)` will actually make a timer that would have been created like `new Timer(99,59)`.