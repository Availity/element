// Each exported component in the package should have its own stories file

import type { StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@availity/mui-checkbox';
import { FormGroup, FormGroupProps, FormLabel, FormControl, FormControlLabel } from '..';

/** Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`. */
export default {
  title: 'Form Components/FormUtils/FormGroup',
  component: FormGroup,
  tags: ['autodocs'],
  args: {
    size: 'small',
  },
};

export const _FormGroupCheckbox: StoryObj<typeof FormGroup> = {
  render: (args: FormGroupProps) => (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required>
      <FormLabel component="legend">Vertical Checkboxes</FormLabel>
      <FormGroup {...args}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
      </FormGroup>
    </FormControl>
  ),
  args: {},
};

export const _HorizontalFormGroupCheckbox: StoryObj<typeof FormGroup> = {
  render: (args: FormGroupProps) => (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required>
      <FormLabel component="legend">Horizontal Checkboxes</FormLabel>
      <FormGroup {...args}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
      </FormGroup>
    </FormControl>
  ),
  args: {
    row: true,
  },
};
