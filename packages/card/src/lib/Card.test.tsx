import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Card>Test</Card>);
    expect(getByText('Test')).toBeTruthy();
  });
});
