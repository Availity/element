import type { Meta, StoryObj } from '@storybook/react';
import { ControlledAsyncAutocomplete } from './AsyncAutocomplete';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AvApi, { ApiConfig } from '@availity/api-axios';
import { missingRHFprops } from '../../docs/propDefinitions';

const meta: Meta<typeof ControlledAsyncAutocomplete> = {
  title: 'Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete',
  component: ControlledAsyncAutocomplete,
  tags: ['autodocs'],
  argTypes: missingRHFprops,
};

export default meta;

const api = new AvApi({ name: 'example' } as ApiConfig);

type Option = {
  label: string;
  value: number;
};

type ExampleResponse = {
  totalCount: number;
  options: Option[];
  count: number;
};

const getResults = async (offset: number, limit: number) => {
  // const offset = page * limit;
  const resp = await api.post<ExampleResponse>({ offset, limit }, { params: {} });

  return {
    totalCount: resp.data.totalCount,
    offset,
    limit,
    options: resp.data.options,
    count: resp.data.count,
  };
};

const loadOptions = async (offset: number, limit: number) => {
  const { options, totalCount } = await getResults(offset, limit);

  return {
    options,
    hasMore: offset + limit < totalCount,
    offset,
  };
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const _ControlledAsyncAutoComplete: StoryObj<typeof ControlledAsyncAutocomplete> = {
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
        <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={(data) => data}>
          <ControlledAsyncAutocomplete {...args} />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
      </QueryClientProvider>
    );
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: { label: 'Async Select', helperText: 'Helper Text', fullWidth: false },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example',
    required: 'This is required.',
  },
};
