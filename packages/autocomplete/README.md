# @availity/mui-autocomplete

> Availity MUI Autocomplete component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-autocomplete.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-autocomplete)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-autocomplete.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-autocomplete)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-autocomplete?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-autocomplete/package.json)

## Documentation

This package extends the MUI Autocomplete component: [MUI Autocomplete Docs](https://mui.com/components/autocomplete/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-autocomplete-introduction--docs)

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

_This package has a few peer dependencies. Add `@mui/material`, `@emotion/react`, `@availity/mui-form-utils`, & `@availity/mui-textfield` to your project if not already installed._

```bash
npm install @availity/mui-autocomplete
```

#### Yarn

```bash
yarn add @availity/mui-autocomplete
```

### Usage

#### Import through @availity/element

The `Autcomplete` component can be used standalone or with a form state library like [react-hook-form](https://react-hook-form.com/).

`Autocomplete` uses the `TextField` component to render the input. You must pass your field related props: `label`, `helperText`, `error`, etc. to the the `FieldProps` prop.

```tsx
import { Autocomplete } from '@availity/element';

const MyAutocomplete = () => {
  return (
    <Autocomplete
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ]}
      getOptionLabel={(value) => value.label}
      FieldProps={{ label: 'My Autocomplete Field', helperText: 'Text that helps the user' }}
    />
  );
};
```

#### Direct import

```tsx
import { Autocomplete } from '@availity/mui-autocomplete';
```

#### Usage with `react-hook-form`

```tsx
import { useForm, Controller } from 'react-hook-form';
import { Autocomplete, Button } from '@availity/element';

const Form = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="dropdown"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Autocomplete
              onChange={(event, value, reason) => {
                if (reason === 'clear') {
                  onChange(null);
                }
                onChange(value);
              }}
              onBlur={onBlur}
              FieldProps={{ label: 'Dropdown', helperText: 'This is helper text', placeholder: 'Value' }}
              options={['Bulbasaur', 'Squirtle', 'Charmander']}
              value={value || null}
            />
          );
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

#### `AsyncAutocomplete` Usage

An `AsyncAutocomplete` component is exported for use cases that require fetching paginated results from an api. You will need to use the `loadOptions` prop. The `loadOptions` function will be called when the user scrolls to the bottom of the dropdown. It will be passed the current page and limit. The `limit` prop controls what is passed to `loadOptions` and is defaulted to `50`. The `loadOptions` function must return an object that has an array of `options` and a `hasMore` property. `hasMore` tells the `AsyncAutocomplete` component whether or not it should call `loadOptions` again. The returned `options` will be concatenated to the existing options array.

```tsx
import { Autocomplete } from '@availity/element';

const Example = () => {
  const loadOptions = async (page: number) => {
    const response = await callApi(page);

    return {
      options: repsonse.data,
      hasMore: response.totalCount > response.count,
    };
  };

  return <Autocomplete FieldProps={{ label: 'Async Dropdown' }} loadOptions={loadOptions} />;
};
```
