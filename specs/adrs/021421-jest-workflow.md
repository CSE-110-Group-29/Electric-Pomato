# Feb. 14th 2021, Jest Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/jest.yml)
- Ask Arman and Liam about this one for clarification.

## Status: accepted

## Deciders: Arman, Liam

## Context and Problem Statement

How should we set up our testing framework?

## Things to consider

1. Maybe some alternatives to modular unit testing.
2. What testing framework should we use?
3. How often should we be running tests and when do we run them?
4. How should we approach writing the tests themselves?

## Decision Outcome

1. Everyone unanimously agreed to incorporate unit testing from the beginning.
2. The DevOps team chose Jest as the unit testing framework.
    - Jest is the mainstream testing framework.
    - This decision was a rather straightforward one because we weren't cognizant of alternatives before looking at the assignment's examples.
    - The team found some propitious Github Actions for it, make testing convenient for us.
3. We should be executing these tests fairly often.
    - Run these tests every time someone updates the remote codebase with more code (any time someone pushes).
    - Run these tests even if these pushes occur on branches other than main.
4. Because of the learning curve and arduity the DevOps team has with Jest, however, they decided that it's auspicious to have a member from the development team (Enrique) write out some rudimentary tests, which would provide some examples for the DevOps members to reference.
    - Enrique found it best to make tests after code has been implemented since it fits the development team's process. They tend to do a copious amount of exploratory programming.
    - The decisions are made based on the development team's build process: all Jest tests must be passed before branches can be pushed to the main branch. Enrique will also add final "consolidation" tests. That is, he will add tests that ensure the full funcionality of the branch. This way, if the team has to change something in the codebase they've previously completed, then they will know exactly how it changes the functionality of the code and if they need to make adjustments to other areas of the codebase.
    - Every function in the codebase should be tested (start with basic ones for reference before moving on to edge cases).
    - Add some object instantiation tests for the Timer and TaskList objects.
