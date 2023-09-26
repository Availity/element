import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Checkbox />);
    expect(getByRole('checkbox')).toBeTruthy();
  });
});
