import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AvApi, { ApiConfig } from '@availity/api-axios';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { ControlledAsyncAutocomplete } from './AsyncAutocomplete';
import { TestForm } from './UtilComponents';

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
    render(
      <QueryClientProvider client={client}>
        <TestForm UseFormOptions={{ values: { controlledAutocomplete: undefined } }} onSubmit={onSubmit}>
          <ControlledAsyncAutocomplete
            name="controlledAsyncAutocomplete"
            FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
            getOptionLabel={(val: Option) => val.label}
            loadOptions={loadOptions}
            limit={10}
            queryKey="example"
          />
        </TestForm>
      </QueryClientProvider>
    );

    const dropdown = screen.getByRole('combobox');

    act(() => {
      fireEvent.click(dropdown);
      fireEvent.keyDown(dropdown, { key: 'ArrowDown' });
    });

    await waitFor(() => expect(screen.getByText('Option 0')).toBeDefined());
  });

  test('should set the value and submit the form data', async () => {
    render(
      <QueryClientProvider client={client}>
        <TestForm UseFormOptions={{ values: { controlledAutocomplete: undefined } }} onSubmit={onSubmit}>
          <ControlledAsyncAutocomplete
            name="controlledAsyncAutocomplete"
            FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
            getOptionLabel={(val: Option) => val.label}
            loadOptions={loadOptions}
            limit={10}
            queryKey="example"
          />
        </TestForm>
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
      expect(controlledAsyncAutocompleteValue.id).toBeDefined(); // This is a unique id
    });
  });

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
        render(
          <QueryClientProvider client={client}>
            <TestForm UseFormOptions={{ values: { controlledAutocomplete: undefined } }} onSubmit={onSubmit}>
              <ControlledAsyncAutocomplete
                name="controlledAsyncAutocomplete"
                FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
                getOptionLabel={(val: Option) => val.label}
                loadOptions={loadOptions}
                limit={10}
                queryKey="example"
                rules={{ required: 'This field is required' }}
              />
            </TestForm>
          </QueryClientProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should indicate it is required when passing an object with true', async () => {
        render(
          <QueryClientProvider client={client}>
            <TestForm UseFormOptions={{ values: { controlledAutocomplete: undefined } }} onSubmit={onSubmit}>
              <ControlledAsyncAutocomplete
                name="controlledAsyncAutocomplete"
                FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
                getOptionLabel={(val: Option) => val.label}
                loadOptions={loadOptions}
                limit={10}
                queryKey="example"
                rules={{ required: { value: true, message: 'This field is required' } }}
              />
            </TestForm>
          </QueryClientProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should not indicate it is required when passing an object with false', async () => {
        render(
          <QueryClientProvider client={client}>
            <TestForm UseFormOptions={{ values: { controlledAutocomplete: undefined } }} onSubmit={onSubmit}>
              <ControlledAsyncAutocomplete
                name="controlledAsyncAutocomplete"
                FieldProps={{ label: 'Async Select', helperText: 'Helper Text', fullWidth: false }}
                getOptionLabel={(val: Option) => val.label}
                loadOptions={loadOptions}
                limit={10}
                queryKey="example"
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
