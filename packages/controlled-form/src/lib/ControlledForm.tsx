import { FormHTMLAttributes } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

export type ControlledFormProps = {
  onSubmit: SubmitHandler<any>;
  values: Record<string, any>;
} & FormHTMLAttributes<HTMLFormElement>;

export const ControlledForm = ({ onSubmit, values, ...rest }: ControlledFormProps) => {
  const methods = useForm({ values });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} />
    </FormProvider>
  );
};
