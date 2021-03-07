# Feb. 1st 2021, High Fidelity Design for FrontEnd ADR

Resources to get started:

- [Presentation](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/brainstorm/Electric%20Pomato%20UI/UX%20Design%20(Complete)/high_fidelity_interface_design.pdf)
- [Figma](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1)
- [Brainstormed Ideas](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/brainstorm)
- [Design Team Meeting](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/012521-design.md)
- Ask anyone from design team about this.

## Status: accepted

## Deciders: Teresa, Liam, Donald, Andy, and Allen

## Context and Problem Statement

What are the features and mechanics that we want to subsume into our final design of our application?

## Decision Drivers

- Simplicity and intuitiveness.
- Francesco Chirillo's Pomodoro Technique philosophy.
- Task and time management.

## Options to Consider and Decision Outcome (bolded options indicate the features we want to implement)

1. Theme.
    - Use CSS themes, specifically the paper CSS theme: see the bolded reason below.
    - __Draw our own designs__: we were considering CSS themes, especially the paper theme, but Teresa showed us some drawings, which looked better and felicitous for the setting of a Pomodoro Timer.
    - Design only using a simplistic layout and a minimum amount of art: most of the members felt that having a miniscule amount of art was a bit too bland for our application.
2. Features pertaining to Francesco's Pomodoro Technique.
    - __25-30 minute break timer after 4 Pomodoros__: this is part of the core functionality of the timer, so we need to include it.
    - __To-do today/Task list sheet__: only having a timer as our project would seem insipid and prosaic. Adding a task list seems reasonable and achievable by the end of the quarter. Furthermore, it will help the user manage their tasks for the day.
    - Activity Inventory sheet: while this is part of the Pomodoro Technique that Francesco delineated, we felt that this may inundate the development team with too many things to implement. It also adds a layer of complexity that goes against the idea of simplicity and intuitiveness that we want for the user.
    - Unplanned and urgent list: same reason as above, especially because this is one of the most convoluted parts of the Pomodoro Technique.
        - ~~Urgent task slot: IGNORE.~~
    - __Records sheet__: our team decided to incorporate this page because it goes along with the task list and would help the user summarize his or her performance; however, we don't want this to be too sophisticated for the sake of giving the developers enough time to work on this project.
    - __Estimated number of Pomodoros__: this is a relatively straightforward thing to implement. It's also a mechanic that Francesco limns in his book.
        - Allow and track multiple estimations for a single task: this can engender a number of issues for the development team, and it may make parts of the page look cluttered. The biggest issue with this feature is that it aggrandizes the number of variables to keep track of and may drastically alter the way the Records Sheet must be displayed.
        - Evince estimated and real number of Pomodoros below timer: this simply contributes to clutter on the page and isn't necessary to implement.
3. Miscellaneous features.
    - Plots and visuals: this can introduce impediments because of how much planning may be invovled for implementing these features, so we thought it's best to exlude them from this project.
    - Display task remaining and completed count: Same reason as "evince estimated and real number of Pomodoros below timer."
    - __Documentation on application itself__: after a bit of thinking, we feel that our documentation would only take up a modicum of space on a Wiki page, so we advocated for writing documentation on the application itself, specifically on the landing page.
        - __Landing page__: we decided to incorporate a landing page to help introduce the user to the application since the Pomodoro Technique is a rather obscure self-improvement technique.
    - Docmentation on separate wiki page: see "documentation on application itself" above.
4. Funcitonality.
    - __Begin button for the timer__: to clarify, we were debating on whether the timer should start immediately after adding completing the task list at the beginning of the day or prompt the user to start when they're ready. We decided to do the latter. That is, to add a button prompting the user so the application doesn't start untowardly.
    - Exit application button during the break timer: the user can just close the application any time. Additionally, it just adds more clutter.
    - Hide timer and supplant it with a hoverable "bar:" this might make the application a lot less intuitive and understandable for the user.
    - __"I finished early!" button__: the user needs to be able to indicate if they finish their task early so they don't get stuck on the same task even if they've completed it.
        - UPDATE: “I finished early” may be ambiguous because some people may take that as finish the break early. It will be renamed to “I need another Pomodoro” instead. 
    - __"I need more time!" button__: ~~our reason for changing the button if the number of actual Pomodoros exceeds that of the user's estimated Pomodoros is because of the following philosophy behind the Pomodoro Technique: you should start getting a feel for how much time each task should take as you employ this technique, which should help you with planning. This small time pressure should help encourage the aforementioned idea.~~
        - ~~UPDATE: the development team thinks this makes the logic a bit convoluted. They want to change this button to use the same logic as the “I finished early!” so it doesn’t forcibly kick the user off, which may stress out the user.~~
        - UPDATE 2: Teresa brought up that both buttons ("I need another Pomodoro" and "I finished") should be implemented; these buttons should have a toggle function that enables the user to swap between these two buttons. Clicking on "I finished!" changes the screen to the "Next Task" screen while clicking on "I need another Pomodoro" should change the screen to the "Current Task" screen.
    - __Prompt the user to input more tasks if they've completed all their tasks for the day__: ~~perhaps the user may want to do more tasks in a single day, and this doesn't add much complexity.~~
        - ~~UPDATE: the development team thinks that implementing this is wishful thinking, so we are moving this to rejected.~~
        - UPDATE 2: we changed our minds again. The application should show the prompt after the user completes the last task. The timer will still count down while the prompt is shown on the screen. however. If the timer fully elapses, then it should automatically take the user to the Records Sheet screen.
5. User information storage.
    - Store user accounts: implementing this would most likely require a server/backend component of this project, which is an unconscionable expectation for the developers.
    - __Only keep track of a single user__: this application is most likely going to be used for personal reasons, so we decided to only keep track of a single user's information.
6. Page layout.
    - __Single page for timer__: as our project was still in an amorphus state, this is something we needed to ask the developers about since it shapes the code layout of our project. They ultimately decided to go for a single pagea application (timer page only) because it's a lot easier to keep track of things and minimizes the number of times the program must interact with local storage.
    - Multiple pages for timer: see "single page for timer" above.
7. Task list appearance.
    - __Pop-up task list__: The task list is tucked away at the bottom of the timer page. Our task list acts like a dropdown menu when the user places their cursor over its bar. The option of keeping the entire task list on the same screen as the timer was discarded, because it would be too distracting and adding clutter on the screen.
    - Display task list and timer concomitantly on the same page: see "pop-up task list" above.
