import { render, screen, fireEvent, waitFor } from '@testing-library/react';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CodesAutocomplete } from './CodesAutocomplete';

const client = new QueryClient();

describe('CodesAutocomplete', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers();
    jest.restoreAllMocks();
    client.clear();
  });

  // terminate the server
  afterAll(() => server.close());

  test('providers are fetched and displayed by name', async () => {
    render(
      <QueryClientProvider client={client}>
        <CodesAutocomplete list="123" FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('171100000X - Acupuncturist')).toBeDefined();
    });
  });

  test('codes are not fetched when list is not present', async () => {
    render(
      <QueryClientProvider client={client}>
        <CodesAutocomplete list="" FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('No options')).toBeDefined();
    });
  });
});
