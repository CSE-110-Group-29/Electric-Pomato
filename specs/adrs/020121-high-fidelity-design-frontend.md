# Feb. 1st 2021, High Fidelity Design for FrontEnd ADR

Resources to get started:

- [Presentation](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/brainstorm/Electric%20Pomato%20UI/UX%20Design%20(Complete)/high_fidelity_interface_design.pdf)
- [Figma](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Brainstormed Ideas](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/brainstorm)
- [Design Team Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/012521-design.md)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Teresa, Liam, Donald, Andy

## Context and Problem Statement

What are the features and mechanics that we want to include in our final design of our application?

## Considered Options

- Use CSS themes, specifically the paper CSS theme
- Design only using a simplistic layout with minimal art
- Draw our own designs
- 25-30 minute break timer after 4 Pomodoros
- To-do today/Task list sheet
- Activity Inventory sheet
- Unplanned and urgent list
- Urgent task slot
- Records sheet
- Estimate Pomodoros
- Allow and track multiple estimations for a single task
- Indicate estimated and real Pomodoros below timer
- Plots and visuals
- Begin button for timer
- Display task remaining and completed count
- Landing page
- Docmentation on separate wiki page
- Documentation on application itself
- Store user accounts
- Only keep track of a single user
- Single page for timer
- Multiple pages for timer
- Pop-up task list
- Display task list and timer on the same page
- Exit application button during break timer
- Hide timer and replace it with a hoverable "bar"
- I finished early! button
- I need more time! button
- Prompt the user to input more tasks if they completed all their tasks

## Decision Outcome

### Accepted

- Draw our own designs
  - Below, we were considering CSS themes, especially the paper theme, but Teresa showed us some drawings, which looked considerably better and much more fitting for the setting of a Pomodoro Timer
- 25-30 minute break timer after 4 Pomodoros
  - This is part of the core functionality of the timer, so we need to include it
- To-do today/Task list sheet
  - Only having a timer as our project wouldn't seem very meaningful. Adding a task list seems reasonable and achievable by the end of the quarter, and would help the user manage their tasks for the day
- Records sheet
  - Our team decided to include this page because it goes along with the task list and would help the user summarize his/her performance; however, we don't want this to be too sophisticated for the sake of giving the developers enough time to work on this project
- Estimate Pomodoros
  - This is a relatively straightforward thing to implement that is part of the functionality that Francesco limns
- Begin button for timer
  - To clarify, we were debating on whether the timer should immediately start after adding to the task list at the beginning of the day or prompt the user to start when they're ready. We decided to add this button so the application doesn't start off untowardly.
- Only keep track of a single user
  - This application is most likely going to be used for personal use, so we decided to only keep track of a single user's information
- Landing page
  - We decided for a landing page to help introduce the user to the application since most people probably don't know what the Pomodoro Technique even is
- Documentation on application itself
  - After a bit of thinking, we feel that there isn't going to be enough documentation to the point that we need an entirely separate wiki for it
- Single page for timer
  - This is something we needed to ask the developers about since it shapes the code layout of our project. They ultimately decided to go for a single page because it's a lot easier to keep track of things and reduces the number of times the program must interact with local storage.
- Pop-up task list
  - We felt like hiding the task list while the work timer is active mich be an inconvenience for the user. There was also another option for keeping the task list on the same screen as the timer, but that may add a lot of clutter on the screen.
- I finished early! button
  - The user needs to be able to indicate if they finish their task early so they don't get stuck on the same task even if they've completed it
- I need more time! button
  - Our reasoning for changing the button if the number of actual Pomodoros exceeds that of the user's estimated Pomodoros is because one of one of the philosophies behind the Pomodoro Technique: you should start getting a feel for how much time each task should take as you employ this technique, which should help you with planning. This small time pressure should help encourage the aforementioned idea.

### Rejected

- Design only using a simplistic layout with minimal art
  - Most of the members felt that having minimal art was a bit too bland and uninteresting for our application
- Use CSS themes, specifically the paper CSS theme
  - The team was considering this first, but as mentioned above, we saw Teresa's drawings for the application and found it much more fitting for the project
- Activity Inventory sheet
  - While this is part of the Pomodoro Technique that Francesco delineated, we felt that this both adds too much to the list of things for the development team to implement and adds a layer of complexity that goes against the idea of simplicity and intuitiveness that we want for the user
- Unplanned and urgent list
  - Same reason as above, especially because this is one of the complicated parts of the Pomodoro Technique
- Urgent task slot
  - Same reason as above again
- Allow and track multiple estimations for a single task
  - This can cause a number of issues for the development team, and it may make parts of the page look cluttered. The biggest issue with this feature is that it adds more variables to keep track of and may drastically alter the way the records sheet must be displayed.
- Indicate estimated and real Pomodoros below timer
  - This simply contributes to clutter on the page and isn't necessary to implement
- Plots and visuals
  - Because of how much planning may be invovled for implementing these features, we thought it's best to leave them out
- Display task remaining and completed count
  - Same reason as "indicate estimated and real Pomodoros below timer"
- Docmentation on separate wiki page
  - See "documentation on application itself" in the accepted section
- Store user accounts
  - Implementing this would most likely require a server/backend component of this project, which is quite an unreasonable expectation for the developers
- Multiple pages for timer
  - See "single page for timer" in the accepted section
- Display task list and timer on the same page
  - See "pop-up task list" in the accepted section
- Exit application button during break timer
  - The user can just close the application any time. Additionally, it just adds more clutter.
- Hide timer and replace it with a hoverable "bar"
  - This might make the application a lot less intuitive and understandable for the user
- Prompt the user to input more tasks if they completed all their tasks
  - ~~Perhaps the user may want to do more tasks in a single day, and this doesn't add much complexity~~
  - UPDATE: the development team thinks that implementing this is wishful thinking, so we are moving this to rejected.
