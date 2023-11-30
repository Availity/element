import{a as e,j as t,F as U}from"./jsx-runtime-a3bcee63.js";import{r as K}from"./index-570b25c1.js";import{u as W,C as u}from"./index.esm-d81a0d8c.js";import{T as S}from"./index-e4a617ec.js";import{A as h}from"./index-88e94556.js";import{D as X}from"./DatePicker-2be71c0c.js";import{F as Z,d as D}from"./index-50383046.js";import{B}from"./index-6cb0af17.js";import{P as $}from"./index-17d3f221.js";import{P as G}from"./index-bcabbcd5.js";import{T as c}from"./index-bf8151f5.js";import{C as R,G as r}from"./index-6e8561aa.js";import{S as ee}from"./index-53288845.js";import{D as re}from"./index-0ab557ce.js";import{d as oe}from"./dayjs.min-bf3dc41b.js";import{I as te}from"./InputAdornment-e680d39b.js";import{F as ne}from"./FormLabel-d63492ff.js";import{R as ie,a as q}from"./RadioGroup-1ffa6b3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-e8a3b764.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./useId-6f4bfce0.js";import"./utils-3d35716f.js";import"./Select-a4487aaa.js";import"./react-is.production.min-a192e302.js";import"./Menu-5950de0d.js";import"./useTheme-c07bb8e7.js";import"./Popover-3b512651.js";import"./Modal-a1db681c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-039d2b0a.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-0cb1099f.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./IconButton-3fd19b93.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Autocomplete-e4071c8e.js";import"./Close-41aa9caa.js";import"./Tooltip-cae7e212.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";import"./LocalizationProvider-c8fffce8.js";import"./Grid-62fb460c.js";import"./extendSxProp-b1abb964.js";import"./Typography-f453bb5c.js";import"./Button-af0ca45f.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-89665416.js";import"./index-31fb134e.js";import"./Link-b7684510.js";import"./Breadcrumbs-6f4e28f9.js";import"./index-5e2cd6d4.js";import"./index-7513f905.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SwitchBase-1f7cd2d8.js";import"./FormGroup-93228893.js";var N=({FieldProps:m,...x})=>e(X,{...x,renderInput:n=>(n.inputProps&&(n.inputProps.placeholder="MM/DD/YYYY"),e(S,{...n,...m}))});const Xr={title:"Layouts/Form",tags:["autodocs"]},A=({marginBottom:m})=>e(c,{paragraph:!0,sx:{marginBottom:m},children:"This is introduction or helper text that helps the user understand the data that needs to be entered or selections that need to be made in this section."}),O=({marginBottom:m})=>t(c,{paragraph:!0,sx:{marginBottom:m},children:[e(c,{component:"span",color:"error.main",variant:"inherit",children:"*"})," ","is a required field."]}),v=["Bulbasaur","Squirtle","Charmander"],y={render:()=>{var b;const{register:m,handleSubmit:x,formState:{errors:n},getValues:p,control:g,reset:T}=W(),[C,f]=K.useState(!1);return t(R,{children:[e(G,{sx:{padding:"1.5rem"},children:t("form",{onSubmit:x(o=>{console.log(o),f(!0)}),children:[e(c,{component:"h1",variant:"h2",sx:{marginBottom:".5rem"},children:"Simple Form"}),e(A,{marginBottom:"1.5rem"}),e(O,{marginBottom:"1.5rem"}),e(r,{container:!0,marginBottom:"1.5rem",children:e(r,{xs:9,children:e(S,{label:"Example",fullWidth:!0,...m("text",{required:"This field is required",maxLength:{value:5,message:"Too long"}}),error:!!n.text,helperText:((b=n.text)==null?void 0:b.message)||"This is helper text",placeholder:"Value",required:!0})})}),e(r,{container:!0,marginBottom:"1.5rem",children:e(r,{xs:9,children:e(u,{control:g,name:"dropdown",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",helperText:"This is helper text",placeholder:"Value"},options:v,value:i||null})})})}),t(r,{container:!0,justifyContent:"flex-end",children:[e(B,{type:"reset",color:"secondary",onClick:()=>{T(),f(!1)},sx:{marginRight:".5rem"},children:"Cancel"}),e(B,{type:"submit",children:"Submit"})]})]})}),C&&t(G,{sx:{padding:"12px 16px"},children:[e(c,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(p(),null,2)})]})]})},args:{}},I=oe().startOf("D"),P={render:()=>{var b;const{register:m,handleSubmit:x,formState:{errors:n},getValues:p,control:g,reset:T}=W(),[C,f]=K.useState(!1);return e(R,{children:t(r,{container:!0,justifyContent:"center",children:[e(G,{sx:{padding:"1rem",maxWidth:"400px"},children:t("form",{onSubmit:x(o=>{console.log("submitted",o),f(!0)}),children:[e(c,{component:"h1",variant:"h2",sx:{marginBottom:"1rem"},children:"Filters"}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,children:e(u,{control:g,name:"status",render:({field:{onChange:o,onBlur:i,value:l,ref:s}})=>{var a,d;return e(h,{ref:s,onChange:(H,V,Q)=>{Q==="clear"&&o(null),o(V)},onBlur:i,value:l||null,FieldProps:{label:"Status",error:!!((a=n.status)!=null&&a.message),helperText:(d=n.status)==null?void 0:d.message,placeholder:"Value"},options:["Pending","Accepted","Denied"]})}})})}),t(r,{container:!0,spacing:1,marginBottom:"1rem",children:[e(r,{xs:6,children:e(u,{control:g,name:"toDate",defaultValue:I,render:({field:{onChange:o,value:i,ref:l}})=>e(N,{label:"To Date",value:i,onChange:o,ref:l})})}),e(r,{xs:6,children:e(u,{control:g,name:"fromDate",defaultValue:I,render:({field:{onChange:o,value:i,ref:l}})=>e(N,{label:"From Date",value:i,onChange:o,ref:l})})})]}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,children:e(S,{label:"Customer Name",fullWidth:!0,...m("customerName"),error:!!n.customerName,helperText:(b=n.customerName)==null?void 0:b.message,placeholder:"Value"})})}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,children:e(u,{control:g,name:"payerName",render:({field:{onChange:o,onBlur:i,value:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:i,value:l||null,FieldProps:{label:"Payer Name",placeholder:"Value"},options:["Health Plan","Another Plan","Best Plan"]})})})}),t(r,{container:!0,spacing:1,children:[e(r,{xs:6,children:e(B,{onClick:()=>{f(!1),T()},type:"reset",color:"secondary",fullWidth:!0,children:"Reset Filters"})}),e(r,{xs:6,children:e(B,{type:"submit",fullWidth:!0,children:"Submit"})})]})]})}),C&&t(G,{sx:{padding:"12px 16px",maxWidth:"400px"},children:[e(c,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(p(),null,2)})]})]})})},args:{}},le={active:"This Page",crumbs:[{name:"Previous Page",url:window.location.href}]},w={render:()=>{var C,f,F,b;const{register:m,handleSubmit:x,formState:{errors:n},control:p,reset:g}=W();return t(U,{children:[e($,{breadcrumbs:le,headerText:"Page Header"}),e(R,{children:t("form",{onSubmit:x(o=>console.log("Submit",o)),children:[e(G,{sx:{padding:"1.5rem",marginBottom:"1.25rem"},children:t(r,{container:!0,direction:"column",children:[e(c,{variant:"h2",marginBottom:".5rem",children:"Section Header"}),t(r,{lg:6,children:[e(A,{marginBottom:"1.25rem"}),e(O,{marginBottom:"1.25rem"})]}),e(r,{lg:4,paddingRight:".5rem",marginBottom:"1.25rem",children:e(u,{control:p,name:"dropdown1",rules:{required:"This field is required"},render:({field:{onChange:o,value:i,onBlur:l}})=>{var s,a;return e(h,{onChange:(d,H,V)=>{V==="clear"&&o(null),o(H)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value",required:!0,error:!!((s=n.dropdown1)!=null&&s.message),helperText:(a=n.dropdown1)==null?void 0:a.message},options:v,value:i||null})}})}),t(r,{container:!0,spacing:1.5,marginBottom:"1.25rem",children:[e(r,{lg:4,children:e(S,{label:"Text Field",fullWidth:!0,required:!0,...m("field1",{required:"This field is required"}),error:!!((C=n.field1)!=null&&C.message),helperText:((f=n.field1)==null?void 0:f.message)||"Help text",placeholder:"Value"})}),e(r,{lg:8,children:e(u,{control:p,name:"dropdown2",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value"},options:v,value:i||null})})})]}),e(re,{}),e(c,{marginY:"1.25rem",variant:"h3",children:"Subsection Header"}),t(r,{container:!0,spacing:1.5,marginBottom:"1.25rem",children:[e(r,{lg:4,children:e(S,{label:"Text Field",fullWidth:!0,...m("field2"),placeholder:"Value"})}),e(r,{lg:4,children:e(u,{control:p,name:"dropdown3",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value"},options:v,value:i||null})})}),e(r,{lg:4,children:e(u,{control:p,name:"dropdown4",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value"},options:v,value:i||null})})})]}),e(r,{container:!0,spacing:2,marginBottom:"1.25rem",children:e(r,{lg:4,children:e(u,{control:p,name:"dropdown5",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value"},options:v,value:i||null})})})})]})}),e(G,{sx:{padding:"1.5rem"},children:t(r,{container:!0,direction:"column",children:[e(c,{variant:"h2",marginBottom:".5rem",children:"Section Header"}),t(r,{lg:6,children:[e(A,{marginBottom:"1.25rem"}),e(O,{marginBottom:"1.25rem"})]}),e(r,{container:!0,children:e(r,{lg:12,marginBottom:"1.25rem",children:e(S,{label:"Text Field",fullWidth:!0,...m("field3",{required:"This field is required"}),required:!0,error:!!n.field3,helperText:(F=n.field3)==null?void 0:F.message,placeholder:"Search",InputProps:{startAdornment:e(te,{position:"start",children:e(ee,{})})}})})}),e(r,{container:!0,spacing:1.5,marginBottom:"1.25rem",children:e(r,{lg:12,children:t(ne,{error:!!n.radio,children:[e(Z,{id:"radio-group",children:"Radio Group"}),e(ie,{"aria-labelledby":"radio-group",defaultValue:"3",...m("radio"),children:t(r,{container:!0,direction:"row",children:[e(D,{control:e(q,{}),value:"1",label:"Option 1"}),e(D,{control:e(q,{}),value:"2",label:"Option 2"}),e(D,{control:e(q,{}),value:"3",label:"Option 3"})]})})]})})}),t(r,{container:!0,spacing:1.5,marginBottom:"1.25rem",children:[e(r,{lg:6,children:e(S,{label:"Text Field",fullWidth:!0,...m("field4",{required:"This field is required"}),required:!0,error:!!n.field4,helperText:(b=n.field4)==null?void 0:b.message,placeholder:"Value"})}),e(r,{lg:6,children:e(u,{control:p,name:"dropdown6",render:({field:{onChange:o,value:i,onBlur:l}})=>e(h,{onChange:(s,a,d)=>{d==="clear"&&o(null),o(a)},onBlur:l,FieldProps:{label:"Dropdown",placeholder:"Value"},options:v,value:i||null})})})]})]})}),t(r,{container:!0,justifyContent:"flex-end",marginTop:"1.25rem",children:[e(B,{type:"reset",color:"secondary",onClick:()=>{g()},sx:{marginRight:".5rem"},children:"Cancel"}),e(B,{type:"submit",children:"Submit"})]})]})})]})},args:{}};var k,j,L;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
      getValues,
      control,
      reset
    } = useForm<SimpleFormInputs>();
    const [submitted, setSubmitted] = useState(false);
    const onSubmit: SubmitHandler<SimpleFormInputs> = data => {
      console.log(data);
      setSubmitted(true);
    };
    return <Container>
        <Paper sx={{
        padding: '1.5rem'
      }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography component="h1" variant="h2" sx={{
            marginBottom: '.5rem'
          }}>
              Simple Form
            </Typography>
            <SectionText marginBottom="1.5rem" />
            <AsteriskMessage marginBottom="1.5rem" />
            <Grid container marginBottom="1.5rem">
              <Grid xs={9}>
                <TextField label="Example" fullWidth {...register('text', {
                required: 'This field is required',
                maxLength: {
                  value: 5,
                  message: 'Too long'
                }
              })} error={!!errors.text} helperText={errors.text?.message || 'This is helper text'} placeholder="Value" required />
              </Grid>
            </Grid>
            <Grid container marginBottom="1.5rem">
              <Grid xs={9}>
                <Controller control={control} name="dropdown" render={({
                field: {
                  onChange,
                  value,
                  onBlur
                }
              }) => {
                return <Autocomplete onChange={(event, value, reason) => {
                  if (reason === 'clear') {
                    onChange(null);
                  }
                  onChange(value);
                }} onBlur={onBlur} FieldProps={{
                  label: 'Dropdown',
                  helperText: 'This is helper text',
                  placeholder: 'Value'
                }} options={dropdownOptions} value={value || null} />;
              }} />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Button type="reset" color="secondary" onClick={() => {
              reset();
              setSubmitted(false);
            }} sx={{
              marginRight: '.5rem'
            }}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Grid>
          </form>
        </Paper>
        {submitted && <Paper sx={{
        padding: '12px 16px'
      }}>
            <Typography variant="h2">Submitted Values</Typography>
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </Paper>}
      </Container>;
  },
  args: {}
}`,...(L=(j=y.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,M,Y;P.parameters={...P.parameters,docs:{...(_=P.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
      getValues,
      control,
      reset
    } = useForm<CompactFormInputs>();
    const [submitted, setSubmitted] = useState(false);
    const onSubmit: SubmitHandler<CompactFormInputs> = data => {
      console.log('submitted', data);
      setSubmitted(true);
    };
    return <Container>
        <Grid container justifyContent="center">
          <Paper sx={{
          padding: '1rem',
          maxWidth: '400px'
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography component="h1" variant="h2" sx={{
              marginBottom: '1rem'
            }}>
                Filters
              </Typography>
              <Grid container marginBottom="1rem">
                <Grid xs={12}>
                  <Controller control={control} name="status" render={({
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                }) => <Autocomplete ref={ref} onChange={(event, value, reason) => {
                  if (reason === 'clear') {
                    onChange(null);
                  }
                  onChange(value);
                }} onBlur={onBlur} value={value || null} FieldProps={{
                  label: 'Status',
                  error: !!errors.status?.message,
                  helperText: errors.status?.message,
                  placeholder: 'Value'
                }} options={['Pending', 'Accepted', 'Denied']} />} />
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom="1rem">
                <Grid xs={6}>
                  <Controller control={control} name="toDate" defaultValue={today} render={({
                  field: {
                    onChange,
                    value,
                    ref
                  }
                }) => <Datepicker label="To Date" value={value} onChange={onChange} ref={ref} />} />
                </Grid>
                <Grid xs={6}>
                  <Controller control={control} name="fromDate" defaultValue={today} render={({
                  field: {
                    onChange,
                    value,
                    ref
                  }
                }) => <Datepicker label="From Date" value={value} onChange={onChange} ref={ref} />} />
                </Grid>
              </Grid>
              <Grid container marginBottom="1rem">
                <Grid xs={12}>
                  <TextField label="Customer Name" fullWidth {...register('customerName')} error={!!errors.customerName} helperText={errors.customerName?.message} placeholder="Value" />
                </Grid>
              </Grid>
              <Grid container marginBottom="1rem">
                <Grid xs={12}>
                  <Controller control={control} name="payerName" render={({
                  field: {
                    onChange,
                    onBlur,
                    value
                  }
                }) => <Autocomplete onChange={(event, value, reason) => {
                  if (reason === 'clear') {
                    onChange(null);
                  }
                  onChange(value);
                }} onBlur={onBlur} value={value || null} FieldProps={{
                  label: 'Payer Name',
                  placeholder: 'Value'
                }} options={['Health Plan', 'Another Plan', 'Best Plan']} />} />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid xs={6}>
                  <Button onClick={() => {
                  setSubmitted(false);
                  reset();
                }} type="reset" color="secondary" fullWidth>
                    Reset Filters
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
          {submitted && <Paper sx={{
          padding: '12px 16px',
          maxWidth: '400px'
        }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            </Paper>}
        </Grid>
      </Container>;
  },
  args: {}
}`,...(Y=(M=P.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var E,J,z;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
      control,
      reset
    } = useForm<SectionedFormInputs>();
    const onSubmit: SubmitHandler<SectionedFormInputs> = data => console.log('Submit', data);
    return <>
        <PageHeader breadcrumbs={crumbs} headerText="Page Header" />
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={{
            padding: '1.5rem',
            marginBottom: '1.25rem'
          }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom=".5rem">
                  Section Header
                </Typography>
                <Grid lg={6}>
                  <SectionText marginBottom="1.25rem" />
                  <AsteriskMessage marginBottom="1.25rem" />
                </Grid>
                <Grid lg={4} paddingRight=".5rem" marginBottom="1.25rem">
                  <Controller control={control} name="dropdown1" rules={{
                  required: 'This field is required'
                }} render={({
                  field: {
                    onChange,
                    value,
                    onBlur
                  }
                }) => {
                  return <Autocomplete onChange={(event, value, reason) => {
                    if (reason === 'clear') {
                      onChange(null);
                    }
                    onChange(value);
                  }} onBlur={onBlur} FieldProps={{
                    label: 'Dropdown',
                    placeholder: 'Value',
                    required: true,
                    error: !!errors.dropdown1?.message,
                    helperText: errors.dropdown1?.message
                  }} options={dropdownOptions} value={value || null} />;
                }} />
                </Grid>
                <Grid container spacing={1.5} marginBottom="1.25rem">
                  <Grid lg={4}>
                    <TextField label="Text Field" fullWidth required {...register('field1', {
                    required: 'This field is required'
                  })} error={!!errors.field1?.message} helperText={errors.field1?.message || 'Help text'} placeholder="Value" />
                  </Grid>
                  <Grid lg={8}>
                    <Controller control={control} name="dropdown2" render={({
                    field: {
                      onChange,
                      value,
                      onBlur
                    }
                  }) => {
                    return <Autocomplete onChange={(event, value, reason) => {
                      if (reason === 'clear') {
                        onChange(null);
                      }
                      onChange(value);
                    }} onBlur={onBlur} FieldProps={{
                      label: 'Dropdown',
                      placeholder: 'Value'
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
                <Divider />
                <Typography marginY="1.25rem" variant="h3">
                  Subsection Header
                </Typography>
                <Grid container spacing={1.5} marginBottom="1.25rem">
                  <Grid lg={4}>
                    <TextField label="Text Field" fullWidth {...register('field2')} placeholder="Value" />
                  </Grid>
                  <Grid lg={4}>
                    <Controller control={control} name="dropdown3" render={({
                    field: {
                      onChange,
                      value,
                      onBlur
                    }
                  }) => {
                    return <Autocomplete onChange={(event, value, reason) => {
                      if (reason === 'clear') {
                        onChange(null);
                      }
                      onChange(value);
                    }} onBlur={onBlur} FieldProps={{
                      label: 'Dropdown',
                      placeholder: 'Value'
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                  <Grid lg={4}>
                    <Controller control={control} name="dropdown4" render={({
                    field: {
                      onChange,
                      value,
                      onBlur
                    }
                  }) => {
                    return <Autocomplete onChange={(event, value, reason) => {
                      if (reason === 'clear') {
                        onChange(null);
                      }
                      onChange(value);
                    }} onBlur={onBlur} FieldProps={{
                      label: 'Dropdown',
                      placeholder: 'Value'
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom="1.25rem">
                  <Grid lg={4}>
                    <Controller control={control} name="dropdown5" render={({
                    field: {
                      onChange,
                      value,
                      onBlur
                    }
                  }) => {
                    return <Autocomplete onChange={(event, value, reason) => {
                      if (reason === 'clear') {
                        onChange(null);
                      }
                      onChange(value);
                    }} onBlur={onBlur} FieldProps={{
                      label: 'Dropdown',
                      placeholder: 'Value'
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{
            padding: '1.5rem'
          }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom=".5rem">
                  Section Header
                </Typography>
                <Grid lg={6}>
                  <SectionText marginBottom="1.25rem" />
                  <AsteriskMessage marginBottom="1.25rem" />
                </Grid>
                <Grid container>
                  <Grid lg={12} marginBottom="1.25rem">
                    <TextField label="Text Field" fullWidth {...register('field3', {
                    required: 'This field is required'
                  })} required error={!!errors.field3} helperText={errors.field3?.message} placeholder="Search" InputProps={{
                    startAdornment: <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                  }} />
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} marginBottom="1.25rem">
                  <Grid lg={12}>
                    <FormControl error={!!errors.radio}>
                      <FormLabel id="radio-group">Radio Group</FormLabel>
                      <RadioGroup aria-labelledby="radio-group" defaultValue="3" {...register('radio')}>
                        <Grid container direction="row">
                          <FormControlLabel control={<Radio />} value="1" label="Option 1" />
                          <FormControlLabel control={<Radio />} value="2" label="Option 2" />
                          <FormControlLabel control={<Radio />} value="3" label="Option 3" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} marginBottom="1.25rem">
                  <Grid lg={6}>
                    <TextField label="Text Field" fullWidth {...register('field4', {
                    required: 'This field is required'
                  })} required error={!!errors.field4} helperText={errors.field4?.message} placeholder="Value" />
                  </Grid>
                  <Grid lg={6}>
                    <Controller control={control} name="dropdown6" render={({
                    field: {
                      onChange,
                      value,
                      onBlur
                    }
                  }) => {
                    return <Autocomplete onChange={(event, value, reason) => {
                      if (reason === 'clear') {
                        onChange(null);
                      }
                      onChange(value);
                    }} onBlur={onBlur} FieldProps={{
                      label: 'Dropdown',
                      placeholder: 'Value'
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Grid container justifyContent="flex-end" marginTop="1.25rem">
              <Button type="reset" color="secondary" onClick={() => {
              reset();
            }} sx={{
              marginRight: '.5rem'
            }}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Grid>
          </form>
        </Container>
      </>;
  },
  args: {}
}`,...(z=(J=w.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};const Zr=["_SimpleForm","_CompactForm","_SectionedForm"];export{P as _CompactForm,w as _SectionedForm,y as _SimpleForm,Zr as __namedExportsOrder,Xr as default};
//# sourceMappingURL=Form.stories-1ecfda7d.js.map
