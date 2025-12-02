// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, FormHelperTextProps, FormLabel, Input } from '..';

/** Label component for use with individual inputs, form controls,  and form groups. For labels to use with `checkbox`/`radio` see `FormControlLabel`. */
const meta: Meta<typeof FormHelperText> = {
  title: 'Form Components/FormUtils/FormHelperText',
  component: FormHelperText,
  tags: ['autodocs'],
};

export default meta;

export const _FormHelperText: StoryObj<typeof FormHelperText> = {
  render: (args: FormHelperTextProps) => <FormHelperText {...args} />,
  args: {
    children: 'This text is a child of FormHelperText',
  },
};

export const _States: StoryObj<typeof FormHelperText> = {
  render: () => (
    <>
      <FormHelperText>Default</FormHelperText>
      <FormHelperText error>Error</FormHelperText>
    </>
  ),
};

export const _Controls: StoryObj<typeof FormHelperText> = {
  render: () => (
    <FormControl error size="small">
      <FormLabel htmlFor="field-1" helpTopicId="1234">
        Example
      </FormLabel>
      <Input id="field-1" defaultValue="default value" />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
  ),
};
