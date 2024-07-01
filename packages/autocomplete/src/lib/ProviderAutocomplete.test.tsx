import { render, screen, fireEvent, waitFor } from '@testing-library/react';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProviderAutocomplete } from './ProviderAutocomplete';

const client = new QueryClient();

describe('ProviderAutocomplete', () => {
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

  test('providers are fetched and displayed by name', async () => {
    render(
      <QueryClientProvider client={client}>
        <ProviderAutocomplete customerId="123" FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Provider 1')).toBeDefined();
    });
  });

  test('providers are not fetched when customerId is not present', async () => {
    render(
      <QueryClientProvider client={client}>
        <ProviderAutocomplete customerId="" FieldProps={{ label: 'Test' }} />
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
