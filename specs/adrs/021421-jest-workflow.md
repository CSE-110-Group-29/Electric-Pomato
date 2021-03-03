# Feb. 14th 2021, Jest Workflow ADR
> (Last Modified: Mar. 3rd 2021, by Arman Mansourian)

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/jest.yml)

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
    - This decision was a rather straightforward one because it is a commonly used framework with many online resources.
    - The team found Github Actions directly executing written tests remotely, make testing convenient for dev team.
3. We should be executing these tests on all `push`es.
    - Run these tests every time someone updates the remote codebase with more code (any time someone pushes).
    - Run these tests even if these pushes occur on branches other than main.
4. Initially decided on having devs write simple starter tests and have DevOps team go back and write more complex ones, trying to find edge cases. However the dev team, and in particular Enrique, wrote a significant amount of tests which are sufficient to cover most edge cases.
    - Every function in the codebase should be tested (start with basic ones for reference before moving on to edge cases).
    - Add some object instantiation tests for the Timer and TaskList objects.
    - Enrique found it best to make tests after code has been implemented since it fits the development team's process.
    - The development team's build process: all Jest tests must be passed before branches can be pushed to the main branch.
    - Enrique will also add final "consolidation" tests checking the full functionality on the branch, allowing for backtracking when revisiting or modifying pre-existing code from merged branches.
