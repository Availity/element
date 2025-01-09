import type { Meta, StoryObj } from '@storybook/react';
import { ControlledRadioGroup, ControlledRadioGroupProps } from './RadioGroup';
import { ControlledForm } from './ControlledForm';
import { Button } from '@availity/mui-button';
import { useFormContext } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { FormControlLabel, Radio, FormControl, FormLabel } from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';

const meta: Meta<typeof ControlledRadioGroup> = {
  title: 'Components/ControlledForm/ControlledRadioGroup',
  component: ControlledRadioGroup,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledRadioGroup: StoryObj<typeof ControlledRadioGroup> = {
  render: (args: ControlledRadioGroupProps) => {
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
      <ControlledForm onSubmit={(data) => data} values={{ controlledRadioGroup: 'N/A' }}>
        <FormControl>
          <FormLabel id="radio-group" component="div">
            Radio Group
          </FormLabel>
          <ControlledRadioGroup {...args}>
            <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </ControlledRadioGroup>
        </FormControl>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledRadioGroup',
    'aria-labelledby': 'radio-group',
  },
};
