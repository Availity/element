import { render, fireEvent, waitFor } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledTextField } from './TextField';
import { TestForm } from './UtilComponents';

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
const onSubmitDeprecated = jest.fn();

describe('ControlledTextField', () => {
  test('Deprecated Check: should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledTextField: undefined }} onSubmit={onSubmitDeprecated}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          required="This field is required."
          maxLength={{ value: 10, message: 'Too long' }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmitDeprecated).toHaveBeenCalledTimes(0));

    await waitFor(() => expect(screen.findByText('Too long')).toBeDefined());
  });

  test('Deprecated Check: should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledTextField: undefined }} onSubmit={onSubmitDeprecated}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          required="This field is required."
          maxLength={{ value: 10, message: 'Too long' }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'Some Text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmitDeprecated).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledTextField;
      expect(formValues).toBe('Some Text');
    });
  });

  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledTextField: undefined }}} onSubmit={onSubmit}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          rules= {{
            required:"This field is required.",
            maxLength:{ value: 10, message: 'Too long' }

          }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
      </TestForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

    await waitFor(() => expect(screen.findByText('Too long')).toBeDefined());
  });

  test('should not render the error styling if no error is returned', async () => {
    const screen = render(
      <TestForm UseFormOptions={{values: { controlledTextField: undefined }}} onSubmit={onSubmit}>
        <ControlledTextField
          name="controlledTextField"
          helperText="This is some helper text"
          placeholder="Name"
          rules= {{
            required:"This field is required.",
            maxLength:{ value: 10, message: 'Too long' }

          }}
          inputProps={{
            'data-testid': 'testTextField',
          }}
        />
      </TestForm>
    );

    const input = screen.getByTestId('testTextField');

    fireEvent.change(input, { target: { value: 'Some Text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledTextField;
      expect(formValues).toBe('Some Text');
    });
  });
});
