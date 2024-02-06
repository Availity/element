import { render } from '@testing-library/react';
import { EmptyStateImage } from './EmptyStateImage';

describe('EmptyStateImages', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(<EmptyStateImage />);
    expect(getByLabelText('No Search Found')).toBeTruthy();
  });
});
