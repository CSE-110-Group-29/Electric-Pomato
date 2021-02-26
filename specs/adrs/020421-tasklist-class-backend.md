# Feb. 4th 2021, TaskList Class for BackEnd ADR

Resources to get started:

- [Script](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TaskListUI.js)
- [Dev Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)

## Status: accepted

## Deciders: Andy, Annika, Teresa

## Context and Problem Statement

How should we design the TaskList object? Additionally, the development team wants to think of how this object will behave in different situations.

## Things to consider

-	Should we allow the user to edit the task list? If so, how should the user edit  a task on the list?
-	How should we store information from the task list?
-	What should be stored?
-	How should we handle initialization of the task list?
-	How should we handle modifications to the task list?
-	How should the work be split up?
-	How do we deal with the user refreshing the page?
-	Is it much easier to work with the task list if it’s converted to a Session object?

## Decision Outcome

-	Implementing the ability for the user to edit the task list is a reasonable and achievable addition for the amount of time we have in the quarter.
  - •	Don’t have a separate button to edit a task on the list because it might be annoying. Instead, allow the user to click on the input itself to edit the task.
