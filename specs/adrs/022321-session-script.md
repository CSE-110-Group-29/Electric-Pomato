# Feb. 14th 2021, Linter Workflow ADR

## Status: accepted

## Deciders: Donald, Enrique, Justin, Annika, and Andy

## Context and Problem Statement

How should we set up our session script?

## Things to consider

- What states of the application should the session script keep track of?
- What should the session script contain?
- How should the session script behave after the user finishes filling out things on the landing page? That is, how does the session script get information on the user's state?
- Possibly consider if the page layout needs to change to enable the session script to function properly.
- Should the buttons on the timer page be their own stand-alone components or should they be linked to the session script?
- How should the session script keep track of the task list?

## Decision Outcome

