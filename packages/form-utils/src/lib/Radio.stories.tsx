// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from './Radio';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup } from '..';
import { Stack } from '@availity/mui-layout';

const meta: Meta<typeof Radio> = {
  title: 'Form Components/FormUtils/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: [
        'action',
        'autoFocus',
        'className',
        'component',
        'onChange',
        'onFocusVisible',
        'readOnly',
        'ref',
        'style',
        'tabIndex',
      ],
    },
  },
};

export default meta;

export const _Radio: StoryObj<typeof Radio> = {
  render: (args: RadioProps) => <Radio inputProps={{ 'aria-label': 'example' }} {...args} />,
};

export const _WithLabel: StoryObj<typeof Radio> = {
  render: () => <FormControlLabel control={<Radio />} label="Form Control Label" />,
};

export const _States: StoryObj<typeof Radio> = {
  render: () => (
    <Stack>
      <FormControlLabel control={<Radio />} label="Unselected" checked={false}/>
      <FormControlLabel control={<Radio />} label="Selected" checked/>
      <FormControlLabel control={<Radio />} label="Error" className="Mui-error" checked={false}/>
      <FormControlLabel control={<Radio readOnly/>} label="Read-Only" checked={false} />
      <FormControlLabel control={<Radio />} label="Disabled" disabled/>
    </Stack>
  ),
};
