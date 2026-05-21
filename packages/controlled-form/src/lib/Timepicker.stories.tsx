import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledTimepicker, ControlledTimepickerProps } from './Timepicker';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, TimepickerPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';
import dayjs, { Dayjs } from 'dayjs';

const meta: Meta<typeof ControlledTimepicker> = {
  title: 'Form Components/Controlled Form/ControlledTimepicker',
  component: ControlledTimepicker,
  tags: ['autodocs'],
  argTypes: { ...AllControllerPropertiesCategorized, ...TimepickerPropsCategorized },
};

export default meta;

export const _ControlledTimePicker: StoryObj<typeof ControlledTimepicker> = {
  render: (args: ControlledTimepickerProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledTimepicker {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button
              disabled={!methods?.formState?.isSubmitSuccessful}
              children="Reset"
              color="secondary"
              onClick={() => methods.reset()}
            />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null}
        </form>
      </FormProvider>
    );
  },
  args: {
    name: 'controlledTimepicker',
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Time',
    },
  },
};

/**
 * In this example, the underlying value is stored as a string in the form values,
 * but the timepicker always receives a Dayjs object. The transform prop is used to
 * convert the value to and from the format you want to store in the underlying
 * form values. You can see the underlying value when submitting the form.
 */
export const _Transform: StoryObj<typeof ControlledTimepicker> = {
  render: (args: ControlledTimepickerProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledTimepicker {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button
              disabled={!methods?.formState?.isSubmitSuccessful}
              children="Reset"
              color="secondary"
              onClick={() => methods.reset()}
            />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null}
        </form>
      </FormProvider>
    );
  },
  args: {
    transform: {
      output: (value: Dayjs) => value?.format('hh:mm A'),
      input: (value: string) => (value ? dayjs(value, 'hh:mm A') : null),
    },
    name: 'controlledTimepickerTransform',
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Time',
    },
  },
}
