# @availity/<%= packageName %>

> Availity MUI <%= componentName %> component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/<%= packageName %>.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/<%= packageName %>)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/<%= packageName %>.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/<%= packageName %>)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/<%= packageName %>?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/<%= packageName %>/package.json)

## Documentation

This package extends the MUI <%= componentName %> component: [MUI <%= componentName %> Docs](https://mui.com/components/<%= fileName %>/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-<%= fileName %>-introduction--docs)

Availity standards for design and usage can be found in the [Availity Design Guide](https://zeroheight.com/2e36e50c7)

## Installation

### Import Through @availity/element (Recommended)

#### NPM

```bash
npm install @availity/element
```

#### Yarn

```bash
yarn add @availity/element
```

### Direct Import

#### NPM

_This package has a few peer dependencies. Add `@mui/material` & `@emotion/react` to your project if not already installed._

```bash
npm install @availity/<%= packageName %>
```

#### Yarn

```bash
yarn add @availity/<%= packageName %>
```

### Usage

#### Import through @availity/element

```tsx
import { <%= componentName %> } from '@availity/element';
```

#### Direct import

```tsx
import { <%= componentName %> } from '@availity/<%= packageName %>';
```
