# cse110-w21-group29


## Airbnb Linter Setup Instructions (VS Code)

- Make sure `node` is installed
- `cd` to root directory of local repository `cse110-w21-group29/`
- From console run `npm install` to install dependencies locally, also try `npm ci` if necessary.
- Download [ESLint VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.

And that should be it!
> Note: `npm install` will install all dependencies into a directory called `node_modules/` which will not be tracked by git so it has been added to the `.gitignore`, we won't be including this directory in the remote repo.

## Branches

- To make sure your code is synced with the repo, and up-to-date, run `git fetch --all`.
- To remove old/deleted branches from your local machine, run `git fetch --prune`.
- To make a new branch and check it out, run `git checkout -b <branch_name>`
