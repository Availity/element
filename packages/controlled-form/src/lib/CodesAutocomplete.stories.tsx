import type { Meta, StoryObj } from '@storybook/react';
import { ControlledCodesAutocomplete } from './CodesAutocomplete';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { missingRHFprops } from '../../docs/propDefinitions';

const meta: Meta<typeof ControlledCodesAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledCodesAutocomplete',
  component: ControlledCodesAutocomplete,
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

export const _ControlledCodesAutoComplete: StoryObj<typeof ControlledCodesAutocomplete> = {
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
        <Grid container direction="row" justifyContent="space-between" marginTop={1}>
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <QueryClientProvider client={client}>
        <ControlledForm values={{}} onSubmit={(data) => data}>
          <ControlledCodesAutocomplete {...args} />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
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
    },
    limit: 15,
    required: 'This is required.',
  },
};
