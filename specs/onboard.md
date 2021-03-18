# Onboarding For New and Future Developers

Welcome! This page aims to help you familiarize yourself with our repo, and where to find and place things.

## Introduction, What is this project?

This project is the result of a 10 week UCSD class, CSE 110, during Winter 2021. The nine of us were grouped together and asked to create a Pomodoro Timer application while also learning the ins and outs of Agile practices. As such, the organization of our repo might be hard to navigate for those not familiar with our assignments or the Agile practice itself. But, the TLDR of this is repo is that is produces a website that uses the Pomodoro Technique to help the user organize and focus on their tasks.

## Where is the code?

Our code is stored in the [`source`](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/source) directory. Inside of this directory are a variety of directories that are described below:

- `__tests__`: This directory stores our unit tests which are run through Jest. The code coverage can be found in the `coverage` directory in the root.
- `css`: This directory is only generated after compiling our Sass script. You'll likely only find this file in our `production` branch, or on your local branch.
- `docs`: This directory is generated JSDocs documentation on our code. These files are created by our GitHub Actions, so don't touch them since they will be regenerated on each run.
- `img`: This directory stores any image assets that are used by our website.
- `js`: This directory stores all of our JavaScript classes, and scripts. If you're unsure about what each file does, please look over our JSDocs documentation, or the inline comments in the files.
- `scss`: This directory stores our Sass scripts for styling.

The `.html` files within `source` are our individual webpages. Each file relates to a seperate section of our website:

- `app.html`: This is where all the fun is. This file is used to display our timer, and task lists. Essentially its the main feature of our project.
- `done.html`: This page is opened after a sessions to display to the user the data from the previous session.
- `index.html`: This is the homepage of our project. This page holds documentation on how to use our website, and lets the user create a new session.

## Who decided to do that?

If you're unsure or confused on some of the design choices of our project, please read over our [ADR's](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/adrs). Each ADR discusses the choices considered, and the reasons that certain choices were made. This should give some insight into the choices we've made and why. If you wish to look over our meetings (which often have decision making inside of them), check out our [meeting notes](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/admin/meetings) to review some of our discussions.  

If you're curious about the design process itself, check out our [brainstorming](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/brainstorm) directory which stores old renditions and ideas for our project. You can also check our some of our rough drafts [here](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/interface/rough). Some more of our finalized frontend designs can be found [here](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/interface/highfidelity), and our finalized backend designs can be found [here](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/interface/wireframe). Some other minor things that you may look at on top of these resources are our project [pitch](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/pitch/Project%20Pitch.pdf) and our [project videos](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/admin/videos).

## Resources to get started

Additionally, we have a few resources to help you get started. To set up the workflow of this repository locally, check our the main [README](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/README.md) file of our repository. They include a couple of [Wiki](https://github.com/DonaldWolfson/cse110-w21-group29/wiki) pages to help you get used to the workflow of Github and our project. These pages include links to our [group page](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/Group-Page), [how to post an issue on Github](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Post-an-Issue), [how to work on an issue](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Work-on-an-Issue), [ADR's](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/specs/adrs), and the [CI/CD pipeline](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/CI-CD-Pipeline). We've also provided a [roadmap](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/roadmap.md) and a fleshed out [projects](https://github.com/DonaldWolfson/cse110-w21-group29/projects) tab to delineate what has happened in this project so far.  

Lastly, we have a set of [rules](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/misc/rules.md) the group needs to follow to ensure a smooth flow of the project - a degree of professionalism tantamount to that of a real workplace should be maintained. If you would like to participate in our endeavors to implement this project, you must sign the [contract](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/admin/misc/rules.md) and upload your signature to this [directory](https://github.com/DonaldWolfson/cse110-w21-group29/tree/main/admin/misc).  
