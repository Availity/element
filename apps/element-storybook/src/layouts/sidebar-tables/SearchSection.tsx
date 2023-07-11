import { useState } from 'react';
import { Paper, Autocomplete, TextField, Input, InputAdornment, IconButton, Grid, Badge, Box } from '@mui/material';
import { SearchIcon, CloseIcon, BellIcon, ChartColumnIcon } from '@availity/mui-icon';

export const SearchSection = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Paper variant="elevation" elevation={0}>
      <Grid container sx={{ padding: '1rem' }} alignItems={'center'}>
        <Grid item container xs={6}>
          <Grid item xs={6} sx={{ paddingRight: '.5rem' }}>
            <Autocomplete
              disablePortal
              id="payer-filter"
              size="small"
              options={[
                { label: 'Payer1', id: 'payer1' },
                { label: 'Payer2', id: 'payer2' },
                { label: 'Payer3', id: 'payer3' },
              ]}
              renderInput={({ InputProps, ...params }) => (
                <TextField {...params} InputProps={{ ...InputProps, sx: { borderRadius: '1rem' } }} label="Payer" />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="status-filter"
              size="small"
              options={[
                { label: 'Status1', id: 'status1' },
                { label: 'Status2', id: 'status2' },
                { label: 'Status3', id: 'status3' },
              ]}
              renderInput={({ InputProps, ...params }) => (
                <TextField {...params} InputProps={{ ...InputProps, sx: { borderRadius: '1rem' } }} label="Status" />
              )}
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} justifyContent={'flex-end'} wrap="nowrap">
          <Input
            sx={{ bgcolor: 'background.canvas', padding: '0 .5rem', borderRadius: '1.5rem', marginLeft: '.5rem' }}
            disableUnderline
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearchValue('')}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
          />
          <IconButton sx={{ marginLeft: '.5rem', bgcolor: 'background.canvas' }}>
            <Badge variant="dot" color="error" overlap="circular">
              <BellIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ marginLeft: '.5rem', bgcolor: 'background.canvas' }}>
            <ChartColumnIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};
