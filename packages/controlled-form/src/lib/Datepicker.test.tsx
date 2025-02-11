import { render, fireEvent, waitFor } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ThemeProvider } from '@availity/theme-provider';
import dayjs from 'dayjs';
import { ControlledForm } from './ControlledForm';
import { ControlledDatepicker } from './Datepicker';

const SubmittedValues = () => {
  const {
    getValues,
    formState: { isSubmitSuccessful },
  } = useFormContext();

  return isSubmitSuccessful ? (
    <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
      <Typography variant="h2">Submitted Values</Typography>
      <pre data-testid="result">{JSON.stringify(getValues(), null, 2)}</pre>
    </Paper>
  ) : null;
};

const Actions = () => {
  const {
    formState: { isSubmitSuccessful },
  } = useFormContext();
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
    </Grid>
  );
};

const onSubmit = jest.fn();

describe('Datepicker', () => {
  test('should render successfully and submit selection', async () => {
    const screen = render(
      <ThemeProvider>
        <ControlledForm values={{ controlledDatepicker: undefined }} onSubmit={onSubmit}>
          <ControlledDatepicker
            name="controlledDatepicker"
            FieldProps={{
              fullWidth: false,
              helperText: 'Help text for the field',
              helpTopicId: '1234',
              label: 'Date',
            }}
          />
          <Actions />
          <SubmittedValues />
        </ControlledForm>
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
});
