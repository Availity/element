import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Container>Test</Container>);
    expect(getByText('Test')).toBeTruthy();
  });
});
