# cse110-w21-group29

Our site can found [here](https://donaldwolfson.github.io/cse110-w21-group29/)!

## Airbnb Linter Setup Instructions (VS Code)

- Make sure `node` is installed
- `cd` to root directory of local repository `cse110-w21-group29/`
- From console run `npm install` to install dependencies locally, also try `npm ci` if necessary.
- Download [ESLint VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.
- Run the linter locally, `npm run lint`.

And that should be it!
> Note: `npm install` will install all dependencies into a directory called `node_modules/` which will not be tracked by git so it has been added to the `.gitignore`, we won't be including this directory in the remote repo.

## Running Tests With Jest

- Make sure repo is up-to-date, `npm ci`.
- Run unit tests that are found in `cse110-w21-group29/source/__tests__/` by running jest, `npm run test`.

## Branches

- To make sure your code is synced with the repo, and up-to-date, run `git fetch --all`.
- To remove old/deleted branches from your local machine, run `git fetch --prune`.
- To make a new branch and check it out, run `git checkout -b <branch_name>`.

## Sass Setup Instructions

- Assuming Linter Setup Instructions are followed, simply `cd` to the root directory of local repository `cse110-w21-group29/`
- Run `npm run sass` and the scss files will automatically compile into css whenever the main.scss file is changed.
- NOTE: Keep the terminal open when developing and if the script you ran ever crashes, just re-run `npm run sass` again once you fix the issues.
