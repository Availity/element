import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledForm } from './ControlledForm';
import { ControlledCodesAutocomplete } from './CodesAutocomplete';

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
    formState: { isSubmitSuccessful },
  } = useFormContext();
  return (
    <Grid container direction="row" justifyContent="space-between">
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
        <ControlledForm values={{}} onSubmit={onSubmit}>
          <ControlledCodesAutocomplete
            name="controlledCodesAutocomplete"
            list="ABC"
            FieldProps={{
              label: 'Code Select',
              helperText: 'Select a code from the list',
              placeholder: 'Select...',
              fullWidth: false,
            }}
            limit={15}
          />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => expect(screen.getByText('171100000X - Acupuncturist')).toBeDefined());
  });

  test('should set the value and submit the form data', async () => {
    const screen = render(
      <QueryClientProvider client={client}>
        <ControlledForm values={{}} onSubmit={onSubmit}>
          <ControlledCodesAutocomplete
            name="controlledCodesAutocomplete"
            list="ABC"
            FieldProps={{
              label: 'Code Select',
              helperText: 'Select a code from the list',
              placeholder: 'Select...',
              fullWidth: false,
            }}
            limit={15}
          />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => screen.getByText('171100000X - Acupuncturist'));

    fireEvent.click(screen.getByText('171100000X - Acupuncturist'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledCodesAutocompleteValue = JSON.parse(result.innerHTML).controlledCodesAutocomplete;
      expect(controlledCodesAutocompleteValue.code).toBe('171100000X');
      expect(controlledCodesAutocompleteValue.value).toBe('Acupuncturist');
    });
  });
});
