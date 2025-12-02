// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Chip } from '@availity/mui-chip';
import { visuallyHidden } from '@availity/mui-utils';
import { Typography } from '@availity/mui-typography';
import { FormLabel, Select, SelectProps, SelectChangeEvent } from '..';

const meta: Meta<typeof Select> = {
  title: 'Form Components/FormUtils/Select',
  component: Select,
  tags: ['autodocs'],
  args: { size: 'small' },
  parameters: { docs: { controls: { exclude: ['placeholder'] } } },
};

export default meta;

export const _Select: StoryObj<typeof Select> = {
  render: ({ required, size, ...args }: SelectProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <FormControl required={required} size={size}>
        <FormLabel id={`${args.id}-label`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select value={count} onChange={handleChange} labelId={`${args.id}-label`} {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    );
  },
  args: { label: 'count', id: 'count', size: 'small' },
};

export const _SelectPlaceholder: StoryObj<typeof Select> = {
  render: ({ required, size, ...args }: SelectProps) => {
    const [count, setCount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCount(event.target.value as string);
    };

    return (
      <FormControl required={required} size={size}>
        <FormLabel id={`${args.id}-label`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select value={count} onChange={handleChange} labelId={`${args.id}-label`} {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    );
  },
  args: {
    label: 'count',
    id: 'count',
    size: 'small',
    displayEmpty: true,
    renderValue: (selected: string) => {
      if (!selected) {
        return <Typography color="text.placeholder">Placeholder</Typography>;
      }

      return selected;
    },
  },
};

export const _MultiSelect: StoryObj<typeof Select> = {
  render: ({ required, size, ...args }: SelectProps) => {
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
      <FormControl required={required} size={size}>
        <FormLabel id={`${args.id}-label`} sx={visuallyHidden}>
          {args.label}
        </FormLabel>
        <Select
          {...args}
          labelId={`${args.id}-label`}
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
  args: { label: 'counts', id: 'multiple-chip', size: 'small', multiple: true },
};
