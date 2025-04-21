import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-XODwqvNS.js";import{M as o,c as n}from"./index-D2Chtd9h.js";import"./DocsRenderer-CFRXHY34-C4xaw2Ia.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-DCCBzalL.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const r=`# @availity/mui-tree

> Availity MUI Tree component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-tree.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-tree)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-tree.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-tree)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-tree?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-tree/package.json)

## Documentation

This package extends the MUI Tree component: [MUI Tree Docs](https://mui.com/x/react-tree-view/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-tree-introduction--docs)

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

_This package has a few peer dependencies. Add \`@mui/material\`, \`@emotion/react\`, & \`@availity/mui-icon\` to your project if not already installed._

\`\`\`bash
npm install @availity/mui-tree
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-tree
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { DynamicTreeView, TreeView, TreeItem } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { DynamicTreeView, TreeView, TreeItem } from '@availity/mui-tree';
\`\`\`

#### DynamicTreeView vs TreeView

TreeView receives its items as JSX Children. DynamicTreeView receives its items via an items prop making it easier to dynamically load them from an external source. Furthermore, DynamicTreeView includes the ability to make the TreeItem's editable.
`,u=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.0.3](https://github.com/Availity/element/compare/@availity/mui-tree@1.0.2...@availity/mui-tree@1.0.3) (2025-04-11)

### Dependency Updates

* \`mui-icon\` updated to version \`1.0.2\`
* \`mui-layout\` updated to version \`1.0.2\`
* \`mui-typography\` updated to version \`1.0.2\`
## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-tree@1.0.1...@availity/mui-tree@1.0.2) (2025-04-04)


### Bug Fixes

* **mui-tree:** account for duplicative ids and keys ([dad00ae](https://github.com/Availity/element/commit/dad00ae252ae316dd7ed128f19031e299132d3a1))

## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-tree@1.0.0...@availity/mui-tree@1.0.1) (2025-03-07)

### Dependency Updates

* \`mui-icon\` updated to version \`1.0.0\`
* \`mui-layout\` updated to version \`1.0.0\`
* \`mui-typography\` updated to version \`1.0.0\`
## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-tree@1.0.0-alpha.0...@availity/mui-tree@1.0.0) (2025-02-25)

### Dependency Updates

* \`mui-icon\` updated to version \`0.3.0\`
* \`mui-layout\` updated to version \`0.3.0\`
* \`mui-typography\` updated to version \`0.3.0\`

### ⚠ BREAKING CHANGES

* upgrade to @mui/material v6

### Miscellaneous Chores

* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-tree@0.3.0...@availity/mui-tree@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/material v6
* **element:** upgraded to @mui/material v6

### Features

* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))
* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))
* upgrade to MUI v6 ([7febd6f](https://github.com/Availity/element/commit/7febd6fd4fd58e87e1c97a832cea3b4595a35d58))

## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.8...@availity/mui-tree@0.3.0) (2025-02-04)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.8\`
* \`mui-layout\` updated to version \`0.2.8\`
* \`mui-typography\` updated to version \`0.2.8\`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## [0.2.8](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.7...@availity/mui-tree@0.2.8) (2025-01-27)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.7\`
## [0.2.7](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.6...@availity/mui-tree@0.2.7) (2025-01-22)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.6\`
## [0.2.6](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.5...@availity/mui-tree@0.2.6) (2025-01-06)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.5\`
## [0.2.5](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.4...@availity/mui-tree@0.2.5) (2025-01-03)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.4\`
## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.3...@availity/mui-tree@0.2.4) (2024-12-09)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.3\`
## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.2...@availity/mui-tree@0.2.3) (2024-11-22)


### Bug Fixes

* **mui-tree:** don't export JsonViewer as default ([404861f](https://github.com/Availity/element/commit/404861f4cb98a0dc3237b60c4d199ab24bbb3447))

## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.1...@availity/mui-tree@0.2.2) (2024-11-21)


### Bug Fixes

* **mui-tree:** export JsonViewer ([23f0c96](https://github.com/Availity/element/commit/23f0c9669af657f7332998ad57e54b7c4eaa598f))

## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-tree@0.2.0...@availity/mui-tree@0.2.1) (2024-10-31)

### Dependency Updates

* \`mui-icon\` updated to version \`0.2.0\`
* \`mui-layout\` updated to version \`0.2.0\`
* \`mui-typography\` updated to version \`0.2.0\`
## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-tree@0.1.1...@availity/mui-tree@0.2.0) (2024-09-18)


### Features

* **mui-tree:** add JsonViewer component ([b17a9c8](https://github.com/Availity/element/commit/b17a9c82f4348fd51da10bd26a5944f32405db0c))

## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-tree@0.1.0...@availity/mui-tree@0.1.1) (2024-09-11)


### Bug Fixes

* **mui-tree:** add aria-label to checkbox input ([aa277db](https://github.com/Availity/element/commit/aa277db7440f6db77623735a579370f74e8692c7))

## 0.1.0 (2024-09-09)

### Dependency Updates

* \`mui-icon\` updated to version \`0.1.0\`
* \`mui-layout\` updated to version \`0.1.0\`

### Features

* **mui-tree:** add truncate props ([fef6fff](https://github.com/Availity/element/commit/fef6fffc317280d81d7521358e4f23383d607a74))
* **mui-tree:** initial commit ([de6c23b](https://github.com/Availity/element/commit/de6c23bfdd01d58ee0ddac116ed80c3d8942ad1e))
`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/TreeView/Introduction"}),`
`,e.jsx(n,{children:r}),`
`,e.jsx(n,{children:u})]})}function D(t={}){const{wrapper:i}={...m(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(a,{...t})}):a()}export{D as default};
