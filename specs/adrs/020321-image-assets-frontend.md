# Feb. 3rd 2021, Image Assets for FrontEnd ADR
> (Last Decision: Mar. 12 2021, by Justin Lee)

Resources to get started:

- [GitHub issue](https://github.com/DonaldWolfson/cse110-w21-group29/issues/20)
- [Uploaded Assets](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/source/img)

## Status: accepted

## Deciders: Teresa, Justin

## Context and Problem Statement

What image assets should we use for our final project?

## Things Teresa considered and the decisions for each question
1. What parts of the project should be implemented using image assets and by building?
    - Teresa decided that only four assets of her design are needed: red tomato, green tomato, lightning bolt, and electric plug. The development team will build everything else for the project.
    - Two of these four assets should have glowing versions as well, specifically the green tomato and bolt images. The green tomato and bolt images are used to indicate if the user is hovering over the bolt button on the landing page and the initial "START" green tomato on the timer page.
    - UPDATE: When the user hovers over the tomato timers, they will slightly be enlarged for button indication.
    - UPDATE: Teresa originally had an /images directory in the source directory with all the image assets in the form of PNG files. She discarded that directory in favor of /img directory, because the developers decided to use a mix of SVG and PNG files that they rendered themselves from Figma.
    - UPDATE: Justin decided to add a sad tomato image asset to use in the case the user wants to overwrite their current session. It is meant to discourage the user from quitting their plan for the day. Teresa designed and provided the sad red tomato in the form of an SVG file under ./img directory.
2. How should the start day graphic be implemented?
    - There were two options for this: timer with a "START" button below it and a green tomato with a "START" overlay. Teresa chose the latter.
3. What should the file types/extensions be for these assets?
    - Both PNG files and SVG files were tested. The development team will use SVG files for all of the image assets. We have the green and red tomato as ICO file format for the desktop notification and the browser icon.
