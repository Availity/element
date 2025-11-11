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
//         <LoadingButton loading={isSubmitting} type="submit">
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
//         <LoadingButton loading={methods?.formState?.isSubmitting} type="submit">
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
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" sx={{mt: 2}}>
            Submit
          </LoadingButton>
        </form>
      </FormProvider>
    )
  }
}

/** We are moving away from our extensive use of `disabled` fields in favor of `read-only` fields.
 * This is necessary for accessibility as `disabled` fields are not available to the keyboard/screenreader, so the filled in values cannot be seen.
  */
export const _DisabledFields: StoryObj = {
  render: () => (
    <>
      <TextField
        margin="normal"
        value="value"
        label="Read Only"
        id="read-only"
        fullWidth
        slotProps={{input: {readOnly: true}}}
        helperText="Read-only state should be used for values that cannot be changed by the user, but are still significant. i.e. when the value is populated based on another field value."
      />
      <TextField
        margin="normal"
        value="value"
        label="Disabled"
        id="disabled"
        fullWidth
        disabled
        helperText="Disabled state should be used for values that are not applicable currently, but could be enabled in a different state."
      />
    </>
  ),
};
