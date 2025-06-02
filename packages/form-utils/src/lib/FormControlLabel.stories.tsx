// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import { default as MuiFormLabel } from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormLabel, FormControlLabel, FormControlLabelProps, Switch } from '..';

/** Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label. */
const meta: Meta<typeof FormControlLabel> = {
  title: 'Form Components/FormUtils/FormControlLabel',
  component: FormControlLabel,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['labelPlacement'],
    },
  },
};

export default meta;

export const _FormLabel: StoryObj<typeof FormControlLabel> = {
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} control={<Checkbox />} />,
  args: {
    label: 'Label',
    required: true,
  },
};

export const _States: StoryObj<typeof FormControlLabel> = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Default" />
      <FormControlLabel helpTopicId="1234" control={<Checkbox />} label="With FieldHelpIcon" />
      <FormControlLabel control={<Checkbox readOnly/>} label="Read-only (doesn't exist on non-text inputs, must recreate read-only behavior)" />
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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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

export const _Alignment: StoryObj<typeof FormControlLabel> = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl component="fieldset" aria-labelledby="checkbox-group" margin="normal">
        <MuiFormLabel component="legend" id="checkbox-group" required>
          Checkbox Group with Extra Loooooooooooooong Label
        </MuiFormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox size="small"/>} label="Small with Extra Loooooooooooooong Label" />
          <FormControlLabel control={<Checkbox size="medium"/>} label="Medium with Extra Loooooooooooooong Label" helpTopicId="2" />
          <FormControlLabel control={<Checkbox size="large"/>} label="Large with Extra Loooooooooooooong Label" />
        </FormGroup>
      </FormControl>
      <FormControl required error margin="normal">
        <FormLabel id="radio-group" helpTopicId="12">
          Radio Group
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-group" defaultValue="3">
          <FormControlLabel control={<Radio size="small"/>} value="small" label="Small with Extra Loooooooooooooong Label" />
          <FormControlLabel control={<Radio size="medium"/>} value="medium" label="Medium with Extra Loooooooooooooong Label" helpTopicId="2" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" aria-labelledby="switch-group" margin="normal">
        <MuiFormLabel component="legend" id="switch-group">
          Switch Group
        </MuiFormLabel>
        <FormGroup sx={{gap: 1}}>
          <FormControlLabel control={<Switch size="small"/>} label="Small with Extra Loooooooooooooong Label" />
          <FormControlLabel control={<Switch size="medium"/>} label="Medium with Extra Loooooooooooooong Label" helpTopicId="2" />
        </FormGroup>
      </FormControl>
    </Box>
  ),
};
