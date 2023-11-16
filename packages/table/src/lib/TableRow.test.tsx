import { render } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableRow>Test</TableRow>);
    expect(getByText('Test')).toBeTruthy();
  });
});
