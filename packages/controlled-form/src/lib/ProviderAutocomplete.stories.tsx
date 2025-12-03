import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledProviderAutocomplete } from './ProviderAutocomplete';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AllControllerPropertiesCategorized, ProviderAutocompletePropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledProviderAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledProviderAutocomplete',
  component: ControlledProviderAutocomplete,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...ProviderAutocompletePropsCategorized}
};

export default meta;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _ControlledProviderAutoComplete: StoryObj<typeof ControlledProviderAutocomplete> = {
  render: (args) => {
    const methods = useForm();

    return (
      <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => data)}>
            <ControlledProviderAutocomplete {...args} />
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
    name: 'controlledProviderAutocomplete',
    FieldProps: {
      label: 'Provider Select',
      helperText: 'Select a Provider from the list',
      placeholder: 'Select...',
      fullWidth: false,
    },
    limit: 10,
    customerId: '1234',
    rules: { required:'This is required.' },
  },
};
