// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { FormControl, OutlinedInput } from '@mui/material';
import { FormLabel, FormLabelProps } from './FormLabel';

const meta: Meta<typeof FormLabel> = {
  title: 'Components/FormLabel/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
};

export default meta;

export const _FormLabel: StoryObj<typeof FormLabel> = {
  render: (args: FormLabelProps) => <FormLabel {...args} />,
  args: {
    children: 'This text is a child of FormLabel',
    required: true,
  },
};

export const _States: StoryObj<typeof FormLabel> = {
  render: () => (
    <>
      <FormLabel>Default</FormLabel>
      <FormLabel required>Required</FormLabel>
      <FormLabel error>Error</FormLabel>
      <FormLabel disabled>Disabled</FormLabel>
      <FormLabel helpTopicId="1234">With Help Topic Icon</FormLabel>
    </>
  ),
};

export const _Controls: StoryObj<typeof FormLabel> = {
  render: () => (
    <FormControl required error size="small">
      <FormLabel htmlFor="field-3" helpTopicId="1234">
        FormLabel
      </FormLabel>
      <OutlinedInput id="field-3" defaultValue="field3 value" />
    </FormControl>
  ),
};
