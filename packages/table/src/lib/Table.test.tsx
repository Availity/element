import { render } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Table>Test</Table>);
    expect(getByText('Test')).toBeTruthy();
  });
});
