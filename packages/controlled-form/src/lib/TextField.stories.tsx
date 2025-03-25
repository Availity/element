import type { Meta, StoryObj } from '@storybook/react';
import { ControlledTextField, ControlledTextFieldProps } from './TextField';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
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
      table: { category: 'Input Props' },
    },
  },
};

export default meta;

export const _ControlledTextField: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({ values: { [args.name]: '' } });

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledTextField {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button
              disabled={!methods?.formState?.isSubmitSuccessful}
              children="Reset"
              color="secondary"
              onClick={() => methods.reset()}
            />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null}
        </form>
      </FormProvider>
    );
  },
  args: {
    name: 'controlledTextField',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: { value: 10, message: 'Too long' },
    },
    label: 'TextField Label',
    showCharacterCount: true,
  },
};

export const _ControlledTextFieldDisplayOverflow: StoryObj<typeof ControlledTextField> = {
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({ values: { [args.name]: '' } });

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledTextField {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button
              disabled={!methods?.formState?.isSubmitSuccessful}
              children="Reset"
              color="secondary"
              onClick={() => methods.reset()}
            />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? (
            <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper>
          ) : null}
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
      maxLength: { value: 10, message: 'Too long' },
    },
    label: 'TextField Label',
    displayOverflowMaxLength: true,
    showCharacterCount: true,
  },
};
