import{a as e,j as o,F as Z}from"./jsx-runtime-a3bcee63.js";import{r as I}from"./index-570b25c1.js";import{u as O,C as c}from"./index.esm-d81a0d8c.js";import{T as G}from"./index-f5626941.js";import{A as f}from"./index-ebb85854.js";import{D as $}from"./DatePicker-9be258c3.js";import{F as ee,d as N}from"./index-50383046.js";import{B as T,I as re}from"./index-6cb0af17.js";import{C as oe,S as te}from"./index-53288845.js";import{P as ne}from"./index-f4f107db.js";import{P as y}from"./index-bcabbcd5.js";import{T as h}from"./index-bf8151f5.js";import{C as W,G as r,S as ie}from"./index-6e8561aa.js";import{D as le}from"./index-0ab557ce.js";import{d as ae}from"./dayjs.min-bf3dc41b.js";import{I as de}from"./InputAdornment-e680d39b.js";import{F as me}from"./FormLabel-d63492ff.js";import{R as se,a as k}from"./RadioGroup-1ffa6b3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-e8a3b764.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./useId-6f4bfce0.js";import"./utils-3d35716f.js";import"./Select-a4487aaa.js";import"./react-is.production.min-a192e302.js";import"./Menu-5950de0d.js";import"./useTheme-c07bb8e7.js";import"./Popover-3b512651.js";import"./Modal-a1db681c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-039d2b0a.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-0cb1099f.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./IconButton-3fd19b93.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Autocomplete-e4071c8e.js";import"./Close-41aa9caa.js";import"./Tooltip-cae7e212.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";import"./LocalizationProvider-c8fffce8.js";import"./Grid-62fb460c.js";import"./extendSxProp-b1abb964.js";import"./Typography-f453bb5c.js";import"./Button-af0ca45f.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-89665416.js";import"./index-31fb134e.js";import"./Link-b7684510.js";import"./Breadcrumbs-6f4e28f9.js";import"./index-1a0c0a0a.js";import"./index-7513f905.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./SwitchBase-1f7cd2d8.js";import"./FormGroup-93228893.js";var R=({FieldProps:d,...B})=>e($,{...B,renderInput:n=>(n.inputProps&&(n.inputProps.placeholder="MM/DD/YYYY"),e(G,{...n,...d}))});const oo={title:"Layouts/Form",tags:["autodocs"]},q=({marginBottom:d})=>e(h,{paragraph:!0,sx:{marginBottom:d},children:"This is introduction or helper text that helps the user understand the data that needs to be entered or selections that need to be made in this section."}),A=({marginBottom:d})=>o(h,{paragraph:!0,sx:{marginBottom:d},children:[e(h,{component:"span",color:"error.main",variant:"inherit",children:"*"})," ","is a required field."]}),C=["Bulbasaur","Squirtle","Charmander"],V={render:()=>{var S;const{register:d,handleSubmit:B,formState:{errors:n},getValues:g,control:x,reset:F}=O(),[P,b]=I.useState(!1);return o(W,{children:[e(y,{sx:{padding:"1.5rem"},children:o("form",{onSubmit:B(i=>{console.log(i),b(!0)}),children:[e(h,{component:"h1",variant:"h2",sx:{marginBottom:".5rem"},children:"Simple Form"}),e(r,{container:!0,children:o(r,{xs:12,md:6,children:[e(q,{marginBottom:"1rem"}),e(A,{marginBottom:"1rem"})]})}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,md:6,children:e(G,{label:"Example",fullWidth:!0,...d("text",{required:"This field is required",maxLength:{value:5,message:"Too long"}}),error:!!n.text,helperText:((S=n.text)==null?void 0:S.message)||"This is helper text",placeholder:"Value",required:!0})})}),e(r,{container:!0,marginBottom:"2rem",children:e(r,{xs:12,md:6,children:e(c,{control:x,name:"dropdown",render:({field:{onChange:i,value:s,onBlur:u}})=>e(f,{onChange:(t,l,a)=>{a==="clear"&&i(null),i(l)},onBlur:u,FieldProps:{label:"Dropdown",helperText:"This is helper text",placeholder:"Value"},options:C,value:s||null})})})}),o(r,{container:!0,justifyContent:"flex-end",children:[e(T,{type:"reset",color:"secondary",onClick:()=>{F(),b(!1)},sx:{marginRight:".5rem"},children:"Cancel"}),e(T,{type:"submit",children:"Submit"})]})]})}),P&&o(y,{sx:{padding:"12px 16px"},children:[e(h,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(g(),null,2)})]})]})},args:{}},j=ae().startOf("D"),w={render:()=>{var S;const{register:d,handleSubmit:B,formState:{errors:n},getValues:g,control:x,reset:F}=O(),[P,b]=I.useState(!1);return e(W,{children:o(r,{container:!0,justifyContent:"center",children:[e(y,{sx:{padding:"1rem",maxWidth:"400px"},children:o("form",{onSubmit:B(i=>{console.log("submitted",i),b(!0)}),children:[o(ie,{direction:"row",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",children:[e(h,{component:"h1",variant:"h5",children:"Filters"}),e(re,{title:"close",size:"small",children:e(oe,{})})]}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,children:e(c,{control:x,name:"status",render:({field:{onChange:i,onBlur:s,value:u,ref:t}})=>{var l,a;return e(f,{ref:t,onChange:(v,m,p)=>{p==="clear"&&i(null),i(m)},onBlur:s,value:u||null,FieldProps:{label:"Status",error:!!((l=n.status)!=null&&l.message),helperText:(a=n.status)==null?void 0:a.message,placeholder:"Value"},options:["Pending","Accepted","Denied"]})}})})}),o(r,{container:!0,columnSpacing:2,marginBottom:"1rem",children:[e(r,{xs:6,children:e(c,{control:x,name:"toDate",defaultValue:j,render:({field:{onChange:i,value:s,ref:u}})=>e(R,{label:"To Date",value:s,onChange:i,ref:u})})}),e(r,{xs:6,children:e(c,{control:x,name:"fromDate",defaultValue:j,render:({field:{onChange:i,value:s,ref:u}})=>e(R,{label:"From Date",value:s,onChange:i,ref:u})})})]}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{xs:12,children:e(G,{label:"Customer Name",fullWidth:!0,...d("customerName"),error:!!n.customerName,helperText:(S=n.customerName)==null?void 0:S.message,placeholder:"Value"})})}),e(r,{container:!0,marginBottom:"2rem",children:e(r,{xs:12,children:e(c,{control:x,name:"payerName",render:({field:{onChange:i,onBlur:s,value:u}})=>e(f,{onChange:(t,l,a)=>{a==="clear"&&i(null),i(l)},onBlur:s,value:u||null,FieldProps:{label:"Payer Name",placeholder:"Value"},options:["Health Plan","Another Plan","Best Plan"]})})})}),o(r,{container:!0,spacing:1,children:[e(r,{xs:6,children:e(T,{onClick:()=>{b(!1),F()},type:"reset",color:"secondary",fullWidth:!0,children:"Reset Filters"})}),e(r,{xs:6,children:e(T,{type:"submit",fullWidth:!0,children:"Submit"})})]})]})}),P&&o(y,{sx:{padding:"12px 16px",maxWidth:"400px"},children:[e(h,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(g(),null,2)})]})]})})},args:{}},ue={active:"This Page",crumbs:[{name:"Previous Page",url:window.location.href}]},D={render:()=>{var S,i,s,u;const{register:d,handleSubmit:B,formState:{errors:n},control:g,reset:x,getValues:F}=O(),[P,b]=I.useState(!1);return o(Z,{children:[e(ne,{breadcrumbs:ue,headerText:"Page Header"}),o(W,{children:[o("form",{onSubmit:B(t=>{console.log("Submit",t),b(!0)}),children:[e(y,{sx:{padding:"1.5rem",marginBottom:"1.25rem"},children:o(r,{container:!0,direction:"column",children:[e(h,{variant:"h2",marginBottom:".5rem",children:"Section Header"}),o(r,{md:6,children:[e(q,{marginBottom:"1rem"}),e(A,{marginBottom:"1rem"})]}),e(r,{container:!0,spacing:{md:3},children:e(r,{xs:12,md:4,children:e(c,{control:g,name:"dropdown1",rules:{required:"This field is required"},render:({field:{onChange:t,value:l,onBlur:a}})=>{var v,m;return e(f,{onChange:(p,U,X)=>{X==="clear"&&t(null),t(U)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",required:!0,error:!!((v=n.dropdown1)!=null&&v.message),helperText:(m=n.dropdown1)==null?void 0:m.message},options:C,value:l||null,sx:{marginBottom:"1.25rem",minHeight:"0px"}})}})})}),o(r,{container:!0,spacing:{sm:2,md:3},children:[e(r,{xs:12,sm:6,md:4,lg:4,children:e(G,{label:"Text Field",fullWidth:!0,required:!0,...d("field1",{required:"This field is required"}),error:!!((S=n.field1)!=null&&S.message),helperText:((i=n.field1)==null?void 0:i.message)||"Help text",placeholder:"Value",sx:{marginBottom:"1.25rem"}})}),e(r,{xs:12,sm:6,md:8,lg:8,children:e(c,{control:g,name:"dropdown2",render:({field:{onChange:t,value:l,onBlur:a}})=>e(f,{onChange:(v,m,p)=>{p==="clear"&&t(null),t(m)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",sx:{marginBottom:"1.25rem"}},options:C,value:l||null})})})]}),e(le,{}),e(h,{marginY:"1.25rem",variant:"h4",component:"h3",children:"Subsection Header"}),o(r,{container:!0,columnSpacing:{sm:2,md:3},children:[e(r,{xs:12,sm:6,md:4,children:e(G,{label:"Text Field",fullWidth:!0,...d("field2"),placeholder:"Value",sx:{marginBottom:"1.25rem"}})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:g,name:"dropdown3",render:({field:{onChange:t,value:l,onBlur:a}})=>e(f,{onChange:(v,m,p)=>{p==="clear"&&t(null),t(m)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",sx:{marginBottom:"1.25rem"}},options:C,value:l||null})})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:g,name:"dropdown4",render:({field:{onChange:t,value:l,onBlur:a}})=>e(f,{onChange:(v,m,p)=>{p==="clear"&&t(null),t(m)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",sx:{marginBottom:"1.25rem"}},options:C,value:l||null})})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:g,name:"dropdown5",render:({field:{onChange:t,value:l,onBlur:a}})=>e(f,{onChange:(v,m,p)=>{p==="clear"&&t(null),t(m)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",sx:{marginBottom:"1.25rem"}},options:C,value:l||null})})})]}),e(r,{container:!0,children:e(T,{color:"secondary",sx:{marginTop:".75rem"},children:"Secondary Action Button"})})]})}),e(y,{sx:{padding:"1.5rem"},children:o(r,{container:!0,direction:"column",children:[e(h,{variant:"h2",marginBottom:".5rem",children:"Section Header"}),o(r,{lg:6,children:[e(q,{marginBottom:"1rem"}),e(A,{marginBottom:"1rem"})]}),e(r,{container:!0,children:e(r,{xs:12,marginBottom:"1.25rem",children:e(G,{label:"Text Field",fullWidth:!0,...d("field3",{required:"This field is required"}),required:!0,error:!!n.field3,helperText:(s=n.field3)==null?void 0:s.message,placeholder:"Search",InputProps:{startAdornment:e(de,{position:"start",children:e(te,{})})}})})}),e(r,{container:!0,marginBottom:"1rem",children:e(r,{lg:12,children:o(me,{error:!!n.radio,children:[e(ee,{id:"radio-group",children:"Radio Group"}),e(se,{"aria-labelledby":"radio-group",defaultValue:"3",...d("radio"),children:o(r,{container:!0,direction:"row",children:[e(N,{control:e(k,{}),value:"1",label:"Option 1",sx:{marginRight:"16px"}}),e(N,{control:e(k,{}),value:"2",label:"Option 2"})]})})]})})}),o(r,{container:!0,spacing:1.5,marginBottom:"1.25rem",columnSpacing:{sm:2,md:3},children:[e(r,{xs:12,sm:6,children:e(G,{label:"Text Field",fullWidth:!0,...d("field4",{required:"This field is required"}),required:!0,error:!!n.field4,helperText:(u=n.field4)==null?void 0:u.message,placeholder:"Value"})}),e(r,{xs:12,sm:6,children:e(c,{control:g,name:"dropdown6",render:({field:{onChange:t,value:l,onBlur:a}})=>e(f,{onChange:(v,m,p)=>{p==="clear"&&t(null),t(m)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})})]})]})}),o(r,{container:!0,justifyContent:"flex-end",marginTop:"1.25rem",children:[e(T,{type:"reset",color:"secondary",onClick:()=>{x(),b(!1)},sx:{marginRight:".5rem"},children:"Cancel"}),e(T,{type:"submit",children:"Submit"})]})]}),P&&o(y,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e(h,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(F(),null,2)})]})]})]})},args:{}};var L,_,J;V.parameters={...V.parameters,docs:{...(L=V.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            <Grid container>
              <Grid xs={12} md={6}>
                <SectionText marginBottom="1rem" />
                <AsteriskMessage marginBottom="1rem" />
              </Grid>
            </Grid>
            <Grid container marginBottom="1rem">
              <Grid xs={12} md={6}>
                <TextField label="Example" fullWidth {...register('text', {
                required: 'This field is required',
                maxLength: {
                  value: 5,
                  message: 'Too long'
                }
              })} error={!!errors.text} helperText={errors.text?.message || 'This is helper text'} placeholder="Value" required />
              </Grid>
            </Grid>
            <Grid container marginBottom="2rem">
              <Grid xs={12} md={6}>
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
}`,...(J=(_=V.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var M,Y,E;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
              <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom="1rem">
                <Typography component="h1" variant="h5">
                  Filters
                </Typography>
                <IconButton title="close" size="small">
                  <CloseIcon />
                </IconButton>
              </Stack>
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
              <Grid container columnSpacing={2} marginBottom="1rem">
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
              <Grid container marginBottom="2rem">
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
}`,...(E=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var z,K,Q;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
      control,
      reset,
      getValues
    } = useForm<SectionedFormInputs>();
    const [submitted, setSubmitted] = useState(false);
    const onSubmit: SubmitHandler<SectionedFormInputs> = data => {
      console.log('Submit', data);
      setSubmitted(true);
    };
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
                <Grid md={6}>
                  <SectionText marginBottom="1rem" />
                  <AsteriskMessage marginBottom="1rem" />
                </Grid>
                <Grid container spacing={{
                md: 3
              }}>
                  <Grid xs={12} md={4}>
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
                    }} options={dropdownOptions} value={value || null} sx={{
                      marginBottom: '1.25rem',
                      minHeight: '0px'
                    }} />;
                  }} />
                  </Grid>
                </Grid>
                <Grid container spacing={{
                sm: 2,
                md: 3
              }}>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <TextField label="Text Field" fullWidth required {...register('field1', {
                    required: 'This field is required'
                  })} error={!!errors.field1?.message} helperText={errors.field1?.message || 'Help text'} placeholder="Value" sx={{
                    marginBottom: '1.25rem'
                  }} />
                  </Grid>
                  <Grid xs={12} sm={6} md={8} lg={8}>
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
                      placeholder: 'Value',
                      sx: {
                        marginBottom: '1.25rem'
                      }
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
                <Divider />
                <Typography marginY="1.25rem" variant="h4" component="h3">
                  Subsection Header
                </Typography>
                <Grid container columnSpacing={{
                sm: 2,
                md: 3
              }}>
                  <Grid xs={12} sm={6} md={4}>
                    <TextField label="Text Field" fullWidth {...register('field2')} placeholder="Value" sx={{
                    marginBottom: '1.25rem'
                  }} />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
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
                      placeholder: 'Value',
                      sx: {
                        marginBottom: '1.25rem'
                      }
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
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
                      placeholder: 'Value',
                      sx: {
                        marginBottom: '1.25rem'
                      }
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
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
                      placeholder: 'Value',
                      sx: {
                        marginBottom: '1.25rem'
                      }
                    }} options={dropdownOptions} value={value || null} />;
                  }} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Button color="secondary" sx={{
                  marginTop: '.75rem'
                }}>
                    Secondary Action Button
                  </Button>
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
                  <SectionText marginBottom="1rem" />
                  <AsteriskMessage marginBottom="1rem" />
                </Grid>
                <Grid container>
                  <Grid xs={12} marginBottom="1.25rem">
                    <TextField label="Text Field" fullWidth {...register('field3', {
                    required: 'This field is required'
                  })} required error={!!errors.field3} helperText={errors.field3?.message} placeholder="Search" InputProps={{
                    startAdornment: <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                  }} />
                  </Grid>
                </Grid>
                <Grid container marginBottom="1rem">
                  <Grid lg={12}>
                    <FormControl error={!!errors.radio}>
                      <FormLabel id="radio-group">Radio Group</FormLabel>
                      <RadioGroup aria-labelledby="radio-group" defaultValue="3" {...register('radio')}>
                        <Grid container direction="row">
                          <FormControlLabel control={<Radio />} value="1" label="Option 1" sx={{
                          marginRight: '16px'
                        }} />
                          <FormControlLabel control={<Radio />} value="2" label="Option 2" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} marginBottom="1.25rem" columnSpacing={{
                sm: 2,
                md: 3
              }}>
                  <Grid xs={12} sm={6}>
                    <TextField label="Text Field" fullWidth {...register('field4', {
                    required: 'This field is required'
                  })} required error={!!errors.field4} helperText={errors.field4?.message} placeholder="Value" />
                  </Grid>
                  <Grid xs={12} sm={6}>
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
              setSubmitted(false);
            }} sx={{
              marginRight: '.5rem'
            }}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Grid>
          </form>
          {submitted && <Paper sx={{
          padding: '1.5rem',
          marginTop: '1.5rem'
        }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            </Paper>}
        </Container>
      </>;
  },
  args: {}
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const to=["_SimpleForm","_CompactForm","_SectionedForm"];export{w as _CompactForm,D as _SectionedForm,V as _SimpleForm,to as __namedExportsOrder,oo as default};
//# sourceMappingURL=Form.stories-f284a77d.js.map
