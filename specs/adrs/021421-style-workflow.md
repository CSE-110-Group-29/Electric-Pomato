# Feb. 14th 2021, Style Workflow ADR
> (Last Modified: Mar. 3rd 2021, by Arman Mansourian)

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/lint.yml)
- [Meeting Notes](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)

## Status: accepted

## Deciders: Arman, Liam, and Andy

## Context and Problem Statement

How should we set up our style enforcement framework?

## Things to consider

1. What style enforcement framework should we use?
2. Depending on the testing framework we choose, what template should we work with?
3. Are there any specific config file options we want?

## Decision Outcome

1. The DevOps team chose ESLint as the framework.
    - ESLint is the standard framework at time of development with many online resources.
    - There are alternative frameworks available, Prettier was considered but not chosen.
    - Github has Actions and built in support for ESLint.
2. The Airbnb style guide was chosen.
    - Airbnb style guide is one of the standard ESLint style guide extensions in popular use.
    - This decision is mainly made by Andy, who has the most experience in these frameworks and styling guides.
    - Primary uses: naming convention and code formatting such as spacing, bracket styling, and conditional logic stying.
3. It is the responsibility of devs to run the linter on their code prior to pushing, the automated workflow is a fail-safe.
