// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Checkbox, FormControl, FormLabel as MuiFormLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import { FormLabel } from './FormLabel';
import { FormControlLabel, FormControlLabelProps } from './FormControlLabel';

/** Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label. */
const meta: Meta<typeof FormControlLabel> = {
  title: 'Components/FormUtils/FormControlLabel',
  component: FormControlLabel,
  tags: ['autodocs'],
};

export default meta;

export const _FormLabel: StoryObj<typeof FormControlLabel> = {
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} />,
  args: {
    label: 'Label',
    required: true,
    control: <Checkbox />,
  },
};

export const _States: StoryObj<typeof FormControlLabel> = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Default" />
      <FormControlLabel helpTopicId="1234" control={<Checkbox />} label="With FieldHelpIcon" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      {/* Error state not available on individual control, must be within FormControl. */}
      <FormControl error>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Error (Only visible in FormControl group)" />
        </FormGroup>
      </FormControl>
    </FormGroup>
  ),
};

export const _Groups: StoryObj<typeof FormControlLabel> = {
  render: () => (
    <Box display="flex" flexDirection="column">
      <FormControl component="fieldset" aria-labelledby="checkbox-group" margin="normal">
        <MuiFormLabel component="legend" id="checkbox-group">
          Checkbox Group
        </MuiFormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Check 1 with Extra Long Label" />
          <FormControlLabel control={<Checkbox />} label="Check 2" helpTopicId="2" />
          <FormControlLabel control={<Checkbox />} label="Check 3" />
        </FormGroup>
      </FormControl>
      <FormControl required error margin="normal">
        <FormLabel id="radio-group" helpTopicId="12">
          Radio Group
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-group" defaultValue="3">
          <FormControlLabel control={<Radio />} value="1" label="Radio 1 with Extra Long Label" />
          <FormControlLabel control={<Radio />} value="2" label="Radio 2" />
          <FormControlLabel control={<Radio />} value="3" label="Radio 3" />
        </RadioGroup>
      </FormControl>
    </Box>
  ),
};
