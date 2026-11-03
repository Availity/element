import { render } from '@testing-library/react';
import { StatusChip } from './StatusChip';

describe('StatusChip', () => {
  test('should render successfully', () => {
    const { getByText } = render(<StatusChip label="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
});
