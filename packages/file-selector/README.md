# @availity/mui-file-selector

> Availity MUI File Selector component to be used with @availity/element design system.

[![Version](https://img.shields.io/npm/v/@availity/mui-file-selector.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-file-selector)
[![NPM Downloads](https://img.shields.io/npm/dt/@availity/mui-file-selector.svg?style=for-the-badge)](https://www.npmjs.com/package/@availity/mui-file-selector)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@availity/mui-file-selector?style=for-the-badge)](https://github.com/Availity/element/blob/main/packages/mui-file-selector/package.json)

## Documentation

This package extends the MUI File Selector component: [MUI File Selector Docs](https://mui.com/components/file-selector/)

Live demo and documentation in our [Storybook](https://availity.github.io/element/?path=/docs/components-file-selector-introduction--docs)

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
npm install @availity/mui-file-selector
```

#### Yarn

```bash
yarn add @availity/mui-file-selector
```

### Usage

#### Import through @availity/element

```tsx
import { FileSelector } from '@availity/element';
```

#### Direct import

```tsx
import { FileSelector } from '@availity/mui-file-selector';
```

#### Basic Example

The `FileSelector` component must be used inside a `FormProvider` from `react-hook-form` and a `QueryClientProvider` from `@tanstack/react-query`. Each provider has its own state that is necessary for using the component. The `FormProvider` stores the `Files` that are selected while the `QueryClientProvider` has the `upload` response data.

```tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyComponent = () => {
  const methods = useForm({
    defaultValues: {
      myFiles: [] as File[],
    },
  });

  const client = useQueryClient();

  const files = methods.watch(props.name);

  const handleOnSubmit = (values: Record<string, File[]>) => {
    if (values.myFiles.length === 0) return;

    const queries = client.getQueriesData<Upload>(['upload']);
    const uploads = [];
    for (const [, data] of queries) {
      if (data) uploads.push(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <FileSelector
          name="myFiles"
          bucketId="your-bucket-id"
          customerId="your-customer-id"
          clientId="your-client-id"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={3}
          allowedFileTypes={['.pdf', '.doc', '.docx']}
        />
      </form>
    </FormProvider>
  );
};

export default MyComponent;
```

#### Advanced Examples

> Note: the following examples assume you have setup `react-hook-form` and `react-query` already

##### File Selection Events

```tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyFileUploadComponent = () => {
  const handleOnDrop = (acceptedFiles, fileRejections, event) => {
    // Use this callback for interacting with the files before they are uploaded
  };

  const handleValidation = (file) => {
    // Custom validation can be added with the `validator` prop.
    // If an error fails validation here it should show up
    // in the `fileRejections` array from `onDrop`.
    //
    // To return a custom error, return an object with a code
    // and message.
    // return { code: 'an-error', message: 'An error occurred' };
  };

  return (
    <FileSelector
      name="documentUpload"
      bucketId="your-bucket-id"
      customerId="your-customer-id"
      clientId="your-client-id"
      maxSize={10 * 1024 * 1024} // 10MB
      allowedFileTypes={['.pdf', '.doc', '.docx']}
      multiple={true}
      maxFiles={5}
      onDrop={handleOnDrop}
      validator={handleValidation}
    />
  );
};

export default MyFileUploadComponent;
```

##### Upload Callbacks

It is possible to pass callbacks based on whether the upload finished successfully or there was an error.

```tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyFileUploadComponent = () => {
  const handleOnSuccess = () => {
    // Handle successful upload - e.g., show success message, update UI
  };

  const handleOnError = (error) => {
    // Handle upload error - e.g., show error message, retry upload
  };

  const handleOnProgress = (error) => {
    // Handle upload error - e.g., show error message, retry upload
  };

  return (
    <FileSelector
      name="documentUpload"
      bucketId="your-bucket-id"
      customerId="your-customer-id"
      clientId="your-client-id"
      maxSize={10 * 1024 * 1024} // 10MB
      allowedFileTypes={['.pdf', '.doc', '.docx']}
      multiple={true}
      maxFiles={5}
      uploadOptions={{
        onSuccess: handleOnSuccess,
        onError: handleOnError,
        onProgress: handleOnProgress,
      }}
    />
  );
};

export default MyFileUploadComponent;
```

##### Custom File Row

If you would like to show different information in each row then you are able to pass a custom `FileRow` component. We recommend using the `ListItem` component. The upload object from `@availity/upload-core`, the options passed to its constructor, and the `onRemoveFile` function will all be passed as props.

```tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';
import { ListItem } from '@availity/mui-list';

const FileRow = ({ upload, options, onRemoveFile }) => {
  return <ListItem>Your code here</ListItem>;
};

const MyFileUploadComponent = () => {
  return (
    <FileSelector
      name="documentUpload"
      bucketId="your-bucket-id"
      customerId="your-customer-id"
      clientId="your-client-id"
      maxSize={10 * 1024 * 1024} // 10MB
      allowedFileTypes={['.pdf', '.doc', '.docx']}
      multiple={true}
      maxFiles={5}
      customFileRow={FileRow}
    />
  );
};

export default MyFileUploadComponent;
```

##### Custom `helpText`

To provide custom help text, pass it as a child of the `<FileSelector />` component. The help text should be formatted using the `<Typography />` component with the `'caption'` variant.

```tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';
import { Typography } from '@availity/mui-typography';

const MyComponent = () => {
  const methods = useForm({
    defaultValues: {
      myFiles: [] as File[],
    },
  });

  const client = useQueryClient();

  const files = methods.watch('myFiles);

  const handleOnSubmit = (values: Record<string, File[]>) => {
    if (values.myFiles.length === 0) return;

    const queries = client.getQueriesData<Upload>(['upload']);
    const uploads = [];
    for (const [, data] of queries) {
      if (data) uploads.push(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <FileSelector
          name="myFiles"
          bucketId="your-bucket-id"
          customerId="your-customer-id"
          clientId="your-client-id"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={3}
          allowedFileTypes={['.pdf', '.doc', '.docx']}
        >
          <Typography component="div" variant="caption">Here is some help text.</Typography>
        </FileSelector>
      </form>
    </FormProvider>
  );
};

export default MyComponent;
```




