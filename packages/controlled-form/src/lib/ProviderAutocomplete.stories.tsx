import type { Meta, StoryObj } from '@storybook/react';
import { ControlledProviderAutocomplete } from './ProviderAutocomplete';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { missingRHFprops } from '../../docs/propDefinitions';

const meta: Meta<typeof ControlledProviderAutocomplete> = {
  title: 'Components/ControlledForm/Autocomplete/ControlledProviderAutocomplete',
  component: ControlledProviderAutocomplete,
  tags: ['autodocs'],
  argTypes: missingRHFprops,
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
        <Grid container direction="row" justifyContent="space-between">
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <QueryClientProvider client={client}>
        <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={(data) => data}>
          <ControlledProviderAutocomplete {...args} />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
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
    required: 'This is required.',
  },
};
