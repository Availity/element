import { render, fireEvent, waitFor } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { ControlledForm } from './ControlledForm';
import { ControlledSelectField } from './SelectField';
import { MenuItem } from '@availity/mui-menu';

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

describe('ControlledSelect', () => {
  test('should render the error styling if an error is returned', async () => {
    const screen = render(
      <ControlledForm values={{ controlledSelect: '' }} onSubmit={onSubmit}>
        <ControlledSelectField
          name="controlledSelect"
          helperText="Help text"
          label="Select Label"
          required="This field is required."
        >
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </ControlledSelectField>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );

    expect(screen.getByText('Help text')).toBeDefined();
    expect(screen.getByText('Select Label')).toBeDefined();

    const dropdown = screen.getByRole('combobox');
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown, { key: 'ArrowDown' });

    fireEvent.click(screen.getByText('Option 1'));

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      const result = screen.getByTestId('result');
      const controlledSelectValue = JSON.parse(result.innerHTML).controlledSelect;
      expect(controlledSelectValue).toBe(1);
    });
  });
});
