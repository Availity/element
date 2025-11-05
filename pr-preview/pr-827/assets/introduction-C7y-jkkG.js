import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DawnV9gJ.js";import{M as m,c as o}from"./index-CW2qMsKZ.js";import"./DocsRenderer-CFRXHY34-CCX0z1Rn.js";import"./index-BSuoOqEd.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-BaTu0Umm.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DFMpBjsa.js";const l=`# @availity/mui-autocomplete

> Availity MUI Autocomplete component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-autocomplete.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-autocomplete)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-autocomplete.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-autocomplete)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-autocomplete?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-autocomplete/package.json)

## Documentation

This package extends the MUI Autocomplete component: [MUI Autocomplete Docs](https://mui.com/components/autocomplete/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/form-components-autocomplete-introduction--docs)

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

_This package has a few peer dependencies. Add \`@mui/material\`, \`@emotion/react\`, \`@availity/mui-form-utils\`, & \`@availity/mui-textfield\` to your project if not already installed._

\`\`\`bash
npm install @availity/mui-autocomplete
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-autocomplete
\`\`\`

### Usage

The \`Autcomplete\` component can be used standalone or with a form state library like [react-hook-form](https://react-hook-form.com/).

\`Autocomplete\` uses the \`TextField\` component to render the input. You must pass your field related props: \`label\`, \`helperText\`, \`error\`, etc. to the the \`FieldProps\` prop.

\`\`\`jsx
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
\`\`\`

#### Direct import

\`\`\`jsx
import { Autocomplete } from '@availity/mui-autocomplete';
\`\`\`

#### Usage with \`react-hook-form\`

\`\`\`jsx
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
\`\`\`

#### \`AsyncAutocomplete\` Usage

An \`AsyncAutocomplete\` component is exported for use cases that require fetching paginated results from an api. It uses the \`useInfiniteQuery\` from [@tanstack/react-query](https://tanstack.com/query/v4/docs/framework/react/guides/infinite-queries). The component requires two props to work properly: \`loadOptions\` and \`queryKey\`. The \`loadOptions\` prop is the function that is called to fetch the options. The \`queryKey\` is used as the key to cache the results. You can use this key to interact with the data in the query client.

The \`loadOptions\` function will be called when the user scrolls to the bottom of the dropdown. It will be passed the current offset and limit. The \`limit\` prop controls what is passed to \`loadOptions\` and is defaulted to \`50\`. The \`loadOptions\` function must return an object that has an array of \`options\`, a boolean \`hasMore\` property, and the \`offset\`. The returned \`options\` will be concatenated to the existing options array. \`hasMore\` tells the \`AsyncAutocomplete\` component whether or not it should call \`loadOptions\` again. Finally, the returned \`offset\` will be passed in the subsequent call to get the next set of options.

\`\`\`jsx
import { Autocomplete } from '@availity/element';
import { callApi } from '../api';

const Example = () => {
  const loadOptions = async (offset: number, limit: number) => {
    const response = await callApi(offset, limit);

    return {
      options: repsonse.data,
      hasMore: response.data.totalCount > response.data.count,
      offset,
    };
  };
    return <Autocomplete FieldProps={{ label: 'Async Dropdown' }} loadOptions={loadOptions} />;
};
\`\`\`

The \`queryOptions\` prop is available for passing in options to the \`useInfiniteQuery\` hook. One example of how this can be used is by using the \`enabled\` property. This can be used in cases where you would like to render the autocomplete, but are waiting on fetching the options. For example, if you need the user to fill out a section of the form before fetching the options for the autocomplete.

\`AsyncAutocomplete\` uses \`react-query\` which means we can take advantage of the \`queryKey\` to fetch new options as needed. This functionality is exposed via the \`watchParams\` prop. This prop accepts an object. Whenever a value in the object is changed then page is reset to 0 and the api is called again.

\`\`\`jsx
import { useState } from 'react';
import { Autocomplete, Button } from '@availity/element';

import { callApi } from '../api';

const Example = () => {
  const [id, setId] = useState('');

  const loadOptions = async (offset: number, limit: number) => {
    const response = await callApi(id, offset, limit);

    return {
      options: repsonse.data,
      hasMore: response.data.totalCount > response.data.count,
      offset,
    };
  };

  return (
    <>
      <Button onClick={() => setId('123')}>Set ID</Button>
      <Autocomplete
        FieldProps={{ label: 'Async Dropdown' }}
        loadOptions={loadOptions}
        queryOptions={{ enabled: !!id }}
        watchParams={{ id }}
      />
    </>
  );
};
\`\`\`

#### \`OrganizationAutocomplete\` Usage

The \`OrganizationAutocomplete\` component is an extension of the \`AsyncAutocomplete\` component which calls our Organizations endpoint. The props are the same as \`AsyncAutocomplete\` except you do not need to pass a function to \`loadOptions\`. This has already been done for you. The component uses the \`name\` from the returned organizations as the label for the option. Pass in your own \`getOptionLabel\` function if you would like to change the label.

If you need to add params, headers, or other data to the api call then the \`apiConfig\` prop is available. This allows for passing in the same options you would to the \`getOrganizations\`. For example, \`permissionIds\` or \`resourceIds\`.

The \`queryKey\` by default is \`org-autocomplete\`.

\`\`\`jsx
import { OrganizationAutocomplete } from '@availity/element';

const Example = () => {
  return <OrganizationAutocomplete FieldProps={{ label: 'Organization Select', placeholder: 'Select...' }} />;
};
\`\`\`

#### \`ProviderAutocomplete\` Usage

The \`ProviderAutocomplete\` component is an extension of the \`AsyncAutocomplete\` component which calls our Providers endpoint. The props are the same except you do not need to pass a function to \`loadOptions\`. This has already been done for you. The component uses the \`uiDisplayName\` as the default label for the options. This can be changed through the \`getOptionLabel\` function.

\`ProviderAutocomplete\` requires a \`customerId\` to call the api. You can pass it in as prop that the component will then use in the api call. There is also an \`apiConfig\` prop available for further customizing the call.

The \`queryKey\` by default is \`prov-autocomplete\`.

\`\`\`jsx
import { ProviderAutocomplete } from '@availity/element';

const Example = ({ customerId }: { customerId: string }) => {
  return (
    <ProviderAutocomplete
      customerId={customerId}
      FieldProps={{ label: 'Provider Select', placeholder: 'Select...' }}
      watchParams={{ customerId }}
    />
  );
};
\`\`\`
`,u=`# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [1.2.7](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.6...@availity/mui-autocomplete@1.2.7) (2025-10-30)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.2.6\`
* \`mui-textfield\` updated to version \`1.2.6\`
* \`mui-icon\` updated to version \`1.2.6\`
* \`mui-layout\` updated to version \`1.2.6\`
## [1.2.6](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.5...@availity/mui-autocomplete@1.2.6) (2025-10-09)

### Dependency Updates

* \`@availity/mock\` updated to version \`1.2.5\`
## [1.2.5](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.4...@availity/mui-autocomplete@1.2.5) (2025-07-17)


### Bug Fixes

* **mui-autocomplete:** fix the multiple prop type for async autocompletes ([3b904a4](https://github.com/Availity/element/commit/3b904a4f88b250433d75ff4a439aab10adc238e9))

## [1.2.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.3...@availity/mui-autocomplete@1.2.4) (2025-06-18)


### Bug Fixes

* **mui-autocomplete:** serialize organization params ([23d9dce](https://github.com/Availity/element/commit/23d9dce0bd63e9417a8a79a95ab2c7e5c8946301))

## [1.2.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.2...@availity/mui-autocomplete@1.2.3) (2025-05-30)


### Bug Fixes

* **mui-autocomplete:** getNextPageParam should return undefined if no more pages ([b1ff081](https://github.com/Availity/element/commit/b1ff0817b3f97ce5e6f755cd5fb463a1881578a5))

## [1.2.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.1...@availity/mui-autocomplete@1.2.2) (2025-05-29)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.2.1\`
* \`mui-textfield\` updated to version \`1.2.1\`
## [1.2.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.2.0...@availity/mui-autocomplete@1.2.1) (2025-05-20)

### Dependency Updates

* \`@availity/mock\` updated to version \`1.2.0\`
## [1.2.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.1.4...@availity/mui-autocomplete@1.2.0) (2025-05-12)

### Dependency Updates

* \`mui-textfield\` updated to version \`1.1.4\`

### Features

* **mui-textfield:** new readonly and updated disabled styles ([093844f](https://github.com/Availity/element/commit/093844ff8811656acb701a95a280076a9f0cb030))

## [1.1.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.1.3...@availity/mui-autocomplete@1.1.4) (2025-04-30)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.1.3\`
* \`mui-textfield\` updated to version \`1.1.3\`
* \`mui-icon\` updated to version \`1.1.3\`
## [1.1.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.1.2...@availity/mui-autocomplete@1.1.3) (2025-04-28)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.1.2\`
* \`mui-textfield\` updated to version \`1.1.2\`
## [1.1.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.1.1...@availity/mui-autocomplete@1.1.2) (2025-04-24)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.1.1\`
* \`mui-textfield\` updated to version \`1.1.1\`
## [1.1.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.1.0...@availity/mui-autocomplete@1.1.1) (2025-04-21)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.1.0\`
* \`mui-textfield\` updated to version \`1.1.0\`
## [1.1.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.14...@availity/mui-autocomplete@1.1.0) (2025-04-14)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.14\`
* \`mui-textfield\` updated to version \`1.0.14\`

### Features

* **mui-form-utils:** add searchbyformgroup ([4207b27](https://github.com/Availity/element/commit/4207b2768f86036df0d3443e452de867d6ceb491))

## [1.0.14](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.13...@availity/mui-autocomplete@1.0.14) (2025-04-14)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.13\`
* \`mui-textfield\` updated to version \`1.0.13\`
## [1.0.13](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.12...@availity/mui-autocomplete@1.0.13) (2025-04-11)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.12\`
* \`mui-textfield\` updated to version \`1.0.12\`
## [1.0.12](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.11...@availity/mui-autocomplete@1.0.12) (2025-04-09)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.11\`
* \`mui-textfield\` updated to version \`1.0.11\`
## [1.0.11](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.10...@availity/mui-autocomplete@1.0.11) (2025-04-08)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.10\`
* \`mui-textfield\` updated to version \`1.0.10\`
## [1.0.10](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.9...@availity/mui-autocomplete@1.0.10) (2025-04-04)

### Dependency Updates

* \`mui-textfield\` updated to version \`1.0.9\`
## [1.0.9](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.8...@availity/mui-autocomplete@1.0.9) (2025-03-31)

## [1.0.8](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.7...@availity/mui-autocomplete@1.0.8) (2025-03-27)

### Dependency Updates

* \`mui-textfield\` updated to version \`1.0.7\`
## [1.0.7](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.6...@availity/mui-autocomplete@1.0.7) (2025-03-21)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.6\`
* \`mui-textfield\` updated to version \`1.0.6\`
## [1.0.6](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.5...@availity/mui-autocomplete@1.0.6) (2025-03-13)

### Dependency Updates

* \`@availity/mock\` updated to version \`1.0.5\`
## [1.0.5](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.4...@availity/mui-autocomplete@1.0.5) (2025-03-07)

### Dependency Updates

* \`mui-form-utils\` updated to version \`1.0.4\`
* \`mui-textfield\` updated to version \`1.0.4\`
## [1.0.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.3...@availity/mui-autocomplete@1.0.4) (2025-03-06)


### Bug Fixes

* **mui-autocomplete:** reset value on blur to account for search ([a4af887](https://github.com/Availity/element/commit/a4af88733fd336282e002d3f2aa343fe105fc388))
* **mui-autocomplete:** reset value on blur to account for search ([3ba4edd](https://github.com/Availity/element/commit/3ba4eddde9cb36ef5cd29c28c1030ab8fa6f0bac))
* **mui-autocomplete:** reset value on blur to account for search ([1998342](https://github.com/Availity/element/commit/199834225ab2f93f9ab0c81e1c66fa0f70d248b7))
* **mui-autocomplete:** reset value on blur when filter returns no results ([29e3d8f](https://github.com/Availity/element/commit/29e3d8f9605d7d1b8886187dfe27557e5e830427))

## [1.0.3-beta.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.3-beta.1...@availity/mui-autocomplete@1.0.3-beta.2) (2025-03-06)


### Bug Fixes

* **mui-autocomplete:** reset value on blur to account for search ([3ba4edd](https://github.com/Availity/element/commit/3ba4eddde9cb36ef5cd29c28c1030ab8fa6f0bac))

## [1.0.3-beta.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.3-beta.0...@availity/mui-autocomplete@1.0.3-beta.1) (2025-03-06)


### Bug Fixes

* **mui-autocomplete:** reset value on blur to account for search ([1998342](https://github.com/Availity/element/commit/199834225ab2f93f9ab0c81e1c66fa0f70d248b7))

## [1.0.3-beta.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.2...@availity/mui-autocomplete@1.0.3-beta.0) (2025-03-06)


### Bug Fixes

* **mui-autocomplete:** reset value on blur when filter returns no results ([29e3d8f](https://github.com/Availity/element/commit/29e3d8f9605d7d1b8886187dfe27557e5e830427))

## [1.0.3-alpha.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.2...@availity/mui-autocomplete@1.0.3-alpha.0) (2025-03-06)


### Bug Fixes

* **mui-autocomplete:** reset value on blur when filter returns no results ([29e3d8f](https://github.com/Availity/element/commit/29e3d8f9605d7d1b8886187dfe27557e5e830427))

## [1.0.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.2...@availity/mui-autocomplete@1.0.3) (2025-03-06)

## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.1...@availity/mui-autocomplete@1.0.2) (2025-03-03)


### Bug Fixes

* **mui-autocomplete:** resolve InputProps overwrites ([1700687](https://github.com/Availity/element/commit/17006876c43c4a8ec00d3cf5b2d3f3c4ffa35bb1))

## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.0...@availity/mui-autocomplete@1.0.1) (2025-02-26)


### Bug Fixes

* **mui-autocomplete:** refetch on clear ([fdea737](https://github.com/Availity/element/commit/fdea737f76b330a21e36ffd36996da9e83f2d629))

## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@1.0.0-alpha.0...@availity/mui-autocomplete@1.0.0) (2025-02-25)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.10.1\`
* \`mui-textfield\` updated to version \`0.10.1\`
* \`@availity/mock\` updated to version \`0.10.1\`

### ⚠ BREAKING CHANGES

* upgrade to @mui/material v6

### Miscellaneous Chores

* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.10.1...@availity/mui-autocomplete@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/material v6
* **element:** upgraded to @mui/material v6

### Features

* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))
* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))
* upgrade to MUI v6 ([7febd6f](https://github.com/Availity/element/commit/7febd6fd4fd58e87e1c97a832cea3b4595a35d58))


### Bug Fixes

* **mui-autocomplete:** resolvedProps causing dropdown to not display ([ac18b85](https://github.com/Availity/element/commit/ac18b850a6d95c716086bc0ce64fed4d2b06806f))
* **mui-textfield:** remove slotProps and use custom props to ease prop merging ([4543505](https://github.com/Availity/element/commit/45435056abcca6de9538f0f6fd29f58a5b5f26d3))

## [0.10.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.10.0...@availity/mui-autocomplete@0.10.1) (2025-02-18)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.10.0\`
* \`mui-textfield\` updated to version \`0.10.0\`
## [0.10.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.11...@availity/mui-autocomplete@0.10.0) (2025-02-04)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.11\`
* \`mui-textfield\` updated to version \`0.9.11\`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## [0.9.11](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.10...@availity/mui-autocomplete@0.9.11) (2025-01-28)


### Bug Fixes

* **mui-autocomplete:** add aria-label to LoadingIndicator ([79f47b4](https://github.com/Availity/element/commit/79f47b466b7a6838430cf20b101b937e9b810d3c))

## [0.9.10](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.9...@availity/mui-autocomplete@0.9.10) (2025-01-27)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.9\`
* \`mui-textfield\` updated to version \`0.9.9\`
## [0.9.9](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.8...@availity/mui-autocomplete@0.9.9) (2025-01-23)


### Bug Fixes

* **mui-autocomplete:** export the CodesAutocomplete component ([b9eba2c](https://github.com/Availity/element/commit/b9eba2ce16de7a5bd277d724dab6b1003cc09f9f))

## [0.9.8](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.7...@availity/mui-autocomplete@0.9.8) (2025-01-22)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.7\`
* \`mui-textfield\` updated to version \`0.9.7\`
## [0.9.7](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.6...@availity/mui-autocomplete@0.9.7) (2025-01-08)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.6\`
* \`mui-textfield\` updated to version \`0.9.6\`
## [0.9.6](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.5...@availity/mui-autocomplete@0.9.6) (2025-01-06)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.5\`
* \`mui-textfield\` updated to version \`0.9.5\`
## [0.9.5](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.4...@availity/mui-autocomplete@0.9.5) (2025-01-03)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.4\`
* \`mui-textfield\` updated to version \`0.9.4\`
## [0.9.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.3...@availity/mui-autocomplete@0.9.4) (2024-12-23)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.3\`
* \`mui-textfield\` updated to version \`0.9.3\`
## [0.9.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.2...@availity/mui-autocomplete@0.9.3) (2024-12-09)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.2\`
* \`mui-textfield\` updated to version \`0.9.2\`
## [0.9.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.1...@availity/mui-autocomplete@0.9.2) (2024-11-20)

## [0.9.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.9.0...@availity/mui-autocomplete@0.9.1) (2024-11-20)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.9.0\`
* \`mui-textfield\` updated to version \`0.9.0\`
## [0.9.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.6...@availity/mui-autocomplete@0.9.0) (2024-10-31)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.6\`
* \`mui-textfield\` updated to version \`0.8.6\`

### Features

* add FileSelector ([7ad1f7b](https://github.com/Availity/element/commit/7ad1f7bb364bbeb2048d2ff4c9b0a2b1a1e33777))

## [0.8.6](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.5...@availity/mui-autocomplete@0.8.6) (2024-10-25)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.5\`
* \`mui-textfield\` updated to version \`0.8.5\`
## [0.8.5](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.4...@availity/mui-autocomplete@0.8.5) (2024-10-18)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.4\`
* \`mui-textfield\` updated to version \`0.8.4\`

### Bug Fixes

* **mui-form-utils:** resolve aria-controls warnings ([487fe12](https://github.com/Availity/element/commit/487fe12229a2f1510f8e7ba76028f798896a1b20))

## [0.8.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.3...@availity/mui-autocomplete@0.8.4) (2024-10-01)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.3\`
* \`mui-textfield\` updated to version \`0.8.3\`
## [0.8.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.2...@availity/mui-autocomplete@0.8.3) (2024-09-20)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.2\`
* \`mui-textfield\` updated to version \`0.8.2\`
## [0.8.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.1...@availity/mui-autocomplete@0.8.2) (2024-08-22)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.1\`
* \`mui-textfield\` updated to version \`0.8.1\`
## [0.8.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.8.0...@availity/mui-autocomplete@0.8.1) (2024-08-16)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.8.0\`
* \`mui-textfield\` updated to version \`0.8.0\`
## [0.8.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.7.2...@availity/mui-autocomplete@0.8.0) (2024-08-14)


### Features

* **mui-autocomplete:** add CodesAutocomplete component ([b7da2bc](https://github.com/Availity/element/commit/b7da2bc716920a64c31b09482d8c9e8668b338e4))


### Bug Fixes

* **mui-autocomplete:** remove console.log and add paging logic ([a0bd9dd](https://github.com/Availity/element/commit/a0bd9dd0a4191d29bb004edcf3958f183e71a188))

## [0.7.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.7.1...@availity/mui-autocomplete@0.7.2) (2024-08-08)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.7.1\`
* \`mui-textfield\` updated to version \`0.7.1\`
## [0.7.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.7.0...@availity/mui-autocomplete@0.7.1) (2024-08-05)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.7.0\`
* \`mui-textfield\` updated to version \`0.7.0\`
## [0.7.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.6.4...@availity/mui-autocomplete@0.7.0) (2024-08-01)


### Features

* **mui-autocomplete:** add watchParams and inputValue ([1479d65](https://github.com/Availity/element/commit/1479d65830e2878207283639948423cf04fc5bd3))


### Bug Fixes

* **mui-autocomplete:** fix unit test ([b8f73ea](https://github.com/Availity/element/commit/b8f73eaf38fad08049dd384fc7f13985b999dd8b))

## [0.6.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.6.3...@availity/mui-autocomplete@0.6.4) (2024-08-01)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.6.3\`
* \`mui-textfield\` updated to version \`0.6.3\`
## [0.6.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.6.2...@availity/mui-autocomplete@0.6.3) (2024-07-22)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.6.2\`
* \`mui-textfield\` updated to version \`0.6.2\`
## [0.6.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.6.1...@availity/mui-autocomplete@0.6.2) (2024-07-19)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.6.1\`
* \`mui-textfield\` updated to version \`0.6.1\`
## [0.6.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.6.0...@availity/mui-autocomplete@0.6.1) (2024-07-05)


### Bug Fixes

* **mui-autocomplete:** and provider export ([a5e6703](https://github.com/Availity/element/commit/a5e6703fb5544f4e2058c2128b3c8bca2a1b01b9))

## [0.6.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.5.2...@availity/mui-autocomplete@0.6.0) (2024-07-01)


### Features

* **mui-autocomplete:** add ProviderAutocomplete component ([5ed1450](https://github.com/Availity/element/commit/5ed1450a6daca47231a030b516b5bf950c190f08))


### Bug Fixes

* **mui-autocomplete:** fix unit test ([50e2b52](https://github.com/Availity/element/commit/50e2b52f2a0b7799fe63d4d140259255d905a96f))

## [0.5.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.5.1...@availity/mui-autocomplete@0.5.2) (2024-06-27)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.5.1\`
* \`mui-textfield\` updated to version \`0.5.1\`
## [0.5.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.5.0...@availity/mui-autocomplete@0.5.1) (2024-06-21)


### Bug Fixes

* add deps ([520c3c2](https://github.com/Availity/element/commit/520c3c2549af82006fc563bc453b010ed6aadb73))
* add export and delay ([20d6792](https://github.com/Availity/element/commit/20d6792e7a995afa0f12e597fbd9fc4c16c92df2))

## [0.5.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.6...@availity/mui-autocomplete@0.5.0) (2024-06-20)


### Features

* **mui-autocomplete:** add OrganizationAutocomplete component ([9f3ea07](https://github.com/Availity/element/commit/9f3ea0753e0147d7e1aeaf73230716046caba01e))

## [0.4.6](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.5...@availity/mui-autocomplete@0.4.6) (2024-06-14)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.4.5\`
* \`mui-textfield\` updated to version \`0.4.5\`
## [0.4.5](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.4...@availity/mui-autocomplete@0.4.5) (2024-05-17)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.4.4\`
* \`mui-textfield\` updated to version \`0.4.4\`
## [0.4.4](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.3...@availity/mui-autocomplete@0.4.4) (2024-05-15)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.4.3\`
* \`mui-textfield\` updated to version \`0.4.3\`
## [0.4.3](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.2...@availity/mui-autocomplete@0.4.3) (2024-04-22)


### Bug Fixes

* **mui-autocomplete:** remove loading prop for AsyncAutocomplete ([6ec7994](https://github.com/Availity/element/commit/6ec799406089c894f4ac2d0d31df6e8638c17509))

## [0.4.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.1...@availity/mui-autocomplete@0.4.2) (2024-04-19)

### Dependency Updates

* \`mui-form-utils\` updated to version \`0.4.1\`
* \`mui-textfield\` updated to version \`0.4.1\`
## [0.4.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.4.0...@availity/mui-autocomplete@0.4.1) (2024-04-17)


### Bug Fixes

* **mui-autocomplete:** remove disableListWrap and spread ListboxProps ([e782424](https://github.com/Availity/element/commit/e782424d738018c8ba2e8397d534f537d1962435))

## [0.4.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.3.2...@availity/mui-autocomplete@0.4.0) (2024-04-11)


### Features

* **mui-autocomplete:** add AsyncAutocomplete component ([2318b3f](https://github.com/Availity/element/commit/2318b3fd70055322c5e0ea2f28514a6886c29a98))

## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.3.1...@availity/mui-autocomplete@0.3.2) (2024-04-01)


### Performance Improvements

* **mui-autocomplete:** use path imports for mui deps and move element deps to peerDeps ([6379ec5](https://github.com/Availity/element/commit/6379ec5489a7e6926f99dc07cf085f90ba735d03))

## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.3.0...@availity/mui-autocomplete@0.3.1) (2024-02-20)

## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.2.1...@availity/mui-autocomplete@0.3.0) (2023-12-14)


### Features

* add form story ([11d1f6c](https://github.com/Availity/element/commit/11d1f6c6191540bf02ff42d4056ac553eecc8c73))

## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.2.0...@availity/mui-autocomplete@0.2.1) (2023-11-28)

### Bug Fixes

- **mui-autocomplete:** move default props from theme to component ([fa6a02d](https://github.com/Availity/element/commit/fa6a02d44114444ac2c5a15ff1f647c5dcd3d025))

## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-autocomplete@0.1.0...@availity/mui-autocomplete@0.2.0) (2023-11-22)

### Features

- **mui-autocomplete:** use new select slots and styling ([37cac37](https://github.com/Availity/element/commit/37cac37f2670d669b7b6c38cbc52fd1453e3e4e4))

## 0.1.0 (2023-11-15)

### Features

- **mui-autocomplete:** add autocomplete package ([3217d31](https://github.com/Availity/element/commit/3217d31d041c6a2e9ad616ed0a00e8362976adfc))
- **mui-autocomplete:** add autocomplete package ([772c989](https://github.com/Availity/element/commit/772c98978f2c8e3edc01d8deb38dfc5cc2339298))
`;function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Form Components/Autocomplete/Introduction"}),`
`,e.jsx(o,{children:l}),`
`,e.jsx(o,{children:u})]})}function x(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n()}export{x as default};
