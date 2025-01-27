// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@availity/mui-layout';
import { Dayjs } from 'dayjs';

import { Datepicker } from './Datepicker';

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

export const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  startFieldProps = {
    label: 'Start Date',
    helperText: 'Select start date',
  },
  endFieldProps = {
    label: 'End Date',
    helperText: 'Select end date',
  },
}: DateRangePickerProps) => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', padding: '1.25rem' }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Datepicker
            value={startDate}
            onChange={onStartDateChange}
            FieldProps={startFieldProps}
            maxDate={endDate ?? undefined} // Prevent selecting start date after end date
          />
        </Grid>
        <Grid xs={6}>
          <Datepicker
            value={endDate}
            onChange={onEndDateChange}
            FieldProps={endFieldProps}
            minDate={startDate ?? undefined} // Prevent selecting end date before start date
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const meta: Meta<typeof DateRangePicker> = {
  title: 'Form Components/Datepicker/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
};

export default meta;

export const _DateRangePicker: StoryObj<typeof DateRangePicker> = {
  render: () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);

    return (
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    );
  },
};
