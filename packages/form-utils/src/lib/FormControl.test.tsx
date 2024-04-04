import { render } from '@testing-library/react';
import { FormControl } from './FormControl';

describe('FormLabel', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<FormControl data-testid="test" />);
    expect(getByTestId('test')).toBeTruthy();
  });
});
