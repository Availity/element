import { fireEvent, render, waitFor } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledAutocomplete } from './Autocomplete';

const onSubmit = jest.fn();

describe('ControlledAsyncAutocomplete', () => {
  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    jest.restoreAllMocks();
  });

  test('should set the value and submit the form', async () => {
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
        reset,
        formState: { isSubmitSuccessful },
      } = useFormContext();
      return (
        <Grid container direction="row" justifyContent="space-between">
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    const screen = render(
      <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={onSubmit}>
        <ControlledAutocomplete name="controlledAutocomplete" options={['Option 1', 'Option 2']} />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    fireEvent.click(screen.getByText('Option 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));

    const result = screen.getByTestId('result');
    await waitFor(() => {
      const controlledAutocompleteValue = JSON.parse(result.innerHTML).controlledAutocomplete;
      expect(controlledAutocompleteValue).toBe('Option 1');
    });
  });
});
