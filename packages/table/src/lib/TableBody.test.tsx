import { render } from '@testing-library/react';
import { TableBody } from './TableBody';

describe('TableBody', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TableBody>Test</TableBody>);
    expect(getByText('Test')).toBeTruthy();
  });
});
