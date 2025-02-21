// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm, ControlledFormProps } from './ControlledForm';
import { ControlledTextField } from './TextField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

/** Deprecated. Use `FormProvider` and `useForm` directly. */
const meta: Meta<typeof ControlledForm> = {
  title: 'Form Components/Controlled Form/ControlledForm',
  component: ControlledForm,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledForm: StoryObj<typeof ControlledForm> = {
  render: ({ values, onSubmit, ...args }: ControlledFormProps) => {
    const SubmittedValues = () => {
      const {
        getValues,
        formState: { isSubmitSuccessful },
      } = useFormContext();

      return isSubmitSuccessful ? (
        <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
          <Typography variant="h2">Submitted Values</Typography>
          <pre data-testid="result">{JSON.stringify(getValues(), null, 2)}</pre>
        </Paper>
      ) : null;
    };

    const Actions = () => {
      const {
        reset,
        formState: { isSubmitSuccessful },
      } = useFormContext();
      return (
        <Grid container direction="row" justifyContent="space-between">
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <ControlledForm
        values={values}
        onSubmit={onSubmit}
        schema={yup.object({ controlledTextField: yup.string().max(10) })}
        validationResolver={yupResolver}
        {...args}
      >
        <ControlledTextField
          name="controlledTextField"
          placeholder="Enter your name"
          label="Name"
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    values: { controlledTextField: undefined },
    onSubmit: (data) => data,
  },
};
