import type { Meta, StoryObj } from '@storybook/react';
import { ControlledAutocomplete } from './Autocomplete';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';

const meta: Meta<typeof ControlledAutocomplete> = {
  title: 'Components/ControlledForm/Autocomplete/ControlledAutocomplete',
  component: ControlledAutocomplete,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledAutoComplete: StoryObj<typeof ControlledAutocomplete> = {
  render: (args) => {
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
        <Grid container direction="row" justifyContent="space-between">
          <Button disabled={!isSubmitSuccessful} children="Reset" color="secondary" onClick={() => reset()} />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };
    return (
      <ControlledForm values={{ controlledAutocomplete: undefined }} onSubmit={(data) => data}>
        <ControlledAutocomplete {...args} />
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    required: 'This is required.',
  },
};
