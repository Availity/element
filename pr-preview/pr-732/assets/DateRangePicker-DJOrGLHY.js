import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as r}from"./index-CfSBfIZi.js";import{M as o,c as s}from"./index-CzYI0Y3_.js";import"./DocsRenderer-CFRXHY34-B9NE_b2X.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Cp7f9itr.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";import"./client-BqYpGkAY.js";const l=`# DateRangePicker Docs

The \`element\` library has a \`Datepicker\` component that can be used to create your own \`DateRangePicker\`. There is not a \`DateRangePicker\` exported from the library.

## Example

The following code block shows an example \`DateRangePicker\` using the \`Datepicker\` and \`Grid\` components.

\`\`\`tsx
import { Datepicker, Grid } from '@availity/element';
import type { Dayjs } from 'dayjs';

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

const DateRangePicker = ({
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
    <>
      <Grid container spacing={2}>
        <Grid size={{xs: 12, sm: 6}}>
          <Datepicker
            value={startDate}
            onChange={onStartDateChange}
            FieldProps={startFieldProps}
            maxDate={endDate ?? undefined} // Prevent selecting start date after end date
            views={['day', 'month', 'year']}
          />
        </Grid>
        <Grid size={{xs: 12, sm: 6}}>
          <Datepicker
            value={endDate}
            onChange={onEndDateChange}
            FieldProps={endFieldProps}
            minDate={startDate ?? undefined} // Prevent selecting end date before start date
            views={['day', 'month', 'year']}
          />
        </Grid>
      </Grid>
    </>
  );
};
\`\`\`

### Simple Usage

Below is an example of the \`DateRangePicker\` component we made above.

<Source />

\`\`\`tsx
import { useState } from 'react';
import { Dayjs } from 'dayjs';

import { DateRangePicker } from './DateRangePicker';

const MyComponent = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <DateRangePicker
      // Required props
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      // Optional props with default values shown
      startFieldProps={{
        label: 'Start Date',
        helperText: 'Select start date',
        helpTopicId: '1234', // Optional help topic ID
        fullWidth: false, // Optional width control
      }}
      endFieldProps={{
        label: 'End Date',
        helperText: 'Select end date',
        helpTopicId: '1234', // Optional help topic ID
        fullWidth: false, // Optional width control
      }}
    />
  );
};
\`\`\`

### Validation

The recommended way to validate the \`DateRangePicker\` is to use \`yup\`. Below we have an example of validating that the \`endDate\` is after the \`startDate\`.

\`\`\`tsx
import * as yup from 'yup';
import { Dayjs } from 'dayjs';

const dateRangeSchema = yup.object().shape({
  startDate: yup.mixed<Dayjs | null>().nullable().required('Start date is required'),

  endDate: yup
    .mixed<Dayjs | null>()
    .nullable()
    .required('End date is required')
    .test('is-after-start', 'End date must be after start date', function (endDate, context) {
      const { startDate } = context.parent;

      if (!startDate || !endDate) {
        return true;
      }

      return endDate.isAfter(startDate) || endDate.isSame(startDate);
    }),
});
\`\`\`

You can then use the created component and validation schema in a form with \`react-hook-form\`.

\`\`\`tsx
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dayjs } from 'dayjs';

import { DateRangePicker } from './DateRangePicker';

interface DateRangeForm {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

const dateRangeSchema = yup.object().shape({
  startDate: yup.mixed<Dayjs | null>().nullable().required('Start date is required'),

  endDate: yup
    .mixed<Dayjs | null>()
    .nullable()
    .required('End date is required')
    .test('is-after-start', 'End date must be after start date', function (endDate, context) {
      const { startDate } = context.parent;

      if (!startDate || !endDate) {
        return true;
      }

      return endDate.isAfter(startDate) || endDate.isSame(startDate);
    }),
});

const DateRangeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DateRangeForm>({
    resolver: yupResolver(dateRangeSchema),
    defaultValues: {
      startDate: null,
      endDate: null,
    },
  });
  const DateRangeForm = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm<DateRangeForm>({
      resolver: yupResolver(dateRangeSchema),
      defaultValues: {
        startDate: null,
        endDate: null,
      },
      mode: 'onChange', // Enable real-time validation
    });

    // Watch for changes in dates
    const startDate = watch('startDate');
    const endDate = watch('endDate');

    // Optional: Add side effects when dates change
    useEffect(() => {
      if (startDate && endDate) {
        // Perform any additional validation or business logic
        console.log('Date range changed:', { startDate, endDate });
      }
    }, [startDate, endDate]);

    const onSubmit = (data: DateRangeForm) => {
      console.log('Form submitted:', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="startDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Controller
              name="endDate"
              control={control}
              render={({ field: { onChange: onEndChange, value: endValue } }) => (
                <DateRangePicker
                  startDate={value}
                  endDate={endValue}
                  onStartDateChange={onChange}
                  onEndDateChange={onEndChange}
                  startFieldProps={{
                    helperText: errors.startDate?.message,
                    error: Boolean(errors.startDate),
                    label: 'Start Date',
                    fullWidth: true,
                  }}
                  endFieldProps={{
                    helperText: errors.endDate?.message,
                    error: Boolean(errors.endDate),
                    label: 'End Date',
                    fullWidth: true,
                  }}
                />
              )}
            />
          )}
        />
        <button type="submit" style={{ marginTop: '16px' }}>
          Submit
        </button>
      </form>
    );
  };

  const onSubmit = (data: DateRangeForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="startDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Controller
            name="endDate"
            control={control}
            render={({ field: { onChange: onEndChange, value: endValue } }) => (
              <DateRangePicker
                startDate={value}
                endDate={endValue}
                onStartDateChange={onChange}
                onEndDateChange={onEndChange}
                startFieldProps={{
                  helperText: errors.startDate?.message,
                  error: Boolean(errors.startDate),
                  label: 'Start Date',
                }}
                endFieldProps={{
                  helperText: errors.endDate?.message,
                  error: Boolean(errors.endDate),
                  label: 'End Date',
                }}
              />
            )}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
\`\`\`
`;function a(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Form Components/Datepicker/Datepicker/Date Range Picker Docs"}),`
`,n.jsx(s,{children:l})]})}function b(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a()}export{b as default};
