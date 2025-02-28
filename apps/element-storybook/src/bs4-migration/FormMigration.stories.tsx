// Each exported component in the package should have its own stories file
// import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import {
  ControlledTextField,
  ControlledAutocomplete,
  ControlledRadioGroup,
  ControlledDatepicker,
  FormControlLabel,
  FormProvider,
  LoadingButton,
  Radio,
  RequiredKey,
  SubmitHandler,
  useForm,
  TextField,
  Autocomplete,
  Datepicker,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup
} from '@availity/element';
import FormMigration from './form-migration.md?raw';

/**
 * For the `@availity/element` components we have chosen to move away from any
 * built-in form management. While there's flexibility to use your library of
 * choice, internally we have replaced `formik` with `react-hook-form`.
 * For existing forms utilizing `@availity/react` and `formik`,
 * some refactor is required.
 *
 * ## Why the change?
 *
 * The future of `formik` is looking questionable - The current major version released
 * in 2019 with sparse feature work and dependency updates since.
 * We were faced with the question of what to replace it with, but also if it
 * _should_ be replaced at all.
 *
 * We have chosen the middle ground. Our form components are no longer tied to
 * one library for validation and state management. However, after a successful
 * internal implementation of an extremely long and complicated form using
 * `react-hook-form`, we decided to move forward with it for any internal form
 * components, like the feedback component, and recommend it for use with `@availity/element`.

 * `react-hook-form` is very lightweight and flexible. It also boasts a
 * large community and is actively and regularly supported. `react-hook-form`
 * utilizes it's own internal rules engine for validation, but can be used
 * with schema-based validation libraries like `yup`, `zod`, and `joi`
 * when used with the corresponding resolver package. See the
 * [react-hook-form docs](https://react-hook-form.com/get-started#SchemaValidation)
 * for more.
 *
 * We've included examples using only `react-hook-form` as well as
 * using it with `yup`+`@hookform/resolvers/yup` (don't worry,
 * `@hookform/resolvers` is an official part of `react-hook-form`)
 *
 * ## Form Examples
 *
 * - Form with `@availity/react`, `formik`, and `yup`
 * - Form with `@availity/element`, `react-hook-form`, `yup` and `@hookform/resolvers/yup`
 * - Form with `@availity/element`, `formik`, and `yup` (<ins>Not Recommended</ins>)
 * - Form with `@availity/element`, `react-hook-form`, and `react-hook-form` Internal Rules
 *
 *
 * At the moment, @availity/element does not export a `<Form />` component.
 * Instead, use the native `<form>` element. You can then use
 * `react-hook-form`'s `useForm` hook to manage your form.
 *
 * ### Form with `@availity/react`, `formik`, and `yup`
 *
 * ```
 * import React from 'react';
 * import { Form, Field, Radio, RadioGroup, SelectField } from '@availity/form';
 * import { Button } from 'reactstrap';
 *
 * export const Form = () => {
 *   const ref = useRef();
 *   return (
 *     <Form
 *       onKeyDown={({ key }) => key === 'Escape' && onClose()}
 *       initialValues={{
 *         textField: "",
 *         selectField: undefined,
 *         radio: "",
 *       }}
 *       validationSchema={yup.object().shape({
 *         textField: yup
 *           .string()
 *           .max(200, 'Text Field cannot exceed 200 characters.')
 *           .required('This field is required.'),
 *         selectField: yup
 *           .string()
 *           .required('This Field is required.')
 *           .nullable(),
 *         radio: yup
 *           .string()
 *           .required('A selection is required'),
 *       })}
 *       {...formProps}
 *       onSubmit={(values) => sendValues(values)}
 *     >
 *       <RequiredKey/>
 *       <Field type="textarea" name="textField" label="Text Field" required/>
 *       <SelectField
 *         label="Select Field"
 *         name="selectField"
 *         required
 *         options={[{label: "Option 1", value: "1"}, {label: "Option 2", value: "2"}]}
 *       />
 *       <RadioGroup
 *         name="radio"
 *         label="Radio Group"
 *         inline
 *         required
 *       >
 *         <Radio label="Radio 1" value="1" />
 *         <Radio label="Radio 2" value="2" />
 *       </RadioGroup>
 *       <Button
 *         type="submit"
 *       >
 *         Submit
 *       </Button>
 *     </Form>
 *   );
 * };
 * ```
 */


const meta: Meta = {
  title: 'BS4 Migration/Form Migration',
  tags: ['autodocs'],
  parameters: { docs: {
    description: { component: `${FormMigration}`},
    source: { state: true }
  }}

};

export default meta;

const dropdownOptions = ['Bulbasaur', 'Squirtle', 'Charmander'];

// export const _FormMigrationRaw: StoryObj = {
//   render: () => {
//     const schema = yup.object({
//       textField: yup
//         .string()
//         .max(200, 'Text Field cannot exceed 200 characters.')
//         .required('This field is required.'),
//       selectField: yup
//         .string()
//         .required('This Field is required.')
//         .nullable(),
//       datePicker: yup
//         .mixed<dayjs.Dayjs>()
//         .required('This Field is required.')
//         .nullable(),
//       radio: yup
//         .string()
//         .required('A selection is required'),
//     });

//     type FormInputsType = yup.InferType<typeof schema>;

//     const onSubmit: SubmitHandler<FormInputsType> = (data) => console.log(data)

//     const {
//       register,
//       handleSubmit,
//       formState: { errors, isSubmitting },
//       control,
//     } = useForm({
//       defaultValues: {
//         textField: "",
//         selectField: undefined,
//         datePicker: undefined,
//         radio: "",
//       },
//       mode: 'onTouched',
//       resolver: yupResolver(schema),
//     });
//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <RequiredKey />
//         <TextField
//           label="Textfield"
//           margin="normal"
//           fullWidth
//           {...register('textField')}
//           required
//           error={!!errors.textField}
//           helperText={errors.textField?.message || 'Max 200 characters'}
//         />
//         <Controller
//           control={control}
//           name="selectField"
//           render={({ field: { onChange, value, onBlur, ref } }) => {
//             return (
//               <Autocomplete
//                 onChange={(event, value, reason) => {
//                   if (reason === 'clear') {
//                     onChange(null);
//                   }
//                   onChange(value);
//                 }}
//                 onBlur={onBlur}
//                 FieldProps={{
//                   margin:"normal",
//                   label: 'Select Field',
//                   placeholder: 'Value',
//                   required: true,
//                   error: !!errors.selectField?.message,
//                   helperText: errors.selectField?.message,
//                   inputRef: ref
//                 }}
//                 options={dropdownOptions}
//                 value={value || null}
//               />
//             );
//           }}
//         />
//         <Controller
//           control={control}
//           name="datePicker"
//           render={({ field: { onChange, value, onBlur, ref } }) => (
//             <Datepicker
//               value={value || null}
//               onChange={onChange}
//               FieldProps={{
//                 label: "Date",
//                 required: true,
//                 margin: "normal",
//                 error: !!errors.datePicker?.message,
//                 helperText: errors.datePicker?.message,
//                 inputRef: ref,
//                 onBlur: onBlur
//               }}
//             />
//           )}
//         />
//         <FormControl margin="normal" error={!!errors.radio} required>
//           <FormLabel id="radio-label" component="div">
//             Radio Group
//           </FormLabel>
//           <Controller
//             control={control}
//             name="radio"
//             render={({ field }) => (
//               <RadioGroup aria-labelledby="radio-label" row {...field} aria-required>
//                 <FormControlLabel control={<Radio />} value="1" label="Option 1" />
//                 <FormControlLabel control={<Radio />} value="2" label="Option 2" />
//               </RadioGroup>
//             )}
//           />
//           {errors.radio ? <FormHelperText id="radio-helper-text">{errors.radio?.message}</FormHelperText> : null }
//         </FormControl>
//         <LoadingButton loading={isSubmitting} type="submit" variant="contained">
//           Submit
//         </LoadingButton>
//       </form>
//     )
//   }
// }

/** Form with `@availity/element` controlled form components, `yup`, and `@hookform/resolvers/yup` */
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
      return(!schema.describe().fields[name]?.optional || undefined)
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
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" variant="contained" sx={{mt: 2}}>
            Submit
          </LoadingButton>
        </form>
      </FormProvider>
    )
  }
}

// export const _FormMigrationRawRHFRules: StoryObj = {
//   render: () => {
//   const methods = useForm({defaultValues: { textField: "", selectField: null, radio: ""}});
//   const onSubmit = (data: any) => console.log(data)
//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         <RequiredKey />
//         <Controller
//           name="textField"
//           rules={{
//             required: 'This field is required',
//             maxLength: { value: 200, message: 'This field must not exceed 200 characters'}
//           }}
//           render={({ field: { ref, ...field }, fieldState: { error} }) => {
//             return (
//               <TextField
//                 inputRef={ref}
//                 {...field}
//                 label="Textfield"
//                 margin="normal"
//                 fullWidth
//                 required
//                 error={!!error}
//                 helperText={error?.message || 'default helper text'}
//               />
//             );
//           }}
//         />
//         <Controller
//           name="selectField"
//           rules={{ required: 'This field is required' }}
//           render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => {
//             return (
//               <Autocomplete
//                 onChange={(event, value, reason) => {
//                   if (reason === 'clear') {
//                     onChange(null);
//                   }
//                   onChange(value);
//                 }}
//                 onBlur={onBlur}
//                 FieldProps={{
//                   margin:"normal",
//                   label: 'Select Field',
//                   placeholder: 'Value',
//                   required: true,
//                   error: !!error?.message,
//                   helperText: error?.message || 'default helper text',
//                   inputRef: ref
//                 }}
//                 options={dropdownOptions}
//                 value={value || null}
//               />
//             );
//           }}
//         />
//         <Controller
//           name="datePicker"
//           rules={{ required: 'This field is required'}}
//           render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
//             <Datepicker
//               value={value || null}
//               onChange={onChange}
//               FieldProps={{
//                 label: "Date",
//                 required: true,
//                 margin: "normal",
//                 error: !!error?.message,
//                 helperText: error?.message || 'default helper text',
//                 inputRef: ref,
//                 onBlur: onBlur
//               }}
//             />
//           )}
//         />
//         <Controller
//           name="radio"
//           rules={{ required: 'This field is required' }}
//           render={({ field, fieldState: { error } }) => (
//           <FormControl margin="normal" error={!!error} required>
//             <FormLabel id="radio-label" component="div">
//               Radio Group
//             </FormLabel>
//               <RadioGroup aria-labelledby="radio-label" row {...field} aria-required>
//                 <FormControlLabel control={<Radio />} value="1" label="Option 1" />
//                 <FormControlLabel control={<Radio />} value="2" label="Option 2" />
//               </RadioGroup>
//               {error ? <FormHelperText id="radio-helper-text">{error?.message}</FormHelperText> : null }
//             </FormControl>
//           )}
//         />
//         <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" variant="contained">
//           Submit
//         </LoadingButton>
//       </form>
//     </FormProvider>
//   )}
// };

/** Form with `@availity/element` controlled form components using internal rules for validation.
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
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" variant="contained" sx={{mt: 2}}>
            Submit
          </LoadingButton>
        </form>
      </FormProvider>
    )
  }
}
