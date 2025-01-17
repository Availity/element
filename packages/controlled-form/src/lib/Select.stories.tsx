import type { Meta, StoryObj } from '@storybook/react';
import { ControlledSelect } from './Select';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';

const meta: Meta<typeof ControlledSelect> = {
  title: 'Components/ControlledForm/ControlledSelect',
  component: ControlledSelect,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledSelect: StoryObj<typeof ControlledSelect> = {
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
          <Button
            disabled={!isSubmitSuccessful}
            children="Reset"
            color="secondary"
            onClick={() => reset({ controlledSelect: undefined })}
          />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };

    return (
      <ControlledForm values={{ controlledSelect: undefined }} onSubmit={(data) => data}>
        <ControlledSelect {...args}>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </ControlledSelect>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledSelect',
    required: 'This is required.',
  },
};
