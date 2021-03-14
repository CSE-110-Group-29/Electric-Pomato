# March 13th 2021, Analytics ADR

## Status: accpeted

## Deciders: Andy, Annika, Enrique, Justin, and Teresa

## Context and Problem Statement

The done.html page looks a bit wanting. Perhaps we can use it to visualize the progress on our task list instead of just displaying a copy of our task list?

## Things to consider and their decision outcome

1. There were two libraries that the team considered: KoolChart and ZingChart. We chose to use ZingChart for visualization.
  - Adding analytics to our records sheet page was originally seen as too onerous to implement, but the development team changed their minds. Due to a very productive sprint session, the development team managed to clear most of the issues on Github, which now makes an analytics feature possible within our appetite.
    - It, however, isn't possible for the team to implement this using vanilla JavaScript in time, so we turned to a third party library.
  - Documenation is straightforward for ZingChart.
  - Installing ZingChart is relatively simple. It turns out that there are only 3 steps required to install it.
  - This was decided on adding visualization because it makes the application feel more complete.
