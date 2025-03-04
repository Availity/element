import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as a}from"./index-CfSBfIZi.js";import{M as m,c as n}from"./index-cEsDFZX0.js";import"./DocsRenderer-CFRXHY34-BL2-1j1e.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CeRHQDI0.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const r=`# @availity/mui-controlled-form

> Availity MUI Form components integrated with react-hook-form to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-controlled-form.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-controlled-form)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-controlled-form.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-controlled-form)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-controlled-form?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-controlled-form/package.json)

## Documentation

This package extends the Element's Form components with [react-hook-form](https://react-hook-form.com/). The goal of this package is to decrease the amount of setup involved with building a form using Element components and react-hook-form. If you would like to use another form library, the raw Element form components are also available.

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/form-components-controlled-form-introduction--docs)

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
npm install @availity/mui-controlled-form
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-controlled-form
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { ControlledTextField } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { ControlledTextField } from '@availity/mui-controlled-form';
\`\`\`

### Form Validation

Form validation can be on a component-by-component basis, or by passing a valid schema and schema resolver. For more information on react-hook-form's schema resolvers see: https://github.com/react-hook-form/resolvers#quickstart
`,l="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@1.0.1...@availity/mui-controlled-form@1.0.2) (2025-03-03)\n\n### Dependency Updates\n\n* `mui-autocomplete` updated to version `1.0.1`\n## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@1.0.0...@availity/mui-controlled-form@1.0.1) (2025-02-26)\n\n### Dependency Updates\n\n* `mui-autocomplete` updated to version `1.0.0`\n## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@1.0.0-alpha.0...@availity/mui-controlled-form@1.0.0) (2025-02-25)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.3.2`\n* `mui-layout` updated to version `0.3.2`\n* `mui-menu` updated to version `0.3.2`\n* `mui-paper` updated to version `0.3.2`\n* `mui-typography` updated to version `0.3.2`\n* `mui-autocomplete` updated to version `0.3.2`\n* `mui-checkbox` updated to version `0.3.2`\n* `mui-datepicker` updated to version `0.3.2`\n* `mui-form-utils` updated to version `0.3.2`\n* `mui-textfield` updated to version `0.3.2`\n* `@availity/mock` updated to version `0.3.2`\n* `theme-provider` updated to version `0.3.2`\n\n### ⚠ BREAKING CHANGES\n\n* upgrade to @mui/material v6\n\n### Miscellaneous Chores\n\n* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))\n\n## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.2...@availity/mui-controlled-form@1.0.0-alpha.0) (2025-02-24)\n\n\n### ⚠ BREAKING CHANGES\n\n* upgraded to @mui/material v6\n* **element:** upgraded to @mui/material v6\n\n### Features\n\n* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))\n* **mui-controlled-form:** remove deprecated props and controlledform ([43e376f](https://github.com/Availity/element/commit/43e376fed54eb2f31d7dcdad382987aa1faac94c))\n* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** forward rules.required ([a70fa6a](https://github.com/Availity/element/commit/a70fa6a33fbdaa2ecf471896faabcbed523f3a8d))\n\n## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.1...@availity/mui-controlled-form@0.3.2) (2025-02-18)\n\n### Dependency Updates\n\n* `mui-autocomplete` updated to version `0.3.1`\n* `mui-datepicker` updated to version `0.3.1`\n* `mui-form-utils` updated to version `0.3.1`\n* `mui-textfield` updated to version `0.3.1`\n## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.0...@availity/mui-controlled-form@0.3.1) (2025-02-17)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** pass missing required prop ([1ac4883](https://github.com/Availity/element/commit/1ac4883085dd12d14160b9cea1ab810edf3d355b))\n\n## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.6...@availity/mui-controlled-form@0.3.0) (2025-02-17)\n\n\n### Features\n\n* **mui-block-ui:** collapsing individual rule props, deprecate individual rules and controlledform ([c559d83](https://github.com/Availity/element/commit/c559d83629f0cda74d52f3fb8bbeb0d22bfb933c))\n\n## [0.2.6](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.5...@availity/mui-controlled-form@0.2.6) (2025-02-07)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** disable browser validation so custom errors can be shown ([7aea029](https://github.com/Availity/element/commit/7aea029fc8802366cdb8240e6d0a64bfb4853a9f))\n\n## [0.2.5](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.4...@availity/mui-controlled-form@0.2.5) (2025-02-05)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** support required prop object ([6a2282c](https://github.com/Availity/element/commit/6a2282ca0328c7e1ed3d1ace974209123c38f673))\n\n## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.3...@availity/mui-controlled-form@0.2.4) (2025-02-05)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** support nested form properties ([5746baf](https://github.com/Availity/element/commit/5746bafdee011b6fcc7d6f712946fcb597ea48da))\n* **mui-controlled-form:** support nested form properties for ControlledAsyncAutocomplete ([9c97199](https://github.com/Availity/element/commit/9c97199bbee014ebcaef6fbbf3ab81b962e87c7b))\n\n## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.2...@availity/mui-controlled-form@0.2.3) (2025-02-05)\n\n### Dependency Updates\n\n* `mui-datepicker` updated to version `0.2.2`\n* `theme-provider` updated to version `0.2.2`\n## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.1...@availity/mui-controlled-form@0.2.2) (2025-02-04)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** forward required from controlled text field to text field ([c223248](https://github.com/Availity/element/commit/c223248ec4a970ebb078d170d7d9fec74e02dbdc))\n\n## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.0...@availity/mui-controlled-form@0.2.1) (2025-02-04)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** export prop types ([bdc3034](https://github.com/Availity/element/commit/bdc3034966d72be414a05a0255fa5db7ff698819))\n\n## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.4...@availity/mui-controlled-form@0.2.0) (2025-02-04)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.4`\n* `mui-layout` updated to version `0.1.4`\n* `mui-menu` updated to version `0.1.4`\n* `mui-paper` updated to version `0.1.4`\n* `mui-typography` updated to version `0.1.4`\n* `mui-autocomplete` updated to version `0.1.4`\n* `mui-checkbox` updated to version `0.1.4`\n* `mui-datepicker` updated to version `0.1.4`\n* `mui-form-utils` updated to version `0.1.4`\n* `mui-textfield` updated to version `0.1.4`\n* `theme-provider` updated to version `0.1.4`\n\n### Features\n\n* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))\n\n## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.3...@availity/mui-controlled-form@0.1.4) (2025-02-03)\n\n\n### Bug Fixes\n\n* **mui-controlled-form:** export form components ([e6bf91e](https://github.com/Availity/element/commit/e6bf91e33235c0fe5efa826cc9e2d3c04e86adbd))\n\n## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.2...@availity/mui-controlled-form@0.1.3) (2025-01-28)\n\n### Dependency Updates\n\n* `mui-autocomplete` updated to version `0.1.2`\n## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.1...@availity/mui-controlled-form@0.1.2) (2025-01-27)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.1`\n* `mui-menu` updated to version `0.1.1`\n* `mui-autocomplete` updated to version `0.1.1`\n* `mui-checkbox` updated to version `0.1.1`\n* `mui-datepicker` updated to version `0.1.1`\n* `mui-form-utils` updated to version `0.1.1`\n* `mui-textfield` updated to version `0.1.1`\n## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.0...@availity/mui-controlled-form@0.1.1) (2025-01-24)\n\n### Dependency Updates\n\n* `mui-datepicker` updated to version `0.1.0`\n* `theme-provider` updated to version `0.1.0`\n## 0.1.0 (2025-01-23)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.0`\n* `mui-layout` updated to version `0.1.0`\n* `mui-menu` updated to version `0.1.0`\n* `mui-paper` updated to version `0.1.0`\n* `mui-typography` updated to version `0.1.0`\n* `mui-autocomplete` updated to version `0.1.0`\n* `mui-checkbox` updated to version `0.1.0`\n* `mui-datepicker` updated to version `0.1.0`\n* `mui-form-utils` updated to version `0.1.0`\n* `mui-textfield` updated to version `0.1.0`\n* `theme-provider` updated to version `0.1.0`\n\n### Features\n\n* **mui-controlled-form:** add ControlledDatepicker ([db89204](https://github.com/Availity/element/commit/db89204ac8c92bebcf1dae3f65be84718d87474a))\n* **mui-controlled-form:** add yup resolver support ([16c16b9](https://github.com/Availity/element/commit/16c16b98743f8bae504a02709936cc252f4a82e1))\n* **mui-controlled-form:** allow user to pass any validation resolver ([fa7daf3](https://github.com/Availity/element/commit/fa7daf3db9da8d02065cda3b89421064ea98f3bc))\n* **mui-controlled-form:** initial commit ([827e8af](https://github.com/Availity/element/commit/827e8af9b0b29a912c08e2632f33cd6ee6708416))\n";function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Form Components/Controlled Form/Introduction"}),`
`,e.jsx(n,{children:r}),`
`,e.jsx(n,{children:l})]})}function A(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i()}export{A as default};
