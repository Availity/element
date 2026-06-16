import{j as e}from"./iframe-DVscMr-A.js";import{c as q,a as u,b as k}from"./index.esm-DH2XSBkL.js";import{o as S}from"./yup-Du-wce_9.js";import{L as c}from"./index-BeF-k_6p.js";import{C as h,a as f,b as F,c as b}from"./index-sx__xyrk.js";import"./index-BesM0ej4.js";import{b as x,c as l,d as a}from"./index-Dslozi2v.js";import{T as p}from"./index-BbRTm-rr.js";import{u as g,F as y}from"./index.esm-B-0KxPvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-fH0F2vbV.js";import"./useTheme-YOFO5C4H.js";import"./styled-DQ7SGoXr.js";import"./memoTheme-BWlAx59E.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-zxUPRTwq.js";import"./useControlled-DNBFEVpl.js";import"./useEventCallback-yUNJdQIx.js";import"./getReactElementRef-BdBU57AF.js";import"./Portal-DpqzBqCy.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-pr2a7puG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Rik4d0uu.js";import"./CircularProgress-DG2q71MX.js";import"./Button-C5YW8aoX.js";import"./index-BlQYc4DV.js";import"./useInfiniteQuery-BYLSo97K.js";import"./suspense-B9Mqc8FV.js";import"./useBaseQuery-Ly4ZeRgi.js";import"./index-BVtPpz6B.js";import"./index-ZaasKGpT.js";import"./___vite-browser-external_commonjs-proxy-SNwcl5N-.js";import"./index-BZWhYBqj.js";import"./Autocomplete-I7Slci6D.js";import"./Select-DvdmAFVR.js";import"./SelectFocusSourceContext-BTpAiLqB.js";import"./Popover-Cvu36zQJ.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bx8d2XL6.js";import"./debounce-Be36O1Ab.js";import"./Modal-CHyTrEbM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./Paper-CQbuUb0F.js";import"./List-ct4XBHDF.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkCKu5ph.js";import"./createSvgIcon-ZxKINfNn.js";import"./SvgIcon-W7CV7YPZ.js";import"./OutlinedInput-CY0TCNx8.js";import"./Close-C6zz0I54.js";import"./usePreviousProps-BDXE48jd.js";import"./Chip-DaoHAJjF.js";import"./ListSubheader-Df-HEmCS.js";import"./index-DTssJy6S.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./TimePicker-CBpuoVrx.js";import"./useMobilePicker-D-zw06SG.js";import"./index-Ch4IsgQ_.js";import"./Typography-CU66rNGi.js";import"./TextField-x588U1Z0.js";import"./FormLabel-BdI1jtcT.js";import"./FormHelperText-DTQfoS1X.js";import"./FormControl-wb4CWP8v.js";import"./isMuiElement-J0UlRgLR.js";import"./InputAdornment-Cd_HvcjA.js";import"./Dialog-CmH4OmzV.js";import"./DialogContext-Dryr5KWB.js";import"./DialogContent-D5eFYn3T.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CMpjmCRG.js";import"./ListItem-B5MJ-_X4.js";import"./MenuItem-B4Uje97_.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./DatePicker-DIcLNUAl.js";import"./index-MzdqpUr1.js";import"./Box-fBwpr0Q7.js";import"./Grid-QdwtLyJp.js";import"./styled-BgmeM797.js";import"./Stack-D0PqJVFB.js";import"./Container-BdxHCcxG.js";import"./index-DnN6X1jM.js";import"./index-CrcoPoGw.js";import"./faCheck-1iOl5y2I.js";import"./FormControlLabel-xHJRVqLE.js";import"./Switch-D2p0E2hS.js";import"./SwitchBase-hRTrvGbO.js";import"./Radio-BkHQIpvX.js";import"./RadioGroup-Cfs5wAAA.js";import"./FormGroup-DpHjrUnv.js";import"./Divider-DIgW-ZID.js";const R=`There are two main changes made with the form components in \`@availity/element\`:

- Removed \`formik\`
- Updated [usage guidelines](./?path=/docs/upgrading/bs4-migration-form-migration--disabled-fields)  for \`disabled\` fields and the new \`read-only\` fields

## Why did we remove formik?

The future of \`formik\` is looking questionable - The current major version was released
in 2019 with sparse feature work and dependency updates since.
We were faced with the question of what to replace it with, but also if it
_should_ be replaced at all.

We have chosen the middle ground. We're updating our library of choice for
our controlled components, while also allowing the use of the non-controlled fields. _See the [Form Component Guide](./?path=/docs/form-components-component-guide--docs) for more information on all our form components._

After a successful internal implementation of an extremely long and complicated form using
\`react-hook-form\`, we decided to move forward with it for our controlled form components.

\`react-hook-form\` is very lightweight and flexible. It also boasts a
large community and is actively and regularly supported. \`react-hook-form\`
utilizes it's own internal rules engine for validation, but can be used
with schema-based validation libraries like \`yup\`, \`zod\`, and \`joi\`
when used with the corresponding resolver package. See the
[react-hook-form docs](https://react-hook-form.com/get-started#SchemaValidation)
for more.

We've included examples using only \`react-hook-form\` as well as
using it with \`yup\`+\`@hookform/resolvers/yup\` (don't worry,
\`@hookform/resolvers\` is an official part of \`react-hook-form\`)

## Component Equivalents

| availity-react<br />formik | element<br />react-hook-form | element<br />Not Controlled | Description |
| ---------------------------- | ---------------------------- | --------------------------- | ----------- |
| CheckboxGroup | _N/A_ | _N/A - built with \`FormControl\`, \`FormLabel\`, & \`FormGroup\`_ | Full checkbox group field |
| CurrencyInput | _N/A_ | _N/A - built with \`TextField\` and replacing input. See [Input Masking](./?path=/docs/form-components-uncontrolled-fields-textfield--docs&args=#input-masking)_ | Field with currency input masking |
| DateField | ControlledDatepicker | Datepicker | Date field with picker |
| DateRangeField | _N/A_ | _N/A - see [date range code example](./?path=/docs/form-components-uncontrolled-fields-datepicker-datepicker--docs#date-range-picker)_ | Date range field(s) with picker |
| Field | ControlledTextField | TextField | Text input field |
| FieldHelpIcon | _N/A_ | FieldHelpIcon | Availity help topic link |
| FormGroup | _N/A_ | FormControl | Context wrapper for a field. Syncs state, i.e. error, required, disabled, focused, etc |
| Input | _N/A_ | Input | Bare input |
| Label | _N/A_ | FormLabel<br />FormControlLabel | Label for input/group |
| Phone | _N/A_ | _N/A - built with \`TextField\` and replacing input. See [Input Masking](./?path=/docs/form-components-uncontrolled-fields-textfield--docs&args=#input-masking)_ | Field with phone masking |
| RadioGroup | ControlledRadioGroup | _N/A - built with \`FormControl\`, \`FormLabel\`, & \`RadioGroup\`_ | Full radio group field |
| SelectField | ControlledAutocomplete | Autocomplete | Select field with autocompletion |
| ResourceSelect | ControlledAsyncAutocomplete | AsyncAutocomplete | Select field with loader while loading options |
| AvCodeSelect | ControlledCodesAutocomplete | CodesAutocomplete | Specialized autocomplete with codes |
| AvNavigationSelect | _N/A_ | _N/A_ | |
| AvOrganizationSelect | ControlledOrganizationAutocomplete | OrganizationAutocomplete | Specialized autocomplete for organizations |
| AvPayerSelect | _N/A_ | _N/A_ | |
| AvPermissionSelect | _N/A_ | _N/A_ | |
| AvProviderSelect | ControlledProviderAutocomplete | ProviderAutocomplete | Specialized autocomplete for providers |
| AvRegionSelect | _N/A_ | _N/A_ | |
| AvUserSelect | _N/A_ | _N/A_ | |
| Upload | _N/A_ | FileSelector | Select files for upload, show upload progress |

## Form Examples

- Legacy form with \`@availity/react\`, \`formik\`, and \`yup\`
- Form with \`@availity/element\` uncontrolled components, \`formik\`, and \`yup\` (<ins>Not Recommended</ins>)
- Form with \`@availity/element\`, \`react-hook-form\`, \`yup\` and \`@hookform/resolvers/yup\`
- Form with \`@availity/element\` and \`react-hook-form\` using internal rules for validation


At the moment, @availity/element does not export a \`<Form />\` component.
Instead, use the native \`<form>\` element. You can then use
\`react-hook-form\`'s \`useForm\` hook to manage your form.

<br />

### Legacy form with \`@availity/react\`, \`formik\`, and \`yup\`

<details>
<summary>Code example</summary>

\`\`\`tsx
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
\`\`\`
</details>
<br />

### Form with \`@availity/element\` uncontrolled components, \`formik\`, and \`yup\` (Not Recommended)

It does not save much time/effort reformatting to keep \`formik\` versus switching
over to \`react-hook-form\`, therefore we don't recommend this approach to migrate.

<details>
<summary>Code example</summary>

\`\`\`tsx
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
\`\`\`
</details>

<!--
### Form with \`@availity/element\`, \`yup\` and \`@hookform/resolvers/yup\`

<details>
<summary>Code example</summary>

\`\`\`tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
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
  useForm
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

  const onSubmit: SubmitHandler<FormInputsType> = (data) => console.log(data)/n
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
          required
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
        <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" >
          Submit
        </LoadingButton>
      </form>
    </FormProvider>
  )
}
\`\`\`
</details>

You can find more working examples of react-hook-form [here](/docs/sample-layouts-form--docs). -->

<!--
### Form with \`@availity/element\`, \`react-hook-form\`, and \`react-hook-form\` Internal Rules

<details>
<summary>Code example</summary>

\`\`\`tsx
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Autocomplete, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Paper, Radio, RadioGroup, RequiredKey, TextField } from '@availity/element';

export const Form = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      reset,
      getValues,
    } = useForm({defaultValues: { textField: "", selectField: "", radio: ""}});
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RequiredKey />
      <TextField
        label="Textfield"
        margin="normal"
        fullWidth
        {...register('textField', {
          required: 'This field is required',
          maxLength: { value: 200, message: 'This field must not exceed 200 characters'}})}
        required
        error={!!errors.textField}
        helperText={errors.textField?.message || 'Max 200 characters'}
      />
      <Controller
        control={control}
        name="selectField"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Autocomplete
              onChange={(event, value, reason) => {
                if (reason === 'clear') {
                  onChange(null);
                }
                onChange(value);
              }}
              onBlur={onBlur}
              FieldProps={{
                margin:"normal",
                label: 'Select Field',
                placeholder: 'Value',
                required: true,
                error: !!errors.selectField?.message,
                helperText: errors.selectField?.message,
              }}
              options={dropdownOptions}
              value={value || null}
            />
          );
        }}
      />
      <FormControl margin="normal" error={!!errors.radio} required>
        <FormLabel id="radio-label" component="div">
          Radio Group
        </FormLabel>
        <Controller
          control={control}
          name="radio"
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <RadioGroup aria-labelledby="radio-label" row {...field} aria-required>
              <FormControlLabel control={<Radio />} value="1" label="Option 1" />
              <FormControlLabel control={<Radio />} value="2" label="Option 2" />
            </RadioGroup>
          )}
        />
        {errors.radio ? <FormHelperText id="radio-helper-text">{errors.radio?.message}</FormHelperText> : null }
      </FormControl>
      <LoadingButton loading={loading} type="submit" >
        Submit
      </LoadingButton>
    </form>
  )
}
\`\`\`
</details> -->
`,Rr={title:"Upgrading/BS4 Migration/Form Migration",tags:["autodocs"],parameters:{docs:{description:{component:`${R}`},source:{state:!0}}}},v=["Bulbasaur","Squirtle","Charmander"],n={render:()=>{const r=q({textField:u().max(200,"Text Field cannot exceed 200 characters.").required("This field is required."),selectField:u().required("This Field is required.").nullable(),datePicker:k().required("This Field is required.").nullable(),radio:u().required("A selection is required")}),o=m=>!r.describe().fields[m]?.optional||void 0,d=m=>console.log(m),s=g({defaultValues:{textField:"",selectField:void 0,datePicker:void 0,radio:""},mode:"onBlur",resolver:S(r)});return e.jsx(y,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(d),children:[e.jsx(x,{}),e.jsx(h,{name:"textField",label:"Textfield",margin:"normal",fullWidth:!0,helperText:"Max 200 characters",required:o("textField")}),e.jsx(f,{name:"selectField",FieldProps:{margin:"normal",label:"Select Field",placeholder:"Value",required:o("selectField")},options:v}),e.jsx(F,{name:"datePicker",FieldProps:{label:"Date",margin:"normal",required:o("datePicker")}}),e.jsxs(b,{name:"radio",label:"Radio Group",row:!0,"aria-required":!0,required:o("radio"),children:[e.jsx(l,{control:e.jsx(a,{}),value:"1",label:"Option 1"}),e.jsx(l,{control:e.jsx(a,{}),value:"2",label:"Option 2"})]}),e.jsx(c,{loading:s?.formState?.isSubmitting,type:"submit",sx:{mt:2},children:"Submit"})]})})}},i={render:()=>{const r=g({defaultValues:{textField:"",selectField:null,datePicker:null,radio:""}}),o=d=>console.log(d);return e.jsx(y,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),children:[e.jsx(x,{}),e.jsx(h,{name:"textField",label:"Textfield",margin:"normal",fullWidth:!0,required:!0,rules:{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}},helperText:"Max 200 characters"}),e.jsx(f,{name:"selectField",rules:{required:"This field is required"},FieldProps:{margin:"normal",label:"Select Field",placeholder:"Value",required:!0},options:v}),e.jsx(F,{name:"datePicker",rules:{required:"This field is required"},FieldProps:{label:"Date",margin:"normal",required:!0}}),e.jsxs(b,{name:"radio",label:"Radio Group",row:!0,"aria-required":!0,required:!0,rules:{required:"This field is required"},children:[e.jsx(l,{control:e.jsx(a,{}),value:"1",label:"Option 1"}),e.jsx(l,{control:e.jsx(a,{}),value:"2",label:"Option 2"})]}),e.jsx(c,{loading:r?.formState?.isSubmitting,type:"submit",sx:{mt:2},children:"Submit"})]})})}},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{margin:"normal",value:"value",label:"Read Only",id:"read-only",fullWidth:!0,slotProps:{input:{readOnly:!0}},helperText:"Read-only state should be used for values that cannot be changed by the user, but are still significant. i.e. when the value is populated based on another field value."}),e.jsx(p,{margin:"normal",value:"value",label:"Disabled",id:"disabled",fullWidth:!0,disabled:!0,helperText:"Disabled state should be used for values that are not applicable currently, but could be enabled in a different state."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const schema = yup.object({
      textField: yup.string().max(200, 'Text Field cannot exceed 200 characters.').required('This field is required.'),
      selectField: yup.string().required('This Field is required.').nullable(),
      datePicker: yup.mixed<dayjs.Dayjs>().required('This Field is required.').nullable(),
      radio: yup.string().required('A selection is required')
    });
    const isRequired = (name: string) => {
      return !(schema.describe().fields[name] as yup.SchemaDescription)?.optional || undefined;
    };
    type FormInputsType = yup.InferType<typeof schema>;
    const onSubmit: SubmitHandler<FormInputsType> = data => console.log(data);
    const methods = useForm({
      defaultValues: {
        textField: "",
        selectField: undefined,
        datePicker: undefined,
        radio: ""
      },
      mode: 'onBlur',
      resolver: yupResolver(schema)
    });
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RequiredKey />
          <ControlledTextField name="textField" label="Textfield" margin="normal" fullWidth helperText='Max 200 characters' required={isRequired('textField')} />
          <ControlledAutocomplete name="selectField" FieldProps={{
          margin: "normal",
          label: 'Select Field',
          placeholder: 'Value',
          required: isRequired('selectField')
        }} options={dropdownOptions} />
          <ControlledDatepicker name="datePicker" FieldProps={{
          label: "Date",
          margin: "normal",
          required: isRequired('datePicker')
        }} />
          <ControlledRadioGroup name="radio" label="Radio Group" row aria-required required={isRequired('radio')}>
            <FormControlLabel control={<Radio />} value="1" label="Option 1" />
            <FormControlLabel control={<Radio />} value="2" label="Option 2" />
          </ControlledRadioGroup>
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" sx={{
          mt: 2
        }}>
            Submit
          </LoadingButton>
        </form>
      </FormProvider>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Form with `@availity/element` controlled form components, `yup`, and `@hookform/resolvers/yup`",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm({
      defaultValues: {
        textField: '',
        selectField: null,
        datePicker: null,
        radio: ''
      }
    });
    const onSubmit = (data: any) => console.log(data);
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RequiredKey />
          <ControlledTextField name="textField" label="Textfield" margin="normal" fullWidth required rules={{
          required: 'This field is required',
          maxLength: {
            value: 200,
            message: 'This field must not exceed 200 characters'
          }
        }} helperText='Max 200 characters' />
          <ControlledAutocomplete name="selectField" rules={{
          required: 'This field is required'
        }} FieldProps={{
          margin: "normal",
          label: 'Select Field',
          placeholder: 'Value',
          required: true
        }} options={dropdownOptions} />
          <ControlledDatepicker name="datePicker" rules={{
          required: 'This field is required'
        }} FieldProps={{
          label: "Date",
          margin: "normal",
          required: true
        }} />
          <ControlledRadioGroup name="radio" label="Radio Group" row aria-required required rules={{
          required: 'This field is required'
        }}>
            <FormControlLabel control={<Radio />} value="1" label="Option 1" />
            <FormControlLabel control={<Radio />} value="2" label="Option 2" />
          </ControlledRadioGroup>
          <LoadingButton loading={methods?.formState?.isSubmitting} type="submit" sx={{
          mt: 2
        }}>
            Submit
          </LoadingButton>
        </form>
      </FormProvider>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Form with `@availity/element` controlled form components using internal rules for validation.\n\nUseful for smaller forms where writing a full schema could be cumbersome.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TextField margin="normal" value="value" label="Read Only" id="read-only" fullWidth slotProps={{
      input: {
        readOnly: true
      }
    }} helperText="Read-only state should be used for values that cannot be changed by the user, but are still significant. i.e. when the value is populated based on another field value." />
      <TextField margin="normal" value="value" label="Disabled" id="disabled" fullWidth disabled helperText="Disabled state should be used for values that are not applicable currently, but could be enabled in a different state." />
    </>
}`,...t.parameters?.docs?.source},description:{story:"We are moving away from our extensive use of `disabled` fields in favor of `read-only` fields.\nThis is necessary for accessibility as `disabled` fields are not available to the keyboard/screenreader, so the filled in values cannot be seen.",...t.parameters?.docs?.description}}};const Tr=["_YupValidation","_RHFRules","_DisabledFields"];export{t as _DisabledFields,i as _RHFRules,n as _YupValidation,Tr as __namedExportsOrder,Rr as default};
