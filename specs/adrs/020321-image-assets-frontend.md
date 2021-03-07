# Feb. 3rd 2021, Image Assets for FrontEnd ADR

Resources to get started:

- [GitHub issue](https://github.com/DonaldWolfson/cse110-w21-group29/issues/20)
- [Uploaded Assets](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/source/img)

## Status: accepted

## Deciders: Teresa

## Context and Problem Statement

What image assets should we use for our final project?

## Things Teresa considered and the decisions for each question
1. What parts of the project should be implemented using image assets and by building?
    - Teresa decided that only four assets of her design are needed: red tomato, green tomato, bolt, and plug. The development team will build everything else for the project.
    - Two of these four assets should have glowing versions as well, specifically the green tomato and bolt images. The green tomato and bolt images are used to indicate if the user is hovering over the bolt button on the landing page and the initial "START" green tomato on the timer page.
    - UPDATE: Teresa originally had an /images directory in the source directory. She discarded that directory in favor of /img because the developers decided to use a mix of SVG and PNG files that they rendered themselves from Figma.
2. How should the start day graphic be implemented?
    - There were two options for this: timer with a "START" button below it and a green tomato with a "START" overlay. Teresa chose the latter.
3. What should the file types/extensions be for these assets?
    - Both PNG files and SVG files were tested. Currently, the development team is sticking with PNG for the bolt image and SVG for the red tomato, green tomato, and bolt.
