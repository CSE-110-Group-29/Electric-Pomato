# Feb. 20th 2021, Deployment Workflow ADR

Resources to get started:

- [Github Action](https://github.com/DonaldWolfson/cse110-w21-group29/blob/setup-bootstrap/.github/workflows/deploy.yml)
- Ask Andy for any info on this

## Status: accepted

## Deciders: Andy, Arman, Liam

## Context and Problem Statement

How should we set up our deployment?

## Things to consider

1. Should we dedicate a specific branch to the deployment workflow or use an existing branch?
2. What should be contained inside the branch we use?

## Decision Outcome

1. Because of security reasons, we should create a new branch called "production" for our deployment.
    - The Github repository should be using this branch as the root for the deployment.
2. The following files and folders should be the only items that exist in this branch: css folder, img folder, js folder, reference folder, TaskListUI.html, and index.html.
    - These are the only files that are necessary for Github pages.
    - Don't use anything else in the main branch because it allows us to hide all our workflows, meeting notes, etc. from people that use our website.
    - As a small side note, bootstrap and sass should be automatically built on our deployment.
