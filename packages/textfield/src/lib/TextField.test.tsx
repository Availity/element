import { render } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TextField>Test</TextField>);
    expect(getByText('Test')).toBeTruthy();
  });
});
