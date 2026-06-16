import { render } from '@testing-library/react';
import { ThemeProvider } from '@availity/theme-provider';
import { Timepicker } from './Timepicker';

describe('Timepicker', () => {
  test('should render successfully', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Timepicker FieldProps={{ label: 'Test' }} onChange={vi.fn()} value={null} />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });
});
