// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dayjs } from 'dayjs';
import { Stack } from '@availity/mui-layout';
import { Timepicker, TimepickerProps } from './Timepicker';

const meta: Meta<typeof Timepicker> = {
  title: 'Form Components/Uncontrolled Fields/Timepicker',
  component: Timepicker,
  tags: ['autodocs'],
};

export default meta;

export const _Timepicker: StoryObj<typeof Timepicker> = {
  render: (args: TimepickerProps) => {
    const [value, setValue] = useState<Dayjs | null>(null);

    return (
      <Timepicker
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
      label: 'Time'
    },
    timeSteps: { minutes: 15 }
  },
};

/** Notice the new `read-only` styling. We're moving away from `disabled` in favor of `read-only`.
 * _See the [Disabled Fields Explainer](./?path=/docs/upgrading/bs4-migration-form-migration--disabled-fields) for more information on when to use each._
*/
export const _States: StoryObj<typeof Timepicker> = {
  render: (args) => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      <Timepicker {...args} FieldProps={{...args.FieldProps, id: "default", label: "Default"}}/>
      <Timepicker {...args} FieldProps={{...args.FieldProps, id: "focused", label: "Focused", focused: true}} />
      <Timepicker {...args} FieldProps={{...args.FieldProps, id: "error", label: "Error", error: true}} />
      <Timepicker {...args} FieldProps={{...args.FieldProps, id: "read-only", label: "Read Only"}} readOnly />
      <Timepicker {...args} FieldProps={{...args.FieldProps, id: "disabled", label: "Disabled"}} disabled />
    </Stack>
  ),
  args: {
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Time',
    },
  },
};
