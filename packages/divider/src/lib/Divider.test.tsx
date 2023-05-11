import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Divider>Test</Divider>);
    expect(getByText('Test')).toBeTruthy();
  });
});
