# Feb. 4th 2021, TaskList Class for BackEnd ADR

Resources to get started:

- [Script](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TaskListUI.js)
- [Dev Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)

## Status: accepted

## Deciders: Andy, Annika, Teresa

## Context and Problem Statement

How should we design the TaskList object? Additionally, the development team wants to think of how this object will behave in different situations.

## Things to consider

1.	Should we allow the user to edit the task list? If so, how should the user edit  a task on the list?
2.	How should we store information from the task list?
3.	What should be stored?
4.	How should we handle initialization of the task list?
5.	How should we handle modifications to the task list?
6.	How should the work be split up?
7.	How do we deal with the user refreshing the page?
8.	Is it much easier to work with the task list if it’s converted to a Session object?

## Decision Outcome

-	Implementing the ability for the user to edit the task list is a reasonable and achievable addition for the amount of time we have in the quarter.
  - Don’t have a separate button to edit a task on the list because it might be annoying. Instead, allow the user to click on the input itself to edit the task.
  - ~~For now, don’t add the option to reset the task list or remove tasks from the list during the day. A warning should pop up saying that their task list is final once they’ve finished adding tasks.~~ Update: not being able to remove would be annoying for the user. It’s also not wishful thinking to implement such a thing. A reset task feature still isn’t necessary, though.
  - Use onclick in JavaScript instead of the input keyword in HTML. Andy says the advantage for doing this is that we have access to it in the Javascript file and some scoping blocks.
  - What is too much for the development team to add, however, is the ability to shift tasks around in the task list.
- The Development team has decided to use LocalStorage for storing information on the task list.
  - Appropriate for a task list because nothing important is being stored. LocalStorage is also not secure, but that’s not really a concern because of the aforementioned reason. Andy points out that this is perfect because it’s bigger than SessionStorage and Cookie storage. 
  - For this project, we’re not storing user accounts, which means we aren’t using servers in the backend. Thus, there’s no need to use more than just LocalStorage.
- We will pretty much store the same things that are mentioned in the design team’s design, which are the names of the tasks, expected number of Pomodoros, and actual number of Pomodoros.
  - Update: a Task object needs to also keep track of a task ID, remaining time for the timer, a Boolean variable to keep track of whether the task has been completed, and variable(s) to keep track of whether we’re on a long break or a short break. 
- A TaskList object should be initialized by itself extend LocalStorage.
  - It should initialize with no arguments, check LocalStorage to see if there are saved tasks, and initialize each of those tasks as instance variables. Otherwise, the TaskList object will just initialize empty.
- Whenever the user modifies the task list, it should save the contents to LocalStorage immediately.
  - It allows the TaskList object to act as a data store with its own methods to abstract away LocalStorage.
- The members of the development team that will work on the task list classes are Andy, Annika, and Teresa
  - Andy: work on the source code for TaskList and TaskListUI and discuss as many edge cases as possible with Enrique and Annika for them to handle.
  - Annika: perform exploratory coding in the TaskList.js script and work on edge cases for both the TaskList and TaskListUI classes.
  - Teresa: stylize the TaskList code.
  - Enrique: Not part of the group that’s implementing the code for the task list, but he will be writing unit tests for the TaskList class.
- Refreshing or exiting the page should just void the Pomodoro.
- ~~The development team decided that it’s much better to convert the TaskList object to a Session object.~~ Update: it’s better to keep these two objects separate. The session script will act as the middle man between the Timer and the TaskList object. This is because the session script is only communicating with UI components.
  - ~~One reason is because the TaskList object is already doing LocalStorage read and writes.~~
  - ~~It’s better to keep all the LocalStorage manipulation in one place because it makes the job of the main script easier – all it has to do is run new Session() and call the methods to do its logic.~~
