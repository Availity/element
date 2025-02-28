import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledOrganizationAutocomplete } from './OrganizationAutocomplete';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledOrganizationAutocomplete', () => {
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
          <ControlledOrganizationAutocomplete
            name="controlledOrganizationAutocomplete"
            FieldProps={{
              label: 'Organization Select',
              helperText: 'Select an Organization from the list',
              placeholder: 'Select...',
              fullWidth: false,
            }}
          />
        </TestForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => expect(screen.getByText('Organization 1')).toBeDefined());
  });

  test('should set the value and submit the form data', async () => {
    const screen = render(
      <QueryClientProvider client={client}>
        <TestForm onSubmit={onSubmit}>
          <ControlledOrganizationAutocomplete
            name="controlledOrganizationAutocomplete"
            FieldProps={{
              label: 'Organization Select',
              helperText: 'Select an Organization from the list',
              placeholder: 'Select...',
              fullWidth: false,
            }}
          />
        </TestForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    await waitFor(() => screen.getByText('Organization 1'));

    fireEvent.click(screen.getByText('Organization 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledCodesAutocompleteValue = JSON.parse(result.innerHTML).controlledOrganizationAutocomplete;
      expect(controlledCodesAutocompleteValue.customerId).toBe('1');
      expect(controlledCodesAutocompleteValue.name).toBe('Organization 1');
      expect(controlledCodesAutocompleteValue.id).toBeDefined();
    });
  });

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
        const screen = render(
          <QueryClientProvider client={client}>
            <TestForm onSubmit={onSubmit}>
              <ControlledOrganizationAutocomplete
                name="controlledOrganizationAutocomplete"
                FieldProps={{
                  label: 'Organization Select',
                  helperText: 'Select an Organization from the list',
                  placeholder: 'Select...',
                  fullWidth: false,
                }}
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
              <ControlledOrganizationAutocomplete
                name="controlledOrganizationAutocomplete"
                FieldProps={{
                  label: 'Organization Select',
                  helperText: 'Select an Organization from the list',
                  placeholder: 'Select...',
                  fullWidth: false,
                }}
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
              <ControlledOrganizationAutocomplete
                name="controlledOrganizationAutocomplete"
                FieldProps={{
                  label: 'Organization Select',
                  helperText: 'Select an Organization from the list',
                  placeholder: 'Select...',
                  fullWidth: false,
                }}
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
