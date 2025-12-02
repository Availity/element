import React, { useState } from 'react';
import { StoryObj, Decorator } from '@storybook/react-vite';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Popover from '@mui/material/Popover';
import { default as MuiLink } from '@mui/material/Link';
import { Button, IconButton } from '@availity/mui-button';
import { Chip } from '@availity/mui-chip';
import { FormHelperText, FormLabel, Input, InputAdornment, Select } from '@availity/mui-form-utils';
import { CloseIcon, FilterIcon, SearchIcon } from '@availity/mui-icon';
import { Box, Grid, Stack } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { Paper } from '@availity/mui-paper';
import { TextField } from '@availity/mui-textfield';
import { Typography } from '@availity/mui-typography';
import { useForm, Controller } from 'react-hook-form';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '../index';

/**
 * UX approved patterns to accompany Table */
export default {
  title: 'Components/Table/Patterns',
  tags: ['autodocs'],
};

const HeaderDecorator: Decorator = (Story) => (
  <Paper sx={{ borderWidth: '1px', borderColor: 'border.decoration', marginTop: 2, borderBottom: 'none' }}>
    <Story />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ borderBottom: 'none' }}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export const _Header: StoryObj = {
  render: (args, { globals: { theme } }) => (
    <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
      <Typography component="div" variant="h6">
        Table Title
      </Typography>
    </TableCell>
  ),
  decorators: [HeaderDecorator],
};

export const _HeaderWithSearchAndFilter: StoryObj = {
  render: (args, { globals: { theme } }) => {
    type OptionType = {
      label: string;
      value: string;
    };

    type Filter = {
      searchbyValue: string;
      searchbyLabel: string;
      searchValue: string | number;
      searchLabel?: string;
    };

    const defaultFilters: Filter[] = [
      { searchbyValue: 'column2', searchbyLabel: 'Column 2', searchValue: 'Payer 1' },
      { searchbyValue: 'column5', searchbyLabel: 'Column 5', searchValue: 'Pending' },
    ];

    const searchByOptions = [
      { label: 'Column 1', value: 'column1' },
      { label: 'Column 2', value: 'column2' },
      { label: 'Column 3', value: 'column3' },
    ];

    const defaultSearchByValues = {
      searchbyValue: 'column1',
      searchValue: '',
    };

    const [filters, setFilters] = useState<Array<Filter>>(defaultFilters);
    const [filterAnchorEl, setFilterAnchorEl] = useState<HTMLButtonElement | null>(null);

    const isFilterPopoverOpen = Boolean(filterAnchorEl);
    const filterPopoverId = isFilterPopoverOpen ? 'filter-popover' : undefined;

    const handlePopoverClose = () => {
      setFilterAnchorEl(null);
    };

    const handleFilterButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setFilterAnchorEl(event.currentTarget);
    };

    const removeFilter = (filter: Filter) => {
      const index = filters.findIndex(
        (item) => item.searchbyValue === filter.searchbyValue && item.searchValue === filter.searchValue
      );
      filters.splice(index, 1);
      setFilters([...filters]);
    };

    const addFilters = (newFilters: Filter[]) => {
      const updatedFilters = [...filters, ...newFilters].sort((a, b) => {
        const nameA = a.searchbyLabel.toUpperCase();
        const nameB = b.searchbyLabel.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setFilters([...updatedFilters]);
    };

    const { handleSubmit, control } = useForm<Filter>({ defaultValues: defaultSearchByValues });

    const onSearchSubmit = (data: Omit<Filter, 'searchbyLabel'>) => {
      const newFilter = {
        ...data,
        searchbyLabel: searchByOptions.find((item) => item.value === data.searchbyValue)?.label || '',
      };
      !filters.find(
        (item) => item.searchbyValue === newFilter.searchbyValue && item.searchValue === newFilter.searchValue
      ) && addFilters([newFilter]);
    };

    const FilterForm = () => {
      type FilterForm = {
        column4?: string;
        column5?: string;
        column6?: string;
      };

      const defaultFilterFormValues = {
        column4: '',
        column5: '',
        column6: '',
      };

      const filterByOptions = [
        { label: 'Column 4', value: 'column4' },
        { label: 'Column 5', value: 'column5' },
        { label: 'Column 6', value: 'column6' },
      ];

      const filterOptions = [
        { label: 'Value 1', value: 'value1' },
        { label: 'Value 2', value: 'value2' },
        { label: 'Value 3', value: 'value3' },
      ];

      const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
      } = useForm<FilterForm>({ defaultValues: defaultFilterFormValues });

      const onSubmit = (data: FilterForm) => {
        const newFilters: Filter[] = [];
        for (const [key, value] of Object.entries(data)) {
          const newFilter = value &&
            !filters.find((item) => item.searchbyValue === key && item.searchValue === value) && {
              searchbyValue: key,
              searchbyLabel: filterByOptions.find((item) => item.value === key)?.label || '',
              searchValue: value,
              searchLabel: filterOptions.find((item) => item.value === value)?.label || '',
            };
          newFilter && newFilters.push(newFilter);
        }
        newFilters && addFilters(newFilters);
        handlePopoverClose();
      };

      return (
        <Box component="form" id="filter-form" onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
          <Stack direction="column" spacing={2}>
            {filterByOptions.map((filterby: OptionType) => (
              <Controller
                name={filterby.value as keyof typeof FilterForm}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                  <TextField
                    key={filterby.value}
                    label={filterby.label}
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    select
                    margin="none"
                  >
                    {filterOptions.map((option: OptionType) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            ))}
            <Stack direction="row" spacing={2}>
              <Button type="reset" color="secondary">
                Reset Filters
              </Button>
              <Button type="submit" color="primary">
                Apply Filters
              </Button>
            </Stack>
          </Stack>
        </Box>
      );
    };

    return (
      <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
        <Typography component="h3" variant="h6" sx={{ marginBottom: 3 }}>
          Table Title
        </Typography>
        <Box component="form" id="search-form" onSubmit={handleSubmit(onSearchSubmit)} sx={{ paddingBottom: 2 }}>
          <FormLabel htmlFor="searchbyValue" id="searchbyValueLabel">
            Search By
          </FormLabel>
          <Grid container spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Grid>
              <Controller
                name="searchbyValue"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                }}
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <Select
                    fullWidth={false}
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    inputRef={ref}
                    margin="none"
                    sx={{ flexShrink: 0 }}
                    labelId="searchbyValueLabel"
                  >
                    {searchByOptions.map((option: OptionType) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
            <Grid size="grow">
              <Controller
                name="searchValue"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                }}
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <FormControl error={!!error} margin="none" sx={{ flexGrow: 1 }} fullWidth>
                    <Input
                      id="search"
                      value={value}
                      onChange={onChange}
                      inputRef={ref}
                      startAdornment={
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      }
                      placeholder="Search"
                      fullWidth
                    />
                    <FormHelperText>{error && error.message}</FormHelperText>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid>
              <Button type="submit" color="primary" size="large">
                Search
              </Button>
            </Grid>
            <Grid>
              <Button
                type="button"
                color="secondary"
                aria-controls={filterPopoverId || ''}
                id="filter-button"
                onClick={handleFilterButtonClick}
                size="large"
              >
                <InputAdornment position="start" sx={{ color: 'inherit' }}>
                  <FilterIcon />
                </InputAdornment>
                Filter
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Popover
          id={filterPopoverId}
          aria-labelledby="filter-header"
          open={isFilterPopoverOpen}
          anchorEl={filterAnchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box sx={{ padding: 2 }}>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', paddingBottom: 2 }}>
              <Typography component="h2" variant="h6" id="filter-header">
                Filters
              </Typography>
              <IconButton title="close" onClick={handlePopoverClose} sx={{ m: '-12px' }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <FilterForm />
          </Box>
        </Popover>
        <FormGroup aria-label="filters" role="group" row>
          {filters.map((filter) => (
            <Chip
              key={`${filter.searchbyValue}-${filter.searchValue.toString().replace(/[^A-Z0-9]+/gi, '_')}}`}
              label={`${filter.searchbyLabel}: ${filter.searchLabel || filter.searchValue}`}
              onDelete={() => removeFilter(filter)}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
          {!!filters.length && (
            <MuiLink
              component="button"
              typography="body1"
              height="26px"
              onClick={() => {
                setFilters([]);
              }}
            >
              Clear All Filters
            </MuiLink>
          )}
        </FormGroup>
      </TableCell>
    );
  },
  decorators: [HeaderDecorator],
};
