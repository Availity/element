import { render } from '@testing-library/react';
import { Backdrop } from './Backdrop';

describe('Backdrop', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Backdrop open={true}>Test</Backdrop>);
    expect(getByText('Test')).toBeTruthy();
  });
});
