import{j as e}from"./iframe-BdOkmXSO.js";import{c as q,a as u,b as k}from"./index.esm-RLgtWXAN.js";import{o as R}from"./yup-GNkZ7PLM.js";import{L as c}from"./LoadingButton-1jTAeWIp.js";import"./Drawer-CRB7T50j.js";import{F as l}from"./FormControlLabel-eROgfDNZ.js";import{R as a}from"./Radio-DVHl-6g5.js";import{R as h}from"./RequiredKey-oRrnPvxv.js";import{T as p}from"./TextField-8DUzEh53.js";import{u as f,F}from"./index.esm-BZ_RWrtx.js";import{C as b}from"./TextField-B7IG4vfv.js";import{C as x}from"./Autocomplete-Dt7L9wUY.js";import{C as g}from"./Datepicker-BwqpWICy.js";import{C as y}from"./RadioGroup-BCL0ij6k.js";import"./preload-helper-Dab_6GC_.js";import"./Button-NnJ9RF69.js";import"./styled-ntycrLPJ.js";import"./memoTheme-Dp1NrYg6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-D0mr5YFJ.js";import"./useTimeout-yhleNqH_.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useForkRef-B6GvvQRB.js";import"./useEventCallback-Ci1dFtlM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BtHd2z-U.js";import"./Backdrop-DE9Il5GC.js";import"./Backdrop-BHtRMzsl.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./Fade-BJ4yz3if.js";import"./useTheme-DpzwBSOw.js";import"./utils-BBZ_5XBR.js";import"./getReactElementRef-CAZnW1NE.js";import"./Box-Bqo_5F9J.js";import"./Box-DXcrr7iM.js";import"./Grid-C8TSgpaR.js";import"./Grid-BUOsnAxa.js";import"./isMuiElement-v3aJqbSB.js";import"./styled-NjTlQkCK.js";import"./Typography-BP7E3Z2h.js";import"./Typography-Ba-r-irp.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useControlled-wRMaIAhC.js";import"./Grow-zcR73JmX.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./IconButton-C66xLdI-.js";import"./Actions-j5ZzHduY.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./Modal-C2ZApFn6.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./mergeSlotProps-CGT3lxwg.js";import"./debounce-Be36O1Ab.js";import"./Paper-X002pFu5.js";import"./FieldHelpIcon-auv2yOGj.js";import"./index-CrcoPoGw.js";import"./Form-Dy8jxpW5.js";import"./FormControlLabel-D6kG6ySx.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./Radio-BbvARGE2.js";import"./SwitchBase-DGEVIec5.js";import"./createSvgIcon-B1lFLeS5.js";import"./FormHelperText-BNe1EnHB.js";import"./FormHelperText-BjzLojp-.js";import"./FormLabel-DvCW1uyR.js";import"./FormControl-CfvQd07B.js";import"./utils-DoM3o7-Q.js";import"./Input-CH_2lQsk.js";import"./OutlinedInput-DKeYBi_m.js";import"./Select-BMgXIlcS.js";import"./Select-BHp_jWyp.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./Popover-Dmejw1yb.js";import"./List-DHFLMipa.js";import"./Stack-CkMIcmCj.js";import"./Divider-h1ZBdIZM.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BDHpIiju.js";import"./Autocomplete-BJ0nd-qe.js";import"./Autocomplete-BQkJhiKy.js";import"./Close-CNJCk13c.js";import"./usePreviousProps-lGS7So8M.js";import"./Chip-OW73pPap.js";import"./ListSubheader-CSThAS8W.js";import"./Datepicker-3FMihzde.js";import"./PickersTextField-CtiuamZq.js";import"./index-DE2yUbZw.js";import"./InputAdornment-CE2XE6kN.js";import"./Dialog-B-kpVC9v.js";import"./DialogContext-Cyj82uMB.js";import"./DialogContent-UxQm40hF.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Cc_6uZ23.js";import"./ListItem-Do0aVwJB.js";import"./RadioGroup-aBwFr1Gc.js";import"./RadioGroup-tgAk2HNQ.js";import"./FormGroup-BPezQOgQ.js";const S=`There are two main changes made with the form components in \`@availity/element\`:

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
`,Sr={title:"Upgrading/BS4 Migration/Form Migration",tags:["autodocs"],parameters:{docs:{description:{component:`${S}`},source:{state:!0}}}},v=["Bulbasaur","Squirtle","Charmander"],n={render:()=>{const r=q({textField:u().max(200,"Text Field cannot exceed 200 characters.").required("This field is required."),selectField:u().required("This Field is required.").nullable(),datePicker:k().required("This Field is required.").nullable(),radio:u().required("A selection is required")}),o=m=>!r.describe().fields[m]?.optional||void 0,d=m=>console.log(m),s=f({defaultValues:{textField:"",selectField:void 0,datePicker:void 0,radio:""},mode:"onBlur",resolver:R(r)});return e.jsx(F,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(d),children:[e.jsx(h,{}),e.jsx(b,{name:"textField",label:"Textfield",margin:"normal",fullWidth:!0,helperText:"Max 200 characters",required:o("textField")}),e.jsx(x,{name:"selectField",FieldProps:{margin:"normal",label:"Select Field",placeholder:"Value",required:o("selectField")},options:v}),e.jsx(g,{name:"datePicker",FieldProps:{label:"Date",margin:"normal",required:o("datePicker")}}),e.jsxs(y,{name:"radio",label:"Radio Group",row:!0,"aria-required":!0,required:o("radio"),children:[e.jsx(l,{control:e.jsx(a,{}),value:"1",label:"Option 1"}),e.jsx(l,{control:e.jsx(a,{}),value:"2",label:"Option 2"})]}),e.jsx(c,{loading:s?.formState?.isSubmitting,type:"submit",sx:{mt:2},children:"Submit"})]})})}},i={render:()=>{const r=f({defaultValues:{textField:"",selectField:null,datePicker:null,radio:""}}),o=d=>console.log(d);return e.jsx(F,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(o),children:[e.jsx(h,{}),e.jsx(b,{name:"textField",label:"Textfield",margin:"normal",fullWidth:!0,required:!0,rules:{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}},helperText:"Max 200 characters"}),e.jsx(x,{name:"selectField",rules:{required:"This field is required"},FieldProps:{margin:"normal",label:"Select Field",placeholder:"Value",required:!0},options:v}),e.jsx(g,{name:"datePicker",rules:{required:"This field is required"},FieldProps:{label:"Date",margin:"normal",required:!0}}),e.jsxs(y,{name:"radio",label:"Radio Group",row:!0,"aria-required":!0,required:!0,rules:{required:"This field is required"},children:[e.jsx(l,{control:e.jsx(a,{}),value:"1",label:"Option 1"}),e.jsx(l,{control:e.jsx(a,{}),value:"2",label:"Option 2"})]}),e.jsx(c,{loading:r?.formState?.isSubmitting,type:"submit",sx:{mt:2},children:"Submit"})]})})}},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{margin:"normal",value:"value",label:"Read Only",id:"read-only",fullWidth:!0,slotProps:{input:{readOnly:!0}},helperText:"Read-only state should be used for values that cannot be changed by the user, but are still significant. i.e. when the value is populated based on another field value."}),e.jsx(p,{margin:"normal",value:"value",label:"Disabled",id:"disabled",fullWidth:!0,disabled:!0,helperText:"Disabled state should be used for values that are not applicable currently, but could be enabled in a different state."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"We are moving away from our extensive use of `disabled` fields in favor of `read-only` fields.\nThis is necessary for accessibility as `disabled` fields are not available to the keyboard/screenreader, so the filled in values cannot be seen.",...t.parameters?.docs?.description}}};const Tr=["_YupValidation","_RHFRules","_DisabledFields"];export{t as _DisabledFields,i as _RHFRules,n as _YupValidation,Tr as __namedExportsOrder,Sr as default};
