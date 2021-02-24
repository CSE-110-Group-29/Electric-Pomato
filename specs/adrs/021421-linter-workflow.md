# Feb. 14th 2021, Linter Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/lint.yml)
- Ask Arman and Liam about this one for clarification.

## Status: accepted

## Deciders: Arman, Liam

## Context and Problem Statement

[Describe the context and problem statement, e.g., in free form using two to three sentences. You may want to articulate the problem in form of a question.]

## Context and Problem Statement

How should we set up our style enforcement framework?

## Things to consider

- What style enforcement framework should we use?
- Depending on the testing framework we choose, what template should we work with?
- Are there any specific config file options we want?

## Decision Outcome

- The DevOps team chose ESLint as the framework.
  - There are several different frameworks available. The team narrowed it down to Prettier and ESLint, but the team quickly decided that ESLint would be the better framework to use.
  - ESLint is the standard framework nowadays.
  - Github has built in support for ESLint, which makes it convenient for us
- The Airbnb style guide was chosen.
  - Same as ESLint, Airbnb is also the standard style guide to use.
  - It's also built in as an extension in ESLint, making it very easy to set up.
  - This decision is mainly made by Andy, who has the most experience in these frameworks and styling guides.
- No specific changes to the config file were made.
