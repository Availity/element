import { render } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(<Autocomplete FieldProps={{ label: 'Test' }} options={['1', '2', '3']} />);
    expect(getByLabelText('Test')).toBeTruthy();
  });
});
