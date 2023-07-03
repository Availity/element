import { render } from '@testing-library/react';
import { CardContent } from './CardContent';

describe('CardContent', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CardContent>Test</CardContent>);
    expect(getByText('Test')).toBeTruthy();
  });
});
