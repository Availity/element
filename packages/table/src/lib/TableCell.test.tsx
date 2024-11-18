import { render } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableCell>Test</TableCell>);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should add placeholder to empty cell', () => {
    const { getByText } = render(<TableCell></TableCell>);
    expect(getByText('-')).toBeTruthy();
    expect(getByText('No Data')).toBeTruthy();
  });
  test('shouldnt add placeholder to empty cell when disableEmptyPlaceholder is true', () => {
    const { queryByText } = render(<TableCell disableEmptyPlaceholder></TableCell>);
    expect(queryByText('-')).toBeNull();
    expect(queryByText('No Data')).toBeNull();
  });
});
