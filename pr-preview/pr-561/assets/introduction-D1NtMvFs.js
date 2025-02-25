import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as a}from"./index-CfSBfIZi.js";import{M as m,c as n}from"./index-DQYCiJOT.js";import"./DocsRenderer-CFRXHY34-BXEn1v_Z.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C4mvXItM.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const r=`# @availity/mui-controlled-form

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
`,l=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.2...@availity/mui-controlled-form@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/material v6
* **element:** upgraded to @mui/material v6

### Features

* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))
* **mui-controlled-form:** remove deprecated props and controlledform ([43e376f](https://github.com/Availity/element/commit/43e376fed54eb2f31d7dcdad382987aa1faac94c))
* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))


### Bug Fixes

* **mui-controlled-form:** forward rules.required ([a70fa6a](https://github.com/Availity/element/commit/a70fa6a33fbdaa2ecf471896faabcbed523f3a8d))

## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.1...@availity/mui-controlled-form@0.3.2) (2025-02-18)

### Dependency Updates

* \`mui-autocomplete\` updated to version \`0.3.1\`
* \`mui-datepicker\` updated to version \`0.3.1\`
* \`mui-form-utils\` updated to version \`0.3.1\`
* \`mui-textfield\` updated to version \`0.3.1\`
## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.3.0...@availity/mui-controlled-form@0.3.1) (2025-02-17)


### Bug Fixes

* **mui-controlled-form:** pass missing required prop ([1ac4883](https://github.com/Availity/element/commit/1ac4883085dd12d14160b9cea1ab810edf3d355b))

## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.6...@availity/mui-controlled-form@0.3.0) (2025-02-17)


### Features

* **mui-block-ui:** collapsing individual rule props, deprecate individual rules and controlledform ([c559d83](https://github.com/Availity/element/commit/c559d83629f0cda74d52f3fb8bbeb0d22bfb933c))

## [0.2.6](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.5...@availity/mui-controlled-form@0.2.6) (2025-02-07)


### Bug Fixes

* **mui-controlled-form:** disable browser validation so custom errors can be shown ([7aea029](https://github.com/Availity/element/commit/7aea029fc8802366cdb8240e6d0a64bfb4853a9f))

## [0.2.5](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.4...@availity/mui-controlled-form@0.2.5) (2025-02-05)


### Bug Fixes

* **mui-controlled-form:** support required prop object ([6a2282c](https://github.com/Availity/element/commit/6a2282ca0328c7e1ed3d1ace974209123c38f673))

## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.3...@availity/mui-controlled-form@0.2.4) (2025-02-05)


### Bug Fixes

* **mui-controlled-form:** support nested form properties ([5746baf](https://github.com/Availity/element/commit/5746bafdee011b6fcc7d6f712946fcb597ea48da))
* **mui-controlled-form:** support nested form properties for ControlledAsyncAutocomplete ([9c97199](https://github.com/Availity/element/commit/9c97199bbee014ebcaef6fbbf3ab81b962e87c7b))

## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.2...@availity/mui-controlled-form@0.2.3) (2025-02-05)

### Dependency Updates

* \`mui-datepicker\` updated to version \`0.2.2\`
* \`theme-provider\` updated to version \`0.2.2\`
## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.1...@availity/mui-controlled-form@0.2.2) (2025-02-04)


### Bug Fixes

* **mui-controlled-form:** forward required from controlled text field to text field ([c223248](https://github.com/Availity/element/commit/c223248ec4a970ebb078d170d7d9fec74e02dbdc))

## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.2.0...@availity/mui-controlled-form@0.2.1) (2025-02-04)


### Bug Fixes

* **mui-controlled-form:** export prop types ([bdc3034](https://github.com/Availity/element/commit/bdc3034966d72be414a05a0255fa5db7ff698819))

## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.4...@availity/mui-controlled-form@0.2.0) (2025-02-04)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.4\`
* \`mui-layout\` updated to version \`0.1.4\`
* \`mui-menu\` updated to version \`0.1.4\`
* \`mui-paper\` updated to version \`0.1.4\`
* \`mui-typography\` updated to version \`0.1.4\`
* \`mui-autocomplete\` updated to version \`0.1.4\`
* \`mui-checkbox\` updated to version \`0.1.4\`
* \`mui-datepicker\` updated to version \`0.1.4\`
* \`mui-form-utils\` updated to version \`0.1.4\`
* \`mui-textfield\` updated to version \`0.1.4\`
* \`theme-provider\` updated to version \`0.1.4\`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.3...@availity/mui-controlled-form@0.1.4) (2025-02-03)


### Bug Fixes

* **mui-controlled-form:** export form components ([e6bf91e](https://github.com/Availity/element/commit/e6bf91e33235c0fe5efa826cc9e2d3c04e86adbd))

## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.2...@availity/mui-controlled-form@0.1.3) (2025-01-28)

### Dependency Updates

* \`mui-autocomplete\` updated to version \`0.1.2\`
## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.1...@availity/mui-controlled-form@0.1.2) (2025-01-27)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.1\`
* \`mui-menu\` updated to version \`0.1.1\`
* \`mui-autocomplete\` updated to version \`0.1.1\`
* \`mui-checkbox\` updated to version \`0.1.1\`
* \`mui-datepicker\` updated to version \`0.1.1\`
* \`mui-form-utils\` updated to version \`0.1.1\`
* \`mui-textfield\` updated to version \`0.1.1\`
## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-controlled-form@0.1.0...@availity/mui-controlled-form@0.1.1) (2025-01-24)

### Dependency Updates

* \`mui-datepicker\` updated to version \`0.1.0\`
* \`theme-provider\` updated to version \`0.1.0\`
## 0.1.0 (2025-01-23)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.0\`
* \`mui-layout\` updated to version \`0.1.0\`
* \`mui-menu\` updated to version \`0.1.0\`
* \`mui-paper\` updated to version \`0.1.0\`
* \`mui-typography\` updated to version \`0.1.0\`
* \`mui-autocomplete\` updated to version \`0.1.0\`
* \`mui-checkbox\` updated to version \`0.1.0\`
* \`mui-datepicker\` updated to version \`0.1.0\`
* \`mui-form-utils\` updated to version \`0.1.0\`
* \`mui-textfield\` updated to version \`0.1.0\`
* \`theme-provider\` updated to version \`0.1.0\`

### Features

* **mui-controlled-form:** add ControlledDatepicker ([db89204](https://github.com/Availity/element/commit/db89204ac8c92bebcf1dae3f65be84718d87474a))
* **mui-controlled-form:** add yup resolver support ([16c16b9](https://github.com/Availity/element/commit/16c16b98743f8bae504a02709936cc252f4a82e1))
* **mui-controlled-form:** allow user to pass any validation resolver ([fa7daf3](https://github.com/Availity/element/commit/fa7daf3db9da8d02065cda3b89421064ea98f3bc))
* **mui-controlled-form:** initial commit ([827e8af](https://github.com/Availity/element/commit/827e8af9b0b29a912c08e2632f33cd6ee6708416))
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Form Components/Controlled Form/Introduction"}),`
`,e.jsx(n,{children:r}),`
`,e.jsx(n,{children:l})]})}function A(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i()}export{A as default};
