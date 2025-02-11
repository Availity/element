import { render, fireEvent, waitFor } from '@testing-library/react';
import * as yup from 'yup';
import { ControlledForm } from './ControlledForm';
import { ControlledTextField } from './TextField';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { yupResolver } from '@hookform/resolvers/yup';

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

describe('ControlledForm', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <ControlledForm onSubmit={(data) => data} values={{}}>
        Test
      </ControlledForm>
    );
    expect(getByText('Test')).toBeTruthy();
  });
  test('should handle yup schema resolver', async () => {
    const screen = render(
      <ControlledForm
        values={{ controlledTextField: undefined }}
        onSubmit={onSubmit}
        schema={yup.object({ controlledTextField: yup.string().max(10) })}
        validationResolver={yupResolver}
      >
        <ControlledTextField
          name="controlledTextField"
          placeholder="Name"
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'This is too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(screen.findByText('controlledTextField must be at most 10 characters')).toBeDefined());
  });
});
