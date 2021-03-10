# Feb. 20th 2021, Deployment Workflow ADR
> (Last Modified: Mar. 3rd 2021, by Arman Mansourian)

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/setup-bootstrap/.github/workflows/deploy.yml)

## Status: accepted

## Deciders: Andy, Arman, Liam

## Context and Problem Statement

How should we set up our deployment workflow?

## Things to consider

1. Should we dedicate a specific branch to the deployment workflow or use an existing branch?
2. What should be contained inside the deployment workflow branch?

## Decision Outcome

1. Because of confidentiality reasons, we should create a new branch called "production" for our deployment.
    - The Github repository should be using this branch as the root for the deployment.
2. The following files and folders should exist on this branch: css folder, img folder, js folder, reference folder, TaskListUI.html, index.html, done.html, and app.html.
    - These are the only files that are deployed to Github pages.
    - Don't include anything else in the main branch into deployment to conceal our workflows, meeting notes, etc. from people that use our website.
    - Bootstrap and sass should be automatically built on our deployment.
    - Documentation should be updated automatically and included in the build on our deployment as well.
    - Update: HTML files should now be split into three different files: index.html, done.html, and app.html. These will represent the different page layouts (landing page, timer page, and records sheet page), which makes it more organized and easier to work with.
