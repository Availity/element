# @availity/element

> Frontend design system built on top of @mui/material with @availity/design-tokens

[![Version](https://img.shields.io/npm/v/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/element.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/element)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/element?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/element/package.json)

This is a collection of reusable React components intended to be used across multiple projects. These components use [@availity/design-tokens](https://github.com/Availity/element/tree/main/packages/design-tokens#readme) for styling and [Material UI](https://mui.com/) as the base.

Visit our [documentation site](https://design.availity.com/2e36e50c7/p/77f9e0-components) and [Storybook](https://availity.github.io/element/?path=/docs/element--docs) for more information on how to use the components.

## Installation

### NPM

```bash
npm install @availity/element
```

### Yarn

```bash
yarn add @availity/element
```

## Usage

The @availity/element package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components.

To use the components in your project, you will need to import them first:

```tsx
import { Button, ThemeProvider } from '@availity/element';
```

Make sure all of the components you use are inside the `ThemeProvider` component. We recommend placing it in your root `index.{js|tsx}` file.

```jsx
import { ThemePovider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
```

## Automated Testing

We recommend using `id`s on the components you want to target with automated testing.
