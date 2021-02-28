# Feb. 14th 2021, Session Script ADR

## Status: accepted

## Deciders: Donald, Enrique, Justin, Annika, and Andy

## Context and Problem Statement

How should we set up our session script?

## Things to consider

1. What states of the application should the session script keep track of?
2. What should the session script contain?
3. How should the session script behave after the user finishes filling out things on the landing page? That is, how does the session script get information on the user's state?
4. Possibly consider if the page layout needs to change to enable the session script to function properly.
5. Should the buttons on the timer page be their own stand-alone components or should they be linked to the session script?
6. How should the session script keep track of the task list?
7. TODO: There's a huge amount of stuff about the session script in the dev-team channel. Figure out how to merge this with the notes taken during the development team meeting.

## Decision Outcome

1. There are only two states that need to be kept track of: a state for the initial task list at the beginning of the day and a state for the timer page.
