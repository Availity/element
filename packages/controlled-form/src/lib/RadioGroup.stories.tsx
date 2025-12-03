import type { Meta, StoryObj } from '@storybook/react-vite';
import { ControlledRadioGroup, ControlledRadioGroupProps } from './RadioGroup';
import { Button } from '@availity/mui-button';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { FormControlLabel, Radio } from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';
import { AllControllerPropertiesCategorized, RadioGroupPropsCategorized } from './Types';
import { FormProvider, useForm } from '..';

const meta: Meta<typeof ControlledRadioGroup> = {
  title: 'Form Components/Controlled Form/ControlledRadioGroup',
  component: ControlledRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    ...AllControllerPropertiesCategorized,
    ...RadioGroupPropsCategorized,
    required: {
      table: { category: 'Input Props'}
    }
  },
  parameters: {
    controls: {
      exclude: [
        'max',
        'maxLength',
        'min',
        'minLength',
        'pattern',
        'validate'
      ]
    }
  }
};

export default meta;

export const _ControlledRadioGroup: StoryObj<typeof ControlledRadioGroup> = {
  render: (args: ControlledRadioGroupProps) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => data)}>
          <ControlledRadioGroup {...args}>
            <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </ControlledRadioGroup>
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
    name: 'controlledRadioGroup',
    label: 'Radio Group',
  },
};
