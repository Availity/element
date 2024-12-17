// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel, Switch, SwitchProps } from '..';
import { Typography } from '@availity/mui-typography';

const meta: Meta<typeof Switch> = {
  title: 'Form Components/FormUtils/Switch',
  component: Switch,
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
        'required',
        'style',
        'tabIndex',
      ],
    },
  },
};

export default meta;

export const _Switch: StoryObj<typeof Switch> = {
  render: (args: SwitchProps) => <Switch inputProps={{ 'aria-label': 'example' }} {...args} />,
};

export const _WithLabel: StoryObj<typeof Switch> = {
  render: () => <FormControlLabel control={<Switch sx={{ marginRight: '6px' }} />} label="Form Control Label" />,
};

export const _WithCheckedIcon: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel
        control={<Switch showCheckedIcon size="small" sx={{ marginRight: '6px' }} defaultChecked />}
        label="Form Control Label"
      />
      <Typography variant="caption" children="The checked icon only applies to small Switches" />
    </>
  ),
};

export const _Sizes: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel control={<Switch size="small" sx={{ marginRight: '6px' }} />} label="small" />
      <FormControlLabel control={<Switch size="medium" sx={{ marginRight: '6px' }} />} label="medium" />
    </>
  ),
};

export const _States: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel control={<Switch sx={{ marginRight: '6px' }} />} label="unchecked" />
      <FormControlLabel control={<Switch defaultChecked={true} sx={{ marginRight: '6px' }} />} label="checked" />
      <FormControlLabel control={<Switch sx={{ marginRight: '6px' }} />} label="disabled unchecked" disabled />
      <FormControlLabel
        control={<Switch defaultChecked={true} sx={{ marginRight: '6px' }} />}
        label="disabled checked"
        disabled
      />
    </>
  ),
};
