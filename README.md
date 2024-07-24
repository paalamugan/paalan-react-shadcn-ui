# Paalan React UI

Reusable react ui components with build on top of Tailwind CSS and Shadcn UI.

## Prerequisites

- If you are using nvm, run `nvm use` to use the correct node version.
- If you are not using nvm, make sure you are using node version `v20.12.2`. You can check your node version by running `node -v`.

## Installation

- Run `pnpm install` to install all the dependencies.

### Build the package

- Run `pnpm build` to build the package.

### Running the storybook for development

- Run `pnpm storybook` to start the storybook app in development mode.
- Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

### Running the storybook docs for development

- Run `pnpm storybook:docs` to start the storybook docs in development mode.
- Open [http://localhost:6007/](http://localhost:6007/) to view it in the browser.

### Build the storybook app for production

- Run `pnpm storybook:build` to build the storybook app for production.

### Build the storybook docs for production

- Run `pnpm storybook:build:docs` to build the storybook docs for production.

### Preview the storybook

- Run `pnpm preview` to build the storybook app for production.

### Preview the storybook docs

- Run `pnpm preview:docs` to build the storybook docs for production.

### Generate the code coverage report

- Run `pnpm test:coverage` to generate the code coverage report.

### Running the tests

- Run `pnpm test` to run the tests.

### Running the tests in watch mode

- Run `pnpm test:watch` to run the tests in watch mode.

## Publishing the package locally

- First login to npm using `npm login` command(If you are not logged in).

- Run `pnpm changeset` to create a changeset for the package.

- Run `pnpm version` to bump the version of the package.

- Run `pnpm release` to publish the package to npm.

- After that push the changes to the remote repository using this `git push --follow-tags` command.

## Migrate Eslint v8 to v9

- Run `npx @eslint/migrate-config .eslintrc.cjs` to migrate the eslint to v9. for more information [click here](https://eslint.org/docs/latest/use/configure/migration-guide#migrate-your-config-file)
