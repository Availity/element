import { render } from '@testing-library/react';
import { Popper } from './Popper';

describe('Popper', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Popper open>Test</Popper>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should hide successfully', () => {
    const { queryByText } = render(<Popper open={false}>Test</Popper>);
    expect(queryByText('Test')).not.toBeInTheDocument();
  });
});
