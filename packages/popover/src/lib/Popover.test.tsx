import { render } from '@testing-library/react';
import { Popover } from './Popover';

describe('Popover', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Popover children="Test" open />);
    expect(getByText('Test')).toBeTruthy();
  });
});
