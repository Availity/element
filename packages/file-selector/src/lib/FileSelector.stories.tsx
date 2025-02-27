// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paper } from '@availity/mui-paper';
import { Alert, AlertProps, AlertTitle } from '@availity/mui-alert';
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
    return (
      <Paper sx={{ padding: '2rem' }}>
        <FileSelector {...props}>
          <DismissableAlert severity="warning">
            <AlertTitle>Make an Appeal</AlertTitle>
            This is an example alert. It is not part of the component. `children` you pass to the component will show up
            here.
          </DismissableAlert>
        </FileSelector>
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
