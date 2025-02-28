// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import type { default as Upload } from '@availity/upload-core';
import { Paper } from '@availity/mui-paper';
import { Alert, AlertProps, AlertTitle } from '@availity/mui-alert';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import Collapse from '@mui/material/Collapse';

import { FileSelector, FileSelectorProps } from './FileSelector';

const meta: Meta<typeof FileSelector> = {
  title: 'Components/File Selector/File Selector',
  component: FileSelector,
  tags: ['autodocs'],
  decorators: [
    (Story: () => JSX.Element) => (
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false,
              },
            },
          })
        }
      >
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;

const DismissableAlert = (props: AlertProps) => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Collapse in={visible}>
      <Alert onClose={onClose} {...props} />
    </Collapse>
  );
};

export const _FileSelector: StoryObj<typeof FileSelector> = {
  render: (props: FileSelectorProps) => {
    const methods = useForm({
      defaultValues: {
        [props.name]: [] as File[],
      },
    });

    const client = useQueryClient();

    const files = methods.watch(props.name);

    const handleOnSubmit = (values: Record<string, File[]>) => {
      if (values[props.name].length === 0) return;

      const queries = client.getQueriesData<Upload>(['upload']);
      const uploads = [];
      for (const [, data] of queries) {
        if (data) uploads.push(data);
      }
    };

    return (
      <Paper sx={{ padding: '2rem' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <FileSelector {...props}>
              <DismissableAlert severity="warning">
                <AlertTitle>Make an Appeal</AlertTitle>
                This is an example alert. It is not part of the component. `children` you pass to the component will
                show up here.
              </DismissableAlert>
            </FileSelector>
            {files.length > 0 && (
              <Grid xs={12} justifyContent="end" display="flex" paddingTop={2.5}>
                <Button type="submit" sx={{ marginLeft: 'auto', marginRight: 0 }}>
                  Submit
                </Button>
              </Grid>
            )}
          </form>
        </FormProvider>
      </Paper>
    );
  },
  args: {
    name: 'file-selector',
    allowedFileTypes: ['.txt', '.png', '.pdf'],
    clientId: '123',
    customerId: '456',
    bucketId: '789',
    uploadOptions: {
      retryDelays: [],
    },
    maxFiles: 5,
    maxSize: 1 * 1024 * 1024, // 1MB
    enableDropArea: true,
    isCloud: true,
    multiple: true,
  },
};
