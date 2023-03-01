import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeTruthy();
  });
});
