// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProviderAutocomplete } from './ProviderAutocomplete';

const meta: Meta<typeof ProviderAutocomplete> = {
  title: 'Form Components/Autocomplete/ProviderAutocomplete',
  component: ProviderAutocomplete,
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

export const _ProviderAutocomplete: StoryObj<typeof ProviderAutocomplete> = {
  render: (args) => {
    return (
      <QueryClientProvider client={client}>
        <ProviderAutocomplete {...args} />
      </QueryClientProvider>
    );
  },
  args: {
    FieldProps: {
      label: 'Provider Select',
      helperText: 'Select a Provider from the list',
      placeholder: 'Select...',
      fullWidth: false,
    },
    limit: 10,
    customerId: '1234',
  },
};
