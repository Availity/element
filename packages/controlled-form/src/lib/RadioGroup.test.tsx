import { render, fireEvent, waitFor } from '@testing-library/react';
import { FormControlLabel, Radio } from '@availity/mui-form-utils';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledRadioGroup } from './RadioGroup';

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

describe('ControlledRadioGroup', () => {
  test('should set the value and submit the form data', async () => {
    const screen = render(
      <ControlledForm onSubmit={onSubmit} values={{ controlledRadioGroup: undefined }}>
        <ControlledRadioGroup name="controlledRadioGroup" label="Radio Group" value="N/A">
          <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
          <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
          <FormControlLabel control={<Radio />} label="No" value="No" />
        </ControlledRadioGroup>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const option1 = screen.getByDisplayValue('Yes');

    fireEvent.click(option1);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledRadioGroup;
      expect(formValues).toBe('Yes');
    });
  });
});
