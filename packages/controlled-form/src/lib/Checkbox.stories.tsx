import type { Meta, StoryObj } from '@storybook/react';
import { ControlledCheckbox } from './Checkbox';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { FormControlLabel, FormGroup, FormControl, FormLabel } from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';

const meta: Meta<typeof ControlledCheckbox> = {
  title: 'Components/ControlledForm/ControlledCheckbox',
  component: ControlledCheckbox,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledCheckbox: StoryObj<typeof ControlledCheckbox> = {
  render: () => {
    const SubmittedValues = () => {
      const {
        getValues,
        formState: { isSubmitSuccessful },
      } = useFormContext();

      return isSubmitSuccessful ? (
        <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
          <Typography variant="h2">Submitted Values</Typography>
          <pre>{JSON.stringify(getValues(), null, 2)}</pre>
        </Paper>
      ) : null;
    };

    const Actions = () => {
      const {
        reset,
        formState: { isSubmitSuccessful },
      } = useFormContext();
      return (
        <Grid container direction="row" justifyContent="space-between" marginTop={1}>
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <ControlledForm onSubmit={(data) => data} values={{ controlledCheckbox: undefined }}>
        <FormControl>
          <FormLabel id="radio-group" component="div">
            Radio Group
          </FormLabel>
          <FormGroup>
            <FormControlLabel label="Option 1" control={<ControlledCheckbox name="Option 1" />} />
            <FormControlLabel label="Option 2" control={<ControlledCheckbox name="Option 2" />} />
            <FormControlLabel label="Option 3" control={<ControlledCheckbox name="Option 3" />} />
          </FormGroup>
        </FormControl>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledCheckbox',
  },
};
