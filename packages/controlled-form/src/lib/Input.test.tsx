import { render, fireEvent, waitFor } from '@testing-library/react';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledInput } from './Input';
import { useFormContext } from '..';
import { ControlledForm } from './ControlledForm';
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

describe('ControlledInput', () => {
  test('Deprecation Check: should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledInput: undefined }} onSubmit={onSubmitDeprecated}>
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

    await waitFor(() => expect(onSubmitDeprecated).toHaveBeenCalledTimes(0));

    const muiInputBase = screen.getByTestId('controlledInputWrapper');

    await waitFor(() => expect(muiInputBase.classList).toContain('Mui-error'));
  });

  test('DeprecatedCheck: should not render the error styling if no error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledInput: undefined }} onSubmit={onSubmitDeprecated}>
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

    await waitFor(() => expect(onSubmitDeprecated).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const formValues = JSON.parse(result.innerHTML).controlledInput;
      expect(formValues).toBe('Input Text');
    });
  });

  test('should render the error styling if an error is returned', async () => {
      const screen = render(
        <TestForm UseFormOptions={{values: { controlledInput: undefined }}} onSubmit={onSubmit}>
          <ControlledInput
            data-testid="controlledInputWrapper"
            name="controlledInput"
            rules={{
              required: "This field is required.",
              maxLength:{ value: 10, message: 'Too long' }
            }}
            inputProps={{
              'data-testid': 'testInput',
            }}
          />
      </TestForm>
    );

    const input = screen.getByTestId('testInput');

    fireEvent.change(input, { target: { value: 'This is way too much text' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

    const muiInputBase = screen.getByTestId('controlledInputWrapper');

    await waitFor(() => expect(muiInputBase.classList).toContain('Mui-error'));
  });

  test('should not render the error styling if no error is returned', async () => {
      const screen = render(
        <TestForm UseFormOptions={{values: { controlledInput: undefined }}} onSubmit={onSubmit}>
          <ControlledInput
            data-testid="controlledInputWrapper"
            name="controlledInput"
            rules={{
              required: "This field is required.",
              maxLength:{ value: 10, message: 'Too long' }
            }}
            inputProps={{
              'data-testid': 'testInput',
            }}
          />
      </TestForm>
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
