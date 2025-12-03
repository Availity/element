// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography from '@mui/material/Typography';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Grid, Stack } from '@availity/mui-layout';
import { Paper } from '@availity/mui-paper';
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
      label: 'Date'
    },
  },
};

/** Notice the new `read-only` styling. We're moving away from `disabled` in favor of `read-only`.
 * _See the [Disabled Fields Explainer](./?path=/docs/bs4-migration-form-migration--disabled-fields) for more information on when to use each._
*/
export const _States: StoryObj<typeof Datepicker> = {
  render: (args) => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      <Datepicker {...args} FieldProps={{...args.FieldProps, id: "default", label: "Default"}}/>
      <Datepicker {...args} FieldProps={{...args.FieldProps, id: "focused", label: "Focused", focused: true}} />
      <Datepicker {...args} FieldProps={{...args.FieldProps, id: "error", label: "Error", error: true}} />
      <Datepicker {...args} FieldProps={{...args.FieldProps, id: "read-only", label: "Read Only"}} readOnly />
      <Datepicker {...args} FieldProps={{...args.FieldProps, id: "disabled", label: "Disabled"}} disabled />
    </Stack>
  ),
  args: {
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Date',
    },
  },
};

type DateRangePickerProps = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  startFieldProps?: {
    label?: string;
    helperText?: string;
    helpTopicId?: string;
    fullWidth?: boolean;
  };
  endFieldProps?: {
    label?: string;
    helperText?: string;
    helpTopicId?: string;
    fullWidth?: boolean;
  };
};

type DateRangePicker = (props: DateRangePickerProps) => React.JSX.Element;

export const _DateRangePicker: StoryObj<DateRangePicker> = {
  render: () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    return (
      <Box sx={{ backgroundColor: 'background.paper', padding: '1.25rem' }}>
        <Grid container spacing={2}>
          <Grid size={{xs:12, sm:6}} >
            <Datepicker
              value={startDate}
              onChange={setStartDate}
              FieldProps={{
                label: 'Start Date',
                helperText: 'Select start date',
              }}
              maxDate={endDate ?? undefined} // Prevent selecting start date after end date
              views={['day', 'month', 'year']}
            />
          </Grid>
          <Grid size={{xs:12, sm:6}} >
            <Datepicker
              value={endDate}
              onChange={setEndDate}
              FieldProps={{
                label: 'End Date',
                helperText: 'Select end date',
              }}
              minDate={startDate ?? undefined} // Prevent selecting end date before start date
              views={['day', 'month', 'year']}
            />
          </Grid>
        </Grid>
      </Box>
    );
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
