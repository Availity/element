// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel } from '@availity/mui-form-utils';
import { Box, FormGroup } from '@mui/material';
import { HeartEmptyIcon, HeartIcon } from '@availity/mui-icon';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

export const _Checkbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <>
      <Checkbox {...args} defaultChecked inputProps={{ 'aria-label': 'Default Checked example' }} />
      <Checkbox {...args} inputProps={{ 'aria-label': 'Default Unchecked example' }} />
      <Checkbox {...args} inputProps={{ 'aria-label': 'Disabled example' }} disabled />
      <Checkbox {...args} inputProps={{ 'aria-label': 'Disabled Checked example' }} disabled checked />
    </>
  ),
  args: {
    color: 'primary',
  },
};

export const _CustomCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <>
      <Checkbox {...args} defaultChecked inputProps={{ 'aria-label': 'Default Checked example' }} />
      <Checkbox {...args} inputProps={{ 'aria-label': 'Default Unchecked example' }} />
      <Checkbox {...args} disabled inputProps={{ 'aria-label': 'Disabled example' }} />
      <Checkbox {...args} disabled checked inputProps={{ 'aria-label': 'Disabled Checked example' }} />
    </>
  ),
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />,
  },
};

export const _LabeledCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </>
  ),
  args: {
    children: 'This text is a child of Checkbox',
  },
};

export const _ControlledCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />;
  },
  args: {
    children: 'This text is a child of Checkbox',
  },
};
export const _IndeterminateCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
        <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
      </Box>
    );
    return (
      <div>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              {...args}
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </div>
    );
  },
  args: {},
};

export const _FormGroupCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>
  ),
  args: {
    color: 'primary',
  },
};
export const _FormGroupHorizontalCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <FormGroup row>
      <FormControlLabel control={<Checkbox {...args} defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox {...args} />} label="Required" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>
  ),
  args: {
    color: 'primary',
  },
};
