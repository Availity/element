import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import AvApi, { ApiConfig } from '@availity/api-axios';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledForm } from './ControlledForm';
import { ControlledAsyncAutocomplete } from './AsyncAutocomplete';

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

const onSubmit = jest.fn();

describe('ControlledAsyncAutocomplete', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers();
    jest.restoreAllMocks();
  });

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  test('should loadOptions successfully', async () => {
    const screen = render(
      <QueryClientProvider client={client}>
        <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={(data) => data}>
          <ControlledAsyncAutocomplete
            name="controlledAsyncAutocomplete"
            FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
            getOptionLabel={(val: Option) => val.label}
            loadOptions={loadOptions}
            limit={10}
            queryKey="example"
          />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => expect(screen.getByText('Option 1')).toBeDefined());
  });

  test('should submit the form data', async () => {
    const screen = render(
      <QueryClientProvider client={client}>
        <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={onSubmit}>
          <ControlledAsyncAutocomplete
            name="controlledAsyncAutocomplete"
            FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
            getOptionLabel={(val: Option) => val.label}
            loadOptions={loadOptions}
            limit={10}
            queryKey="example"
          />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => screen.getByText('Option 1'));

    fireEvent.click(screen.getByText('Option 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledAsyncAutocompleteValue = JSON.parse(result.innerHTML).controlledAsyncAutocomplete;
      expect(controlledAsyncAutocompleteValue.label).toBe('Option 1');
      expect(controlledAsyncAutocompleteValue.value).toBe(1);
      expect(controlledAsyncAutocompleteValue.id).toBeDefined();
    });
  });
});
