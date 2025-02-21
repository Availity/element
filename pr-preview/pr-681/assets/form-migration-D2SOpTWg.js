import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as t}from"./index-CfSBfIZi.js";import{M as n,b as i}from"./index-D4JjLlRo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DUm3T6DN.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function l(r){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"BS4 Migration/Form Migration"}),`
`,e.jsx(o.h1,{id:"form-migration",children:"Form Migration"}),`
`,e.jsxs(o.p,{children:["For the ",e.jsx(o.code,{children:"@availity/element"}),` components we have chosen to move away from any
built-in form management. While there's flexibility to use your library of
choice, internally we have replaced `,e.jsx(o.code,{children:"formik"})," with ",e.jsx(o.code,{children:"react-hook-form"}),`.
For existing forms utilizing `,e.jsx(o.code,{children:"@availity/react"})," and ",e.jsx(o.code,{children:"formik"}),`,
some refactor is required.`]}),`
`,e.jsx(o.h2,{id:"why-the-change",children:"Why the change?"}),`
`,e.jsxs(o.p,{children:["The future of ",e.jsx(o.code,{children:"formik"}),` is looking questionable - The current major version released
in 2019 with sparse feature work and dependency updates since.
We were faced with the question of what to replace it with, but also if it
`,e.jsx(o.em,{children:"should"})," be replaced at all."]}),`
`,e.jsxs(o.p,{children:[`We have chosen the middle ground. Our form components are no longer tied to
one library for validation and state management. However, after a successful
internal implementation of an extremely long and complicated form using
`,e.jsx(o.code,{children:"react-hook-form"}),`, we decided to move forward with it for any internal form
components, like the feedback component, and recommend it for use with `,e.jsx(o.code,{children:"@availity/element"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"react-hook-form"}),` is very lightweight and flexible. It also boasts a
large community and is actively and regularly supported. `,e.jsx(o.code,{children:"react-hook-form"}),`
utilizes it's own internal rules engine for validation, but can be used
with schema-based validation libraries like `,e.jsx(o.code,{children:"yup"}),", ",e.jsx(o.code,{children:"zod"}),", and ",e.jsx(o.code,{children:"joi"}),`
when used with the corresponding resolver package. See the
`,e.jsx(o.a,{href:"https://react-hook-form.com/get-started#SchemaValidation",rel:"nofollow",children:"react-hook-form docs"}),`
for more.`]}),`
`,e.jsxs(o.p,{children:["We've included examples using only ",e.jsx(o.code,{children:"react-hook-form"}),` as well as
using it with `,e.jsx(o.code,{children:"yup"}),"+",e.jsx(o.code,{children:"@hookform/resolvers/yup"}),` (don't worry,
`,e.jsx(o.code,{children:"@hookform/resolvers"})," is an official part of ",e.jsx(o.code,{children:"react-hook-form"}),")"]}),`
`,e.jsx(o.h2,{id:"react-hook-form-installation",children:"react-hook-form Installation"}),`
`,e.jsx(i,{language:"sh",code:`
npm install react-hook-form
`}),`
`,e.jsx(o.p,{children:"OR"}),`
`,e.jsx(i,{language:"sh",code:`
yarn add react-hook-form
`}),`
`,e.jsx(o.h2,{id:"form-examples",children:"Form Examples"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Form with ",e.jsx(o.code,{children:"@availity/react"}),", ",e.jsx(o.code,{children:"formik"}),", and ",e.jsx(o.code,{children:"yup"})]}),`
`,e.jsxs(o.li,{children:["Form with ",e.jsx(o.code,{children:"@availity/element"}),", ",e.jsx(o.code,{children:"react-hook-form"}),", ",e.jsx(o.code,{children:"yup"})," and ",e.jsx(o.code,{children:"@hookform/resolvers/yup"})]}),`
`,e.jsxs(o.li,{children:["Form with ",e.jsx(o.code,{children:"@availity/element"})," and ",e.jsx(o.code,{children:"react-hook-form"})," - using internal rules for validation"]}),`
`,e.jsxs(o.li,{children:["Form with ",e.jsx(o.code,{children:"@availity/element"}),", ",e.jsx(o.code,{children:"formik"}),", and ",e.jsx(o.code,{children:"yup"})," (",e.jsx("ins",{children:"Not Recommended"}),")"]}),`
`]}),`
`,e.jsxs(o.p,{children:["At the moment, @availity/element does not export a ",e.jsx(o.code,{children:"<Form />"}),` component.
Instead, use the native `,e.jsx(o.code,{children:"<form>"}),` element. You can then use
`,e.jsx(o.code,{children:"react-hook-form"}),"'s ",e.jsx(o.code,{children:"useForm"})," hook to manage your form."]}),`
`,e.jsxs(o.h3,{id:"form-with-availityreact-formik-and-yup",children:["Form with ",e.jsx(o.code,{children:"@availity/react"}),", ",e.jsx(o.code,{children:"formik"}),", and ",e.jsx(o.code,{children:"yup"})]}),`
`,e.jsx(i,{code:`
import React from 'react';
import { Form, Field, Radio, RadioGroup, SelectField } from '@availity/form';
import { Button } from 'reactstrap';

export const Form = () => {
  const ref = useRef();
  return (
    <Form
      onKeyDown={({ key }) => key === 'Escape' && onClose()}
      initialValues={{
        textField: "",
        selectField: undefined,
        radio: "",
      }}
      validationSchema={yup.object().shape({
        textField: yup
          .string()
          .max(200, 'Text Field cannot exceed 200 characters.')
          .required('This field is required.'),
        selectField: yup
          .string()
          .required('This Field is required.')
          .nullable(),
        radio: yup
          .string()
          .required('A selection is required'),
      })}
      {...formProps}
      onSubmit={(values) => sendValues(values)}
    >
      <RequiredKey/>
      <Field type="textarea" name="textField" label="Text Field" required/>
      <SelectField
        label="Select Field"
        name="selectField"
        required
        options={[{label: "Option 1", value: "1"}, {label: "Option 2", value: "2"}]}
      />
      <RadioGroup
        name="radio"
        label="Radio Group"
        inline
        required
      >
        <Radio label="Radio 1" value="1" />
        <Radio label="Radio 2" value="2" />
      </RadioGroup>
      <Button
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};
`}),`
`,e.jsxs(o.h3,{id:"form-with-availityelement-yup-and-hookformresolversyup",children:["Form with ",e.jsx(o.code,{children:"@availity/element"}),", ",e.jsx(o.code,{children:"yup"})," and ",e.jsx(o.code,{children:"@hookform/resolvers/yup"})]}),`
`,e.jsx(i,{code:`
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
} from '@availity/element';

export const Form = () => {
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
            required
            helperText='Max 200 characters'
          />
          <ControlledAutocomplete
            name="selectField"
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
            FieldProps={{
              label: "Date",
              margin: "normal",
              required: true,
            }}
          />
          <ControlledRadioGroup name="radio" label="Radio Group" row aria-required required>
            <FormControlLabel control={<Radio />} value="1" label="Option 1" />
            <FormControlLabel control={<Radio />} value="2" label="Option 2" />
          </ControlledRadioGroup>
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" variant="contained">
            Submit
          </LoadingButton>
        </form>
      </FormProvider>
    )
  }
`}),`
`,e.jsxs(o.p,{children:["You can find more working examples of react-hook-form ",e.jsx(o.a,{href:"/docs/sample-layouts-form--docs",children:"here"}),"."]}),`
`,e.jsxs(o.h3,{id:"form-with-availityelement-react-hook-form-and-react-hook-form-internal-rules",children:["Form with ",e.jsx(o.code,{children:"@availity/element"}),", ",e.jsx(o.code,{children:"react-hook-form"}),", and ",e.jsx(o.code,{children:"react-hook-form"})," Internal Rules"]}),`
`,e.jsx(i,{code:`
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
  useForm,
} from '@availity/element';

export const Form = () => {
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
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" variant="contained">
            Submit
          </LoadingButton>
        </form>
      </FormProvider>
    )
  }
`}),`
`,e.jsxs(o.h3,{id:"form-with-availityelement-formik-and-yup-not-recommended",children:["Form with ",e.jsx(o.code,{children:"@availity/element"}),", ",e.jsx(o.code,{children:"formik"}),", and ",e.jsx(o.code,{children:"yup"})," (Not Recommended)"]}),`
`,e.jsxs(o.p,{children:["It does not save much time/effort reformatting to keep ",e.jsx(o.code,{children:"formik"}),` versus switching
over to `,e.jsx(o.code,{children:"react-hook-form"}),", therefore we don't recommend this approach to migrate."]}),`
`,e.jsx(i,{code:`
import React from 'react';
import * as yup from 'yup';
import { useFormikContext, Form, Formik, useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  RequiredKey,
  TextField,
  Autocomplete} from '@availity/element';

export const Form = () => (
  <Formik
    initialValues={{
      textField: "",
      selectField: undefined,
      radio: "",
    }}
    validationSchema={yup.object().shape({
      textField: yup
        .string()
        .max(200, 'Text Field cannot exceed 200 characters.')
        .required('This field is required.'),
      selectField: yup
        .string()
        .required('This Field is required.'),
      radio: yup
        .string()
        .required('A selection is required'),
    })}
    onSubmit={(values) => console.log(values)}
  >
    {formik => (
      <Box component={Form}>
        <RequiredKey/>
        <TextField
          name="textField"
          label="Textfield"
          multiline
          helperText={formik.touched.textField && formik.errors.textField ? formik.errors.textField : null}
          required
          value={formik.values.textField}
          error={formik.touched.textField && Boolean(formik.errors.textField)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
        />
        <Autocomplete
          name="selectField"
          onChange={(e, value) => {
            formik.setFieldValue("selectField", value !== null ? value.value : formik.initialValues.selectField)
          }}
          onBlur={formik.handleBlur}
          FieldProps={{
            margin:"normal",
            label: 'Select Field',
            placeholder: 'Value',
            required: true,
            error: formik.touched.selectField && Boolean(formik.errors.selectField),
            helperText: formik.touched.selectField && formik.errors.selectField,
          }}
          options={[{label:"Option 1", value: "1"}, {label:"Option 2", value: "2"}]}
          value={formik.values.selectField}
        />
        <FormControl
          required
          margin="normal"
          sx={{mt: 2}}
          error={formik.touched.radio && Boolean(formik.errors.radio)}
        >
          <FormLabel id="radio-label" component="div">Radio 1</FormLabel>
          <RadioGroup
            name="radio"
            aria-labelledby="radio-label"
            row
            value={formik.values.radio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel control={<Radio/>} label="Radio 1" value="1" />
            <FormControlLabel control={<Radio/>} label="Radio 2" value="2" />
          </RadioGroup>
          {formik.touched.radio && Boolean(formik.errors.radio) ?
            <FormHelperText id="radio-helperText">{formik.errors.radio}</FormHelperText>
            : null
          }
        </FormControl>
        <Button
          type="submit"
        >
          Submit
        </Button>
        <Results/>
      </Box>
    )}
  </Formik>
);
`})]})}function x(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(l,{...r})}):l(r)}export{x as default};
