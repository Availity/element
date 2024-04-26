import { render } from '@testing-library/react';
import { Spaces } from './Spaces';

describe('Spaces', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Spaces>Test</Spaces>);
    expect(getByText('Test')).toBeTruthy();
  });
});
