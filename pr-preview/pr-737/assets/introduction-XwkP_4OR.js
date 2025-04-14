import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-XODwqvNS.js";import{M as l,c as n}from"./index-BJZLbuVq.js";import"./DocsRenderer-CFRXHY34-D7wvFOwS.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-DWpzvb--.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m=`# @availity/mui-file-selector

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
npm install @availity/mui-file-selector
\`\`\`

#### Yarn

\`\`\`bash
yarn add @availity/mui-file-selector
\`\`\`

### Usage

#### Import through @availity/element

\`\`\`tsx
import { FileSelector } from '@availity/element';
\`\`\`

#### Direct import

\`\`\`tsx
import { FileSelector } from '@availity/mui-file-selector';
\`\`\`

#### Basic Example

The \`FileSelector\` component must be used inside a \`FormProvider\` from \`react-hook-form\` and a \`QueryClientProvider\` from \`@tanstack/react-query\`. Each provider has its own state that is necessary for using the component. The \`FormProvider\` stores the \`Files\` that are selected while the \`QueryClientProvider\` has the \`upload\` response data.

\`\`\`tsx
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
\`\`\`

#### Advanced Examples

> Note: the following examples assume you have setup \`react-hook-form\` and \`react-query\` already

##### File Selection Events

\`\`\`tsx
import React from 'react';
import { FileSelector } from '@availity/mui-file-selector';

const MyFileUploadComponent = () => {
  const handleOnDrop = (acceptedFiles, fileRejections, event) => {
    // Use this callback for interacting with the files before they are uploaded
  };

  const handleValidation = (file) => {
    // Custom validation can be added with the \`validator\` prop.
    // If an error fails validation here it should show up
    // in the \`fileRejections\` array from \`onDrop\`.
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
\`\`\`

##### Upload Callbacks

It is possible to pass callbacks based on whether the upload finished successfully or there was an error.

\`\`\`tsx
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
\`\`\`

##### Custom File Row

If you would like to show different information in each row then you are able to pass a custom \`FileRow\` component. We recommend using the \`ListItem\` component. The upload object from \`@availity/upload-core\`, the options passed to its constructor, and the \`onRemoveFile\` function will all be passed as props.

\`\`\`tsx
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
\`\`\`

##### Custom \`helpText\`

To provide custom help text, pass it as a child of the \`<FileSelector />\` component. The help text should be formatted using the \`<Typography />\` component with the \`'caption'\` variant.

\`\`\`tsx
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
\`\`\`




`,d="# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n\n## [1.5.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.5.2...@availity/mui-file-selector@1.5.3) (2025-04-14)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `1.5.2`\n* `mui-dialog` updated to version `1.5.2`\n* `mui-textfield` updated to version `1.5.2`\n## [1.5.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.5.1...@availity/mui-file-selector@1.5.2) (2025-04-14)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `1.5.1`\n* `mui-button` updated to version `1.5.1`\n* `mui-form-utils` updated to version `1.5.1`\n* `mui-list` updated to version `1.5.1`\n* `mui-dialog` updated to version `1.5.1`\n* `mui-textfield` updated to version `1.5.1`\n## [1.5.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.5.0...@availity/mui-file-selector@1.5.1) (2025-04-11)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `1.5.0`\n* `mui-alert` updated to version `1.5.0`\n* `mui-button` updated to version `1.5.0`\n* `mui-divider` updated to version `1.5.0`\n* `mui-form-utils` updated to version `1.5.0`\n* `mui-icon` updated to version `1.5.0`\n* `mui-layout` updated to version `1.5.0`\n* `mui-list` updated to version `1.5.0`\n* `mui-progress` updated to version `1.5.0`\n* `mui-typography` updated to version `1.5.0`\n* `mui-dialog` updated to version `1.5.0`\n* `mui-textfield` updated to version `1.5.0`\n## [1.5.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.4.3...@availity/mui-file-selector@1.5.0) (2025-04-10)\n\n\n### Features\n\n* **mui-file-selector:** pass onChunkComplete method in usUpdateNav ([f2b5ec1](https://github.com/Availity/element/commit/f2b5ec1a97205c6f2a83f9f7b7a3abbad16d0eb6))\n\n## [1.4.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.4.2...@availity/mui-file-selector@1.4.3) (2025-04-09)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `1.4.2`\n* `mui-dialog` updated to version `1.4.2`\n* `mui-textfield` updated to version `1.4.2`\n## [1.4.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.4.1...@availity/mui-file-selector@1.4.2) (2025-04-08)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `1.4.1`\n* `mui-button` updated to version `1.4.1`\n* `mui-form-utils` updated to version `1.4.1`\n* `mui-list` updated to version `1.4.1`\n* `mui-dialog` updated to version `1.4.1`\n* `mui-textfield` updated to version `1.4.1`\n## [1.4.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.4.0...@availity/mui-file-selector@1.4.1) (2025-04-04)\n\n### Dependency Updates\n\n* `mui-dialog` updated to version `1.4.0`\n* `mui-textfield` updated to version `1.4.0`\n## [1.4.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.3.2...@availity/mui-file-selector@1.4.0) (2025-04-04)\n\n\n### Features\n\n* **mui-file-selector:** add onProgress to useUploadCore ([6bef795](https://github.com/Availity/element/commit/6bef7950f0e392fdbf7b395f45ed16562cda0295))\n\n## [1.3.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.3.1...@availity/mui-file-selector@1.3.2) (2025-03-31)\n\n\n### Bug Fixes\n\n* **mui-file-selector:** check if upload is defined before attempting to render CustomRow ([26d22cc](https://github.com/Availity/element/commit/26d22cc44e18ac9c0fce9ea64c2d8d6c8a4cff47))\n* **mui-file-selector:** update customFileRow type on FileSelector ([8020d04](https://github.com/Availity/element/commit/8020d045d68b744fddd21b8f4953a4fd63c551de))\n\n## [1.3.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.3.0...@availity/mui-file-selector@1.3.1) (2025-03-27)\n\n### Dependency Updates\n\n* `mui-dialog` updated to version `1.3.0`\n* `mui-textfield` updated to version `1.3.0`\n## [1.3.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.2.1...@availity/mui-file-selector@1.3.0) (2025-03-24)\n\n\n### Features\n\n* **mui-file-selector:** error alert and file list style updates ([341f5c9](https://github.com/Availity/element/commit/341f5c90cab723f786908f88e72963a4e588f1ac))\n\n## [1.2.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.2.0...@availity/mui-file-selector@1.2.1) (2025-03-21)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `1.2.0`\n* `mui-dialog` updated to version `1.2.0`\n* `mui-textfield` updated to version `1.2.0`\n## [1.2.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.1.2...@availity/mui-file-selector@1.2.0) (2025-03-13)\n\n\n### Features\n\n* **mui-file-selector:** add encrypted file support ([831383d](https://github.com/Availity/element/commit/831383d7c1470f0fbb086b40f268a60925268656))\n\n## [1.1.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.1.1...@availity/mui-file-selector@1.1.2) (2025-03-12)\n\n## [1.1.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.1.0...@availity/mui-file-selector@1.1.1) (2025-03-07)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `1.1.0`\n* `mui-alert` updated to version `1.1.0`\n* `mui-button` updated to version `1.1.0`\n* `mui-divider` updated to version `1.1.0`\n* `mui-form-utils` updated to version `1.1.0`\n* `mui-icon` updated to version `1.1.0`\n* `mui-layout` updated to version `1.1.0`\n* `mui-list` updated to version `1.1.0`\n* `mui-progress` updated to version `1.1.0`\n* `mui-typography` updated to version `1.1.0`\n## [1.1.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.0.0...@availity/mui-file-selector@1.1.0) (2025-03-04)\n\n\n### Features\n\n* **mui-file-selector:** add ability to disable remove button on FileList ([df1f7f0](https://github.com/Availity/element/commit/df1f7f05016bf625208db18ee1d4ef96912abaac))\n\n\n### Bug Fixes\n\n* **mui-file-selector:** add ability to override file row ([5dd864b](https://github.com/Availity/element/commit/5dd864baf323fe879de6efda6b6176be09e058d0))\n* **mui-file-selector:** add ability to toggle dropzone area ([2c80730](https://github.com/Availity/element/commit/2c807309f1e387a2531b56421f2d7e08d4c50e19))\n* **mui-file-selector:** add exports ([c7c50d1](https://github.com/Availity/element/commit/c7c50d1a90bafa424f9758c191f25c1772cc945d))\n* **mui-file-selector:** add metadata prop ([757b747](https://github.com/Availity/element/commit/757b747d66f6d2fe2414cf14e30ec72c33b1547e))\n* **mui-file-selector:** add uploadOptions prop ([afaabe7](https://github.com/Availity/element/commit/afaabe7498535d40ea426a88c8c6d81701ff078e))\n* **mui-file-selector:** display divider with OR on the FileSelector dropzone ([8f5fd5a](https://github.com/Availity/element/commit/8f5fd5a3a813a6244a4a72b6cd6878325c095d7a))\n* **mui-file-selector:** fix bugs, add onDrop and validator props ([01d4257](https://github.com/Availity/element/commit/01d42570496797b080f5d5552e4cdaf2843d621b))\n* **mui-file-selector:** fix spacing ([b9964bc](https://github.com/Availity/element/commit/b9964bc9446a7b2d2bc07f999a93cce4af524f3b))\n* **mui-file-selector:** fix type and add docs ([704454f](https://github.com/Availity/element/commit/704454f7fde50ddb4154f287355026810dd152dc))\n* **mui-file-selector:** fix unit test ([92f08fc](https://github.com/Availity/element/commit/92f08fc7c3e86e27d4436090ba2b781c2a26c024))\n* **mui-file-selector:** fix unit test ([f892c12](https://github.com/Availity/element/commit/f892c1268bd20acdd2be7cc39eeb7f9dd7260f5e))\n* **mui-file-selector:** fix unit test ([c4282c1](https://github.com/Availity/element/commit/c4282c1a93c1ef3ec5380aed09b02d07ce26dab1))\n* **mui-file-selector:** remove form and make input standalone ([a6b6e81](https://github.com/Availity/element/commit/a6b6e81f5c4f8133676b5e07b58d208d2bf46a11))\n* **mui-file-selector:** update query format ([0372a45](https://github.com/Availity/element/commit/0372a45864aadf42aa1c2e23aca132f7bea4ad23))\n\n## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@1.0.0-alpha.0...@availity/mui-file-selector@1.0.0) (2025-02-25)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `0.3.3`\n* `mui-alert` updated to version `0.3.3`\n* `mui-button` updated to version `0.3.3`\n* `mui-divider` updated to version `0.3.3`\n* `mui-form-utils` updated to version `0.3.3`\n* `mui-icon` updated to version `0.3.3`\n* `mui-layout` updated to version `0.3.3`\n* `mui-list` updated to version `0.3.3`\n* `mui-progress` updated to version `0.3.3`\n* `mui-typography` updated to version `0.3.3`\n\n### ⚠ BREAKING CHANGES\n\n* upgrade to @mui/material v6\n\n### Miscellaneous Chores\n\n* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))\n\n## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.3...@availity/mui-file-selector@1.0.0-alpha.0) (2025-02-24)\n\n\n### ⚠ BREAKING CHANGES\n\n* upgraded to @mui/material v6\n* **element:** upgraded to @mui/material v6\n\n### Features\n\n* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))\n* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))\n\n## [0.3.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.2...@availity/mui-file-selector@0.3.3) (2025-02-19)\n\n### Dependency Updates\n\n* `mui-progress` updated to version `0.3.2`\n## [0.3.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.1...@availity/mui-file-selector@0.3.2) (2025-02-19)\n\n\n### Bug Fixes\n\n* update types and add docs ([c3f9f9e](https://github.com/Availity/element/commit/c3f9f9e1d0946ae5d0a03eab5b250ec47a0c3aab))\n\n## [0.3.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.3.0...@availity/mui-file-selector@0.3.1) (2025-02-18)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.3.0`\n## [0.3.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.10...@availity/mui-file-selector@0.3.0) (2025-02-04)\n\n### Dependency Updates\n\n* `mui-paper` updated to version `0.2.10`\n* `mui-alert` updated to version `0.2.10`\n* `mui-button` updated to version `0.2.10`\n* `mui-divider` updated to version `0.2.10`\n* `mui-form-utils` updated to version `0.2.10`\n* `mui-icon` updated to version `0.2.10`\n* `mui-layout` updated to version `0.2.10`\n* `mui-list` updated to version `0.2.10`\n* `mui-progress` updated to version `0.2.10`\n* `mui-typography` updated to version `0.2.10`\n\n### Features\n\n* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))\n\n## [0.2.10](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.9...@availity/mui-file-selector@0.2.10) (2025-01-27)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.9`\n* `mui-button` updated to version `0.2.9`\n* `mui-form-utils` updated to version `0.2.9`\n* `mui-icon` updated to version `0.2.9`\n* `mui-list` updated to version `0.2.9`\n* `mui-progress` updated to version `0.2.9`\n## [0.2.9](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.8...@availity/mui-file-selector@0.2.9) (2025-01-22)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.8`\n* `mui-button` updated to version `0.2.8`\n* `mui-form-utils` updated to version `0.2.8`\n* `mui-icon` updated to version `0.2.8`\n* `mui-list` updated to version `0.2.8`\n* `mui-progress` updated to version `0.2.8`\n## [0.2.8](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.7...@availity/mui-file-selector@0.2.8) (2025-01-10)\n\n\n### Bug Fixes\n\n* remove debug story ([091c909](https://github.com/Availity/element/commit/091c909acfb22464723dec19d6c258d30cd2ba8d))\n* update FileList ([036e91c](https://github.com/Availity/element/commit/036e91cd37f89ef67d77d4782dced6ebf841dd5c))\n\n## [0.2.7](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.6...@availity/mui-file-selector@0.2.7) (2025-01-08)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.2.6`\n* `mui-list` updated to version `0.2.6`\n## [0.2.6](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.5...@availity/mui-file-selector@0.2.6) (2025-01-08)\n\n\n### Bug Fixes\n\n* add hover border and fix accessibility ([7d8e7e4](https://github.com/Availity/element/commit/7d8e7e4136b266d42b3e453e57efe83f780a9e57))\n\n## [0.2.5](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.4...@availity/mui-file-selector@0.2.5) (2025-01-07)\n\n\n### Bug Fixes\n\n* bump upload-core ([60dc9a3](https://github.com/Availity/element/commit/60dc9a38f27aa93098d593efcd20026b39a2b7d7))\n* generate id before starting ([3514684](https://github.com/Availity/element/commit/3514684dfb9ca218d8d320c43235d4a0866d31a4))\n\n## [0.2.4](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.3...@availity/mui-file-selector@0.2.4) (2025-01-06)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.3`\n* `mui-button` updated to version `0.2.3`\n* `mui-form-utils` updated to version `0.2.3`\n* `mui-icon` updated to version `0.2.3`\n* `mui-list` updated to version `0.2.3`\n* `mui-progress` updated to version `0.2.3`\n\n### Bug Fixes\n\n* add hover color ([5001b77](https://github.com/Availity/element/commit/5001b77407b26de13d44b3ac3e39f05224aacc08))\n* various fixes for file selector ([26c651d](https://github.com/Availity/element/commit/26c651d7b8e89919fac335f233acbe528d10956a))\n\n## [0.2.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.2...@availity/mui-file-selector@0.2.3) (2025-01-03)\n\n### Dependency Updates\n\n* `mui-alert` updated to version `0.2.2`\n* `mui-button` updated to version `0.2.2`\n* `mui-form-utils` updated to version `0.2.2`\n* `mui-icon` updated to version `0.2.2`\n* `mui-list` updated to version `0.2.2`\n* `mui-progress` updated to version `0.2.2`\n## [0.2.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.1...@availity/mui-file-selector@0.2.2) (2025-01-02)\n\n## [0.2.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.2.0...@availity/mui-file-selector@0.2.1) (2024-12-23)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.2.0`\n## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.3...@availity/mui-file-selector@0.2.0) (2024-12-16)\n\n\n### Features\n\n* **mui-file-selector:** add support for dropping files and fix removing ([66af280](https://github.com/Availity/element/commit/66af28076ed7149bc47c6b9758bb9a2e5461f201))\n* **mui-file-selector:** update upload-core ([0da6ec7](https://github.com/Availity/element/commit/0da6ec7672f1d7a884f42d03772ec20249a3309b))\n* pass uploads to onSubmit ([e894489](https://github.com/Availity/element/commit/e8944899a6a6ed4b4bb192a51b707a9aa88b6833))\n\n\n### Bug Fixes\n\n* add better error handling ([c2db0c0](https://github.com/Availity/element/commit/c2db0c0a1d06bebbb03bc38309d65829487717fb))\n* fixes for file selector ([add8801](https://github.com/Availity/element/commit/add88013c18816ccdaeeb9366768089d68aded7f))\n* fixes for tests ([e112880](https://github.com/Availity/element/commit/e11288079f203464f55f35cbaed47f86f4db3755))\n* **mui-file-selector:** update upload-core ([e24b673](https://github.com/Availity/element/commit/e24b67337a8b1a71441c6954e84a6bd3a1b8e323))\n* update upload-core ([e11a6ad](https://github.com/Availity/element/commit/e11a6ad155743afb221739686b608e581099c37a))\n* update upload-core ([5d820db](https://github.com/Availity/element/commit/5d820db3f146e9e0015daa0f5e9a9d9316cd6807))\n\n## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.2...@availity/mui-file-selector@0.1.3) (2024-12-09)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.2`\n* `mui-form-utils` updated to version `0.1.2`\n* `mui-icon` updated to version `0.1.2`\n* `mui-list` updated to version `0.1.2`\n* `mui-progress` updated to version `0.1.2`\n## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.1...@availity/mui-file-selector@0.1.2) (2024-11-20)\n\n### Dependency Updates\n\n* `mui-form-utils` updated to version `0.1.1`\n* `mui-list` updated to version `0.1.1`\n## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-file-selector@0.1.0...@availity/mui-file-selector@0.1.1) (2024-10-31)\n\n\n### Bug Fixes\n\n* **mui-file-selector:** comment out import for temp fix ([7e2e950](https://github.com/Availity/element/commit/7e2e95083893c47adae702dde867cc8833ae01ca))\n\n## 0.1.0 (2024-10-31)\n\n### Dependency Updates\n\n* `mui-button` updated to version `0.1.0`\n* `mui-divider` updated to version `0.1.0`\n* `mui-form-utils` updated to version `0.1.0`\n* `mui-icon` updated to version `0.1.0`\n* `mui-layout` updated to version `0.1.0`\n* `mui-list` updated to version `0.1.0`\n* `mui-progress` updated to version `0.1.0`\n* `mui-typography` updated to version `0.1.0`\n* `mui-paper` updated to version `0.1.0`\n\n### Features\n\n* add FileSelector ([7ad1f7b](https://github.com/Availity/element/commit/7ad1f7bb364bbeb2048d2ff4c9b0a2b1a1e33777))\n\n\n### Bug Fixes\n\n* **mui-file-selector:** update types ([477c992](https://github.com/Availity/element/commit/477c9921792ef35302b1b21d17056d16434c7d98))\n";function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/File Selector/Introduction"}),`
`,e.jsx(n,{children:m}),`
`,e.jsx(n,{children:d})]})}function x(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(o,{...t})}):o()}export{x as default};
