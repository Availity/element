import type { Meta, StoryObj } from '@storybook/react';
import { ControlledSelect } from './Select';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { FormControl, FormLabel } from '@availity/mui-form-utils';

const meta: Meta<typeof ControlledSelect> = {
  title: 'Form Components/Controlled Form/ControlledSelect',
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
        <Grid container direction="row" justifyContent="space-between" marginTop={1}>
          <Button
            disabled={!isSubmitSuccessful}
            children="Reset"
            color="secondary"
            onClick={() => reset({ [args.name]: '' })}
          />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };

    return (
      <ControlledForm values={{ [args.name]: '' }} onSubmit={(data) => data} noValidate>
        <FormControl>
          <FormLabel id={`${args.id}-label`}>{args.label}</FormLabel>
          <ControlledSelect {...args} labelId={`${args.id}-label`}>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </ControlledSelect>
          <Actions />
          <SubmittedValues />
        </FormControl>
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledSelect',
    required: 'This is required.',
    label: 'Select Label',
  },
};
