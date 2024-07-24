# Paalan React UI

Reusable react ui components with build on top of Tailwind CSS and Shadcn UI.

## Prerequisites

- If you are using nvm, run `nvm use` to use the correct node version.
- If you are not using nvm, make sure you are using node version `v20.12.2`. You can check your node version by running `node -v`.

## Installation

- Run `pnpm install` to install all the dependencies.

### Running the storybook for development

- Run `pnpm run storybook` to start the storybook app in development mode.
- Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

### Running the storybook docs for development

- Run `pnpm run storybook:docs` to start the storybook docs in development mode.
- Open [http://localhost:6007/](http://localhost:6007/) to view it in the browser.

### Build the storybook app for production

- Run `pnpm run storybook:build` to build the storybook app for production.

### Build the storybook docs for production

- Run `pnpm run storybook:build:docs` to build the storybook docs for production.

### Preview the storybook

- Run `pnpm run preview` to build the storybook app for production.

### Preview the storybook docs

- Run `pnpm run preview:docs` to build the storybook docs for production.

### Generate the code coverage report

- Run `pnpm test:coverage` to generate the code coverage report.

### Running the tests

- Run `pnpm test` to run the tests.

### Running the tests in watch mode

- Run `pnpm test:watch` to run the tests in watch mode.

## Publishing the package

- Run `pnpm publish` to publish the package to npm.

## Migrate Eslint v8 to v9

- Run `npx @eslint/migrate-config .eslintrc.cjs` to migrate the eslint to v9. for more information [click here](https://eslint.org/docs/latest/use/configure/migration-guide#migrate-your-config-file)
