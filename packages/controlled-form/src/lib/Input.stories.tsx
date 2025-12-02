import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledInput, ControlledInputProps } from './Input';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, InputPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledInput> = {
  title: 'Form Components/Controlled Form/ControlledInput',
  component: ControlledInput,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...InputPropsCategorized},
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

export const _ControlledInput: StoryObj<typeof ControlledInput> = {
  render: (args: ControlledInputProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledInput {...args} />
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
    name: 'controlledInput',
    required: true,
    rules: { required:'This is required.', maxLength: { value: 10, message: 'Too long' }},
    inputProps: { 'aria-label': 'Input Label' },
  },
};
