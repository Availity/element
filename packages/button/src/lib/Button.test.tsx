import { render } from '@testing-library/react';
import { Alert } from './Button';

describe('Alert', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Alert>Test</Alert>);
    expect(getByText('Test')).toBeTruthy();
  });
});
