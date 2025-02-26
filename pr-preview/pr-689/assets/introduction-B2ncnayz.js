import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as a}from"./index-CfSBfIZi.js";import{M as l,c as n}from"./index-BxavW7CC.js";import"./DocsRenderer-CFRXHY34-nljz8Rux.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-TTI23OIt.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const m=`# @availity/mui-file-selector

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
`,s="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.0.0-alpha.0...@availity/mui-file-selector@1.0.0) (2025-02-25)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `0.3.3`\n* `mui-alert` updated to version `0.3.3`\n* `mui-button` updated to version `0.3.3`\n* `mui-divider` updated to version `0.3.3`\n* `mui-form-utils` updated to version `0.3.3`\n* `mui-icon` updated to version `0.3.3`\n* `mui-layout` updated to version `0.3.3`\n* `mui-list` updated to version `0.3.3`\n* `mui-progress` updated to version `0.3.3`\n* `mui-typography` updated to version `0.3.3`\n\n### ⚠ BREAKING CHANGES\n\n* upgrade to @mui/material v6\n\n### Miscellaneous Chores\n\n* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))\n\n## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.3...@availity/mui-file-selector@1.0.0-alpha.0) (2025-02-24)\n\n\n### ⚠ BREAKING CHANGES\n\n* upgraded to @mui/material v6\n* **element:** upgraded to @mui/material v6\n\n### Features\n\n* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))\n* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))\n\n## [0.3.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.2...@availity/mui-file-selector@0.3.3) (2025-02-19)\n\n### Dependency Updates\n\n* `mui-progress` updated to version `0.3.2`\n## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.1...@availity/mui-file-selector@0.3.2) (2025-02-19)\n\n\n### Bug Fixes\n\n* update types and add docs ([c3f9f9e](https://github.com/Availity/element/commit/c3f9f9e1d0946ae5d0a03eab5b250ec47a0c3aab))\n\n## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.0...@availity/mui-file-selector@0.3.1) (2025-02-18)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.3.0`\n## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.10...@availity/mui-file-selector@0.3.0) (2025-02-04)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `0.2.10`\n* `mui-alert` updated to version `0.2.10`\n* `mui-button` updated to version `0.2.10`\n* `mui-divider` updated to version `0.2.10`\n* `mui-form-utils` updated to version `0.2.10`\n* `mui-icon` updated to version `0.2.10`\n* `mui-layout` updated to version `0.2.10`\n* `mui-list` updated to version `0.2.10`\n* `mui-progress` updated to version `0.2.10`\n* `mui-typography` updated to version `0.2.10`\n\n### Features\n\n* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))\n\n## [0.2.10](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.9...@availity/mui-file-selector@0.2.10) (2025-01-27)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.9`\n* `mui-button` updated to version `0.2.9`\n* `mui-form-utils` updated to version `0.2.9`\n* `mui-icon` updated to version `0.2.9`\n* `mui-list` updated to version `0.2.9`\n* `mui-progress` updated to version `0.2.9`\n## [0.2.9](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.8...@availity/mui-file-selector@0.2.9) (2025-01-22)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.8`\n* `mui-button` updated to version `0.2.8`\n* `mui-form-utils` updated to version `0.2.8`\n* `mui-icon` updated to version `0.2.8`\n* `mui-list` updated to version `0.2.8`\n* `mui-progress` updated to version `0.2.8`\n## [0.2.8](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.7...@availity/mui-file-selector@0.2.8) (2025-01-10)\n\n\n### Bug Fixes\n\n* remove debug story ([091c909](https://github.com/Availity/element/commit/091c909acfb22464723dec19d6c258d30cd2ba8d))\n* update FileList ([036e91c](https://github.com/Availity/element/commit/036e91cd37f89ef67d77d4782dced6ebf841dd5c))\n\n## [0.2.7](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.6...@availity/mui-file-selector@0.2.7) (2025-01-08)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.2.6`\n* `mui-list` updated to version `0.2.6`\n## [0.2.6](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.5...@availity/mui-file-selector@0.2.6) (2025-01-08)\n\n\n### Bug Fixes\n\n* add hover border and fix accessibility ([7d8e7e4](https://github.com/Availity/element/commit/7d8e7e4136b266d42b3e453e57efe83f780a9e57))\n\n## [0.2.5](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.4...@availity/mui-file-selector@0.2.5) (2025-01-07)\n\n\n### Bug Fixes\n\n* bump upload-core ([60dc9a3](https://github.com/Availity/element/commit/60dc9a38f27aa93098d593efcd20026b39a2b7d7))\n* generate id before starting ([3514684](https://github.com/Availity/element/commit/3514684dfb9ca218d8d320c43235d4a0866d31a4))\n\n## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.3...@availity/mui-file-selector@0.2.4) (2025-01-06)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.3`\n* `mui-button` updated to version `0.2.3`\n* `mui-form-utils` updated to version `0.2.3`\n* `mui-icon` updated to version `0.2.3`\n* `mui-list` updated to version `0.2.3`\n* `mui-progress` updated to version `0.2.3`\n\n### Bug Fixes\n\n* add hover color ([5001b77](https://github.com/Availity/element/commit/5001b77407b26de13d44b3ac3e39f05224aacc08))\n* various fixes for file selector ([26c651d](https://github.com/Availity/element/commit/26c651d7b8e89919fac335f233acbe528d10956a))\n\n## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.2...@availity/mui-file-selector@0.2.3) (2025-01-03)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.2`\n* `mui-button` updated to version `0.2.2`\n* `mui-form-utils` updated to version `0.2.2`\n* `mui-icon` updated to version `0.2.2`\n* `mui-list` updated to version `0.2.2`\n* `mui-progress` updated to version `0.2.2`\n## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.1...@availity/mui-file-selector@0.2.2) (2025-01-02)\n\n## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.0...@availity/mui-file-selector@0.2.1) (2024-12-23)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.2.0`\n## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.3...@availity/mui-file-selector@0.2.0) (2024-12-16)\n\n\n### Features\n\n* **mui-file-selector:** add support for dropping files and fix removing ([66af280](https://github.com/Availity/element/commit/66af28076ed7149bc47c6b9758bb9a2e5461f201))\n* **mui-file-selector:** update upload-core ([0da6ec7](https://github.com/Availity/element/commit/0da6ec7672f1d7a884f42d03772ec20249a3309b))\n* pass uploads to onSubmit ([e894489](https://github.com/Availity/element/commit/e8944899a6a6ed4b4bb192a51b707a9aa88b6833))\n\n\n### Bug Fixes\n\n* add better error handling ([c2db0c0](https://github.com/Availity/element/commit/c2db0c0a1d06bebbb03bc38309d65829487717fb))\n* fixes for file selector ([add8801](https://github.com/Availity/element/commit/add88013c18816ccdaeeb9366768089d68aded7f))\n* fixes for tests ([e112880](https://github.com/Availity/element/commit/e11288079f203464f55f35cbaed47f86f4db3755))\n* **mui-file-selector:** update upload-core ([e24b673](https://github.com/Availity/element/commit/e24b67337a8b1a71441c6954e84a6bd3a1b8e323))\n* update upload-core ([e11a6ad](https://github.com/Availity/element/commit/e11a6ad155743afb221739686b608e581099c37a))\n* update upload-core ([5d820db](https://github.com/Availity/element/commit/5d820db3f146e9e0015daa0f5e9a9d9316cd6807))\n\n## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.2...@availity/mui-file-selector@0.1.3) (2024-12-09)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.2`\n* `mui-form-utils` updated to version `0.1.2`\n* `mui-icon` updated to version `0.1.2`\n* `mui-list` updated to version `0.1.2`\n* `mui-progress` updated to version `0.1.2`\n## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.1...@availity/mui-file-selector@0.1.2) (2024-11-20)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.1.1`\n* `mui-list` updated to version `0.1.1`\n## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.0...@availity/mui-file-selector@0.1.1) (2024-10-31)\n\n\n### Bug Fixes\n\n* **mui-file-selector:** comment out import for temp fix ([7e2e950](https://github.com/Availity/element/commit/7e2e95083893c47adae702dde867cc8833ae01ca))\n\n## 0.1.0 (2024-10-31)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.0`\n* `mui-divider` updated to version `0.1.0`\n* `mui-form-utils` updated to version `0.1.0`\n* `mui-icon` updated to version `0.1.0`\n* `mui-layout` updated to version `0.1.0`\n* `mui-list` updated to version `0.1.0`\n* `mui-progress` updated to version `0.1.0`\n* `mui-typography` updated to version `0.1.0`\n* `mui-paper` updated to version `0.1.0`\n\n### Features\n\n* add FileSelector ([7ad1f7b](https://github.com/Availity/element/commit/7ad1f7bb364bbeb2048d2ff4c9b0a2b1a1e33777))\n\n\n### Bug Fixes\n\n* **mui-file-selector:** update types ([477c992](https://github.com/Availity/element/commit/477c9921792ef35302b1b21d17056d16434c7d98))\n";function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/File Selector/Introduction"}),`
`,e.jsx(n,{children:m}),`
`,e.jsx(n,{children:s})]})}function A(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o()}export{A as default};
