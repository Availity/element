import { render } from '@testing-library/react';
import { Backdrop } from './Backdrop';

describe('Backdrop', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Backdrop open>Test</Backdrop>);
    expect(getByText('Test')).toBeTruthy();
  });
});
