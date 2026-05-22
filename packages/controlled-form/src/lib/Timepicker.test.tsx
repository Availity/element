import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@availity/theme-provider';
import dayjs from 'dayjs';
import { ControlledTimepicker } from './Timepicker';
import { TestForm } from './UtilComponents';

const onSubmit = jest.fn();

describe('ControlledTimepicker', () => {
  test('should render successfully and submit selection', async () => {
    const screen = render(
      <ThemeProvider>
        <TestForm UseFormOptions={{ values: { controlledTimepicker: null } }} onSubmit={onSubmit}>
          <ControlledTimepicker
            name="controlledTimepicker"
            FieldProps={{
              fullWidth: false,
              helperText: 'Help text for the field',
              helpTopicId: '1234',
              label: 'Time',
            }}
          />
        </TestForm>
      </ThemeProvider>
    );
    expect(screen.getAllByText('Time')).toBeTruthy();
    const input = screen.getByLabelText('Choose time');
    fireEvent.click(input);
    const listboxes = screen.getAllByRole('listbox');
    const hourOption = listboxes[0].querySelectorAll('[role="option"]');
    fireEvent.click(hourOption[2]);

    fireEvent.click(screen.getByText('OK'));
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledTimepickerValue = JSON.parse(result.innerHTML).controlledTimepicker;
      expect(controlledTimepickerValue).toBeDefined();
      expect(dayjs(controlledTimepickerValue).isValid()).toBeTruthy();
    });
  }, 10000);

  describe('when using rules', () => {
    describe('when required', () => {
      test('should indicate it is required when passing a string', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledTimepicker: null } }} onSubmit={onSubmit}>
              <ControlledTimepicker
                name="controlledTimepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Time',
                }}
                rules={{ required: 'This field is required' }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.getAllByText('*')).toBeDefined();
      });

      test('should indicate it is required when passing an object with true', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledTimepicker: null } }} onSubmit={onSubmit}>
              <ControlledTimepicker
                name="controlledTimepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Time',
                }}
                rules={{ required: { value: true, message: 'This field is required' } }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.getAllByText('*')).toBeDefined();
      });

      test('should not indicate it is required when passing an object with false', async () => {
        const screen = render(
          <ThemeProvider>
            <TestForm UseFormOptions={{ values: { controlledTimepicker: null } }} onSubmit={onSubmit}>
              <ControlledTimepicker
                name="controlledTimepicker"
                FieldProps={{
                  fullWidth: false,
                  helperText: 'Help text for the field',
                  helpTopicId: '1234',
                  label: 'Time',
                }}
                rules={{ required: { value: false, message: 'This field is required' } }}
              />
            </TestForm>
          </ThemeProvider>
        );

        expect(screen.queryAllByText('*')).toHaveLength(0);
      });
    });
  });
});
