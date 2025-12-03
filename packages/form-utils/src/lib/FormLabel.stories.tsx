// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { visuallyHidden } from '@availity/mui-utils';
import { FormHelperText, FormLabel, FormLabelProps, Input } from '..';

/** Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`. */
const meta: Meta<typeof FormLabel> = {
  title: 'Form Components/FormUtils/FormLabel',
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
      <FormLabel helpTopicId="1234">With Field Help Icon</FormLabel>
      <FormLabel required>Required</FormLabel>
      <FormLabel error>Error</FormLabel>
      {/* A disabled label by itself will throw contrast warning unless used correctly with a disabled input. */}
      <FormControl disabled size="small">
        <FormLabel htmlFor="disabled">Disabled</FormLabel>
        <OutlinedInput id="disabled" sx={visuallyHidden} />
      </FormControl>
    </>
  ),
};

export const _Controls: StoryObj<typeof FormLabel> = {
  render: () => (
    <FormControl required size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
  ),
};
