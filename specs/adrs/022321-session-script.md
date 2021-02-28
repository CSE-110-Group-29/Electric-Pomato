# Feb. 14th 2021, Session Script ADR

## Status: accepted

## Deciders: Donald, Enrique, Justin, Annika, and Andy

## Context and Problem Statement

How should we set up our session script?

## Things to consider

1.	What should the session script be doing in relation to the other components of the project?
2.	What are the main states of the application that the session script needs to keep track of?
3.	Consider if we need to give the session script the responsibility of tracking the buttons on the timer screen (“I finished!” and “I need another Pomodoro!”).
4.	What should the session script store?
5.	How should the session script behave after the user finishes filling out things on the landing page? That is, how does the session script get information on the user's state?
6.	Possibly consider if the page layout needs to change to enable the session script to function properly.

## Decision Outcome

1.	The session script should be creating the TastListUI and TimerUI objects; these two UI components will use the session script to talk to each other.
    - A question asked in the TaskList ADR is still relevant here: should the TaskList and session script be merged? In response to the question, the development team originally wanted to merge the TaskList and session script into a single Session object, but they decided that it’s still better to bifurcate it. As mentioned above, the session script will act as the middleman between the Timer and the TaskList object – it’s only communicating with UI components.
    - Basically, the session script should be managing everything in the project. Update: Enrique says it seems like the solution to almost all our problems is just to give the responsibility to the session script, which is limned by the rest of this ADR.
2.	There are only two states that need to be kept track of: a state for the initial task list at the beginning of the day and a state for the timer page.
    - For the former, the session script should know when the user has pressed the “Start my Day” button. This will also be used to determine if the user is in the latter state
    - If the session script detects that the user is on the timer screen, it will begin the timer immediately.
    - Note: there has been some discussion of making the buttons prompts. This has been ruled out because it would make the timer screen a bit cluttered.
3.	It’s imperative for the session script to keep track of the “I finished!” and “I need another Pomodoro” buttons. This is because the TimerUI has incognizant about when this happens, and this occurs during the situation where the session script needs to create a new timer. Concurrently, the session script needs to use this as an indicator to pop the next task off the task list.
4.	The following are elements that the session script should contain:
    - Username
    - A Boolean variable of HasCreatedTaskList or something similar. It should be noted that if the user refreshes the task list screen, this Boolean variable should construe this as remaining on the initial task list screen.
    - Number of Pomodoros
5.	The session script will decide what to show as soon as the user inputs all his or her information on the landing page.
    - Send the session script down a list of event handlers to see what the user has done. 
    - Update: it should be much simpler to merely check what’s in LocalStorage because it should already contain information about what the user has done.
    - As mentioned above, the user could be on any stage of the application (for example, inputting tasks on the initial task list for the day, the work timer, the break timer, etc.). We will refer to the two states as denoted in question 2 for the session script’s behavior.
6.	Some changes should be made to the page layout. See the Figma design for more details.
    - The landing page will be its own page
    - The rest of the application will be a SPA.
    - As mentioned above, the task list does not need to interact with the timer in any way. Thus, this also means the session script will need to handle some of the LocalStorage states. If the user has already created tasks and refreshed the page, the session script needs to be cognizant of the Task objects that don’t need have to be created.

