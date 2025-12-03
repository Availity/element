// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@availity/mui-typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import { HeartEmptyIcon, HeartIcon } from '@availity/mui-icon';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form Components/Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    readOnly: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const _Checkbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <Container>
      <Typography variant="h1" marginTop="1rem">
        Examples
      </Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <Checkbox defaultChecked inputProps={{ 'aria-label': 'Default Checked example' }} />
      <Checkbox inputProps={{ 'aria-label': 'Default Unchecked example' }} />
      <Checkbox inputProps={{ 'aria-label': 'Disabled example' }} disabled />
      <Checkbox inputProps={{ 'aria-label': 'Disabled Checked example' }} disabled checked />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </Container>
  ),
  args: {
    color: 'primary',
    inputProps: {
      'aria-label': 'Playground example',
    },
  },
};

export const _CustomCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <Container>
      <Typography variant="h1" sx={{ marginTop: '1rem' }}>
        Examples
      </Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <Checkbox
        defaultChecked
        inputProps={{ 'aria-label': 'Default Checked example' }}
        color="error"
        icon={<HeartEmptyIcon />}
        checkedIcon={<HeartIcon />}
      />
      <Checkbox
        inputProps={{ 'aria-label': 'Default Unchecked example' }}
        color="error"
        icon={<HeartEmptyIcon />}
        checkedIcon={<HeartIcon />}
      />
      <Checkbox
        disabled
        inputProps={{ 'aria-label': 'Disabled example' }}
        color="error"
        icon={<HeartEmptyIcon />}
        checkedIcon={<HeartIcon />}
      />
      <Checkbox
        disabled
        checked
        inputProps={{ 'aria-label': 'Disabled Checked example' }}
        color="error"
        icon={<HeartEmptyIcon />}
        checkedIcon={<HeartIcon />}
      />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <Checkbox {...args} />
    </Container>
  ),
  args: {
    color: 'error',
    icon: <HeartEmptyIcon />,
    checkedIcon: <HeartIcon />,
    inputProps: {
      'aria-label': 'Playground example',
    },
  },
};

export const _LabeledCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => (
    <Container>
      <Typography variant="h1" sx={{ marginTop: '1rem' }}>
        Examples
      </Typography>
      <Typography variant="body1">Storybook controls do not apply to these</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <Typography variant="h1">Playground</Typography>
      <Typography variant="body1">Storybook controls apply to this component</Typography>
      <FormControlLabel control={<Checkbox {...args} />} label="Label" />
    </Container>
  ),
  args: {},
};

export const _ControlledCheckbox: StoryObj<typeof Checkbox> = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
    return <Checkbox {...args} checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />;
  },
  args: {},
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
