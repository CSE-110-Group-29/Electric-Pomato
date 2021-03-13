# Feb. 4th 2021, Timer Class for BackEnd ADR
> (Last Decision: Mar. 5 2021, by Enrique Gan)

Resources to get started:

- [Timer Class](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/Timer.js)
- [TimeUI HTMLElement](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TimerUI.js)
- [Dev Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)

## Status: accepted, finished, tested

## Deciders: Justin, Enrique, Donald

## Context and Problem Statement

We need a way to keep track of time - start a Pomodoro or the break timer - and a basic Timer object felt like the most natural solution. We can create a new Timer object, run it, have it tell us how much time is left, and then throw it away when we're done.

NOTE: Anything to do with the HTML representation rather than the internal workings of the time tracking functionality of the clock has been offloaded to the TimerUI class. This will allow us to have classes with minimal responsibilities and be flexible if we decide to change how we render the time onto the screen.

## Things to consider

1. The timer needs to know how much time has passed since we started it.
   - Should we have the timer object store the time it was started and periodically check how much time has passed since?
   - Should we make use of javascript `setInteval()` exclusively to tick the timer down? 
2. How do we reflect the current time left onto html? (Now the job of the TimerUI class)
   - Should we have the timer class modify the html in some way?
   - Offload the responsibility to the user of the timer class?
3. How should we format the text representation of the time left? (Now the job of the TimerUI class)
4. Should we be able to pause it?
5. What are some constraints for the timer?

## Decision Outcome

1. We have decided to use `setInterval()` to tick the timer down every second. This may be off by miniscule amounts of time, so it should be negligible for short periods of time like 25 minutes. This method, however, will not allow the application to know how much time is left if someone is to close the application. Thus, we decided that closing the tab will 'void' a Pomodoro.
2. We initially had the Timer class modify HTML elements. Since there are many ways to handle the modification of HTML code, we thought this might be giving too much responsibility to the simple Timer class. We instead require a function pointer to be passed into the constructor and periodically called when we start the timer using the `startTimer()` function. That passed function will be called every second with the current remaining time as an argument. This function call works similarly to `callbackEverySecond(minutesLeft,secondsLeft)` -- it will essentially allow the parent class of the Timer object to do whatever they want with that information (for example, modyfing the HTML).
3. We decided that since we will most likely use 25 minute Pomodoro sessions and 5 minute breaks, the `MM:SS` format should suffice. To clarify, the M's represent the number of minutes left while the S's denote the number of seconds left. For example, 25 minutes and 0 seconds left will look like `'25:00'`, and 1 minute and 9 seconds left will look like `'01:09'`.
4. ~~From our high fidelity Pomodoro design, we decided that we would not give the end user the ability to pause the timer. For one, it goes against our idea that we should encourage the end user to "get into flow" as well as reduce the amount of decisions the user has to make. Additionally, a rule in the Pomodoro Technique is that the timer should not be tampered with. That is, once you start the timer, you should not be touching it.~~
   - UPDATE: we decided to no longer force the work and break timers to start immediately after each other. Whenever the tomato timers change, they will always display a "START" overlay and wait for the user. This should make it a bit more convenient for the user if they end up deep in their task and aren't cognizant of a fully elapsed timer.
6. We will enforce the 25 minute Pomodoro session and 5 minute break timer, and as an error check, we won't permit any parent classes to create invalid times like 90 seconds and 99+ minutes. To clarify, this shouldn't be construed as allowing the end user to set their own amount of time. This is in place to ensure the use legal time values during development and testing. To cover these edge cases, minute and second values in the constructor will be capped at 59 and 99 respectively, thereby ensuring that our time is always in the form of `MM:SS`. For example, a Timer object of `new Timer(100,60)` will produce an object with the same values as in `new Timer(99,59)`.
