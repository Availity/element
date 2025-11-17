import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledCodesAutocomplete } from './CodesAutocomplete';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledCodesAutocomplete', () => {
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

  // terminate the server
  afterAll(() => server.close());

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

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
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
                rules={{ required: 'This field is required' }}
              />
            </TestForm>
          </QueryClientProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should indicate it is required when passing an object with true', async () => {
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
                rules={{ required: { value: true, message: 'This field is required' } }}
              />
            </TestForm>
          </QueryClientProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should not indicate it is required when passing an object with false', async () => {
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
                rules={{ required: { value: false, message: 'This field is required' } }}
              />
            </TestForm>
          </QueryClientProvider>
        );

        expect(screen.queryByText('*')).toBeNull();
      });
    });
  });
});
