import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledCodesAutocomplete } from './CodesAutocomplete';
import { TestForm } from './UtilComponents';

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
        <TestForm onSubmit={onSubmit}>
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
      </TestForm>
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
          <TestForm onSubmit={onSubmit}>
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
        </TestForm>
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
