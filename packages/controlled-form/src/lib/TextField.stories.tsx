import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ControlledTextField, ControlledTextFieldProps } from './TextField';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';

const meta: Meta<typeof ControlledTextField> = {
  title: 'Components/ControlledForm/ControlledTextField',
  component: ControlledTextField,
  tags: ['autodocs'],
  argTypes: {
    helperText: {
      type: 'string',
    },
  },
};

export default meta;

const SubmittedValues = () => {
  const { getValues } = useFormContext();

  return (
    <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
      <Typography variant="h2">Submitted Values</Typography>
      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
    </Paper>
  );
};

export const _ControlledTextField: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
    const [submitted, setSubmitted] = useState(false);
    return (
      <>
        <ControlledForm onSubmit={() => setSubmitted(true)}>
          <ControlledTextField {...args} />
          <Button type="submit" children="Submit" />
          {submitted && <SubmittedValues />}
        </ControlledForm>
      </>
    );
  },
  args: {
    name: 'controlledTextField',
    registerOptions: {
      required: { value: true, message: 'This field is required.' },
    },
  },
};
