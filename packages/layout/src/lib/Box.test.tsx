import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Box>Test</Box>);
    expect(getByText('Test')).toBeTruthy();
  });
});
