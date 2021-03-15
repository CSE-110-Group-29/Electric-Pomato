# March 3rd 2021, Landing Page ADR
> (Last Decision: Mar. 6 2021, by Justin Lee)

## Status: accepted

## Deciders: Teresa

## Context and Problem Statement

What features do we add to the landing page?

## Things to consider

1. Should we permit the user to return to the landing page?
2. Is adding two buttons labeled "Create New Session" and "Resume My Session" feasible for our appetite?

## Decision outcome

1. This was suggested by Sim. We decided to implement it because relatively quick to add and because it's a nice quality of life feature.
2. ~~No. While this is a good quality of life feature, we don't have enough time in our appetite to add it. It's also not our priority at the moment.~~ Update: we now say yes. The development team is well ahead of schedule in terms of resolving issues on Github. Adding both of these things is possible in the remaining time we have in week 10 and finals week because both buttons don't introduce anything new to the application. They merely redirect the user to certain pages or parts of the application that already exist in our minimum viable product.
    - Alongside these two buttons, the development team is also adding a warning message that shows up when the user clicks on "Create New Session." This is still within our appetite because we've already written code for a "final task" prompt (removed as stated in the TaskList ADR), which we can reuse for this feature.
