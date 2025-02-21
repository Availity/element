# @availity/mui-controlled-form

> Availity MUI Form components integrated with react-hook-form to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-controlled-form.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-controlled-form)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-controlled-form.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-controlled-form)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-controlled-form?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-controlled-form/package.json)

## Documentation

This package extends the Element's Form components with [react-hook-form](https://react-hook-form.com/). The goal of this package is to decrease the amount of setup involved with building a form using Element components and react-hook-form. If you would like to use another form library, the raw Element form components are also available.

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/form-components-controlled-form-introduction--docs)

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

_This package has a few peer dependencies. Add `@mui/material` & `@emotion/react` to your project if not already installed._

```bash
npm install @availity/mui-controlled-form
```

#### Yarn

```bash
yarn add @availity/mui-controlled-form
```

### Usage

#### Import through @availity/element

```tsx
import { ControlledTextField } from '@availity/element';
```

#### Direct import

```tsx
import { ControlledTextField } from '@availity/mui-controlled-form';
```

### Form Validation

Form validation can be on a component-by-component basis, or by passing a valid schema and schema resolver. For more information on react-hook-form's schema resolvers see: https://github.com/react-hook-form/resolvers#quickstart
