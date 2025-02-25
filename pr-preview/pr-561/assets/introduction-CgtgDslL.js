import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as a}from"./index-CfSBfIZi.js";import{M as i,c as s}from"./index-zoIqCIji.js";import"./DocsRenderer-CFRXHY34-zQMXdQp7.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-51afW8Au.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const r=`# @availity/mui-autocomplete

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
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Form Components/Autocomplete/Introduction"}),`
`,e.jsx(s,{children:r})]})}function v(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{v as default};
