import{j as t,a as i,F as s}from"./jsx-runtime-91a467a5.js";import{M as a,e as m}from"./chunk-PCJTTTQV-5d40d54f.js";import{u as r}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-a27292dc.js";import"../sb-preview/runtime.js";import"./react-18-1b38c8e6.js";import"./index-8ce4a492.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./isNativeReflectConstruct-e378569d.js";import"./index-356e4a49.js";const l=`# @availity/element

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
`;function o(e){return i(s,{children:[t(a,{title:"Element"}),`
`,t(m,{children:l})]})}function P(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}export{P as default};
//# sourceMappingURL=introduction-19a5c5b7.js.map
