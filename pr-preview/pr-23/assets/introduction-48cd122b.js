import{j as e,a as i,F as s}from"./jsx-runtime-670450c2.js";import{M as a,a as m}from"./index-ac77d613.js";import"./chunk-PCJTTTQV-cb37ee25.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{u as r}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-34cf2b24.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./memoizerific-a8c4a000.js";import"./index-abcfcb28.js";import"./chunk-RDJSMFWU-e11cec2c.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-c6079acc.js";import"./index-96c5f47c.js";import"./_baseIsEqual-04a52134.js";import"./extends-98964cd2.js";import"./inheritsLoose-d374ba88.js";import"./index-5e169323.js";import"./index-356e4a49.js";import"./react-18-2bb9dade.js";const p=`# @availity/element

> Theme Provider using MUI and @availity/design-tokens

[![Version](https://img.shields.io/npm/v/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/element?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/element/package.json)

This is a collection of reusable React components intended to be used across multiple projects. These components use [@availity/design-tokens](./packages/design-tokens/) for styling and [Material UI](https://mui.com/) as the base.

Visit our [documentation site](https://zeroheight.com/07045d232/v/latest/p/753cd8-element) for more information on how to use the components.

## Installation

### NPM

\`\`\`bash
npm install @availity/element
\`\`\`

### Yarn

\`\`\`bash
yarn add @availity/element
\`\`\`

## Usage

The @availity/element package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components.

To use the components in your project, you will need to import them first:

\`\`\`tsx
import { Button, ThemeProvider } from '@availity/element';
\`\`\`

Make sure all of the components you use are inside the \`ThemeProvider\` component. We recommend placing it in your root \`index.{js|tsx}\` file.

\`\`\`jsx
import { ThemePovider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
\`\`\`
`;function O(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(o,{})})):o();function o(){return i(s,{children:[e(a,{title:"Element"}),`
`,e(m,{children:p})]})}}export{O as default};
//# sourceMappingURL=introduction-48cd122b.js.map
