import { render } from '@testing-library/react';
import { Chip } from './Chip';

describe('Chip', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Chip label="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
});
