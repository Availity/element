import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AvApi, { ApiConfig } from '@availity/api-axios';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AsyncAutocomplete } from './AsyncAutocomplete';

const api = new AvApi({ name: 'example' } as ApiConfig);

const client = new QueryClient();

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
  try {
    const resp = await api.post<ExampleResponse>({ offset, limit }, { params: {} });

    return {
      totalCount: resp.data.totalCount,
      offset,
      limit,
      options: resp.data.options,
      count: resp.data.count,
    };
  } catch {
    return {
      totalCount: 0,
      offset,
      limit,
      options: [],
      count: 0,
    };
  }
};

const loadOptions = async (offset: number, limit: number) => {
  const { options, totalCount } = await getResults(offset, limit);

  return {
    options,
    hasMore: offset + limit < totalCount,
    offset,
  };
};

describe('AsyncAutocomplete', () => {
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

  test('should render successfully', () => {
    const { getByLabelText } = render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test" FieldProps={{ label: 'Test' }} loadOptions={loadOptions} />
      </QueryClientProvider>
    );

    expect(getByLabelText('Test')).toBeTruthy();
  });

  test('options should be available', async () => {
    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test1" loadOptions={loadOptions} FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });

    fireEvent.click(await screen.findByText('Option 1'));

    waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });
  });

  test('should call loadOptions when scroll to the bottom', async () => {
    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test2" loadOptions={loadOptions} limit={10} FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
    });

    await act(async () => {
      const options = await screen.findByRole('listbox');
      fireEvent.scroll(options, { target: { scrollTop: options.scrollHeight } });
    });

    await waitFor(() => {
      expect(screen.getByText('Option 10')).toBeDefined();
      expect(() => screen.getByText('Option 20')).toThrowError();
    });
  });

  test('should search with input value', async () => {
    const mockLoadOptions = jest.fn(async () => ({ options: [], hasMore: false, offset: 50 }));

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test1" loadOptions={mockLoadOptions} FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    await waitFor(() => expect(mockLoadOptions).toHaveBeenLastCalledWith(0, 50, ''));

    const input = screen.getByRole('combobox');
    fireEvent.click(input);

    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => expect(mockLoadOptions).toHaveBeenLastCalledWith(0, 50, 'test'));
  });

  test('should make call when watchParams changes', async () => {
    const mockLoadOptions = jest.fn(async () => ({ options: [{ label: 'Option 1' }], hasMore: false, offset: 50 }));

    const watchParams = { foo: 'bar' };

    const { rerender } = render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="test1"
          loadOptions={mockLoadOptions}
          FieldProps={{ label: 'Test' }}
          watchParams={watchParams}
        />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
      // Check that api was called
      expect(mockLoadOptions).toHaveBeenNthCalledWith(1, 0, 50, '');
      // Make sure data is in the query client with given watchParams
      expect(client.getQueryData(['test1', 50, '', watchParams])).toBeDefined();
    });

    watchParams.foo = 'test';

    rerender(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="test1"
          loadOptions={mockLoadOptions}
          FieldProps={{ label: 'Test' }}
          watchParams={watchParams}
        />
      </QueryClientProvider>
    );

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
      // Check that options were fetched
      expect(mockLoadOptions).toHaveBeenNthCalledWith(2, 0, 50, '');
      // Make sure call was made with new watchParams
      expect(client.getQueryData(['test1', 50, '', watchParams])).toBeDefined();
    });
  });
});
