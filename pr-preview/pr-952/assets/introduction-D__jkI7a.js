import{j as n,M as a,i as o}from"./iframe-DUa_E2nK.js";import{useMDXComponents as i}from"./index-DDEICuqq.js";import"./preload-helper-PPVm8Dsz.js";const s=`# @availity/mui-error-boundary

> Availity MUI ErrorBoundary component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-error-boundary.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-error-boundary)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-error-boundary.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-error-boundary)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-error-boundary?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/error-boundary/package.json)

## Documentation

\`ErrorBoundary\` catches errors thrown while rendering its children and shows an Availity error page instead of a blank screen. It is built on React's [error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) feature and the Element \`EmptyState\` component.

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-error-boundary-introduction--docs)

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
npm install @availity/mui-error-boundary
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-error-boundary
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { ErrorBoundary } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { ErrorBoundary } from '@availity/mui-error-boundary';
\`\`\`

#### Wrap your whole app

Put one boundary inside your app container and use \`fullPage\` so the error page fills the screen.

\`\`\`tsx
<ThemeProvider>
  <ErrorBoundary fullPage onError={(error, info) => logError(error, info.componentStack)}>
    <App />
  </ErrorBoundary>
</ThemeProvider>
\`\`\`

#### Wrap smaller sections

A crash is handled by the closest boundary above it, so wrapping a section keeps the rest of the app running.

\`\`\`tsx
<ErrorBoundary>
  <ClaimsTable />
</ErrorBoundary>
\`\`\`

#### Props

| Prop        | Description                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| \`fullPage\`  | Fill the screen (\`min-height: 100vh\`) and use an \`h1\` heading. Default is inline.                         |
| \`fallback\`  | An element, or \`({ error, reset }) => node\`, to use instead of the default error page.                    |
| \`onError\`   | \`(error, info) => void\`. Called once per caught error. Use it to log to your monitoring tool.             |
| \`onReset\`   | Called when the boundary resets, from "Try again" or a \`resetKeys\` change.                                |
| \`resetKeys\` | Array of values. When one changes while an error is showing, the boundary resets. Pass the current route. |
| \`sx\`        | Styles for the default error page container.                                                              |

#### What it does not catch

Error boundaries only catch errors thrown **while rendering**. They do not catch errors in event handlers, asynchronous code (promises, \`setTimeout\`), or errors thrown by the boundary itself. Handle those where they happen.
`,d="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## 0.1.0 (2026-10-23)\n\n### Dependency Updates\n\n* `mui-button` updated to version `1.0.0`\n* `mui-empty-state` updated to version `1.0.0`\n* `mui-layout` updated to version `1.0.0`\n* `mui-typography` updated to version `1.0.0`\n\n### Features\n\n* **mui-error-boundary:** add ErrorBoundary component ([0be00e6](https://github.com/Availity/element/commit/0be00e66dff5c74340419e7fa0dbb4a61050d1d7))\n";function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/ErrorBoundary/Introduction"}),`
`,n.jsx(o,{children:s}),`
`,n.jsx(o,{children:d})]})}function m(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t()}export{m as default};
