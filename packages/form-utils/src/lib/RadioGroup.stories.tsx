// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
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
        <FormControlLabel value="one" control={<Radio />} label="Radio One with super extra very looooooooooooooooooooooooooooooooooooooooooong label" />
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
      <FormControl margin="normal" className="Mui-readOnly">
        <FormLabel id="read-only-radio-buttons-group-label">Read-only</FormLabel>
        <RadioGroup
          aria-labelledby="read-only-radio-buttons-group-label"
          aria-describedby="read-only-radio-buttons-group-helpertext"
          defaultValue="one"
          name="read-only-radio-buttons-group"
          {...args}
        >
          <FormControlLabel value="one" control={<Radio readOnly/>} label="Radio One" />
          <FormControlLabel value="two" control={<Radio readOnly/>} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio readOnly/>} label="Radio Three" />
        </RadioGroup>
        <FormHelperText id="read-only-radio-buttons-group-helpertext">Read-only state does not exist for non-text fields in HTML. Please review if this pattern can be avoided. If not, selection blocking and other behaviors will need to be recreated to simulate a read-only state.</FormHelperText>
      </FormControl>
      <FormControl margin="normal" disabled>
        <FormLabel id="disabled-radio-buttons-group-label">Disabled</FormLabel>
        <RadioGroup
          aria-labelledby="disabled-radio-buttons-group-label"
          aria-describedby="disabled-radio-buttons-group-helpertext"
          defaultValue="one"
          name="disabled-radio-buttons-group"
          {...args}
        >
          <FormControlLabel value="one" control={<Radio />} label="Radio One" />
          <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
          <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
        </RadioGroup>
        <FormHelperText id="disabled-radio-buttons-group-helpertext">Error Message</FormHelperText>
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
