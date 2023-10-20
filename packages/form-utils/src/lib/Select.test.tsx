import { render } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Select data-testid="test-select"></Select>);
    expect(getByTestId('test-select')).toBeTruthy();
  });
});
