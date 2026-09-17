import{j as e,M as o,i}from"./iframe-CrDI7sKE.js";import{useMDXComponents as s}from"./index-CxYAbtu1.js";import"./preload-helper-PPVm8Dsz.js";const r=`- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Contributor Workflow](#contributor-workflow)
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
  - [Versioning and Releases](#versioning-and-releases)
  - [Canary Releases](#canary-releases)

# Contributing

This monorepo is managed using [yarn](https://yarnpkg.com/getting-started) and [nx](https://nx.dev/getting-started/intro). Each package is independently versioned and published to the \`npm registry\`.

## Prerequisites

- **Node.js v22 or v24** — CI runs on both. We recommend [fnm](https://github.com/Schniz/fnm#readme) to automatically switch versions when you \`cd\` into the repo (the \`.nvmrc\` is set to \`24\`).
- **yarn v4** — pinned via \`package.json#packageManager\`. Activated automatically via Corepack (see Installation).

## Installation

The recommended way to activate yarn v4 is via [Corepack](https://nodejs.org/api/corepack.html), which ships with Node.js 16.10+:

\`\`\`sh
corepack enable
\`\`\`

Alternatively, you can install yarn v1 globally and yarn v4 will be activated when you run \`yarn install\` (the version is pinned in \`package.json#packageManager\`):

\`\`\`sh
npm install -g yarn
\`\`\`

Then install the dependencies:

\`\`\`sh
yarn install
\`\`\`

You are now ready to begin development in the repo!

## Contributor Workflow

1. **Fork** the repository on GitHub and **clone** your fork locally.
2. **Install dependencies** (see [Installation](#installation) above).
3. **Create a branch** off of \`main\`:
   \`\`\`sh
   git checkout -b feat/my-change
   \`\`\`
4. **Make your changes** — run Storybook to see them in action, run tests and linting to catch issues early.
5. **Commit** using the [Angular commit format](#commits) (enforced by commitlint).
6. **Push** your branch and open a **Pull Request** against \`main\`.
7. CI will run tests on Node 22 and 24 across ubuntu and macOS. Address any failures before requesting review.

## Local Development

### Storybook

The recommended way to work in the repo is running Storybook while you write your code. This gives you an environment to view your changes and serves as documentation once deployed.

\`\`\`sh
yarn start:storybook
\`\`\`

### Unit Tests

All new features should have a unit test added. Tests run on push via CI. If you run tests locally the results are cached — subsequent runs only retest code that has changed.

Run all tests:

\`\`\`sh
yarn test
\`\`\`

Run tests for affected packages only (faster during development):

\`\`\`sh
yarn test:affected
\`\`\`

Run tests in watch mode for a specific package:

\`\`\`bash
yarn vitest --watch packages/alert
\`\`\`

### Linting

This repo uses \`eslint\` for linting. Make sure your IDE has linting support, or run one of these scripts before pushing:

\`\`\`sh
# Lint all packages
yarn lint

# Lint only affected packages (faster)
yarn lint:affected
\`\`\`

You will not be able to commit code with linting errors.

### Adding/Removing a dependency

Managing dependencies in a monorepo is similar to a single package repo. Use the \`workspace\` command from \`yarn\` to target a specific package.

Here is an example of adding \`react-query\` to the \`select\` package:

\`\`\`sh
yarn workspace @availity/mui-select add react-query
\`\`\`

## Adding a New Package

### Generating a Package

\`\`\`sh
# Create package, ideally matching its corresponding MUI package name
yarn create:package <package-name>

# Install to add package paths
yarn install

# Build new package and the updated @availity/element package
yarn build
\`\`\`

### Generated Package Notes

The generator assumes the package is a wrapper for an MUI component, as such:

- Final scoped package name is: \`@availity/mui-<package-name>\`
- \`@mui/material\` is a peer dependency
- MUI link in README generated assuming package name matches the corresponding MUI component name
- Default component code is a wrapper for the MUI \`Card\` component. Replace \`Card\` with whatever component you're building a wrapper for, or remove the \`Card\` references entirely.
- Only the original component matching the package name is added to the \`@availity/element\` exports. Any additional exports must be added manually.

### Dos and Don'ts

- Do create separate stories files for each exported component. The Storybook automated documentation creates the arguments table based on the component in the \`Meta\` of that file.
- Do make sure components stick to the Availity Design Standards. Add the corresponding component theme information to the themes in \`@availity/theme\`.
- Don't forget to add additional package exports to \`@availity/element\` — the generator only handles the namesake component.
- Don't merge before setting up trusted publishing for the new package. We recommend publishing a canary version so the package is available in npm to set up trusted publishing, however don't push up the canary version commit. _You can manually add the package tag if there's a certain major version you're targeting, e.g. \`@availity/mui-<package-name>@2.0.0\`._

## Commits

The commit messages in this repository are important for two main reasons:

1. The \`type\` (feat, fix, build, etc.) determines how to bump the version when publishing.
2. Commits with types \`feat\` and \`fix\` will appear in the \`CHANGELOG.md\` for the given package.

Commits must use the [Angular Commit Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type). The \`scope\` should be one of the un-prefixed names of the packages under \`./packages/\` or \`element-storybook\` for the docs. If a commit applies to multiple packages, leave out the scope. Commit messages are validated via commitlint on every PR.

**Examples:**

\`\`\`sh
# Fix in a specific package
git commit -m "fix(mui-icon): check for null before doing the action"

# Feature without a scope (affects multiple packages)
git commit -m "feat: add new color tokens to theme"

# Breaking change
git commit -m "feat(mui-icon)!: add new features

BREAKING CHANGE: names of props changed"

# Docs-only change (does not trigger a version bump)
git commit -m "docs(mui-button): update usage examples"
\`\`\`

Valid types: \`feat\`, \`fix\`, \`build\`, \`chore\`, \`ci\`, \`docs\`, \`perf\`, \`refactor\`, \`revert\`, \`style\`, \`test\`.

Read [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for more detail.

## Versioning and Releases

Versioning is automated using [\`@jscutlery/semver\`](https://github.com/jscutlery/semver) with conventional commits. Each package is versioned independently.

**Automated release flow (triggered on every push to \`main\`):**

1. CI versions all affected packages (\`yarn nx affected --target version\`).
2. CI publishes the new versions to the npm registry.
3. CI creates a \`release/version-updates\` PR summarizing the changes.

You do not need to manually run version or publish commands for regular releases — just merge your PR to \`main\`.

**Commit types and version bumps:**

| Commit type                                                           | Version bump |
| --------------------------------------------------------------------- | ------------ |
| \`feat\`                                                                | Minor        |
| \`fix\`, \`perf\`                                                         | Patch        |
| \`feat!\` / \`BREAKING CHANGE\`                                           | Major        |
| \`docs\`, \`chore\`, \`ci\`, \`style\`, \`refactor\`, \`test\`, \`build\`, \`revert\` | None         |

> **Note:** Commits with type \`docs\` do not trigger a version bump.

## Canary Releases

Canary Releases can be used to test changes without impacting the \`latest\` tag.

First, make sure any changes you want included are committed. Then create a canary version:

\`\`\`sh
# Dry run to verify changes are correct
yarn version:affected:canary --dryRun

# Create version — updates package.json, changelog.md, and makes a commit
yarn version:affected:canary
\`\`\`

Once you have a new version, publish it to the registry:

\`\`\`sh
# Login to npm
yarn npm login --publish

# Publish
yarn publish:affected:canary
\`\`\`
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing"}),`
`,e.jsx(i,{children:r})]})}function d(n={}){const{wrapper:a}={...s(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(t,{...n})}):t()}export{d as default};
