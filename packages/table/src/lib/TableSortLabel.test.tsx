import { render } from '@testing-library/react';
import { TableSortLabel } from './TableSortLabel';

describe('TableSortLabel', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableSortLabel>Test</TableSortLabel>);
    expect(getByText('Test')).toBeTruthy();
  });
});
