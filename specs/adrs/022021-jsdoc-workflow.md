# Feb. 20th 2021, JSDoc Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/jsdoc-workflow/.github/workflows/jsdoc.yml)
- Ask Arman about this.

## Status: accepted

## Deciders: Class Recommendation, Arman, and Liam

## Context and Problem Statement

How should we set up our documentation in our workflow?

## Things to consider

1. How do we want to create documentation for this project?
2. The different types of documentation frameworks that exist.

## Decision Outcome

1. The DevOps team chose to implement automatic documentation.  
  - The only other alternative to documentation would be someone writing it manually in Markdown. This technically could be done for the project because the code base is relatively small. Doing so, however, is still too much of an inconvenience for us, thus we still went with automation.
  - Automatic documentation is a requirement for the class.
2. The DevOps team simply chose JSDocs
  - JSDocs seemed to be the most widely used framework.
  - It was suggested by the professor in lecture.
  - JSDocs is already a framework that has been adopted by several members in our group. There are a few others like ESDoc and Gitbook but the team didn't look into them much because they figured that learning something new wouldn't be efficient.
