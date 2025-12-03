import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledOrganizationAutocomplete } from './OrganizationAutocomplete';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AllControllerPropertiesCategorized, OrganizationAutocompletePropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledOrganizationAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledOrganizationAutocomplete',
  component: ControlledOrganizationAutocomplete,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...OrganizationAutocompletePropsCategorized},
  parameters: {
    controls: {
      exclude: [
        'max',
        'maxLength',
        'min',
        'minLength'
      ]
    }
  }
};

export default meta;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _ControlledOrganizationAutoComplete: StoryObj<typeof ControlledOrganizationAutocomplete> = {
  render: (args) => {
    const methods = useForm();

    return (
      <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => data)}>
            <ControlledOrganizationAutocomplete {...args} />
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
    name: 'controlledOrganizationAutocomplete',
    rules: { required:'This is required.' },
    FieldProps: {
      label: 'Organization Select',
      helperText: 'Select an Organization from the list',
      placeholder: 'Select...',
      fullWidth: false,
    },
  },
};
