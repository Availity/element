// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { FormControl, FormControlLabel, FormHelperText, FormLabel } from '..';
import { Radio } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form Components/FormUtils/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;

export const _RadioGroup: StoryObj<typeof RadioGroup> = {
  render: (args: RadioGroupProps) => (
    <FormControl>
      <FormLabel component="legend" id="radio-buttons-group-label">
        Radio Group
      </FormLabel>
      <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="one" name="radio-buttons-group" {...args}>
        <FormControlLabel value="one" control={<Radio />} label="Radio One" />
        <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
        <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
      </RadioGroup>
    </FormControl>
  ),
  args: {},
};

export const _States: StoryObj<typeof RadioGroup> = {
  render: (args: RadioGroupProps) => (
    <>
      <FormControl margin="normal" required>
        <FormLabel id="required-radio-buttons-group-label">Required</FormLabel>
        <RadioGroup
          aria-labelledby="required-radio-buttons-group-label"
          defaultValue="one"
          name="required-radio-buttons-group"
          {...args}
        >
          <FormControlLabel value="one" control={<Radio />} label="Radio One" />
          <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
        </RadioGroup>
      </FormControl>
      <FormControl margin="normal" error>
        <FormLabel id="error-radio-buttons-group-label">Error</FormLabel>
        <RadioGroup
          aria-labelledby="error-radio-buttons-group-label"
          aria-describedby="error-radio-buttons-group-helpertext"
          name="error-radio-buttons-group"
          {...args}
        >
          <FormControlLabel value="one" control={<Radio />} label="Radio One" />
          <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
        </RadioGroup>
        <FormHelperText id="error-radio-buttons-group-helpertext">Error Message</FormHelperText>
      </FormControl>
    </>
  ),
  args: {},
};

/** Legacy styling for the group label can be achieved with the `"legend"` class on the `FormLabel`. */
export const _Legacy: StoryObj<typeof RadioGroup> = {
  render: (args: RadioGroupProps) => (
    <FormControl>
      <FormLabel className="legend" id="radio-buttons-group-legend-label">
        Radio Group
      </FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-legend-label"
        defaultValue="one"
        name="radio-buttons-group"
        {...args}
      >
        <FormControlLabel value="one" control={<Radio />} label="Radio One" />
        <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
        <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
      </RadioGroup>
    </FormControl>
  ),
  args: {},
};
