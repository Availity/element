# @availity/mui-tree

> Availity MUI Tree component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-tree.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-tree)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-tree.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-tree)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-tree?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/tree/package.json)

## Documentation

This package extends the MUI Tree component: [MUI Tree Docs](https://mui.com/x/react-tree-view/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-tree-introduction--docs)

Availity standards for design and usage can be found in the [Availity Design Guide](https://design.availity.com/2e36e50c7)

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

_This package has a few peer dependencies. Add `@mui/material`, `@emotion/react`, & `@availity/mui-icon` to your project if not already installed._

```bash
npm install @availity/mui-tree
```

#### Yarn

```bash
yarn add @availity/mui-tree
```

### Usage

#### Import through @availity/element

```tsx
import { DynamicTreeView, TreeView, TreeItem } from '@availity/element';
```

#### Direct import

```tsx
import { DynamicTreeView, TreeView, TreeItem } from '@availity/mui-tree';
```

#### DynamicTreeView vs TreeView

TreeView receives its items as JSX Children. DynamicTreeView receives its items via an items prop making it easier to dynamically load them from an external source. Furthermore, DynamicTreeView includes the ability to make the TreeItem's editable.
