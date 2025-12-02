import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledAutocomplete } from './Autocomplete';
import { Button } from '@availity/mui-button';
import { FormProvider, useForm } from '..';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, AutocompletePropsCategorized } from './Types';

const meta: Meta<typeof ControlledAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledAutocomplete',
  component: ControlledAutocomplete,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...AutocompletePropsCategorized}
};

export default meta;

export const _ControlledAutoComplete: StoryObj<typeof ControlledAutocomplete> = {
  render: (args) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledAutocomplete {...args} />
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
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    rules: { required: 'This is required.' },
    FieldProps: { label: 'Autocomplete Label' },
  },
};
