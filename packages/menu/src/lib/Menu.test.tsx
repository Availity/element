import { render } from '@testing-library/react';
import { Menu, MenuItem } from './Menu';

describe('Menu', () => {
  test('should show menu items', () => {
    const { getByText } = render(
      <Menu open>
        <MenuItem>Test</MenuItem>
      </Menu>
    );
    expect(getByText('Test')).toBeTruthy();
  });

  test('should hide when not open', () => {
    const { getByText } = render(
      <Menu open={false}>
        <MenuItem>Test</MenuItem>
      </Menu>
    );
    expect(() => getByText('Test')).toThrow();
  });
});
