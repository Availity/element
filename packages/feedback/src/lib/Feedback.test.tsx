import { render } from '@testing-library/react';
import { Feedback } from './Feedback';

describe('Feedback', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Feedback>Test</Feedback>);
    expect(getByText('Test')).toBeTruthy();
  });
});
