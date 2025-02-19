// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paper } from '@availity/mui-paper';

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

export const _FileSelector: StoryObj<typeof FileSelector> = {
  render: (props: FileSelectorProps) => {
    return (
      <Paper sx={{ padding: '2rem' }}>
        <FileSelector {...props} />
      </Paper>
    );
  },
  args: {
    name: 'file-selector',
    allowedFileTypes: [],
    clientId: '123',
    customerId: '456',
    bucketId: '789',
    retryDelays: [],
    maxSize: 1 * 1024 * 1024, // 1MB
    isCloud: true,
    multiple: true,
  },
};
