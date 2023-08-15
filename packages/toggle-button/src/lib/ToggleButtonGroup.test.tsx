import { render } from '@testing-library/react';
import { ToggleButtonGroup } from './ToggleButtonGroup';

describe('ToggleButtonGroup', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<ToggleButtonGroup value="test" />);
    expect(getByRole('group')).toBeTruthy();
  });
});
