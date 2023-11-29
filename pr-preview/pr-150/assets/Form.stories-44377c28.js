import{a as e,j as t,F as Q}from"./jsx-runtime-a3bcee63.js";import{r as J}from"./index-570b25c1.js";import{u as q,C as m}from"./index.esm-d81a0d8c.js";import{T as v}from"./index-e4a617ec.js";import{A as h}from"./index-88e94556.js";import{D as U}from"./DatePicker-2be71c0c.js";import{F as X,d as w}from"./index-50383046.js";import{B}from"./index-6cb0af17.js";import{P as Z}from"./index-17d3f221.js";import{P as F}from"./index-bcabbcd5.js";import{T as c}from"./index-bf8151f5.js";import{C as A,G as r}from"./index-6e8561aa.js";import{S as $}from"./index-53288845.js";import{D as ee}from"./index-0ab557ce.js";import{d as re}from"./dayjs.min-bf3dc41b.js";import{I as oe}from"./InputAdornment-e680d39b.js";import{F as te}from"./FormLabel-d63492ff.js";import{R as ne,a as D}from"./RadioGroup-1ffa6b3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-e8a3b764.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./useId-6f4bfce0.js";import"./utils-3d35716f.js";import"./Select-a4487aaa.js";import"./react-is.production.min-a192e302.js";import"./Menu-5950de0d.js";import"./useTheme-c07bb8e7.js";import"./Popover-3b512651.js";import"./Modal-a1db681c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-039d2b0a.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-0cb1099f.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./IconButton-3fd19b93.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Autocomplete-e4071c8e.js";import"./Close-41aa9caa.js";import"./Tooltip-cae7e212.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";import"./LocalizationProvider-c8fffce8.js";import"./Grid-62fb460c.js";import"./extendSxProp-b1abb964.js";import"./Typography-f453bb5c.js";import"./Button-af0ca45f.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-89665416.js";import"./index-31fb134e.js";import"./Link-b7684510.js";import"./Breadcrumbs-6f4e28f9.js";import"./index-5e2cd6d4.js";import"./index-7513f905.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SwitchBase-1f7cd2d8.js";import"./FormGroup-93228893.js";var O=({FieldProps:u,...b})=>e(U,{...b,renderInput:l=>(l.inputProps&&(l.inputProps.placeholder="MM/DD/YYYY"),e(v,{...l,...u}))});const Xr={title:"Layouts/Form",tags:["autodocs"]},x=["Bulbasaur","Squirtle","Charmander"],y={render:()=>{var a;const{register:u,handleSubmit:b,formState:{errors:l},getValues:p,control:g,reset:T}=q(),[S,f]=J.useState(!1);return t(A,{children:[e(F,{sx:{padding:"12px 16px"},children:t("form",{onSubmit:b(o=>{console.log(o),f(!0)}),children:[e(c,{component:"h1",variant:"h2",sx:{marginBottom:"1rem"},children:"Simple Form"}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{xs:9,children:e(v,{label:"Example",fullWidth:!0,...u("text",{required:"This field is required",maxLength:{value:5,message:"Too long"}}),error:!!l.text,helperText:((a=l.text)==null?void 0:a.message)||"This is helper text",placeholder:"Value",required:!0})})}),e(r,{container:!0,marginBottom:"3rem",children:e(r,{xs:9,children:e(m,{control:g,name:"dropdown",render:({field:{onChange:o,value:d,onBlur:i}})=>e(h,{onChange:(s,C,G)=>{G==="clear"&&o(null),o(C)},onBlur:i,FieldProps:{label:"Dropdown",helperText:"This is helper text",placeholder:"Value"},options:x,value:d||null})})})}),t(r,{container:!0,justifyContent:"flex-end",children:[e(B,{type:"reset",color:"secondary",onClick:()=>{T(),f(!1)},sx:{marginRight:"1rem"},children:"Cancel"}),e(B,{type:"submit",children:"Submit"})]})]})}),S&&t(F,{sx:{padding:"12px 16px"},children:[e(c,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(p(),null,2)})]})]})},args:{}},W=re().startOf("D"),P={render:()=>{var a;const{register:u,handleSubmit:b,formState:{errors:l},getValues:p,control:g,reset:T}=q(),[S,f]=J.useState(!1);return e(A,{children:t(r,{container:!0,justifyContent:"center",children:[e(F,{sx:{padding:"12px 16px",maxWidth:"400px"},children:t("form",{onSubmit:b(o=>{console.log("submitted",o),f(!0)}),children:[e(c,{component:"h1",variant:"h2",sx:{marginBottom:"1rem"},children:"Filters"}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{xs:12,children:e(m,{control:g,name:"status",rules:{required:"This field is required"},render:({field:{onChange:o,onBlur:d,value:i,ref:s}})=>{var C,G;return e(h,{ref:s,onChange:(le,z,K)=>{K==="clear"&&o(null),o(z)},onBlur:d,value:i||null,FieldProps:{label:"Status",required:!0,error:!!((C=l.status)!=null&&C.message),helperText:(G=l.status)==null?void 0:G.message,placeholder:"Value"},options:["Pending","Accepted","Denied"]})}})})}),t(r,{container:!0,spacing:2,marginBottom:"1rem",children:[e(r,{xs:6,children:e(m,{control:g,name:"toDate",defaultValue:W,render:({field:{onChange:o,value:d,ref:i}})=>e(O,{label:"To Date",value:d,onChange:o,ref:i})})}),e(r,{xs:6,children:e(m,{control:g,name:"fromDate",defaultValue:W,render:({field:{onChange:o,value:d,ref:i}})=>e(O,{label:"From Date",value:d,onChange:o,ref:i})})})]}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{xs:12,children:e(v,{label:"Customer Name",fullWidth:!0,...u("customerName",{required:"This field is required"}),error:!!l.customerName,helperText:(a=l.customerName)==null?void 0:a.message,placeholder:"Value",required:!0})})}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{xs:12,children:e(m,{control:g,name:"payerName",render:({field:{onChange:o,onBlur:d,value:i}})=>e(h,{onChange:(s,C,G)=>{G==="clear"&&o(null),o(C)},onBlur:d,value:i||null,FieldProps:{label:"Payer Name",placeholder:"Value"},options:["Health Plan","Another Plan","Best Plan"]})})})}),t(r,{container:!0,spacing:2,children:[e(r,{xs:6,children:e(B,{onClick:()=>{f(!1),T()},type:"reset",color:"secondary",fullWidth:!0,children:"Reset Filters"})}),e(r,{xs:6,children:e(B,{type:"submit",fullWidth:!0,children:"Submit"})})]})]})}),S&&t(F,{sx:{padding:"12px 16px",maxWidth:"400px"},children:[e(c,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(p(),null,2)})]})]})})},args:{}},ie={active:"This Page",crumbs:[{name:"Previous Page",url:window.location.href}]},N=()=>e(c,{paragraph:!0,children:"This is introduction or helper text that helps the user understand the data that needs to be entered or selections that need to be made in this section."}),R=()=>t(c,{paragraph:!0,children:[e(c,{component:"span",color:"error.main",variant:"inherit",children:"*"})," ","is a required field."]}),V={render:()=>{var S,f;const{register:u,handleSubmit:b,formState:{errors:l},control:p,reset:g}=q();return t(Q,{children:[e(Z,{breadcrumbs:ie,headerText:"Page Header"}),e(A,{children:t("form",{onSubmit:b(n=>console.log("Submit",n)),children:[e(F,{sx:{padding:"8px 12px",marginBottom:"1rem"},children:t(r,{container:!0,direction:"column",children:[e(c,{variant:"h2",marginBottom:"1rem",children:"Section Header"}),t(r,{lg:6,children:[e(N,{}),e(R,{})]}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{lg:4,children:e(m,{control:p,name:"dropdown1",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})})}),t(r,{container:!0,spacing:2,marginBottom:"1rem",children:[e(r,{lg:4,children:e(v,{label:"Text Field",fullWidth:!0,...u("field1"),placeholder:"Value"})}),e(r,{lg:8,children:e(m,{control:p,name:"dropdown2",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})})]}),e(ee,{}),e(c,{marginY:"1rem",variant:"h3",children:"Subsection Header"}),t(r,{container:!0,spacing:2,children:[e(r,{lg:4,children:e(v,{label:"Text Field",fullWidth:!0,...u("field2"),placeholder:"Value"})}),e(r,{lg:4,children:e(m,{control:p,name:"dropdown3",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})}),e(r,{lg:4,children:e(m,{control:p,name:"dropdown4",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})})]}),e(r,{container:!0,spacing:2,marginY:"1rem",children:e(r,{lg:4,children:e(m,{control:p,name:"dropdown5",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})})})]})}),e(F,{sx:{padding:"8px 12px"},children:t(r,{container:!0,direction:"column",children:[e(c,{variant:"h2",marginBottom:"1rem",children:"Section Header"}),t(r,{lg:6,children:[e(N,{}),e(R,{})]}),e(r,{container:!0,spacing:2,children:e(r,{lg:12,marginBottom:"1rem",children:e(v,{label:"Text Field",fullWidth:!0,...u("field3",{required:"This field is required"}),required:!0,error:!!l.field3,helperText:(S=l.field3)==null?void 0:S.message,placeholder:"Search",InputProps:{startAdornment:e(oe,{position:"start",children:e($,{})})}})})}),e(r,{container:!0,spacing:2,marginBottom:"1rem",children:e(r,{lg:12,children:t(te,{error:!!l.radio,children:[e(X,{id:"radio-group",children:"Radio Group"}),e(ne,{"aria-labelledby":"radio-group",defaultValue:"3",...u("radio"),children:t(r,{container:!0,direction:"row",children:[e(w,{control:e(D,{}),value:"1",label:"Option 1"}),e(w,{control:e(D,{}),value:"2",label:"Option 2"}),e(w,{control:e(D,{}),value:"3",label:"Option 3"})]})})]})})}),t(r,{container:!0,spacing:2,marginBottom:"1rem",children:[e(r,{lg:6,children:e(v,{label:"Text Field",fullWidth:!0,...u("field4",{required:"This field is required"}),required:!0,error:!!l.field4,helperText:(f=l.field4)==null?void 0:f.message,placeholder:"Value"})}),e(r,{lg:6,children:e(m,{control:p,name:"dropdown6",render:({field:{onChange:n,value:a,onBlur:o}})=>e(h,{onChange:(d,i,s)=>{s==="clear"&&n(null),n(i)},onBlur:o,FieldProps:{label:"Dropdown",placeholder:"Value"},options:x,value:a||null})})})]})]})}),t(r,{container:!0,justifyContent:"flex-end",marginTop:"1rem",children:[e(B,{type:"reset",color:"secondary",onClick:()=>{g()},sx:{marginRight:"1rem"},children:"Cancel"}),e(B,{type:"submit",children:"Submit"})]})]})})]})},args:{}};var H,I,k;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        padding: '12px 16px'
      }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography component="h1" variant="h2" sx={{
            marginBottom: '1rem'
          }}>
              Simple Form
            </Typography>
            <Grid container spacing={2} marginBottom="1rem">
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
            <Grid container marginBottom="3rem">
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
              marginRight: '1rem'
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
}`,...(k=(I=y.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var j,L,Y;P.parameters={...P.parameters,docs:{...(j=P.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          padding: '12px 16px',
          maxWidth: '400px'
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography component="h1" variant="h2" sx={{
              marginBottom: '1rem'
            }}>
                Filters
              </Typography>
              <Grid container spacing={2} marginBottom="1rem">
                <Grid xs={12}>
                  <Controller control={control} name="status" rules={{
                  required: 'This field is required'
                }} render={({
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
                  required: true,
                  error: !!errors.status?.message,
                  helperText: errors.status?.message,
                  placeholder: 'Value'
                }} options={['Pending', 'Accepted', 'Denied']} />} />
                </Grid>
              </Grid>
              <Grid container spacing={2} marginBottom="1rem">
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
              <Grid container spacing={2} marginBottom="1rem">
                <Grid xs={12}>
                  <TextField label="Customer Name" fullWidth {...register('customerName', {
                  required: 'This field is required'
                })} error={!!errors.customerName} helperText={errors.customerName?.message} placeholder="Value" required />
                </Grid>
              </Grid>
              <Grid container spacing={2} marginBottom="1rem">
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
              <Grid container spacing={2}>
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
}`,...(Y=(L=P.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var _,M,E;V.parameters={...V.parameters,docs:{...(_=V.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            padding: '8px 12px',
            marginBottom: '1rem'
          }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom="1rem">
                  Section Header
                </Typography>
                <Grid lg={6}>
                  <SectionText />
                  <AsteriskMessage />
                </Grid>
                <Grid container spacing={2} marginBottom="1rem">
                  <Grid lg={4}>
                    <Controller control={control} name="dropdown1" render={({
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
                <Grid container spacing={2} marginBottom="1rem">
                  <Grid lg={4}>
                    <TextField label="Text Field" fullWidth {...register('field1')} placeholder="Value" />
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
                <Typography marginY="1rem" variant="h3">
                  Subsection Header
                </Typography>
                <Grid container spacing={2}>
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
                <Grid container spacing={2} marginY="1rem">
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
            padding: '8px 12px'
          }}>
              <Grid container direction="column">
                <Typography variant="h2" marginBottom="1rem">
                  Section Header
                </Typography>
                <Grid lg={6}>
                  <SectionText />
                  <AsteriskMessage />
                </Grid>
                <Grid container spacing={2}>
                  <Grid lg={12} marginBottom="1rem">
                    <TextField label="Text Field" fullWidth {...register('field3', {
                    required: 'This field is required'
                  })} required error={!!errors.field3} helperText={errors.field3?.message} placeholder="Search" InputProps={{
                    startAdornment: <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                  }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom="1rem">
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
                <Grid container spacing={2} marginBottom="1rem">
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
            <Grid container justifyContent="flex-end" marginTop="1rem">
              <Button type="reset" color="secondary" onClick={() => {
              reset();
            }} sx={{
              marginRight: '1rem'
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
}`,...(E=(M=V.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const Zr=["_SimpleForm","_CompactForm","_SectionedForm"];export{P as _CompactForm,V as _SectionedForm,y as _SimpleForm,Zr as __namedExportsOrder,Xr as default};
//# sourceMappingURL=Form.stories-44377c28.js.map
