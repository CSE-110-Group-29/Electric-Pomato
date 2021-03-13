# Winter 2021, CSE 110 - Group 29

## Team Pomato!

Welcome! We are Team Pomato, a group of 9 students enrolled in Winter 2021's CSE 110. To learn more about us, go to our [group wiki page](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/Group-Page). Below are some helpfull links that we believe help you navigate our repo and it's deployed project:

- Our website can be foud [here](https://donaldwolfson.github.io/cse110-w21-group29/)
- JSDocs Documentation on our code can be found [here](https://donaldwolfson.github.io/cse110-w21-group29/docs/cse110-w21-group29/0.8.0/index.html)
- For new devs, please read over our more in-depth onboarding to familiarize yourself with our repo's structure [here](https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/onboard.md)

## Getting Started

### Airbnb Linter Setup Instructions (VS Code)

- Make sure `node` is installed
- `cd` to root directory of local repository `cse110-w21-group29/`
- From console run `npm install` to install dependencies locally, also try `npm ci` if necessary.
- Download [ESLint VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.
- Run the linter locally, `npm run lint`.

And that should be it!
> Note: `npm install` will install all dependencies into a directory called `node_modules/` which will not be tracked by git so it has been added to the `.gitignore`, we won't be including this directory in the remote repo.

### Running Tests With Jest

- Make sure repo is up-to-date, `npm ci`.
- Run unit tests that are found in `cse110-w21-group29/source/__tests__/` by running jest, `npm run test`.
- To get the code coverage report, please run: `npm run coverage`.

### Branches

- To make sure your code is synced with the repo, and up-to-date, run `git fetch --all`.
- To remove old/deleted branches from your local machine, run `git fetch --prune`.
- To make a new branch and check it out, run `git checkout -b <branch_name>`.

### Sass Setup Instructions

- Assuming Linter Setup Instructions are followed, simply `cd` to the root directory of local repository `cse110-w21-group29/` and npm i if you haven't already.
- Run `npm run sass-watch` and the scss files will automatically compile into css whenever the main.scss file is saved.
- NOTE: Keep the terminal open when developing and if the script you ran ever crashes, just re-run `npm run sass-watch` again once you fix the issues.
- If you want to just compile the sass to css just once, `npm run sass-compile` would be the command.

## Contributing

To start contributing, first look over our [onboarding]() doc to familiarize yourself with our repo. Then make sure to check our wikis on [creating issues](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Post-an-Issue), and [working on issues](https://github.com/DonaldWolfson/cse110-w21-group29/wiki/How-to-Work-on-an-Issue).

## Contributors

A list of our group:

- @AllenZou123
- @amansourian
- @anhatche
- @ayoung19
- @DonaldWolfson
- @justlee0606
- @liamstone1814
- @PitEG
- @truotere