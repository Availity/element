import{j as e,M as o,i}from"./iframe-CWY3iD4k.js";import{useMDXComponents as r}from"./index-DQFR4lu8.js";import"./preload-helper-PPVm8Dsz.js";const d=`# @availity/mui-drawer

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
`,s="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-drawer@1.0.1...@availity/mui-drawer@1.0.2) (2026-09-15)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `1.0.1`\n* `mui-list` updated to version `1.0.1`\n## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-drawer@1.0.0...@availity/mui-drawer@1.0.1) (2026-09-14)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.0`\n* `mui-form-utils` updated to version `1.0.0`\n* `mui-list` updated to version `1.0.0`\n## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.4...@availity/mui-drawer@1.0.0) (2026-06-16)\n\n### Dependency Updates\n\n* `mui-backdrop` updated to version `0.1.4`\n* `mui-button` updated to version `0.1.4`\n* `mui-icon` updated to version `0.1.4`\n* `mui-layout` updated to version `0.1.4`\n* `mui-typography` updated to version `0.1.4`\n* `mui-checkbox` updated to version `0.1.4`\n* `mui-form-utils` updated to version `0.1.4`\n* `mui-list` updated to version `0.1.4`\n\n### ⚠ BREAKING CHANGES\n\n* CJS builds removed, packages are ESM-only.\n\n- Convert all packages to ESM (type: module)\n- Replace Jest with Vitest for all test targets\n- Migrate ESLint to v9 flat config (eslint.config.js)\n- Build output ESM-only (removed CJS dist/index.js require path)\n- Upgrade @tanstack/react-query from v4 to v5\n- Upgrade @availity/api-axios to v13\n- Drop Node 20 support (engines: ^22.0.0 || ^24.0.0)\n- Bump React to 19.2.7, MUI to 7.3.11, TypeScript to 5.9.3\n- Simplify CI caching with built-in yarn cache action + Nx cache\n- Modernize nx.json configuration\n- Update husky hooks to use yarn directly\n- Replace lint-staged nx affected with direct eslint\n\n### Features\n\n* migrate to ESM, Vitest, and ESLint 9 flat config ([cc22bb4](https://github.com/Availity/element/commit/cc22bb4a230bc1f3b190f187c4e61249d015b25b))\n\n## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.3...@availity/mui-drawer@0.1.4) (2026-05-27)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.1.3`\n* `mui-list` updated to version `0.1.3`\n## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.2...@availity/mui-drawer@0.1.3) (2026-03-03)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.1.2`\n* `mui-list` updated to version `0.1.2`\n## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.1...@availity/mui-drawer@0.1.2) (2026-02-11)\n\n## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-drawer@0.1.0...@availity/mui-drawer@0.1.1) (2026-02-10)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.1.0`\n* `mui-list` updated to version `0.1.0`\n## 0.1.0 (2026-02-05)\n\n### Dependency Updates\n\n* `mui-backdrop` updated to version `1.0.0`\n* `mui-button` updated to version `1.0.0`\n* `mui-icon` updated to version `1.0.0`\n* `mui-layout` updated to version `1.0.0`\n* `mui-typography` updated to version `1.0.0`\n* `mui-checkbox` updated to version `1.0.0`\n* `mui-form-utils` updated to version `1.0.0`\n* `mui-list` updated to version `1.0.0`\n\n### Features\n\n* **mui-drawer:** add Drawer component ([e1579ca](https://github.com/Availity/element/commit/e1579caed4975cac296706da14a1b655e6764628))\n\n\n### Bug Fixes\n\n* **mui-drawer:** fix workspace dependencies ([1e8f844](https://github.com/Availity/element/commit/1e8f8448145fc4e3b5971bfa23a0a3deef180922))\n\n## 0.1.0-alpha.0 (2026-02-05)\n\n\n### Features\n\n* **mui-drawer:** add Drawer component ([e1579ca](https://github.com/Availity/element/commit/e1579caed4975cac296706da14a1b655e6764628))\n\n\n### Bug Fixes\n\n* **mui-drawer:** fix workspace dependencies ([1e8f844](https://github.com/Availity/element/commit/1e8f8448145fc4e3b5971bfa23a0a3deef180922))\n";function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Drawer/Introduction"}),`
`,e.jsx(i,{children:d}),`
`,e.jsx(i,{children:s})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{l as default};
