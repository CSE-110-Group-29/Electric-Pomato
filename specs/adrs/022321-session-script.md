# Feb. 14th 2021, Session Script ADR
> (Last Decision: Mar. 3 2021, by Andy Young)

Resources to get started:

- [Session Script](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/app.js)

## Status: accepted

## Deciders: Donald, Enrique, Justin, Annika, Andy, and Teresa

## Context and Problem Statement

How should we set up our session script?

## Things to consider

1. What should the session script be doing in relation to the other components of the project?
2. What are the main states of the application that the session script needs to keep track of?
3. Consider if we need to give the session script the responsibility of tracking the buttons on the timer screen (“I finished!” and “I need another Pomodoro!”).
4. What should the session script store?
5. How should the session script behave after the user finishes filling out things on the landing page? That is, how does the session script get information on the user's state?
6. Possibly consider if the page layout needs to change to enable the session script to function properly.

## Decision Outcome

1. The session script should be creating the TastListUI and TimerUI objects; these two UI components will use the session script to talk to each other.
    - A question asked in the TaskList ADR is still germane to this ADR: Should the TaskList and session script be merged? In response to the question, the development team originally wanted to merge the TaskList and session script into a single Session object, but they decided that it’s still better to bifurcate it.
      - As mentioned above, the session script will act as the middleman between the Timer and the TaskList object – it’s only communicating with UI components.
    - The session script should be managing everything in the project.
      - Update: Enrique says it seems like the solution to almost all our problems is just to give responsibility to the session script, which is limned by the rest of this ADR.
2. There are only two states that need to be kept track of:
   1. A state for the initial task list at the beginning of the day.
   2. A state for the timer page.
    - For the former, the session script should know when the user has pressed the “Start my Day” button. This will also be used to determine if the user is in the latter state.
    - If the session script detects that the user is on the timer screen, it will begin the timer immediately.
    - Note: there has been some discussion on making the buttons prompts. This has been ruled out because it would introduce more clutter and isn't felicitous for a setting of minimal distractions.
3. It’s imperative for the session script to keep track of the “I finished!” and “I need another Pomodoro” buttons.
    - The TimerUI is incognizant of when this happens. This is inauspicoius because it occurs when the session script needs to create a new timer.
    - The session script needs to use this as an indicator to pop the next task off the task list.
4. The following are elements that the session script should contain:
    - Username: {String} If username is not entered, then the user should be redirected to the landing page.
    - Started: {Boolean} A boolean variable for whether the user created their task list or not. If the user has already created their task list, then user will see the tomato timer and the view-only task list. If the user has not created their task list, then the user will view the editable task list page. It should be noted that if the user refreshes, the Started state will be used appropriate redirection.
    - TotalPomos: {Number} The total number of elapsed pomodoros is recorded in localStorage. 
    - Timer: {Boolean} If timer boolean is true, then the green pomodoro timer will be displayed. If the timer boolean is false, then the red break timer will be displayed.
    - Timer Notification: When the pomodoro or break timer ends (0 minutes, 0 seconds), there will be a desktop browser notification. We decided not to add additional sounds, because operating systems have their own default sound settings regarding notifications.
5. The session script will decide what to show as soon as the user inputs all of his or her information on the landing page.
    - ~~Send the session script down a list of event handlers to see what the user has done.~~
    - Update: it will be much simpler to check what’s in LocalStorage because it should already contain information about what the user has done.
    - As mentioned above, the user could be on any stage of the application (for example, the initial task list for the day, the work timer, the break timer, etc.). We will refer to the two states as denoted in question 2 for the session script’s behavior.
6. Some changes should be made to the page layout. See the Figma design for more details.
    - The landing page will be its own page.
    - The rest of the application will be a SPA.
    - As mentioned above, the task list does not need to interact with the timer in any way. Thus, this means the session script will need to handle some of the LocalStorage states. If the user has already created tasks and refreshed the page, the session script needs to be cognizant of the Task objects that don’t need to be created.
