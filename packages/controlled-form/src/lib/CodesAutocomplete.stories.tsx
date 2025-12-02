import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledCodesAutocomplete } from './CodesAutocomplete';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AllControllerPropertiesCategorized, CodesAutocompletePropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledCodesAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledCodesAutocomplete',
  component: ControlledCodesAutocomplete,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...CodesAutocompletePropsCategorized}
};

export default meta;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _ControlledCodesAutoComplete: StoryObj<typeof ControlledCodesAutocomplete> = {
  render: (args) => {
    const methods = useForm();

    return (
      <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => data)}>
            <ControlledCodesAutocomplete {...args} />
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
      </QueryClientProvider>
    );
  },
  args: {
    name: 'controlledCodesAutocomplete',
    list: 'ABC',
    FieldProps: {
      label: 'Code Select',
      helperText: 'Select a code from the list',
      placeholder: 'Select...',
      fullWidth: false,
      required: true
    },
    limit: 15,
    rules: { required:'This is required.' },
  },
};
