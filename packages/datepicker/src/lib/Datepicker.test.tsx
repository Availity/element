import { render } from '@testing-library/react';
import { Datepicker } from './Datepicker';

describe('Datepicker', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Datepicker>Test</Datepicker>);
    expect(getByText('Test')).toBeTruthy();
  });
});
