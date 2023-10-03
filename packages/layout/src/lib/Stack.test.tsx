import { render } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Stack>Test</Stack>);
    expect(getByText('Test')).toBeTruthy();
  });
});
