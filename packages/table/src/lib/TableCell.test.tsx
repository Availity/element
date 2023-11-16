import { render } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableCell>Test</TableCell>);
    expect(getByText('Test')).toBeTruthy();
  });
});
