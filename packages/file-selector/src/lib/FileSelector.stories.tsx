// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paper } from '@availity/mui-paper';

// import { FileSelector, FileSelectorProps } from './FileSelector';

type FileSelectorProps = {
  name: string;
};

const FileSelector = (props: FileSelectorProps) => {
  console.log(props);
  return <div>placeholder</div>;
};

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
  render: (props: FileSelectorProps) => (
    <Paper sx={{ padding: '2rem' }}>
      <FileSelector {...props} />
    </Paper>
  ),
  args: {
    name: 'file-selector',
    // allowedFileTypes: ['.txt'],
    // clientId: '123',
    // customerId: '456',
    // bucketId: '789',
    // maxSize: 1 * 1000 * 1000, // 1MB
    // isCloud: true,
    // multiple: true,
  },
};
