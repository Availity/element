import { render, screen, fireEvent, waitFor } from '@testing-library/react';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { OrganizationAutocomplete } from './OrganizationAutocomplete';

const client = new QueryClient();

describe('OrganizationAutocomplete', () => {
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

  test('organizations are fetched and displayed by name', async () => {
    render(
      <QueryClientProvider client={client}>
        <OrganizationAutocomplete FieldProps={{ label: 'Test' }} />
      </QueryClientProvider>
    );

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Organization 1')).toBeDefined();
    });
  });
});
