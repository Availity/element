import { render } from '@testing-library/react';
import { TableContainer } from './TableContainer';

describe('TableContainer', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableContainer>Test</TableContainer>);
    expect(getByText('Test')).toBeTruthy();
  });
});
