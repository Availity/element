import { render } from '@testing-library/react';
import { ThemeProvider } from '@availity/theme-provider';
import { Datepicker } from './Datepicker';

describe('Datepicker', () => {
  test('should render successfully', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Datepicker FieldProps={{ label: 'Test' }} onChange={jest.fn()} value={null} />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });
  test('should render successfully 2', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Datepicker FieldProps={{ placeholder: 'Test' }} onChange={jest.fn()} value={null} />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });
  test('should render successfully 3', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Datepicker FieldProps={{ InputProps: { placeholder: 'InputProps' } }} onChange={jest.fn()} value={null} />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });

  test('should render successfully 4', () => {
    const { getAllByText } = render(
      <ThemeProvider>
        <Datepicker
          slotProps={{ textField: { placeholder: 'slotProps textField' } }}
          onChange={jest.fn()}
          value={null}
        />
      </ThemeProvider>
    );
    expect(getAllByText('Test')).toBeTruthy();
  });
});
