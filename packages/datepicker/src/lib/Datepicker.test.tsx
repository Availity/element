import { render } from '@testing-library/react';
import { ThemeProvider } from '@availity/theme-provider';
import { Datepicker } from './Datepicker';

describe('Datepicker', () => {
  test('should render successfully', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Datepicker FieldProps={{ label: 'Test' }} onChange={vi.fn()} value={null} />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });
});
