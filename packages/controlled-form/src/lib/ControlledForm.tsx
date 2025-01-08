import { FormHTMLAttributes } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

export type ControlledFormProps = {
  onSubmit: SubmitHandler<any>;
} & FormHTMLAttributes<HTMLFormElement>;

export const ControlledForm = ({ onSubmit, ...rest }: ControlledFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} />
    </FormProvider>
  );
};
