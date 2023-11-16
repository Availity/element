import { render } from '@testing-library/react';
import { TablePagination } from './TablePagination';

describe('TablePagination', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<TablePagination count={50} page={0} rowsPerPage={10} onPageChange={() => null} />);
    expect(getByRole('navigation')).toBeTruthy();
  });
});
