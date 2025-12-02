// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Chip } from '@availity/mui-chip';
import { FormControl, FormControlProps, FormLabel, FormHelperText, Input, Select, SelectChangeEvent } from '..';

/** Form input context. Controls styling (`size`, etc) and state (`error`, `disabled`, etc) across input components, like `FormLabel`, `Input`, `FormHelperText`. */
export default {
  title: 'Form Components/FormUtils/FormControl',
  component: FormControl,
  tags: ['autodocs'],
  args: {
    size: 'small',
  },
};

export const _FormControl: StoryObj<typeof FormControl> = {
  render: (props: FormControlProps) => (
    <FormControl {...props}>
      <FormLabel htmlFor="input">Label</FormLabel>
      <Input inputProps={{ id: 'input' }} />
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
  ),
};

export const _Select: StoryObj<typeof FormControl> = {
  render: (props: FormControlProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <FormControl {...props}>
        <FormLabel id="count-label">Count</FormLabel>
        <Select value={count} onChange={handleChange} labelId="count-label">
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    );
  },
  args: {
    size: 'small',
  },
};

export const _MultiSelect: StoryObj<typeof FormControl> = {
  render: (props: FormControlProps) => {
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

    const options = ['one', 'two', 'three', 'four'];

    return (
      <FormControl {...props}>
        <FormLabel id="multiple-chip-label">Counts</FormLabel>
        <Select
          labelId="multiple-chip-label"
          multiple
          value={multiValue}
          onChange={handleChange}
          renderValue={(selected: typeof multiValue) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  },
  args: {},
};
