import { render } from '@testing-library/react';
import { EmptyStateImage } from './EmptyStateImage';

describe('EmptyStateImages', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<EmptyStateImage />);
    expect(getByRole('img', { hidden: true })).toBeTruthy();
  });
});
