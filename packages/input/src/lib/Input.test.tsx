import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Input>Test</Input>);
    expect(getByText('Test')).toBeTruthy();
  });
});
