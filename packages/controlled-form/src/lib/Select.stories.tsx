import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledSelect } from './Select';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { FormControl, FormLabel } from '@availity/mui-form-utils';
import { AllControllerPropertiesCategorized, SelectPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledSelect> = {
  title: 'Form Components/Controlled Form/ControlledSelect',
  component: ControlledSelect,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...SelectPropsCategorized},
  parameters: {
    controls: {
      exclude: [
        'className',
        'defaultChecked',
        'onError',
        'ref',
        'style',
        'tabIndex'
      ]
    }
  }
};

export default meta;

export const _ControlledSelect: StoryObj<typeof ControlledSelect> = {
  render: (args) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <FormControl>
            <FormLabel id={`${args.id}-label`}>{args.label}</FormLabel>
            <ControlledSelect {...args} labelId={`${args.id}-label`}>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </ControlledSelect>
          </FormControl>
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          { methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null }
        </form>
      </FormProvider>
    );
  },
  args: {
    name: 'controlledSelect',
    required: true,
    rules: { required:'This is required.' },
    label: 'Select Label',
  },
};

export const _ControlledMultiSelect: StoryObj<typeof ControlledSelect> = {
  render: (args) => {
    const methods = useForm({values:{ [args.name]: [] }});

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <FormControl>
            <FormLabel id={`${args.id}-label`}>{args.label}</FormLabel>
            <ControlledSelect {...args} labelId={`${args.id}-label`}>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
              <MenuItem value={5}>Option 5</MenuItem>
              <MenuItem value={6}>Option 6</MenuItem>
            </ControlledSelect>
          </FormControl>
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
            <Typography variant="h2">Submitted Values</Typography>
            <pre>{JSON.stringify(methods.getValues(), null, 2)}</pre>
          </Paper>
        </form>
      </FormProvider>
    );
  },
  args: {
    name: 'controlledMutliSelect',
    required: true,
    rules: { required:'This is required.' },
    label: 'Select Label',
    multiple: true,
  },
};
