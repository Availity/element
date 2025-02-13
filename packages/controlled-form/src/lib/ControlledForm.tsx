import { FormHTMLAttributes } from 'react';
import { useForm, SubmitHandler, FormProvider, Resolver, UseFormProps } from 'react-hook-form';

/** @deprecated Use `UseFormProps` directly with `useForm` and `FormProvider` */
export type ControlledFormProps = {
  /** This function will receive the form data if form validation is successful. */
  onSubmit: SubmitHandler<any>;
  /** Reactive values to update the form values. */
  values: Record<string, any>;
  /** The schema used by the validationResolver. */
  schema?: unknown;
  /** Integrates with your preferred schema validation library.
   * More information on react-hook-form's resolvers can be
   * found here: https://github.com/react-hook-form/resolvers#quickstart
   */
  validationResolver?: (schema: unknown) => Resolver;
  /** Additional react-hook-form `useForm` options, like `defaultValues` and validation `mode`. For more information see the [react-hook-form useForm docs](https://react-hook-form.com/docs/useform) */
  additionalUseFormOptions?: Omit<UseFormProps, 'values' | 'resolver'>;
} & FormHTMLAttributes<HTMLFormElement>;

type UseFormOptions = {
  values: Record<string, any>;
  resolver?: Resolver;
};

/** @deprecated Use `FormProvider` and `useForm` directly. */
export const ControlledForm = ({ onSubmit, values, schema, validationResolver, additionalUseFormOptions = {mode: 'onBlur'}, ...rest }: ControlledFormProps) => {
  const useFormOptions: UseFormOptions = { values, ...additionalUseFormOptions };
  if (schema && validationResolver) {
    useFormOptions.resolver = validationResolver(schema);
  }
  const methods = useForm(useFormOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate {...rest} />
    </FormProvider>
  );
};
