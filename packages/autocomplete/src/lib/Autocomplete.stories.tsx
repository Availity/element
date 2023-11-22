// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options: ['1', '2', '3', '4', '5'],
  },
};

export default meta;

export const _Autocomplete: StoryObj<typeof Autocomplete> = {
  render: (args) => <Autocomplete {...args} />,
  args: {
    FieldProps: { label: 'AvTextField' },
  },
};

export const _Variants: StoryObj<typeof Autocomplete> = {
  render: (args) => (
    <>
      <Autocomplete {...args} FieldProps={{ label: 'Single Select', margin: 'normal' }} />
      <Autocomplete {...args} FieldProps={{ label: 'Multi Select', margin: 'normal' }} multiple />
    </>
  ),
  parameters: {
    controls: {
      exclude: ['FieldProps'],
    },
  },
};
