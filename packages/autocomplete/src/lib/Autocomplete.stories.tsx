// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Form Components/Autocomplete/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options: ['1', '2', '3', '4', '5'],
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

export const _Autocomplete: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Autocomplete', helperText: 'Helper Text', fullWidth: false },
  },
};

export const _Single: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Single Select', helperText: 'Helper Text', fullWidth: false },
  },
};

export const _Multi: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'Multi Select', helperText: 'Helper Text', fullWidth: false },
    multiple: true,
  },
};
