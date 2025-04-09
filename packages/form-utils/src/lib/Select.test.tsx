import { render } from '@testing-library/react';
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
});
