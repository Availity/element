import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AvApi, { ApiConfig } from '@availity/api-axios';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AsyncAutocomplete } from './AsyncAutocomplete';
import { mock } from 'node:test';

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

  // terminate the server
  afterAll(() => server.close());

  test('should render successfully', () => {
    const client = new QueryClient();

    const { getByLabelText } = render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test" FieldProps={{ label: 'Test' }} loadOptions={loadOptions} />
      </QueryClientProvider>
    );

    expect(getByLabelText('Test')).toBeTruthy();
  });

  test('options should be available', async () => {
    const client = new QueryClient();

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

  test('prependedOptions should be available', async () => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="prepended-options"
          prependOptions={[{ label: 'Option 0', value: 0 }]}
          loadOptions={loadOptions}
          FieldProps={{ label: 'Test' }}
        />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    waitFor(() => {
      expect(screen.getByText('Option 0')).toBeDefined();
      expect(screen.getByText('Option 1')).toBeDefined();
    });

    fireEvent.click(await screen.findByText('Option 0'));

    waitFor(() => {
      expect(screen.getByText('Option 0')).toBeDefined();
    });
  });

  test('prependedOptions should not be duplicative', async () => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="prepended-options-unique"
          prependOptions={[{ label: 'Option 1', value: 1 }]}
          loadOptions={loadOptions}
          FieldProps={{ label: 'Test' }}
        />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    waitFor(() => {
      expect(screen.getAllByText('Option 1').length).toBe(1);
    });
  });

  test('should filter duplicates using custom isOptionEqualToValue', async () => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="test-duplicates"
          prependOptions={[{ label: 'Option 1', value: 1 }]}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          loadOptions={loadOptions}
          FieldProps={{ label: 'Test' }}
        />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
      expect(screen.getByText('Option 2')).toBeDefined();
      expect(screen.getAllByText('Option 1')).toHaveLength(1);
    });
  });

  test('should call loadOptions when scroll to the bottom', async () => {
    const mockLoadOptions = jest.fn(loadOptions);
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test-loadoptions-scroll" loadOptions={mockLoadOptions} limit={10} FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowUp' });

    const listbox = await screen.findByRole('listbox');
    Object.defineProperty(listbox, 'scrollHeight', { value: 500, writable: true });
    Object.defineProperty(listbox, 'clientHeight', { value: 100, writable: true });
    Object.defineProperty(listbox, 'scrollTop', { value: 0, writable: true });

    // wait for no-scroll loading fallback to finish before testing scroll behavior
    await waitFor(() => expect(() => screen.getByAltText('Loading')).toThrow());
    const initialCallCount = mockLoadOptions.mock.calls.length;

    fireEvent.scroll(listbox, { target: { scrollTop: 200 } });

    // should not loadOptions since not scrolled to bottom
    await waitFor(() => {
      expect(mockLoadOptions).toHaveBeenCalledTimes(initialCallCount);
    });

    fireEvent.scroll(listbox, { target: { scrollTop: 400 } });

    await waitFor(() => {
      expect(mockLoadOptions).toHaveBeenCalledTimes(initialCallCount + 1);
    });
  });

  test('should call loadOptions if more options available and not enough options for scroll', async () => {
    const mockLoadOptions = jest.fn(loadOptions);
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete
          queryKey="test-loadOptions-noscroll"
          loadOptions={mockLoadOptions}
          limit={5}
          FieldProps={{ label: 'Test' }}
        />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(mockLoadOptions).toHaveBeenCalled();
    });

    // should load more options until enough options for scroll or no more options to load
    const listbox = await screen.findByRole('listbox');
    Object.defineProperty(listbox, 'scrollHeight', { value: 500, writable: true });
    Object.defineProperty(listbox, 'clientHeight', { value: 100, writable: true });
    Object.defineProperty(listbox, 'scrollTop', { value: 0, writable: true });

    await waitFor(() => expect(() => screen.getByAltText('Loading')).toThrow());

    // count number of calls before satisfying scrollable condition
    const maxCallCount = mockLoadOptions.mock.calls.length;

    fireEvent.pointerEnter(listbox);

    // should not fallback to load more options as scrollable condition is satisfied
    await waitFor(() => {
      expect(mockLoadOptions).toHaveBeenCalledTimes(maxCallCount);
    });
  });


  test('should search with input value', async () => {
    const mockLoadOptions = jest.fn(async () => ({ options: [{ label: 'Option 1' }], hasMore: false, offset: 50 }));
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <AsyncAutocomplete queryKey="test1" loadOptions={mockLoadOptions} FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeDefined();
      expect(mockLoadOptions).toHaveBeenNthCalledWith(1, 0, 50, '');
    });

    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => expect(mockLoadOptions).toHaveBeenNthCalledWith(2, 0, 50, 'test'));
  });

  test('should make call when watchParams changes', async () => {
    const mockLoadOptions = jest.fn(async () => ({ options: [{ label: 'Option 1' }], hasMore: false, offset: 50 }));
    const client = new QueryClient();

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
