import { render } from '@testing-library/react';
import { TableHead } from './TableHead';

describe('TableHead', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableHead>Test</TableHead>);
    expect(getByText('Test')).toBeTruthy();
  });
});
