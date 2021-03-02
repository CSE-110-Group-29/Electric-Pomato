# Feb. 14th 2021, Style Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/lint.yml)
- [Meeting Notes](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/meetings/020421-dev.md)
- Ask Andy for clarification on AirBnB style guide.
- Ask Arman and Liam about this one for clarification on the linter.

## Status: accepted

## Deciders: Arman, Liam

## Context and Problem Statement

How should we set up our style enforcement framework?

## Things to consider

1. What style enforcement framework should we use?
2. Depending on the testing framework we choose, what template should we work with?
3. Are there any specific config file options we want?

## Decision Outcome

1. The DevOps team chose ESLint as the framework.
    - There are several different frameworks available. The team narrowed it down to Prettier and ESLint, but they quickly decided that ESLint would be the better framework to use.
    - ESLint is the standard framework nowadays.
    - Github has built in support for ESLint, which makes it convenient for us
2. The Airbnb style guide was chosen.
    - Same as ESLint, Airbnb is also the standard style guide to use.
    - It's also built in as an ESLint extension, making it easy to set up.
    - This decision is mainly made by Andy, who has the most experience in these frameworks and styling guides.
    - Although most of AirBnB's guide is elaborate, we primarily use it for its naming convention, while we use ESLint to help enforce a similar format on tabs and function structure.
3. No specific changes to the config file were made.
