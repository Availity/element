import { FormHTMLAttributes } from "react";
import { Paper } from "@availity/mui-paper";
import { Typography } from "@availity/mui-typography";
import { Grid } from "@availity/mui-layout";
import { Button } from "@availity/mui-button";
import { useFormContext, FormProvider, UseFormProps, useForm, SubmitHandler } from "..";

export const SubmittedValues = () => {
  const {
    getValues,
    formState: { isSubmitSuccessful },
  } = useFormContext();

  return isSubmitSuccessful ? (
    <Paper sx={{ padding: '1.5rem', marginTop: '1.5rem' }}>
      <Typography variant="h2">Submitted Values</Typography>
      <pre data-testid="result">{JSON.stringify(getValues(), null, 2)}</pre>
    </Paper>
  ) : null;
};

export const Actions = () => {
  const {
    formState: { isSubmitSuccessful },
  } = useFormContext();
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Button type="submit" disabled={isSubmitSuccessful} children="Submit" />
    </Grid>
  );
};

type TestFormProviderProps = {
  UseFormOptions?: UseFormProps;
  /** This function will receive the form data if form validation is successful. */
  onSubmit?: SubmitHandler<any>;
} & FormHTMLAttributes<HTMLFormElement>;

/** `FormProvider` and `form`, also adds `Actions` and `SubmittedValues` components */
export const TestForm = ({UseFormOptions, children, onSubmit = (data) => data, ...rest }: TestFormProviderProps) => {
  const methods = useForm(UseFormOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate {...rest}>
        {children}
        <Actions />
        <SubmittedValues />
      </form>
    </FormProvider>
  );
};
