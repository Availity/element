// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControlLabel, Switch, SwitchProps, FormGroup, FormLabel } from '..';
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
  render: (args: SwitchProps) => {
    return <Switch {...args} />;
  },
  args: {
    inputProps: {
      'aria-label': 'example',
    },
  },
};

export const _WithLabel: StoryObj<typeof Switch> = {
  render: (args: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return (
      <FormControlLabel
        control={<Switch {...args} onChange={(event) => setChecked(event.target.checked)} />}
        label={checked ? 'On' : 'Off'}
      />
    );
  },
  args: {
    sx: { marginRight: '6px' },
  },
};

export const _WithCheckedIcon: StoryObj<typeof Switch> = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              showCheckedIcon
              size="small"
              sx={{ marginRight: '6px' }}
              onChange={(event) => setChecked(event.target.checked)}
              defaultChecked
            />
          }
          label={checked ? 'On' : 'Off'}
        />
        <Typography variant="caption" children="The checked icon only applies to small Switches" />
      </FormGroup>
    );
  },
};

export const _Sizes: StoryObj<typeof Switch> = {
  render: () => {
    const [smallChecked, setSmallChecked] = useState(false);
    const [defaultChecked, setDefaultChecked] = useState(false);
    return (
      <>
        <FormControlLabel
          control={
            <Switch
              id="smallSwitch"
              size="small"
              sx={{ marginRight: '6px' }}
              onChange={(event) => setSmallChecked(event.target.checked)}
            />
          }
          label={smallChecked ? 'On' : 'Off'}
        />
        <FormControlLabel
          control={
            <Switch
              id="defaultSwitch"
              size="medium"
              sx={{ marginRight: '6px' }}
              onChange={(event) => setDefaultChecked(event.target.checked)}
            />
          }
          label={defaultChecked ? 'On' : 'Off'}
        />
      </>
    );
  },
};

export const _States: StoryObj<typeof Switch> = {
  render: () => (
    <>
      <FormControlLabel control={<Switch sx={{ marginRight: '6px' }} />} label="unchecked" checked={false} />
      <FormControlLabel
        control={<Switch defaultChecked={true} sx={{ marginRight: '6px' }} />}
        label="checked"
        checked
      />
      <FormControlLabel control={<Switch sx={{ marginRight: '6px' }} />} label="disabled unchecked" disabled />
      <FormControlLabel
        control={<Switch defaultChecked={true} sx={{ marginRight: '6px' }} />}
        label="disabled checked"
        disabled
      />
    </>
  ),
};
