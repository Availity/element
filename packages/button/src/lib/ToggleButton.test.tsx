import { render } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ToggleButton value="test">Test</ToggleButton>);
    expect(getByText('Test')).toBeTruthy();
  });
});
