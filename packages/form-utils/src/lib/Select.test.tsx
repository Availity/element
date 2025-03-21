import { render } from '@testing-library/react';
import { MenuItem } from '@availity/mui-menu';
import { Select } from './Select';

describe('Select', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Select data-testid="test-select"></Select>);
    expect(getByTestId('test-select')).toBeTruthy();
  });
  test('aria-controls should be empty string when not open', () => {
    const { getByRole } = render(<Select value=""></Select>);
    const combobox = getByRole('combobox');
    expect(combobox.getAttribute('aria-controls')).toEqual('');
  });
  test('aria-controls should not be empty when open', () => {
    const { getByRole } = render(<Select value="" open></Select>);
    const combobox = getByRole('combobox', { hidden: true });
    expect(combobox.getAttribute('aria-controls')).not.toEqual('');
    expect(combobox.getAttribute('aria-controls')).toMatch(':r');
  });
  describe('TextField select placeholder', () => {
    test('should render select placeholder successfully', () => {
      const { getByText } = render(
        <Select label="Test" placeholder="Select...">
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      );
      expect(getByText('Select...')).toBeTruthy();
    });
  });
});
