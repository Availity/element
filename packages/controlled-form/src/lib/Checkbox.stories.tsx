import type { Meta, StoryObj } from '@storybook/react';
import { ControlledCheckbox, ControlledCheckboxProps } from './Checkbox';
import { Button } from '@availity/mui-button';
import { FormProvider, useForm } from 'react-hook-form';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { FormControlLabel, FormGroup, FormControl, FormLabel } from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, CheckboxPropsCategorized } from './Types';

const meta: Meta<typeof ControlledCheckbox> = {
  title: 'Form Components/Controlled Form/ControlledCheckbox',
  component: ControlledCheckbox,
  tags: ['autodocs'],
  argTypes: {...AllControllerPropertiesCategorized, ...CheckboxPropsCategorized},
  parameters: {
    controls: {
      exclude: [
        'form',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'key',
        'max',
        'maxLength',
        'min',
        'minLength',
        'pattern',
        'style',
        'tabIndex'
      ]
    }
  }
};

export default meta;

export const _ControlledCheckbox: StoryObj<typeof ControlledCheckbox> = {
  render: (args: ControlledCheckboxProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <FormControl>
            <FormLabel id="radio-group" component="div">
              Radio Group
            </FormLabel>
            <FormGroup>
              <FormControlLabel label="Option 1" control={<ControlledCheckbox {...args} />} />
              <FormControlLabel label="Option 2" control={<ControlledCheckbox name="Option 2" />} />
              <FormControlLabel label="Option 3" control={<ControlledCheckbox name="Option 3" />} />
            </FormGroup>
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
    name: 'controlledCheckbox',
  },
};
