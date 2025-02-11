import { render, fireEvent, waitFor } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledInput } from './Input';

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

describe('ControlledInput', () => {
  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledInput: undefined }} onSubmit={(data) => data}>
        <ControlledInput
          data-testid="controlledInputWrapper"
          name="controlledInput"
          required="This field is required."
          maxLength={{ value: 10, message: 'Too long' }}
          inputProps={{
            'data-testid': 'testInput',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const input = screen.getByTestId('testInput');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

    const muiInputBase = screen.getByTestId('controlledInputWrapper');

    await waitFor(() => expect(muiInputBase.classList).toContain('Mui-error'));
  });

  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledInput: undefined }} onSubmit={onSubmit}>
        <ControlledInput
          name="controlledInput"
          required="This field is required."
          maxLength={{ value: 10, message: 'Too long' }}
          inputProps={{
            'data-testid': 'testInput',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const input = screen.getByTestId('testInput');

    fireEvent.change(input, { target: { value: 'Input Text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledInput;
      expect(formValues).toBe('Input Text');
    });
  });
});
