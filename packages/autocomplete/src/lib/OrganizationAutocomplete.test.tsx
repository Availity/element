import { render, screen, fireEvent, waitFor } from '@testing-library/react';
/* eslint-disable @nx/enforce-module-boundaries */
import { server } from '@availity/mock/src/lib/server';

import { OrganizationAutocomplete } from './OrganizationAutocomplete';

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
  });

  test('organizations are fetched and displayed by name', async () => {
    render(<OrganizationAutocomplete FieldProps={{ label: 'Test' }} />);

    const input = screen.getByRole('combobox');
    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(screen.getByText('Organization 1')).toBeDefined();
    });
  });
});
