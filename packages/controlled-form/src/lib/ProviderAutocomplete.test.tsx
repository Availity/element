import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledProviderAutocomplete } from './ProviderAutocomplete';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledProviderAutocomplete', () => {
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
        <TestForm UseFormOptions={{values: { controlledAutocomplete: null }}} onSubmit={onSubmit}>
            <ControlledProviderAutocomplete
              name="controlledProviderAutocomplete"
              FieldProps={{
                label: 'Provider Select',
                helperText: 'Select a Provider from the list',
                placeholder: 'Select...',
                fullWidth: false,
              }}
              limit={10}
              customerId="1234"
            />
        </TestForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => expect(screen.getByText('Provider 1')).toBeDefined());
  });

  test('should set the value and submit the form data', async () => {
      const screen = render(
        <QueryClientProvider client={client}>
          <TestForm UseFormOptions={{values: { controlledAutocomplete: null }}} onSubmit={onSubmit}>
            <ControlledProviderAutocomplete
              name="controlledProviderAutocomplete"
              FieldProps={{
                label: 'Provider Select',
                helperText: 'Select a Provider from the list',
                placeholder: 'Select...',
                fullWidth: false,
              }}
              limit={10}
              customerId="1234"
            />
        </TestForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => screen.getByText('Provider 1'));

    fireEvent.click(screen.getByText('Provider 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledProviderAutocompleteValue = JSON.parse(result.innerHTML).controlledProviderAutocomplete;
      expect(controlledProviderAutocompleteValue.uiDisplayName).toBe('Provider 1');
      expect(controlledProviderAutocompleteValue.id).toBeDefined();
    });
  });
});
