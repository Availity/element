import type { Meta, StoryObj } from '@storybook/react';
import { ControlledSelectField } from './SelectField';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';

const meta: Meta<typeof ControlledSelectField> = {
  title: 'Form Components/Controlled Form/ControlledSelectField',
  component: ControlledSelectField,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledSelectField: StoryObj<typeof ControlledSelectField> = {
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
        <ControlledSelectField {...args}>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </ControlledSelectField>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    id: 'controlledSelect',
    name: 'controlledSelect',
    required: 'This is required.',
    label: 'Select Label',
    helperText: 'Help text for the field',
  },
};

export const _ControlledMultiSelect: StoryObj<typeof ControlledSelectField> = {
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
            onClick={() => reset({ [args.name]: [] })}
          />
          <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
        </Grid>
      );
    };

    return (
      <ControlledForm values={{ [args.name]: [] }} onSubmit={(data) => data} noValidate>
        <ControlledSelectField {...args}>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
          <MenuItem value={5}>Option 5</MenuItem>
          <MenuItem value={6}>Option 6</MenuItem>
        </ControlledSelectField>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    id: 'controlledMutliSelect',
    name: 'controlledMutliSelect',
    required: 'This is required.',
    label: 'Select Label',
    helperText: 'Help text for the field',
    multiple: true,
  },
};
