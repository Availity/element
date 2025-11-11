import { render } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Switch />);
    expect(getByRole('switch')).toBeTruthy();
  });
});
