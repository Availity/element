import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Pagination count={10} />);
    expect(getByRole('navigation')).toBeTruthy();
  });
});
