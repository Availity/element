import { render } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableFooter>Test</TableFooter>);
    expect(getByText('Test')).toBeTruthy();
  });
});
