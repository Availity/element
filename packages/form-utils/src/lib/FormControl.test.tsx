import { render } from '@testing-library/react';
import Checkbox from '@mui/material/Checkbox';
import { FormControl } from './FormControl';

describe('FormLabel', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<FormControl data-testid="test" />);
    expect(getByTestId('test')).toBeTruthy();
  });
});
