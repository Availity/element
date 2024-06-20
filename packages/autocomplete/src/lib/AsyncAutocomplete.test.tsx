import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AvApi, { ApiConfig } from '@availity/api-axios';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';

import { AsyncAutocomplete } from './AsyncAutocomplete';

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

const getResults = async (page: number, limit: number) => {
  const offset = page * limit;
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

const loadOptions = async (page: number, limit: number) => {
  const { options, totalCount, offset } = await getResults(page, limit);

  return {
    options,
    hasMore: offset + limit < totalCount,
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
    const { getByLabelText } = render(<AsyncAutocomplete FieldProps={{ label: 'Test' }} loadOptions={loadOptions} />);

    expect(getByLabelText('Test')).toBeTruthy();
  });

  test('options should be available', async () => {
    render(<AsyncAutocomplete loadOptions={loadOptions} FieldProps={{ label: 'Test' }} />);

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
    render(<AsyncAutocomplete loadOptions={loadOptions} limit={10} FieldProps={{ label: 'Test' }} />);

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
});
