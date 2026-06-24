import{j as e,M as o,i}from"./iframe-BRP1PsTd.js";import{useMDXComponents as r}from"./index-Dxl8_Tuc.js";import"./preload-helper-PPVm8Dsz.js";const s=`# @availity/mui-drawer

> Availity MUI Drawer component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-drawer.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-drawer)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-drawer.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-drawer)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-drawer?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-drawer/package.json)

## Documentation

This package extends the MUI Drawer component: [MUI Drawer Docs](https://mui.com/components/drawer/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-drawer-introduction--docs)

Availity standards for design and usage can be found in the [Availity Design Guide](https://design.availity.com/2e36e50c7)

## Installation

### Import Through @availity/element (Recommended)

#### NPM

\`\`\`bash
npm install @availity/element
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/element
\`\`\`

### Direct Import

#### NPM

_This package has a few peer dependencies. Add \`@mui/material\` & \`@emotion/react\` to your project if not already installed._

\`\`\`bash
npm install @availity/mui-drawer
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-drawer
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { Drawer } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { Drawer } from '@availity/mui-drawer';
\`\`\`
`,d=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.4...@availity/mui-drawer@1.0.0) (2026-06-16)

### Dependency Updates

* \`mui-backdrop\` updated to version \`0.1.4\`
* \`mui-button\` updated to version \`0.1.4\`
* \`mui-icon\` updated to version \`0.1.4\`
* \`mui-layout\` updated to version \`0.1.4\`
* \`mui-typography\` updated to version \`0.1.4\`
* \`mui-checkbox\` updated to version \`0.1.4\`
* \`mui-form-utils\` updated to version \`0.1.4\`
* \`mui-list\` updated to version \`0.1.4\`

### ⚠ BREAKING CHANGES

* CJS builds removed, packages are ESM-only.

- Convert all packages to ESM (type: module)
- Replace Jest with Vitest for all test targets
- Migrate ESLint to v9 flat config (eslint.config.js)
- Build output ESM-only (removed CJS dist/index.js require path)
- Upgrade @tanstack/react-query from v4 to v5
- Upgrade @availity/api-axios to v13
- Drop Node 20 support (engines: ^22.0.0 || ^24.0.0)
- Bump React to 19.2.7, MUI to 7.3.11, TypeScript to 5.9.3
- Simplify CI caching with built-in yarn cache action + Nx cache
- Modernize nx.json configuration
- Update husky hooks to use yarn directly
- Replace lint-staged nx affected with direct eslint

### Features

* migrate to ESM, Vitest, and ESLint 9 flat config ([cc22bb4](https://github.com/Availity/element/commit/cc22bb4a230bc1f3b190f187c4e61249d015b25b))

## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.3...@availity/mui-drawer@0.1.4) (2026-05-27)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.1.3\`
* \`mui-list\` updated to version \`0.1.3\`
## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.2...@availity/mui-drawer@0.1.3) (2026-03-03)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.1.2\`
* \`mui-list\` updated to version \`0.1.2\`
## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.1...@availity/mui-drawer@0.1.2) (2026-02-11)

## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.0...@availity/mui-drawer@0.1.1) (2026-02-10)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.1.0\`
* \`mui-list\` updated to version \`0.1.0\`
## 0.1.0 (2026-02-05)

### Dependency Updates

* \`mui-backdrop\` updated to version \`1.0.0\`
* \`mui-button\` updated to version \`1.0.0\`
* \`mui-icon\` updated to version \`1.0.0\`
* \`mui-layout\` updated to version \`1.0.0\`
* \`mui-typography\` updated to version \`1.0.0\`
* \`mui-checkbox\` updated to version \`1.0.0\`
* \`mui-form-utils\` updated to version \`1.0.0\`
* \`mui-list\` updated to version \`1.0.0\`

### Features

* **mui-drawer:** add Drawer component ([e1579ca](https://github.com/Availity/element/commit/e1579caed4975cac296706da14a1b655e6764628))


### Bug Fixes

* **mui-drawer:** fix workspace dependencies ([1e8f844](https://github.com/Availity/element/commit/1e8f8448145fc4e3b5971bfa23a0a3deef180922))

## 0.1.0-alpha.0 (2026-02-05)


### Features

* **mui-drawer:** add Drawer component ([e1579ca](https://github.com/Availity/element/commit/e1579caed4975cac296706da14a1b655e6764628))


### Bug Fixes

* **mui-drawer:** fix workspace dependencies ([1e8f844](https://github.com/Availity/element/commit/1e8f8448145fc4e3b5971bfa23a0a3deef180922))
`;function a(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Drawer/Introduction"}),`
`,e.jsx(i,{children:s}),`
`,e.jsx(i,{children:d})]})}function c(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{c as default};
