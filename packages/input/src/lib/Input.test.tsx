import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Input data-testid="test-input" />);
    expect(getByTestId('test-input')).toBeTruthy();
  });
});
