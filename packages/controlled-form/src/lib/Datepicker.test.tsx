import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@availity/theme-provider';
import dayjs from 'dayjs';
import { ControlledDatepicker } from './Datepicker';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('Datepicker', () => {
  test('should render successfully and submit selection', async () => {
    const screen = render(
      <ThemeProvider>
        <TestForm UseFormOptions={{ values: { controlledDatepicker: null } }} onSubmit={onSubmit}>
          <ControlledDatepicker
            name="controlledDatepicker"
            FieldProps={{
              fullWidth: false,
              helperText: 'Help text for the field',
              helpTopicId: '1234',
              label: 'Date',
            }}
          />
        </TestForm>
      </ThemeProvider>
    );
    expect(screen.getAllByText('Date')).toBeTruthy();
    const input = screen.getByLabelText('Choose date');
    fireEvent.click(input);
    const date = screen.getAllByRole('gridcell');
    fireEvent.click(date[7]); // The 8th gridcell will always be a day because it is the first day of the second week of the month.

    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledDatepickerValue = JSON.parse(result.innerHTML).controlledDatepicker;
      expect(controlledDatepickerValue).toBeDefined();
      expect(dayjs(controlledDatepickerValue).isValid()).toBeTruthy();
    });
  }, 10000);

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledDatepicker: null } }} onSubmit={onSubmit}>
              <ControlledDatepicker
                name="controlledDatepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Date',
                }}
                rules={{ required: 'This field is required' }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should indicate it is required when passing an object with true', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledDatepicker: null } }} onSubmit={onSubmit}>
              <ControlledDatepicker
                name="controlledDatepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Date',
                }}
                rules={{ required: { value: true, message: 'This field is required' } }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.getByText('*')).toBeDefined();
      });

      test('should not indicate it is required when passing an object with false', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledDatepicker: null } }} onSubmit={onSubmit}>
              <ControlledDatepicker
                name="controlledDatepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Date',
                }}
                rules={{ required: { value: false, message: 'This field is required' } }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.queryByText('*')).toBeNull();
      });
    });
  });
});
