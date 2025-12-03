// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchByFormGroup } from './SearchBy';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputAdornment, SelectChangeEvent } from '..';
import { SearchIcon } from '@availity/mui-icon';
import { useState } from 'react';

const meta: Meta<typeof SearchByFormGroup> = {
  title: 'Form Components/FormUtils/SearchByFormGroup',
  component: SearchByFormGroup,
  tags: ['autodocs'],
};

export default meta;

export const _SearchBy: StoryObj<typeof SearchByFormGroup> = {
  render: () => {
    const [searchBy, setSearchBy] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setSearchBy(event.target.value as string);
    };

    return (
      <SearchByFormGroup searchById='searchbystory-searchby'>
      {/* It is recommended to use Autocomplete instead of a select TextField */}
      <TextField id="searchbystory-searchby" value={searchBy} fullWidth={false} select slotProps={{select:{ onChange: handleChange, labelId: "searchbystory-searchby-label"}}}>
        <MenuItem value="Parameter 1">Parameter 1</MenuItem>
        <MenuItem value="Parameter 2">Parameter 2</MenuItem>
        <MenuItem value="Parameter 3">Parameter 3</MenuItem>
      </TextField>
      <TextField
        id="searchbystory-search"
        placeholder="search"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" component="label" htmlFor="searchbystory-search">
                <SearchIcon aria-hidden={false} titleAccess="search"/>
              </InputAdornment>
            ),
          }
        }}
      />
      </SearchByFormGroup>
    )
  }
};
