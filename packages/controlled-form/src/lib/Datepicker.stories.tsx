import type { Meta, StoryObj } from '@storybook/react';
import { ControlledDatepicker, ControlledDatepickerProps } from './Datepicker';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, DatepickerPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledDatepicker> = {
  title: 'Form Components/Controlled Form/ControlledDatepicker',
  component: ControlledDatepicker,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...DatepickerPropsCategorized}
};

export default meta;

export const _ControlledInput: StoryObj<typeof ControlledDatepicker> = {
  render: (args: ControlledDatepickerProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledDatepicker {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          { methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null }
        </form>
      </FormProvider>
    );
  },
  args: {
    name: 'controlledDatepicker',
    FieldProps: {
      fullWidth: false,
      helperText: 'Help text for the field',
      helpTopicId: '1234',
      label: 'Date',
    },
  },
};
