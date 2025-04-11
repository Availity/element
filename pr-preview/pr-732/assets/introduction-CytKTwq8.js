import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as p}from"./index-CfSBfIZi.js";import{M as o,c as i}from"./index-CzYI0Y3_.js";import"./DocsRenderer-CFRXHY34-B9NE_b2X.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Cp7f9itr.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const m=`# @availity/mui-stepper

> Availity MUI Stepper component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-stepper.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-stepper)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-stepper.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-stepper)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-stepper?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-stepper/package.json)

## Documentation

This package extends the MUI Stepper component: [MUI Stepper Docs](https://mui.com/components/stepper/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-stepper-introduction--docs)

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
npm install @availity/mui-stepper
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-stepper
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { Stepper } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { Stepper } from '@availity/mui-stepper';
\`\`\`

#### Simple Stepper

\`\`\`jsx
import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@availity/element';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const Example = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <Stepper activeStep={0}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Button color="secondary" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Button color={activeStep === steps.length - 1 ? 'primary' : 'secondary'} onClick={handleNext}>
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </>
  );
};
\`\`\`
`,s=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.1...@availity/mui-stepper@1.0.2) (2025-04-08)

### Dependency Updates

* \`mui-button\` updated to version \`1.0.1\`
## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.0...@availity/mui-stepper@1.0.1) (2025-03-07)

### Dependency Updates

* \`mui-button\` updated to version \`1.0.0\`
* \`mui-layout\` updated to version \`1.0.0\`
* \`mui-paper\` updated to version \`1.0.0\`
* \`mui-typography\` updated to version \`1.0.0\`
* \`mui-icon\` updated to version \`1.0.0\`
## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.0-alpha.0...@availity/mui-stepper@1.0.0) (2025-02-25)

### Dependency Updates

* \`mui-button\` updated to version \`0.4.0\`
* \`mui-layout\` updated to version \`0.4.0\`
* \`mui-paper\` updated to version \`0.4.0\`
* \`mui-typography\` updated to version \`0.4.0\`
* \`mui-icon\` updated to version \`0.4.0\`

### ⚠ BREAKING CHANGES

* upgrade to @mui/material v6

### Miscellaneous Chores

* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.4.0...@availity/mui-stepper@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/material v6
* **element:** upgraded to @mui/material v6

### Features

* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))
* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))
* upgrade to MUI v6 ([7febd6f](https://github.com/Availity/element/commit/7febd6fd4fd58e87e1c97a832cea3b4595a35d58))

## [0.4.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.3...@availity/mui-stepper@0.4.0) (2025-02-04)

### Dependency Updates

* \`mui-button\` updated to version \`0.3.3\`
* \`mui-layout\` updated to version \`0.3.3\`
* \`mui-paper\` updated to version \`0.3.3\`
* \`mui-icon\` updated to version \`0.3.3\`
* \`mui-typography\` updated to version \`0.3.3\`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## [0.3.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.2...@availity/mui-stepper@0.3.3) (2025-01-27)

### Dependency Updates

* \`mui-button\` updated to version \`0.3.2\`
* \`mui-icon\` updated to version \`0.3.2\`
## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.1...@availity/mui-stepper@0.3.2) (2025-01-22)

### Dependency Updates

* \`mui-button\` updated to version \`0.3.1\`
* \`mui-icon\` updated to version \`0.3.1\`
## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.0...@availity/mui-stepper@0.3.1) (2025-01-15)

## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.4...@availity/mui-stepper@0.3.0) (2025-01-09)


### Features

* **mui-stepper:** add scroll buttons ([5855cfb](https://github.com/Availity/element/commit/5855cfbdf8d43a709a37723c46b553631e115056))

## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.3...@availity/mui-stepper@0.2.4) (2025-01-06)

### Dependency Updates

* \`mui-button\` updated to version \`0.2.3\`
* \`mui-icon\` updated to version \`0.2.3\`
## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.2...@availity/mui-stepper@0.2.3) (2025-01-03)

### Dependency Updates

* \`mui-button\` updated to version \`0.2.2\`
* \`mui-icon\` updated to version \`0.2.2\`
## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.1...@availity/mui-stepper@0.2.2) (2024-12-09)

### Dependency Updates

* \`mui-button\` updated to version \`0.2.1\`
* \`mui-icon\` updated to version \`0.2.1\`
## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.0...@availity/mui-stepper@0.2.1) (2024-10-31)

### Dependency Updates

* \`mui-button\` updated to version \`0.2.0\`
* \`mui-layout\` updated to version \`0.2.0\`
* \`mui-typography\` updated to version \`0.2.0\`
* \`mui-icon\` updated to version \`0.2.0\`
## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.4...@availity/mui-stepper@0.2.0) (2024-10-04)


### Features

* **mui-stepper:** legacy styles and docs ([9bad3a1](https://github.com/Availity/element/commit/9bad3a13300857e3d13e5b21bc11e20c492c69e7))

## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.3...@availity/mui-stepper@0.1.4) (2024-09-09)


### Bug Fixes

* resolve accessibility issues in stories ([7e22419](https://github.com/Availity/element/commit/7e2241913f8ad10f467493b605fc0234e6eab5e2))

## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.2...@availity/mui-stepper@0.1.3) (2024-08-08)


### Bug Fixes

* **mui-stepper:** add background to stories ([627fd5d](https://github.com/Availity/element/commit/627fd5da3f571ca2d95ffdc6c2e270878929cc2d))

## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.1...@availity/mui-stepper@0.1.2) (2024-08-08)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.1\`
* \`mui-icon\` updated to version \`0.1.1\`

### Bug Fixes

* **mui-icon:** deprecate duplicate checkcircleicon ([5f744a9](https://github.com/Availity/element/commit/5f744a90014b7507511f012075cceeded54001e5))

## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.0...@availity/mui-stepper@0.1.1) (2024-08-05)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.0\`
* \`mui-icon\` updated to version \`0.1.0\`
## 0.1.0 (2024-07-22)

### Dependency Updates

* \`mui-button\` updated to version \`0.1.0\`
* \`mui-layout\` updated to version \`0.1.0\`
* \`mui-typography\` updated to version \`0.1.0\`
* \`mui-icon\` updated to version \`0.1.0\`

### Features

* **mui-stepper:** add Stepper component ([04e21e8](https://github.com/Availity/element/commit/04e21e8f5117c79f0e110308482ed1277a9a16e7))
`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Stepper/Introduction"}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(i,{children:s})]})}function A(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{A as default};
