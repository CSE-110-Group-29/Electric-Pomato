# Feb. 14th 2021, Jest Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/jest.yml)
- Ask Arman and Liam about this one for clarification.

## Status: accepted

## Deciders: Arman, Liam

## Context and Problem Statement

How should we set up our testing framework?

## Things to consider

- Maybe some alternatives to modular unit testing.
- What testing framework should we use?
- How often should we be running tests and when do we run them?
- How should we approach writing the tests themselves?

## Decision Outcome

- Everyone was set on doing unit testing from the beginning.
- The DevOps team chose Jest as the unit testing framework.
  - Jest is the most common testing framework.
  - This decision was rather straightforward to make because we weren't aware of alternatives before looking at the assignment's examples.
  - The team found some nice Github Actions for it, which would make it a lot more convenient for us.
- We should be running these tests fairly often.
  - Run these tests every times someone updates the remote codebase with new additions to code (any time someone pushes).
  - Run these tests even if these pushes occur on branches other than main.
- Because of the learning curve and the amount of difficulty the DevOps team has with Jest, they decided that it's probably best to have a member from the development team (Enrique) write out some example tests first, which would provide some examples for the DevOps members to reference.
  - Enrique found it best to make tests after code has been implemented in the codebase since it fits the development team's process. The development team tends to do a copious amount of exploratory programming -- they go through a few iterations of what they want before adding tests.
  - Every function in the codebase should be tested (start with basic ones for reference before moving on to edge cases).
  - Add some object instantiation tests for objects like the timer and task list.
