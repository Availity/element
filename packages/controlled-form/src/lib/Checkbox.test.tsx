import { render, fireEvent, waitFor } from '@testing-library/react';
import { FormControl, FormLabel, FormControlLabel, FormGroup } from '@availity/mui-form-utils';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledCheckbox } from './Checkbox';

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

describe('ControlledCheckbox', () => {
  test('should set the value and submit the form data', async () => {
    const screen = render(
      <ControlledForm onSubmit={onSubmit} values={{ controlledCheckbox: undefined }}>
        <FormControl>
          <FormLabel id="radio-group" component="div">
            Radio Group
          </FormLabel>
          <FormGroup>
            <FormControlLabel label="Option 1" control={<ControlledCheckbox name="option1" />} />
            <FormControlLabel label="Option 2" control={<ControlledCheckbox name="option2" />} />
            <FormControlLabel label="Option 3" control={<ControlledCheckbox name="option3" />} />
          </FormGroup>
        </FormControl>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const option1 = screen.getByText('Option 1');

    fireEvent.click(option1);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML);
      expect(formValues.option1).toBeTruthy();
      expect(formValues.option2).toBeFalsy();
      expect(formValues.option3).toBeFalsy();
    });
  });
});
