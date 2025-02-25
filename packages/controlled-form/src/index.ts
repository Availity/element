export * from './/lib/AsyncAutocomplete';
export * from './lib/Autocomplete';
export * from './lib/Checkbox';
export * from './lib/CodesAutocomplete';
export * from './lib/Datepicker';
export * from './lib/Input';
export * from './lib/OrganizationAutocomplete';
export * from './lib/ProviderAutocomplete';
export * from './lib/RadioGroup';
export * from './lib/Select';
export * from './lib/TextField';

export {
  FormProvider,
  /** Custom react-hook-form hook to manage the entire form.
   *
   * ```tsx
   * function App() {
   *    const { handleSubmit, methods, formState: { isSubmitting } } = useForm();
   *    const schema = yup.object({
   *      textField: yup
   *        .string(),
   *      requiredTextField: yup
   *        .string()
   *        .required('This field is required.'),
   *    });
   *
   *    type FormInputsType = yup.InferType<typeof schema>;
   *
   *    const onSubmit: SubmitHandler<FormInputsType> = (data) => console.log(data)
   *
   *    const defaultValues = {
   *      textField: "",
   *      requiredTextField: ""
   *    }
   *
   *   return (
   *      <FormProvider {...methods}>
   *        <form onSubmit={methods.handleSubmit(onSubmit)}>
   *          <TextField name="textField" />
   *          <TextField name="requiredTextField" />
   *          <LoadingButton loading={isSubmitting}>Submit</LoadingButton>
   *        </form>
   *      </FormProvider>
   *    );
   *  }
   *  ```
   */
  useForm,
  useFormContext
} from 'react-hook-form';

export type {
  SubmitHandler,
  /** react-hook-form `useForm` options, like `defaultValues` and validation `mode`. For more information see the [react-hook-form useForm docs](https://react-hook-form.com/docs/useform) */
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
