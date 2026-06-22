import{j as t,M as s,k as i}from"./iframe-B3KH45W1.js";import{useMDXComponents as o}from"./index-C0VHKCRh.js";import"./preload-helper-Dab_6GC_.js";const l=`# @availity/mui-utils

> Availity MUI Utils component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-utils)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-utils)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-utils?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/utils/package.json)

## Documentation

This package extends the MUI Utils components: [MUI Utils Docs](https://mui.com/material-ui/all-components/#utils)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-utils-introduction--docs)

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
npm install @availity/mui-utils
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-utils
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { Utils } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { Utils } from '@availity/mui-utils';
\`\`\`
`,u=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [3.0.0](https://github.com/Availity/element/compare/@availity/mui-utils@2.0.1...@availity/mui-utils@3.0.0) (2026-06-16)

### Dependency Updates

* \`mui-paper\` updated to version \`2.0.1\`
* \`mui-typography\` updated to version \`2.0.1\`

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

## [2.0.1](https://github.com/Availity/element/compare/@availity/mui-utils@2.0.0...@availity/mui-utils@2.0.1) (2025-12-03)

### Dependency Updates

* \`mui-paper\` updated to version \`2.0.0\`
* \`mui-typography\` updated to version \`2.0.0\`
## [2.0.0](https://github.com/Availity/element/compare/@availity/mui-utils@1.0.3...@availity/mui-utils@2.0.0) (2025-11-17)

### Dependency Updates

* \`mui-paper\` updated to version \`1.0.3\`
* \`mui-typography\` updated to version \`1.0.3\`

### ⚠ BREAKING CHANGES

* @mui/material upgraded to v7
* @mui/x-* upgraded to v8
* react upgraded to v19

### Features

* upgrade material and react dependencies ([51602a4](https://github.com/Availity/element/commit/51602a48c5304db6f61e2c7e772c9a3a4aa3f65c))

## [1.0.3](https://github.com/Availity/element/compare/@availity/mui-utils@1.0.2...@availity/mui-utils@1.0.3) (2025-10-30)

### Dependency Updates

* \`mui-paper\` updated to version \`1.0.2\`
* \`mui-typography\` updated to version \`1.0.2\`
## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-utils@1.0.1...@availity/mui-utils@1.0.2) (2025-04-11)

### Dependency Updates

* \`mui-paper\` updated to version \`1.0.1\`
* \`mui-typography\` updated to version \`1.0.1\`
## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-utils@1.0.0...@availity/mui-utils@1.0.1) (2025-03-07)

### Dependency Updates

* \`mui-paper\` updated to version \`1.0.0\`
* \`mui-typography\` updated to version \`1.0.0\`
## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-utils@1.0.0-alpha.0...@availity/mui-utils@1.0.0) (2025-02-25)

### Dependency Updates

* \`mui-paper\` updated to version \`0.2.0\`
* \`mui-typography\` updated to version \`0.2.0\`

### ⚠ BREAKING CHANGES

* upgrade to @mui/material v6

### Miscellaneous Chores

* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-utils@0.2.0...@availity/mui-utils@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/utils v6

### Features

* upgrade @mui/utils ([9815416](https://github.com/Availity/element/commit/9815416251a3168024e9ea2b80e1cef8b0393fee))

## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-utils@0.1.0...@availity/mui-utils@0.2.0) (2025-02-04)

### Dependency Updates

* \`mui-paper\` updated to version \`0.1.0\`
* \`mui-typography\` updated to version \`0.1.0\`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## 0.1.0 (2024-11-20)

### Dependency Updates

* \`mui-paper\` updated to version \`0.1.0\`
* \`mui-typography\` updated to version \`0.1.0\`

### Features

* **mui-utils:** add utils package ([17c4ed4](https://github.com/Availity/element/commit/17c4ed4cde3398ff4d0ada74ad2ddc47d6a228bc))
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Utils/Utils/Introduction"}),`
`,t.jsx(i,{children:l}),`
`,t.jsx(i,{children:u})]})}function r(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a()}export{r as default};
