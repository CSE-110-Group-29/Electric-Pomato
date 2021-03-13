# Feb. 20th 2021, JSDoc Workflow ADR
> (Last Modified: Mar. 3rd 2021, by Arman Mansourian)

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/.github/workflows/deploy.yml)
- although this is the same file as the deployment file, it has it's own build action which is why it has it's own ADR.

## Status: accepted

## Deciders: Arman and Liam

## Context and Problem Statement

How should we set up documentation in our workflow?

## Things to consider

1. How do we want to create documentation for this project?
2. The different types of documentation frameworks that exist.

## Decision Outcome

1. The DevOps team decided to implement automatic documentation generation to provide a more user friendly and accessible means of understanding the code base.
2. They chose JSDoc as the documentation framework for the project.
    - JSDocs seems to be mainstream used framework with many online resources.
    - It was suggested by the professor in lecture and there are existing GitHub Actions for it.
    - JSDoc is already a framework that has been adopted by several members in our group. There are a few others like ESDoc and Gitbook, but the team prefered JSdocs.

## Third Party Uses

The DecOps team used the styling of [minami](https://github.com/nijikokun/minami) for JSdocs. They chose this styling because the photos on his README looked neater than generic JSdocs pages. It also had details on how to implement this style in their github page.
