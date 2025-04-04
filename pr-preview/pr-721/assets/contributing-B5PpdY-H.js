import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as o}from"./index-CfSBfIZi.js";import{M as i,c as r}from"./index-CCZky2p8.js";import"./DocsRenderer-CFRXHY34-DpUkDz0W.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C7vaWDC8.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const s=`- [Contributing](#contributing)
  - [Installation](#installation)
  - [Local Development](#local-development)
    - [Storybook](#storybook)
    - [Unit Tests](#unit-tests)
    - [Linting](#linting)
    - [Adding/Removing a dependency](#addingremoving-a-dependency)
  - [Adding a New Package](#adding-a-new-package)
    - [Generating a Package](#generating-a-package)
    - [Generated Package Notes](#generated-package-notes)
    - [Dos and Don'ts](#dos-and-donts)
  - [Commits](#commits)
  - [Canary Releases](#canary-releases)

# Contributing

This monorepo is managed using [yarn](https://yarnpkg.com/getting-started) and [nx](https://nx.dev/getting-started/intro). Each package is independently versioned and published to the \`npm registry\`.

## Installation

The currently recommended version of node to use when developing in this repo is: \`v20\`. We recommend using [fnm](https://github.com/Schniz/fnm#readme) to have your node version automatically changed when you \`cd\` into the repo.

We use \`yarn berry\` (aka yarn v3) to manage dependencies. Install \`yarn\` globally:

\`\`\`sh
node --version
npm -i -g yarn
\`\`\`

> This command will install yarn v1. When we run the next command then yarn v3 will be added.

Then install the dependencies:

\`\`\`sh
yarn install
\`\`\`

You are now ready to begin development in the repo!

## Local Development

### Storybook

The recommended way to work in the repo is running \`Storybook\` while you write your code. This will give you an environment to view your changes, and also serves as documentation once deployed.

\`\`\`sh
yarn start:storybook
\`\`\`

### Unit Tests

All new features should have a unit test added. The unit tests will run when you push your code. If you run the tests on your own the results will be cached. This means subsequent executions of \`yarn test\` will only run tests against code that has changed.

Currently you cannot run all of the tests in watchmode. You can run watchmode for one package at a time. Here is an example for the \`@availity/mui-alert\` package

\`\`\`bash
yarn nx test mui-alert --watch
\`\`\`

It's always a good idea to make sure you didn't break anything else by running the unit test script

\`\`\`sh
yarn test
\`\`\`

### Linting

This repo uses \`eslint\` for linting. Make sure to have linting support in your IDE or run the linting script to make sure your code does not have any errors. You will not be able to commit your code if there are linting errors.

\`\`\`sh
yarn lint:affected
\`\`\`

### Adding/Removing a dependency

Managing dependencies in a monorepo is similar to a single package repo. The main difference is the command is longer. We are going to use the \`workspace\` command from \`yarn\` to tell \`yarn\` which package we want updated.

Here is an example of adding \`react-query\` to the \`select\` package

\`\`\`sh
yarn workspace @availity/mui-select add react-query
\`\`\`

## Adding a New Package

### Generating a Package

\`\`\`sh
# create package, ideally matching it's corresponding mui package name
yarn create:package <package-name>

# install to add package paths
yarn install

# build new package and newly updated @availity/element package
yarn build
\`\`\`

### Generated Package Notes

The generator assumes the package is a wrapper for an MUI component, as such:

- Final scoped package name is: \`@availity/mui-<package-name>\`
- \`@mui/material\` is a peer dependency
- MUI link in README generated assuming package name is same as corresponding MUI component name
- Default component code is a wrapper for the MUI \`Card\` component. Replace \`Card\` with whatever component you're building a wrapper for, or remove the \`Card\` references entirely.

### Dos and Don'ts

- Don't add a default export to the package, this will affect \`@availity/element\`
- Do create separate stories files for each exported component. The storybook automated documentation creates the arguments table based on the component in the \`Meta\` of that file.
- Do make sure components stick to the Availity Design Standards. Add the corresponding component theme information to the themes in \`@availity/theme\`

## Commits

The commit messages in this repository are important for two main reasons:

1. The \`type\` (feat, fix, build, etc) is used to determine how to bump the version when publishing.

2. The commits with types \`feat\` and \`fix\` will show up in the \`CHANGELOG.md\` for the given package.

Commits should use the [Angular Commit Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type). Scope should be one of the un-prefixed names of the packages under \`./packages/\` or \`element-storybook\` for the docs. If a commit applies to multiple packages, leave out the scope.

For example, here is what the commit message would like when fixing a null-checking error in the \`icon\` package:

\`\`\`sh
git commit -m "fix(mui-icon): check for null before doing the action"
\`\`\`

In order to bump a package by a major version you must indicate a \`BREAKING CHANGE\` in the commit message. Read through the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for more information

\`\`\`sh
git commit -m "feat(mui-icon)!: add new features

BREAKING CHANGE: names of props changed"
\`\`\`

## Canary Releases

Canary Releases can be used to test changes without impacting the \`latest\` tag.

The first thing we need to do is create a new version to be tagged. Version bumps are generated off the latest commits to the package. You should commit any changes before running the version and publish commands.

\`\`\`sh
# Dry run to make sure changes are correct
yarn version:affected:canary --dryRun

# This will make changes to the package.json, changelog.md, and make a commit
yarn version:affected:canary
\`\`\`

Once you have a newly created version it will need to be published to the registry so you or others can use it. First login, and then run the publish command

\`\`\`sh
# login
yarn npm login --publish

# publish
yarn publish:affected:canary
\`\`\`
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing"}),`
`,e.jsx(r,{children:s})]})}function w(n={}){const{wrapper:a}={...o(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(t,{...n})}):t()}export{w as default};
