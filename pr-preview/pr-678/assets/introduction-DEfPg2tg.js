import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as i}from"./index-CfSBfIZi.js";import{M as a,c as l}from"./index-Z3vhnIXP.js";import"./DocsRenderer-CFRXHY34-DehTLCdV.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CEWtZteR.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const r=`# @availity/mui-file-selector

> Availity MUI File Selector component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-file-selector.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-file-selector)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-file-selector.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-file-selector)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-file-selector?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-file-selector/package.json)

## Documentation

This package extends the MUI File Selector component: [MUI File Selector Docs](https://mui.com/components/file-selector/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-file-selector-introduction--docs)

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
npm install @availity/mui-file-selector
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-file-selector
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { FileSelector } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { FileSelector } from '@availity/mui-file-selector';
\`\`\`

#### Basic Example

Here's a basic example of how to use the FileSelector component:

\`\`\`tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyComponent = () => {
  const handleSubmit = (uploads, values) => {
    console.log('Submitted files:', uploads);
    console.log('Form values:', values);
  };

  return (
    <FileSelector
      name="myFiles"
      bucketId="your-bucket-id"
      customerId="your-customer-id"
      clientId="your-client-id"
      maxSize={5 * 1024 * 1024} // 5MB
      allowedFileTypes={['.pdf', '.doc', '.docx']}
      maxFiles={3}
      onSubmit={handleSubmit}
    />
  );
};

export default MyComponent;
\`\`\`

#### Advanced Examples

The \`onSuccess\` and \`onError\` callbacks are available to use to add logic for after the file is uploaded or in the event there is an error with the api call.

\`\`\`tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyFileUploadComponent = () => {
  const handleSuccess = () => {
    // Handle successful upload - e.g., show success message, update UI
  };

  const handleError = (error) => {
    // Handle upload error - e.g., show error message, retry upload
  };

  return (
    <FileSelector
      name="documentUpload"
      bucketId="your-bucket-id"
      customerId="your-customer-id"
      clientId="your-client-id"
      maxSize={10 * 1024 * 1024} // 10MB
      allowedFileTypes={['.pdf', '.doc', '.docx']}
      multiple={true}
      maxFiles={5}
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default MyFileUploadComponent;
\`\`\`
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/File Selector/Introduction"}),`
`,e.jsx(l,{children:r})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{b as default};
