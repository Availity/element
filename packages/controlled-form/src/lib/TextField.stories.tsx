import type { Meta, StoryObj } from '@storybook/react';
import { ControlledTextField, ControlledTextFieldProps } from './TextField';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { AllControllerPropertiesCategorized, TextFieldPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledTextField> = {
  title: 'Form Components/Controlled Form/ControlledTextField',
  component: ControlledTextField,
  tags: ['autodocs'],
  argTypes: {
    ...AllControllerPropertiesCategorized,
    ...TextFieldPropsCategorized,
    helperText: {
      type: 'string',
      table: { category: 'Input Props' }
    },
  },
};

export default meta;

export const _ControlledTextField: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({values:{ [args.name]: '' }});

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledTextField {...args} />
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
    name: 'controlledTextField',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: { value: 10, message: 'Too long' }
    },
    label: 'TextField Label',
  },
};

export const _ControlledTextFieldSelect: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
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
      <ControlledForm values={{ [args.name]: '' }} onSubmit={(data) => data}>
        <ControlledTextField {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </ControlledTextField>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledTextFieldSelect',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: 'This field is required.',
    label: 'Select TextField Label',
    select: true,
  },
};

export const _ControlledTextFieldMultiSelect: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
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
      <ControlledForm values={{ [args.name]: [] }} onSubmit={(data) => data}>
        <ControlledTextField {...args}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </ControlledTextField>
        <Actions />
        <SubmittedValues />
      </ControlledForm>
    );
  },
  args: {
    name: 'controlledTextFieldMultiSelect',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: 'This field is required.',
    label: 'Multiselect TextField Label',
    select: true,
    SelectProps: {
      multiple: true,
    },
  },
};
