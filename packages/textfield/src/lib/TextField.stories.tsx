// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { EyeIcon, EyeSlashIcon, SearchIcon } from '@availity/mui-icon';
import { IconButton } from '@availity/mui-button';

import { TextField, TextFieldProps } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    helperText: 'Helper Text',
    fullWidth: false,
  },
  argTypes: {
    helperText: {
      type: 'string',
    },
  },
};

export default meta;

export const _TextField: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
    helpTopicId: '123',
  },
};

export const _States: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => (
    <Stack direction="row" spacing={1}>
      <TextField label="Default" id="default" {...args} />
      <TextField label="Focused" id="Focused" focused {...args} />
      <TextField label="Error" id="error" error {...args} />
      <TextField label="Disabled" id="disabled" disabled {...args} />
    </Stack>
  ),
  args: {
    margin: 'normal',
  },
};

export const _Sizes: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => (
    <Stack direction="row" spacing={1}>
      <TextField label="Small" id="small" size="small" {...args} />
      <TextField label="Medium" id="medium" size="medium" {...args} />
    </Stack>
  ),
  args: {
    margin: 'normal',
  },
};

export const _WithIcon: StoryObj<typeof TextField> = {
  render: () => (
    <TextField
      label="With Icon"
      id="search"
      fullWidth={false}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  ),
};

export const _PasswordField: StoryObj<typeof TextField> = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        type={showPassword ? 'text' : 'password'}
        label="Password"
        id="password"
        fullWidth={false}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton title="password visibility" onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <EyeIcon fontSize="small" /> : <EyeSlashIcon fontSize="small" />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
};

export const _Select: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <TextField value={count} select SelectProps={{ onChange: handleChange }} {...args}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </TextField>
    );
  },
  args: {
    label: 'Select',
  },
};

export const _MultiSelect: StoryObj<typeof TextField> = {
  render: (args: TextFieldProps) => {
    const [multiValue, setMultiValue] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof multiValue>) => {
      const {
        target: { value },
      } = event;
      setMultiValue(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      );
    };

    const options = ['one', 'two', 'three', 'four', 'five', 'six'];

    const renderValue = (selected: typeof multiValue) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} />
        ))}
      </Box>
    );

    return (
      <TextField
        id="multiple-chip"
        select
        SelectProps={{ multiple: true, onChange: handleChange, renderValue: renderValue }}
        value={multiValue}
        {...args}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  },
  args: {
    label: 'MultiSelect',
  },
};
