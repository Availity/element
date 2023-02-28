import { render } from '@testing-library/react';
import { AlertTitle } from './AlertTitle';

describe('AlertTitle', () => {
  test('should render successfully', () => {
    const { getByText } = render(<AlertTitle>Test</AlertTitle>);
    expect(getByText('Test')).toBeTruthy();
  });
});
