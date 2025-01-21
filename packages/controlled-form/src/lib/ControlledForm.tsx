import { FormHTMLAttributes } from 'react';
import { useForm, SubmitHandler, FormProvider, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type ControlledFormProps = {
  onSubmit: SubmitHandler<any>;
  values: Record<string, any>;
  schema?: yup.ObjectSchema<any>;
} & FormHTMLAttributes<HTMLFormElement>;

type UseFormOptions = {
  values: Record<string, any>;
  resolver?: Resolver;
};

export const ControlledForm = ({ onSubmit, values, schema, ...rest }: ControlledFormProps) => {
  const useFormOptions: UseFormOptions = { values };
  if (schema) {
    useFormOptions.resolver = yupResolver(schema);
  }
  const methods = useForm(useFormOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} />
    </FormProvider>
  );
};
