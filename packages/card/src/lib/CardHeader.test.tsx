import { render } from '@testing-library/react';
import { CardHeader } from './CardHeader';

describe('CardHeader', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CardHeader>Test</CardHeader>);
    expect(getByText('Test')).toBeTruthy();
  });
});
