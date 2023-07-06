import { render } from '@testing-library/react';
import { ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';

describe('ToggleButtonGroup', () => {
  test('should render successfully', () => {
    const { getByRole } = render(
      <ToggleButtonGroup value="test">
        <ToggleButton value="test">Test</ToggleButton>
      </ToggleButtonGroup>
    );
    expect(getByRole('group')).toBeTruthy();
  });
});
