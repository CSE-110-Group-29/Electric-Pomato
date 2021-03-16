# Feb. 19th Weekly Meeting, Sprint Review

## Meeting Details

- Type of meeting: weeky
- Members present: Allen Zou, Andy Young, Annika Hatcher, Arman Mansourian, Don Wolfson, Enrique Gan, Justin Lee, Liam Stone, Teresa Truong
- Meeting location: ZOOM
- Start/finish time: 4:00 PM PST - 5:20 PM PST

## Meeting Goals

This is also going to be our [Sprint Review](https://canvas.ucsd.edu/courses/21783/assignments/277651). So please read this assignment and be ready to share progress, and achievements! We're almost there!

1) Discuss each team's progress
   1) Progress on Timer's HTML implementation
   2) Progress on TaskList's Unit Tests
   3) Progress on DevOps
2) Automating Production branch
   1) Andy's terminal code into a Github Action
3) [ADRs assignment](https://canvas.ucsd.edu/courses/21783/assignments/259317)
   1) It turns out that a lot of the decisions made occurred in Slack rather than in meetings. A lot of those decisions weren't tracked.
   2) Allen will be PMing people throughout next week to clarify their features/code so we can have ADRs in this [directory](https://github.com/DonaldWolfson/cse110-w21-group29/tree/specs_cleanup/specs/adrs).
4) [Sprint Video](https://canvas.ucsd.edu/courses/21783/assignments/277675) (DUE 2/25)
   1) "... show off your hard work make a short 4 minute or less video (MP4 or Quicktime format) that presents the status of your software, the function of your pipeline and the health of your team."
   2) "You should also be transparent about any challenges you are facing which may have arising in your retrospective."
   3) "Finally conclude your video with a preview about what the next sprint will tackle and what stakeholders should look forward to after the next sprint."

## Sprint Review

Arman:

- Liam and Arman have worked, and finalized most of the DevOps workflows.
  - [Jest workflow](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/jest.yml).
  - [Linter workflow](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/lint.yml).
- Created issues for [backlog](https://github.com/DonaldWolfson/cse110-w21-group29/issues?q=is%3Aissue+user%3Aamansourian+).
- Created sprint [project](https://github.com/DonaldWolfson/cse110-w21-group29/projects/2).
- TODO: Implement JSDocs workflow, and Produciton branch automation.

Allen:

- Primarily wrote the [Project Pitch](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/pitch/Project%20Pitch.pdf) document with Teresa.
- Assited with Figma design.
- Helped with notetaking during meetings, kept track of a lot of major discussions, and threads between people.
- TODO: Begin working with ADR's with Donald.

Enrique:

- Exploratory Programming, focusing on Timer functions.
- Drew [System Diagram](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/interface/wireframe/System%20Diagram.jpg) of our model.
- Redrew [System Diagram](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/interface/wireframe/systemdiagram.drawio.png).
- [Timer](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/__tests__/Timer.test.js) and [TaskList](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/__tests__/TaskList.test.js) Unit Tests.
  - Debugged Jest to find best way to write unit tests using current libraries.
- TODO: Work on session script and TimerUI.js script.

Liam:

- Worked with Arman on [CI/CD Pipeline](https://github.com/DonaldWolfson/cse110-w21-group29/actions).
- Learning a lot about Github Actions.
- Fixed package.json issues.
- Lots of work on JSDocs testing and workflow.
- TODO: Finalize JSDocs workflow, and create Production branch automation.

Annika:

- Keeping up with testing and Jest API documentation.
- Working on Edge Cases for [TaskList](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/TaskList.js) and [TaskListUI](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/TaskListUI.js).
   - Update: the TaskListUI file no longer exists. Link to the ADR is [here](https://github.com/DonaldWolfson/cse110-w21-group29/blob/specs_cleanup/specs/adrs/020421-tasklist-class-backend.md).
- Assited with coding and experimenting with the TaskList.js script.
- TODO: Begin helping with adding more unit tests for TaskList and TaskListUI.

Teresa:

- Finalize the design for the project.
  - Created [Figma prototype](https://www.figma.com/file/0xkjAbdUK1WsQjAqwKRYTc/Electric-Pomato-Prototype?node-id=0%3A1).
- Stylizing TaskList code.
- Uploaded front end [image assets](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/source/img).
- TODO: Edit Sprint Video, and assist with sessions script.

Justin:

- Worked on source code for [Timer](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/Timer.js).
- Working on creating a [TimerUI](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/source/js/TimerUI.js) object similar to the TaskListUI object.
- Whiteboarding the session script.
- TODO: Continue to work on session sript, and TimerUI.js.

Andy:

- Worked on source code for [TaskList](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/TaskList.js) and [TaskListUI](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/TaskListUI.js).
   - Update: the TaskListUI file no longer exists. Link to the ADR is [here](https://github.com/DonaldWolfson/cse110-w21-group29/blob/specs_cleanup/specs/adrs/020421-tasklist-class-backend.md).
- Helped discuss lots of edge cases with Enrique and other devs in terms of testing.
- Found a way to create a [production branch](https://github.com/DonaldWolfson/cse110-w21-group29/tree/production).
- TODO: Work with dev team on finalizing smaller issues, as well as integrating code into HTML.

Donald:

- Posted issues for [backlog](https://github.com/DonaldWolfson/cse110-w21-group29/issues?q=is%3Aissue+user%3ADonaldWolfson).
- Helped work on Timer class and its [unit tests](https://github.com/DonaldWolfson/cse110-w21-group29/blame/main/source/js/Timer.js).
  - Focused on Documentation and stylized code for JSDocs.
- TODO: Help with session script, and work with Allen on ADRs.

## Meeting Notes

Andy, Liam, and Arman will continue to work on deployment to the Production branch. But will first prioritize the JSDocs workflow first.

Sprint Video Assignment:

- Teresa will be the video editor.
- Show off the funcitonality, emphasize the two HTML files we've made so far.
- Split By Team:
  - First minute, System Diagram, and System Design the Miro/Figma presentations.
    - Teresa, and Allen will do the Figma design.
  - Andy, Annika, Tereasa:
    - Talk about the TaskList, and TaskListUI.
  - Justin, Enrique, Donald:
    - Talk about the Timer
  - Liam, Arman, Allen:
    - Talk about the DevOps workflow

## Things that need to be done

- Everyone write a script for the video by Tuesday.
- Meeting tomorow for retrospective.
