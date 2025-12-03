// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { OrganizationAutocomplete } from './OrganizationAutocomplete';

const meta: Meta<typeof OrganizationAutocomplete> = {
  title: 'Form Components/Autocomplete/OrganizationAutocomplete',
  component: OrganizationAutocomplete,
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

export const _OrganizationAutocomplete: StoryObj<typeof OrganizationAutocomplete> = {
  render: (args) => {
    return (
      <QueryClientProvider client={client}>
        <OrganizationAutocomplete {...args} />
      </QueryClientProvider>
    );
  },
  args: {
    FieldProps: {
      label: 'Organization Select',
      helperText: 'Select an Organization from the list',
      placeholder: 'Select...',
      fullWidth: false,
    },
    limit: 15,
  },
};
