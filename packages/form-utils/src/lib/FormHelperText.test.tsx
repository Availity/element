import { render } from '@testing-library/react';
import { FormHelperText } from './FormHelperText';

describe('FormHelperText', () => {
  test('should render successfully', () => {
    const { getByText } = render(<FormHelperText>Test</FormHelperText>);
    expect(getByText('Test')).toBeTruthy();
  });
});
