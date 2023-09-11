import { render } from '@testing-library/react';
import { PaginationItem } from './PaginationItem';

describe('PaginationItem', () => {
  test('should render successfully', () => {
    const { getByText } = render(<PaginationItem page={1} />);
    expect(getByText('1')).toBeTruthy();
  });
  test('should replace default MUI prev/next iconbuttons', () => {
    const { getByText } = render(<PaginationItem type="previous" />);
    expect(getByText('Prev')).toBeTruthy();
  });
});
