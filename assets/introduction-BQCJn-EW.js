import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as o}from"./index-CfSBfIZi.js";import{M as s,c as a}from"./index-CKD8bq-0.js";import"./DocsRenderer-CFRXHY34-CbrN6KFK.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DiptE-Ot.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const l=`# @availity/element

> Frontend design system built on top of @mui/material with @availity/design-tokens

[![Version](https://img.shields.io/npm/v/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/element?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/element/package.json)

This is a collection of reusable React components intended to be used across multiple projects. These components use [@availity/design-tokens](https://github.com/Availity/element/tree/main/packages/design-tokens#readme) for styling and [Material UI](https://mui.com/) as the base.

Visit our [documentation site](https://design.availity.com/2e36e50c7/p/77f9e0-components) and [Storybook](https://availity.github.io/element/?path=/docs/element--docs) for more information on how to use the components.

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
`;function i(t){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Element"}),`
`,e.jsxs(n.h2,{id:"what-is-availityelement",children:["What is ",e.jsx(n.code,{children:"@availity/element"}),"?"]}),`
`,e.jsxs(n.p,{children:["The vision behind ",e.jsx(n.code,{children:"@availity/element"}),` is to build a wholistic design system
rather than simply a collection of components. The components are built in
collaboration with the UX team and based on larger patterns. This helps
create a cohesive experience across applications and frees up developers to
focus on rapid innovation.`]}),`
`,e.jsx(n.h2,{id:"why-mui",children:"Why MUI?"}),`
`,e.jsx(n.p,{children:`The official decision process for where Availity would go after Bootstrap 4 started
in 2020. It was decided early on to not upgrade to Bootstrap 5 and instead leave
Bootstrap behind. When determining where to go next the primary contenders were
Material and TailwindCSS. Material is a set of design guidelines started by Google
with an accompanying React component library. TailwindCSS is a "utility-first
CSS framework", with pre-defined classes similar to Bootstrap but going all in
with utility vs the component styles of Bootstrap.`}),`
`,e.jsx(n.p,{children:`We did POCs for both frameworks in 2021/2022, with Material ultimately coming out
on top for a few reasons:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`MUI integrates with Figma enabling UX to quickly produce designs that
closely match the actual components.`}),`
`,e.jsx(n.li,{children:`MUI's components allow for greater flexibility and less abstraction.
This enables developers to focus on business logic and innovation rather
than component limitations.`}),`
`,e.jsx(n.li,{children:`MUI handles a lot of baseline accessibility logic for simple components, as
well as complex accessibility patterns, like keyboard interactions for tabs.`}),`
`,e.jsx(n.li,{children:`MUI's theming engine makes it easy to implement global and targeted updates to the
look and feel.`}),`
`]}),`
`,e.jsx(n.h2,{id:"current-state",children:"Current State"}),`
`,e.jsxs(n.p,{children:["The goals of the current version of ",e.jsx(n.code,{children:"@availity/element"}),` include building a
cohesive design system with an eye on easing the migration process. The
initial release will provide a solid path towards 508 compliance and
baseline component-level telemetry.`]}),`
`,e.jsx(n.h2,{id:"future-plans",children:"Future Plans"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Internationalization (Material already supports this on the component level)"}),`
`,e.jsx(n.li,{children:"Consolidation across Availity Platforms in future themes"}),`
`]}),`
`,e.jsx(n.h2,{id:"readme",children:"README"}),`
`,e.jsx(a,{children:l})]})}function w(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{w as default};
