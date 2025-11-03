import { render } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(<Autocomplete FieldProps={{ label: 'Test' }} options={['1', '2', '3']} />);
    expect(getByLabelText('Test')).toBeTruthy();
  });
  test('aria-controls should be empty string when not open', () => {
    const { getByRole } = render(<Autocomplete FieldProps={{ label: 'Test' }} options={['1', '2', '3']} />);
    const combobox = getByRole('combobox')
    expect(combobox.getAttribute('aria-controls')).toEqual('');
  });
  test('aria-controls should not be empty when open', () => {
    const { getByRole } = render(<Autocomplete open FieldProps={{ label: 'Test' }} options={['1', '2', '3']} />);

    const combobox = getByRole('combobox', { hidden: true });
    const listbox = getByRole('listbox');
    expect(combobox.getAttribute('aria-controls')).not.toEqual('');
    expect(combobox.getAttribute('aria-controls')).toEqual(listbox.getAttribute('id'));
  });
});
