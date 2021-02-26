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

1. Use CSS themes, specifically the paper CSS theme
2. Design only using a simplistic layout with minimal art
3. Draw our own designs
4. 25-30 minute break timer after 4 Pomodoros
5. To-do today/Task list sheet
6. Activity Inventory sheet
7. Unplanned and urgent list
8. Urgent task slot
9. Records sheet
10. Estimate Pomodoros
11. Allow and track multiple estimations for a single task
12. Indicate estimated and real Pomodoros below timer
13. Plots and visuals
14. Begin button for timer
15. Display task remaining and completed count
16. Landing page
17. Docmentation on separate wiki page
18. Documentation on application itself
19. Store user accounts
20. Only keep track of a single user
21. Single page for timer
22. Multiple pages for timer
23. Pop-up task list
24. Display task list and timer on the same page
25. Exit application button during break timer
26. Hide timer and replace it with a hoverable "bar"
27. I finished early! button
28. I need more time! button
29. Prompt the user to input more tasks if they completed all their tasks

## Decision Outcome

### Accepted

3. Draw our own designs
  - Below, we were considering CSS themes, especially the paper theme, but Teresa showed us some drawings, which looked considerably better and much more fitting for the setting of a Pomodoro Timer
4. 25-30 minute break timer after 4 Pomodoros
  - This is part of the core functionality of the timer, so we need to include it
5. To-do today/Task list sheet
  - Only having a timer as our project wouldn't seem very meaningful. Adding a task list seems reasonable and achievable by the end of the quarter, and would help the user manage their tasks for the day
9. Records sheet
  - Our team decided to include this page because it goes along with the task list and would help the user summarize his/her performance; however, we don't want this to be too sophisticated for the sake of giving the developers enough time to work on this project
10. Estimate Pomodoros
  - This is a relatively straightforward thing to implement that is part of the functionality that Francesco limns
14. Begin button for timer
  - To clarify, we were debating on whether the timer should immediately start after adding to the task list at the beginning of the day or prompt the user to start when they're ready. We decided to add this button so the application doesn't start off untowardly.
16. Landing page
  - We decided for a landing page to help introduce the user to the application since most people probably don't know what the Pomodoro Technique even is
19. Documentation on application itself
  - After a bit of thinking, we feel that there isn't going to be enough documentation to the point that we need an entirely separate wiki for it
20. Only keep track of a single user
  - This application is most likely going to be used for personal use, so we decided to only keep track of a single user's information
21. Single page for timer
  - This is something we needed to ask the developers about since it shapes the code layout of our project. They ultimately decided to go for a single page because it's a lot easier to keep track of things and reduces the number of times the program must interact with local storage.
23. Pop-up task list
  - We felt like hiding the task list while the work timer is active mich be an inconvenience for the user. There was also another option for keeping the task list on the same screen as the timer, but that may add a lot of clutter on the screen.
27. ~~I finished early!~~ button
  - The user needs to be able to indicate if they finish their task early so they don't get stuck on the same task even if they've completed it
  - UPDATE: “I finished early” may be ambiguous because some people may take that as finish the break early. It will be renamed to “I need another Pomodoro” instead.

### Rejected

1. Use CSS themes, specifically the paper CSS theme
  - The team was considering this first, but as mentioned above, we saw Teresa's drawings for the application and found it much more fitting for the project
2. Design only using a simplistic layout with minimal art
  - Most of the members felt that having minimal art was a bit too bland and uninteresting for our application
6. Activity Inventory sheet
  - While this is part of the Pomodoro Technique that Francesco delineated, we felt that this both adds too much to the list of things for the development team to implement and adds a layer of complexity that goes against the idea of simplicity and intuitiveness that we want for the user
7. Unplanned and urgent list
  - Same reason as above, especially because this is one of the complicated parts of the Pomodoro Technique
8. Urgent task slot
  - Same reason as above again
11. Allow and track multiple estimations for a single task
  - This can cause a number of issues for the development team, and it may make parts of the page look cluttered. The biggest issue with this feature is that it adds more variables to keep track of and may drastically alter the way the records sheet must be displayed.
12. Indicate estimated and real Pomodoros below timer
  - This simply contributes to clutter on the page and isn't necessary to implement
13. Plots and visuals
  - Because of how much planning may be invovled for implementing these features, we thought it's best to leave them out
15. Display task remaining and completed count
  - Same reason as "indicate estimated and real Pomodoros below timer"
17. Docmentation on separate wiki page
  - See "documentation on application itself" in the accepted section
19. Store user accounts
  - Implementing this would most likely require a server/backend component of this project, which is quite an unreasonable expectation for the developers
22. Multiple pages for timer
  - See "single page for timer" in the accepted section
24. Display task list and timer on the same page
  - See "pop-up task list" in the accepted section
25. Exit application button during break timer
  - The user can just close the application any time. Additionally, it just adds more clutter.
26. Hide timer and replace it with a hoverable "bar"
  - This might make the application a lot less intuitive and understandable for the user
28. I need more time! button
  - ~~Our reasoning for changing the button if the number of actual Pomodoros exceeds that of the user's estimated Pomodoros is because one of one of the philosophies behind the Pomodoro Technique: you should start getting a feel for how much time each task should take as you employ this technique, which should help you with planning. This small time pressure should help encourage the aforementioned idea.~~
  - UPDATE: the development team thinks this makes the logic a little more complicated than needed.
  - They want to change this button to use the same logic as the “I finished early!” so it doesn’t forcibly kick the user off, which may stress out the user.
  - The button now merely changes to “I finished!”
29. Prompt the user to input more tasks if they completed all their tasks
  - ~~Perhaps the user may want to do more tasks in a single day, and this doesn't add much complexity~~
  - UPDATE: the development team thinks that implementing this is wishful thinking, so we are moving this to rejected.
