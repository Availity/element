import { render } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  test('should render successfully', () => {
    const { getByText } = render(<EmptyState>Test</EmptyState>);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should render EmptyStateImage when variant passed', () => {
    const { getByRole } = render(<EmptyState variant="NoSearchFound">Test</EmptyState>);
    expect(getByRole('img', { hidden: true })).toBeTruthy();
  });
});
