import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-XODwqvNS.js";import{M as o,c as i}from"./index-CCB8S0hf.js";import"./DocsRenderer-CFRXHY34-CX3Eh5-J.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-BomhER0K.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m=`# @availity/mui-stepper

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
`,s="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## [1.0.6](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.5...@availity/mui-stepper@1.0.6) (2025-04-30)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.5`\n* `mui-icon` updated to version `1.0.5`\n## [1.0.5](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.4...@availity/mui-stepper@1.0.5) (2025-04-21)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.4`\n## [1.0.4](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.3...@availity/mui-stepper@1.0.4) (2025-04-14)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.3`\n## [1.0.3](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.2...@availity/mui-stepper@1.0.3) (2025-04-11)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.2`\n* `mui-layout` updated to version `1.0.2`\n* `mui-paper` updated to version `1.0.2`\n* `mui-typography` updated to version `1.0.2`\n* `mui-icon` updated to version `1.0.2`\n## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.1...@availity/mui-stepper@1.0.2) (2025-04-08)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.1`\n## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.0...@availity/mui-stepper@1.0.1) (2025-03-07)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.0`\n* `mui-layout` updated to version `1.0.0`\n* `mui-paper` updated to version `1.0.0`\n* `mui-typography` updated to version `1.0.0`\n* `mui-icon` updated to version `1.0.0`\n## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-stepper@1.0.0-alpha.0...@availity/mui-stepper@1.0.0) (2025-02-25)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.4.0`\n* `mui-layout` updated to version `0.4.0`\n* `mui-paper` updated to version `0.4.0`\n* `mui-typography` updated to version `0.4.0`\n* `mui-icon` updated to version `0.4.0`\n\n### ⚠ BREAKING CHANGES\n\n* upgrade to @mui/material v6\n\n### Miscellaneous Chores\n\n* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))\n\n## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.4.0...@availity/mui-stepper@1.0.0-alpha.0) (2025-02-24)\n\n\n### ⚠ BREAKING CHANGES\n\n* upgraded to @mui/material v6\n* **element:** upgraded to @mui/material v6\n\n### Features\n\n* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))\n* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))\n* upgrade to MUI v6 ([7febd6f](https://github.com/Availity/element/commit/7febd6fd4fd58e87e1c97a832cea3b4595a35d58))\n\n## [0.4.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.3...@availity/mui-stepper@0.4.0) (2025-02-04)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.3.3`\n* `mui-layout` updated to version `0.3.3`\n* `mui-paper` updated to version `0.3.3`\n* `mui-icon` updated to version `0.3.3`\n* `mui-typography` updated to version `0.3.3`\n\n### Features\n\n* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))\n\n## [0.3.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.2...@availity/mui-stepper@0.3.3) (2025-01-27)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.3.2`\n* `mui-icon` updated to version `0.3.2`\n## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.1...@availity/mui-stepper@0.3.2) (2025-01-22)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.3.1`\n* `mui-icon` updated to version `0.3.1`\n## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.3.0...@availity/mui-stepper@0.3.1) (2025-01-15)\n\n## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.4...@availity/mui-stepper@0.3.0) (2025-01-09)\n\n\n### Features\n\n* **mui-stepper:** add scroll buttons ([5855cfb](https://github.com/Availity/element/commit/5855cfbdf8d43a709a37723c46b553631e115056))\n\n## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.3...@availity/mui-stepper@0.2.4) (2025-01-06)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.2.3`\n* `mui-icon` updated to version `0.2.3`\n## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.2...@availity/mui-stepper@0.2.3) (2025-01-03)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.2.2`\n* `mui-icon` updated to version `0.2.2`\n## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.1...@availity/mui-stepper@0.2.2) (2024-12-09)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.2.1`\n* `mui-icon` updated to version `0.2.1`\n## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.2.0...@availity/mui-stepper@0.2.1) (2024-10-31)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.2.0`\n* `mui-layout` updated to version `0.2.0`\n* `mui-typography` updated to version `0.2.0`\n* `mui-icon` updated to version `0.2.0`\n## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.4...@availity/mui-stepper@0.2.0) (2024-10-04)\n\n\n### Features\n\n* **mui-stepper:** legacy styles and docs ([9bad3a1](https://github.com/Availity/element/commit/9bad3a13300857e3d13e5b21bc11e20c492c69e7))\n\n## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.3...@availity/mui-stepper@0.1.4) (2024-09-09)\n\n\n### Bug Fixes\n\n* resolve accessibility issues in stories ([7e22419](https://github.com/Availity/element/commit/7e2241913f8ad10f467493b605fc0234e6eab5e2))\n\n## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.2...@availity/mui-stepper@0.1.3) (2024-08-08)\n\n\n### Bug Fixes\n\n* **mui-stepper:** add background to stories ([627fd5d](https://github.com/Availity/element/commit/627fd5da3f571ca2d95ffdc6c2e270878929cc2d))\n\n## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.1...@availity/mui-stepper@0.1.2) (2024-08-08)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.1`\n* `mui-icon` updated to version `0.1.1`\n\n### Bug Fixes\n\n* **mui-icon:** deprecate duplicate checkcircleicon ([5f744a9](https://github.com/Availity/element/commit/5f744a90014b7507511f012075cceeded54001e5))\n\n## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-stepper@0.1.0...@availity/mui-stepper@0.1.1) (2024-08-05)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.0`\n* `mui-icon` updated to version `0.1.0`\n## 0.1.0 (2024-07-22)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.0`\n* `mui-layout` updated to version `0.1.0`\n* `mui-typography` updated to version `0.1.0`\n* `mui-icon` updated to version `0.1.0`\n\n### Features\n\n* **mui-stepper:** add Stepper component ([04e21e8](https://github.com/Availity/element/commit/04e21e8f5117c79f0e110308482ed1277a9a16e7))\n";function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Stepper/Introduction"}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(i,{children:s})]})}function D(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{D as default};
