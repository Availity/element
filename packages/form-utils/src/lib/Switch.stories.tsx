// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel, Switch, SwitchProps } from '..';

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
  render: () => (
    <>
      <FormControlLabel control={<Switch />} label="Form Control Label" />
      <FormControlLabel control={<Switch />} label="Form Control Label" labelPlacement="start" />
    </>
  ),
};

export const _Sizes: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel control={<Switch size="small" />} label="small" />
      <FormControlLabel control={<Switch size="medium" />} label="medium" />
    </>
  ),
};

export const _States: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel control={<Switch />} label="unchecked" />
      <FormControlLabel control={<Switch defaultChecked={true} />} label="checked" />
      <FormControlLabel control={<Switch />} label="disabled unchecked" disabled />
      <FormControlLabel control={<Switch defaultChecked={true} />} label="disabled checked" disabled />
    </>
  ),
};
