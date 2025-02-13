import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as p}from"./index-CfSBfIZi.js";import{e as a,f as o}from"./index-gUphfOCR.js";import"./DocsRenderer-CFRXHY34-DwCl6Gyr.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CfauIZ_J.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const s=`# @availity/mui-stepper

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
`;function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Stepper/Introduction"}),`
`,e.jsx(o,{children:s})]})}function b(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{b as default};
