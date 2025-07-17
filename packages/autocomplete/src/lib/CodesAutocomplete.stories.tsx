// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CodesAutocomplete } from './CodesAutocomplete';

const meta: Meta<typeof CodesAutocomplete> = {
  title: 'Form Components/Autocomplete/CodesAutocomplete',
  component: CodesAutocomplete,
  tags: ['autodocs'],
  args: {
    id: 'example',
  },
};

export default meta;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _CodesAutocomplete: StoryObj<typeof CodesAutocomplete> = {
  render: (args) => {
    return (
      <QueryClientProvider client={client}>
        <CodesAutocomplete {...args} />
      </QueryClientProvider>
    );
  },
  args: {
    list: 'ABC',
    FieldProps: {
      label: 'Code Select',
      helperText: 'Select a code from the list',
      placeholder: 'Select...',
      fullWidth: false,
    },
    limit: 15,
  },
};
