import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LoadingButton } from '@availity/mui-button';
import { FormControl, FormControlLabel, FormLabel, Radio, RequiredKey } from '@availity/mui-form-utils';
import { ControlledAutocomplete, ControlledDatepicker, ControlledRadioGroup, ControlledSelect, ControlledTextField, FormProvider, SubmitHandler, useForm } from '..';

  /**
   * All of our controlled form components have `react-hook-form` controllers baked in.
   * For a simpler experience, `@availity/element` exports the necessary `react-hook-form` hooks.
   *
   * - [`FormProvider` component](https://react-hook-form.com/docs/formprovider) - host context object and allow consuming component to subscribe to context and use useForm props and methods.
   * - [`useForm` hook](https://react-hook-form.com/docs/useform) - primary hook that drives `react-hook-form`.
   * - [`useFormContext` hook](https://react-hook-form.com/docs/useformcontext) - allows you to access the form context. Intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.
   * - `SubmitHandler` type
   * - `UseFormProps` type
   * - `UseFormReturn` type
   *
   * For complex forms, you may need to get additional resources directly from `react-hook-form`, i.e. `useWatch`, `useFieldArray`.
   *
   * [Schema-based validation resolvers](https://react-hook-form.com/get-started#SchemaValidation) are available from `@hookform/resolvers`. We've included an example using `yup` but more are supported.
   *
   * For more information, hooks, or components see the [react-hook-form documentation](https://react-hook-form.com/)
   */
  const meta: Meta = {
    title: 'Form Components/Controlled Form',
    tags: ['autodocs'],
    parameters: { docs: {
      // description: { component: `${FormMigration}`},
      source: { state: true }
    }}

  };

  export default meta;

  const dropdownOptions = ['Bulbasaur', 'Squirtle', 'Charmander'];

  /** Form with controlled form components, `yup`, and `@hookform/resolvers/yup` */
  export const _YupValidation: StoryObj = {
    render: () => {
      const schema = yup.object({
        textField: yup
          .string()
          .max(200, 'Text Field cannot exceed 200 characters.')
          .required('This field is required.'),
        selectField: yup
          .string()
          .required('This Field is required.')
          .nullable(),
        datePicker: yup
          .mixed<dayjs.Dayjs>()
          .required('This Field is required.')
          .nullable(),
        radio: yup
          .string()
          .required('A selection is required'),
      });

      const isRequired = (name: string) => {
        return(!(schema.describe().fields[name] as yup.SchemaDescription)?.optional || undefined)
      }

      type FormInputsType = yup.InferType<typeof schema>;

      const onSubmit: SubmitHandler<FormInputsType> = (data) => console.log(data)

      const methods = useForm({
        defaultValues: {
          textField: "",
          selectField: undefined,
          datePicker: undefined,
          radio: "",
        },
        mode: 'onBlur',
        resolver: yupResolver(schema)
      });

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RequiredKey />
            <ControlledTextField
              name="textField"
              label="Textfield"
              margin="normal"
              fullWidth
              helperText='Max 200 characters'
              required={isRequired('textField')}
            />
            <ControlledAutocomplete
              name="selectField"
              FieldProps={{
                margin:"normal",
                label: 'Select Field',
                placeholder: 'Value',
                required: isRequired('selectField'),
              }}
              options={dropdownOptions}
            />
            <ControlledDatepicker
              name="datePicker"
              FieldProps={{
                label: "Date",
                margin: "normal",
                required: isRequired('datePicker')
              }}
            />
            <ControlledRadioGroup name="radio" label="Radio Group" row aria-required required={isRequired('radio')}>
              <FormControlLabel control={<Radio />} value="1" label="Option 1" />
              <FormControlLabel control={<Radio />} value="2" label="Option 2" />
            </ControlledRadioGroup>
            <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" sx={{mt: 2}}>
              Submit
            </LoadingButton>
          </form>
        </FormProvider>
      )
    }
  }

  /** Form with controlled form components using internal rules for validation.
   *
   * Useful for smaller forms where writing a full schema could be cumbersome.
   */
  export const _RHFRules: StoryObj = {
    render: () => {
      const methods = useForm({defaultValues: {textField: '', selectField: null, datePicker: null, radio: ''}});
      const onSubmit = (data: any) => console.log(data)
      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <RequiredKey />
            <ControlledTextField
              name="textField"
              label="Textfield"
              margin="normal"
              fullWidth
              required
              rules={{
                required: 'This field is required',
                maxLength: { value: 200, message: 'This field must not exceed 200 characters'}
              }}
              helperText='Max 200 characters'
            />
            <ControlledAutocomplete
              name="selectField"
              rules={{ required: 'This field is required'}}
              FieldProps={{
                margin:"normal",
                label: 'Select Field',
                placeholder: 'Value',
                required: true,
              }}
              options={dropdownOptions}
            />
            <ControlledDatepicker
              name="datePicker"
              rules={{ required: 'This field is required' }}
              FieldProps={{
                label: "Date",
                margin: "normal",
                required: true,
              }}
            />
            <ControlledRadioGroup
              name="radio"
              label="Radio Group"
              row
              aria-required
              required
              rules={{ required: 'This field is required' }}
            >
              <FormControlLabel control={<Radio />} value="1" label="Option 1" />
              <FormControlLabel control={<Radio />} value="2" label="Option 2" />
            </ControlledRadioGroup>
            <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" sx={{mt: 2}}>
              Submit
            </LoadingButton>
          </form>
        </FormProvider>
      )
    }
  }
