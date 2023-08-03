import { render } from '@testing-library/react';
import { ToggleButtonGroup } from './ToggleButtonGroup';

describe('ToggleButtonGroup', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ToggleButtonGroup value="test">Test</ToggleButtonGroup>);
    expect(getByText('Test')).toBeTruthy();
  });
});
