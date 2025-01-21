import type { Meta, StoryObj } from '@storybook/react';
import { ControlledTextField, ControlledTextFieldProps } from './TextField';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';

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

export const _ControlledTextField: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
    const SubmittedValues = () => {
      const {
        getValues,
        formState: { isSubmitSuccessful },
      } = useFormContext();

      return isSubmitSuccessful ? (
        <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
          <Typography variant="h2">Submitted Values</Typography>
          <pre>{JSON.stringify(getValues(), null, 2)}</pre>
        </Paper>
      ) : null;
    };

    const Actions = () => {
      const {
        reset,
        formState: { isSubmitSuccessful },
      } = useFormContext();
      return (
        <Grid container direction="row" justifyContent="space-between" marginTop={1}>
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <ControlledForm values={{ controlledTextField: undefined }} onSubmit={(data) => data}>
        <ControlledTextField {...args} />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledTextField',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: 'This field is required.',
    maxLength: { value: 10, message: 'Too long' },
    label: 'TextField Label',
  },
};
