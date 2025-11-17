import { useState } from 'react';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import {
  Paper,
  Input,
  IconButton,
  Grid,
  Badge,
  SearchIcon,
  CloseIcon,
  BellIcon,
  ChartColumnIcon,
} from '@availity/element';

export const SearchSection = (): React.JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Paper variant="elevation" elevation={0}>
      <Grid container sx={{ padding: '1rem', alignItems: 'center' }}>
        <Grid container size={{ xs: 6 }}>
          <Grid size={{ xs: 6 }} sx={{ paddingRight: '.5rem' }}>
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
                <TextField
                  {...params}
                  slotProps={{
                    input: { ...InputProps, sx: { borderRadius: '1rem' } },
                  }}
                  label="Payer"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
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
                <TextField
                  {...params}
                  slotProps={{
                    input: { ...InputProps, sx: { borderRadius: '1rem' } },
                  }}
                  label="Status"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container size={{ xs: 6 }} sx={{ justifyContent: 'flex-end', wrap: 'nowrap' }}>
          <Input
            sx={{ bgcolor: 'background.canvas', padding: '0 .5rem', borderRadius: '1.5rem', marginLeft: '.5rem' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton title="Clear" size="small" onClick={() => setSearchValue('')}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
          />
          <IconButton title="Alerts" sx={{ marginLeft: '.5rem', bgcolor: 'background.canvas' }}>
            <Badge variant="dot" color="error" overlap="circular">
              <BellIcon />
            </Badge>
          </IconButton>
          <IconButton title="Reports" sx={{ marginLeft: '.5rem', bgcolor: 'background.canvas' }}>
            <ChartColumnIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};
