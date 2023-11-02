// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Datepicker, DatepickerProps } from './Datepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker/Datepicker',
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
        label="Date"
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    );
  },
  args: {
    helperText: 'Help text for the field',
  },
};
