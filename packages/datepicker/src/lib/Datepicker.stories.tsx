// Each exported component in the package should have its own stories file
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import type { Meta, StoryObj } from '@storybook/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { Datepicker, DatepickerProps } from './Datepicker';
import { DateCalendar } from './DateCalendar';

const meta: Meta<typeof Datepicker> = {
  title: 'Form Components/Datepicker/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
};

export default meta;

export const _Datepicker: StoryObj<typeof Datepicker> = {
  render: (args: DatepickerProps) => {
    const [value, setValue] = useState<Dayjs | null>(null);

    return (
      <Datepicker
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    );
  },
  args: {
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Date',
    },
  },
};

export const _PickerViews: StoryObj<typeof DateCalendar> = {
  render: () => {
    const minDate = dayjs('2020-01-01T00:00:00.000');
    const maxDate = dayjs('2034-01-01T00:00:00.000');
    const [date, setDate] = useState<Dayjs | null>(null);

    return (
      <Grid container spacing={3}>
        <Grid size={{ xs: 'auto' }}>
          <Typography variant="h3" component="span">
            Default View
          </Typography>
          <Paper sx={{ width: 'min-content' }}>
            <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 'auto' }}>
          <Typography variant="h3" component="span">
            Month View
          </Typography>
          <Paper sx={{ width: 'min-content' }}>
            <MonthCalendar value={date} minDate={minDate} maxDate={maxDate} onChange={(newDate) => setDate(newDate)} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 'auto' }}>
          <Typography variant="h3" component="span">
            Year View
          </Typography>
          <Paper sx={{ width: '320px' }}>
            <YearCalendar value={date} minDate={minDate} maxDate={maxDate} onChange={(newDate) => setDate(newDate)} />
          </Paper>
        </Grid>
      </Grid>
    );
  },
};
