// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';

import { OrganizationAutocomplete } from './OrganizationAutocomplete';

const meta: Meta<typeof OrganizationAutocomplete> = {
  title: 'Form Components/Autocomplete/OrganizationAutocomplete',
  component: OrganizationAutocomplete,
  tags: ['autodocs'],
  args: {
    id: 'example',
  },
  argTypes: {
    multiple: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const _OrganizationAutocomplete: StoryObj<typeof OrganizationAutocomplete> = {
  render: (args) => {
    return <OrganizationAutocomplete {...args} />;
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
