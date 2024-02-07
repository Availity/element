import{a as t,j as i,F as a}from"./jsx-runtime-a3bcee63.js";import{M as s,l as m}from"./index-c7ffd675.js";import"./chunk-PCJTTTQV-59b942e1.js";import{u as r}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-0c5b69ba.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./index-8a077077.js";import"./_baseFor-53bad3ef.js";import"./index-e9d7ebdf.js";import"./_initCloneObject-31384e14.js";import"./index-356e4a49.js";import"./react-18-b9b6ed02.js";const l=`# @availity/element

> Theme Provider using MUI and @availity/design-tokens

[![Version](https://img.shields.io/npm/v/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/element?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/element/package.json)

This is a collection of reusable React components intended to be used across multiple projects. These components use [@availity/design-tokens](https://github.com/Availity/element/tree/main/packages/design-tokens#readme) for styling and [Material UI](https://mui.com/) as the base.

Visit our [documentation site](https://zeroheight.com/07045d232/v/latest/p/753cd8-element) and [Storybook](https://availity.github.io/element/?path=/docs/element--docs) for more information on how to use the components.

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

## Automated Testing

We recommend using \`id\`s on the components you want to target with automated testing.
`;function o(e){return i(a,{children:[t(s,{title:"Element"}),`
`,t(m,{children:l})]})}function P(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}export{P as default};
//# sourceMappingURL=introduction-0a32d3a1.js.map
