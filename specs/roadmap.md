# Team Pomato's Electric Pomato! Roadmap

## Week 1

Nothing to do this week, we hadn't been assinged groupd by then.

## Week 2

Group started! First meeting!

- Setup GitHub Repo
- Create Slack
  - Create all necessary channels
- Group Bonding Event
- Group Contract
  - Everyone add one rule to the contract
- Created Weekly Meetings

## Week 3

No assignments were tasked this week (error on the side of the staff it seems).

- Weekly meeting:
  - Discussed implementation ideas and foundational concepts for the Pomodoro Technique

## Week 4

Brainstorming, and Design Team Meeting.

- Brainstorming Activity
  - Brand/Concept/Assumption/Ideas
  - Any figures
  - Themes
  - Moodboards
  - Color palettes
  - Fonts
  - Software
  - Content
    - Features
  - Overall Scope
  - Visual Design Elements
  - Flowchart
  - Wireframes and Site Architecture
- Design Team Meeting:
  - Created rough pitch for rest of group and presented it the next Weekly Meeting.
    - Problem
    - Statement of Purpose
    - Appetite
    - User Personas
    - Solution
      - Figures and explanations
      - Wireframe (system diagram)
    - Risks and Rabbit Holes
    - No-gos
- Began exploratory coding
- Resolved the following:
  - Brainstorm and Project pitch

## Week 5

Design Pitch & Begin Working on Project Backlog

- Assigned issues, and began coding in seperate branches.
  - Create a basic working timer object and library
    - Figure out how to keep a running counter in Javascript
    - Figure out how to set parameters for the counter (count-down from 25 minutes, etc.)
    - Figure out how to trigger simple events connected to timer running out (pomo is complete, add 1 to log)
  - Create a basic working TaskList object and library
    - Ability to read in a pre-existing list from local memory
    - Trigger event that displays text entry boxes after "Add element" is pressed
    - Get user input for "task name" and "expected pomo count" to form new element
    - Ability to add new element and properly render list with new element
    - Ability to delete element and properly render list with element removed
    - Make sure it holds data as a JSON
  - Add checks for value inputs when creating a new task or editing a task.
    - Name is non empty
    - Estimated Pomos is an integer
    - Estimated Pomos > 0
  - Add interaction between the Timer and TaskList objects
    - Ability for task-list to receive "done" flag from timer
    - Ability for "done" flag to increment the correct element in task-list (we can have boolean "chosen-task" variable)
    - Ability for task-list to mark a task as "completed"
  - CSS mockups
    - Have working paper css mockup as a baseline
    - Flesh out Teresa's idea in css (graphics, design language, format, etc.)
    - Brainstorm one or two alternative ideas or approaches for visual component of app
- Created Project Pitch and presented it to Sim.
- Began working on TaskList and Timer classes.
- Researching CI/CD Pipelines.
- Resolved the following issues:
  - Basic TaskList object
  - Add checks for valid task inputs for the TaskList

## Week 6

Begin the first sprint. Primary goal is to have a functional timer and tasklist on GitHub Pages.

- Assigned more issues to work on
  - Add image assets for the front-end of the project
    - Green Tomato
      - Green Tomato Highlighted.
    - "Start Day" graphic
    - Red Pomato.
  - Implement Unit Tests using Jest
    - Add Jest to list of dependencies in package.json (so that npm install will automatically include Jest)
    - Create a new GitHub Workflow that runs unit tests triggered on all pushes (see link)
    - Verify that unit tests are properly running on new pushes and catching errors
  - Implement JSDoc workflow 
  - Add unit tests for Timer object
    - Class should have a few unit tests initializing the object and accessing its elements
    - At least two base-case/simple unit tests for each function
    - At least three edge-case/less-simple unit tests for each function (this is where we try to break it 😈)
  - Convert the System Diagram.jpg file into a Draw.io file
- Created core CI/CD Pipeline
- Continued working on seperate branches.
- Resolved the following issues:
  - Implemented Jest for unit test
  - Finished adding unit test for Timer object, but more are added in the future
  - Converted the System Diagram.jpg file into a Draw.io file

## Week 7

Continue working on first sprint.

- Assigned even more issues to work on
  - Figure out how to implement and use the handshake between the TaskList and the front-end HTML cleaner in the TimerUI.js file
  - Create a parent component for TaskListUI and AddRowUI
    - TaskListUI and AddRowUI are seperate components, so they need to be wrapped together
  - Update the system diagram
  - Start creating ADRs to before we build up huge technical debt
    - Front-end ADRs
      - High Fidelity Design
      - Image Assets
      - Cascading Style Sheets
    - Back-end ADRs
      - TaskList Class
      - Timer Class
      - Session Script
    - DevOps ADRs
      - Testing Framework - Jest
      - Style
      - Deployment
      - JSDocs
- Created more in depth issues for project backlog based on the progress made
- Integrated branches
- Begin creating HTML to visualize the libraries made
- JSDocs has been implemented, but it still needs to be iterated on
- Resolved the following issues:
  - Basic working timer object and library
  - CSS mockups
  - Add image assets to front-end

## Week 8

Finish first Sprint and start the next. Primary goal is to add final touches of functionality for the user between the Timer and TaskList.

- Assigned more issues once again
  - Add documentation to the Landing Page
    - Plan:
      - Discuss how to make tasks, organize them, and make estimate Pomos for each task
      - Explain what a Pomo is.
    - Track:
      - Discuss how the app displays the current task to the user during the timer/break sequences.
    - Record:
      - Discuss comparison of Expected to Actual number of Pomodoros?
- Sprint Review and Sprint Retrospective
- Create second sprint project backlog
- Resolved the following issues:

## Week 9

Continue working on issues and branches. Goal is to have an MVP by end of week.

- More unit tests to add code coverage
- Add more code for HTMLElements to help communication between JavaScript and HTML
- Continue finding and debugging issues that arrizes
  - CSS issues
  - User input issues
  - functionality issues
- Resolved the following issues:
  - Interaction between the Timer and TaskList objects
  - Finalized JSDocs workflow
  - Finalized teh handshake mechanic in TimerUI.js
  - Wrapped TaskListUI and AddRowUI to a parent class
  - Finalized system diagram
  - Finished documentation on Landing Page

## Week 10

Final touches on project, including unit tests, and any small bugs. Sprint 2 Review and Retrospective.

- Debugging
- Add the last of unit tests
- Finalized CI/CD pipeline, particularly code coverage
- Preparation for presentation.
- Sprint Review and Retrospective
- Resolved the following issues:
  - Finished updating most of the ADRs

## Week 11

Final presentation, video or synchronous?
