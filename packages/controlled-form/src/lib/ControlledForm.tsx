import { FormHTMLAttributes } from 'react';
import { useForm, SubmitHandler, FormProvider, Resolver } from 'react-hook-form';

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
} & FormHTMLAttributes<HTMLFormElement>;

type UseFormOptions = {
  values: Record<string, any>;
  resolver?: Resolver;
};

export const ControlledForm = ({ onSubmit, values, schema, validationResolver, ...rest }: ControlledFormProps) => {
  const useFormOptions: UseFormOptions = { values };
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
