import{a as e,j as i,F as X}from"./jsx-runtime-a3bcee63.js";import{r as I}from"./index-570b25c1.js";import{u as R,C as c}from"./index.esm-d81a0d8c.js";import{T as y}from"./index-01b89d4f.js";import{A as g}from"./index-2c32797b.js";import{D as $}from"./DatePicker-6d0fb546.js";import{R as q,F as ee,d as N}from"./index-14edf826.js";import{B as T,I as re}from"./index-daf8ff4e.js";import{C as oe,S as te}from"./index-53288845.js";import{P as ne}from"./index-33fc7254.js";import{P as w}from"./index-bcabbcd5.js";import{T as x}from"./index-bf8151f5.js";import{C as W,G as r,S as ie}from"./index-6e8561aa.js";import{D as le}from"./index-0ab557ce.js";import{d as ae}from"./dayjs.min-bf3dc41b.js";import{I as de}from"./InputAdornment-e680d39b.js";import{F as se}from"./FormLabel-d63492ff.js";import{R as me,a as H}from"./RadioGroup-1ffa6b3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-57e9b08d.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./useId-6f4bfce0.js";import"./utils-3d35716f.js";import"./Select-473a43cb.js";import"./react-is.production.min-a192e302.js";import"./Menu-113dab7f.js";import"./useTheme-c07bb8e7.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./List-446c66c9.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-71306fdf.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./IconButton-3fd19b93.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Autocomplete-ca582a28.js";import"./Close-41aa9caa.js";import"./Tooltip-91ad21bd.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";import"./LocalizationProvider-c8fffce8.js";import"./Grid-62fb460c.js";import"./extendSxProp-b1abb964.js";import"./Typography-f453bb5c.js";import"./Button-af0ca45f.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-f567b834.js";import"./index-31fb134e.js";import"./Link-b7684510.js";import"./Breadcrumbs-3266d315.js";import"./index-ba8741f2.js";import"./index-4810b236.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./SwitchBase-1f7cd2d8.js";import"./FormGroup-93228893.js";var k=({FieldProps:p,...G})=>e($,{...G,renderInput:t=>(t.inputProps&&(t.inputProps.placeholder="MM/DD/YYYY"),e(y,{...t,...p}))});const no={title:"Layouts/Form",tags:["autodocs"],parameters:{docs:{description:{component:"Some form examples with proper layouts and spacings. As `Grid` is already used to handle layout it is easiest to also use it for form spacing.\n\nThere are two spacing variations: `normal` and `dense` (See Zeroheight documentation for when to use each). Normal spacing will use `rowSpacing={2}` & `columnSpacing={3}` while dense spacing will use `rowSpacing={1}` & `columnSpacing={2}` on the wrapping `Grid container`.\n\nWhile `Grid` will be the most common way to handle spacing, the form components have their own `margin` prop that can be used en lieu of `rowSpacing` in the case where all form components have the same width, removing the need for a `Grid`."}}}},A=()=>e(x,{children:"This is introduction or helper text that helps the user understand the data that needs to be entered or selections that need to be made in this section."}),C=["Bulbasaur","Squirtle","Charmander"],B={render:()=>{var S;const{register:p,handleSubmit:G,formState:{errors:t},getValues:h,control:f,reset:F}=R(),[P,b]=I.useState(!1);return i(W,{children:[e(w,{sx:{padding:"1.5rem"},children:i("form",{onSubmit:G(n=>{console.log(n),b(!0)}),children:[e(x,{component:"h1",variant:"h2",sx:{marginBottom:".5rem"},children:"Simple Form"}),i(r,{container:!0,rowSpacing:2,children:[e(r,{xs:12,md:6,children:e(A,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(q,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,md:6,children:e(y,{label:"Example",fullWidth:!0,...p("text",{required:"This field is required",maxLength:{value:5,message:"Too long"}}),error:!!t.text,helperText:((S=t.text)==null?void 0:S.message)||"This is helper text",placeholder:"Value",required:!0})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(c,{control:f,name:"dropdown",render:({field:{onChange:n,value:s,onBlur:m}})=>e(g,{onChange:(o,l,a)=>{a==="clear"&&n(null),n(l)},onBlur:m,FieldProps:{label:"Dropdown",helperText:"This is helper text",placeholder:"Value"},options:C,value:s||null})})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),i(r,{xs:12,justifyContent:"end",display:"flex",paddingTop:2.5,children:[e(T,{type:"reset",color:"secondary",onClick:()=>{F(),b(!1)},sx:{marginRight:".5rem"},children:"Cancel"}),e(T,{type:"submit",children:"Submit"})]})]})]})}),P&&i(w,{sx:{padding:"12px 16px"},children:[e(x,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(h(),null,2)})]})]})},args:{}},j=ae().startOf("D"),V={render:()=>{var S;const{register:p,handleSubmit:G,formState:{errors:t},getValues:h,control:f,reset:F}=R(),[P,b]=I.useState(!1);return e(W,{children:i(r,{container:!0,justifyContent:"center",children:[e(w,{sx:{padding:"1rem",maxWidth:"400px"},children:i("form",{onSubmit:G(n=>{console.log("submitted",n),b(!0)}),children:[i(ie,{direction:"row",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",children:[e(x,{component:"h1",variant:"h5",children:"Filters"}),e(re,{title:"close",size:"small",children:e(oe,{})})]}),i(r,{container:!0,rowSpacing:1,columnSpacing:2,children:[e(r,{xs:12,children:e(c,{control:f,name:"status",render:({field:{onChange:n,onBlur:s,value:m,ref:o}})=>{var l,a;return e(g,{ref:o,onChange:(v,d,u)=>{u==="clear"&&n(null),n(d)},onBlur:s,value:m||null,FieldProps:{label:"Status",error:!!((l=t.status)!=null&&l.message),helperText:(a=t.status)==null?void 0:a.message,placeholder:"Value"},options:["Pending","Accepted","Denied"]})}})}),e(r,{xs:6,children:e(c,{control:f,name:"fromDate",defaultValue:j,render:({field:{onChange:n,value:s,ref:m}})=>e(k,{label:"From Date",value:s,onChange:n,ref:m})})}),e(r,{xs:6,children:e(c,{control:f,name:"toDate",defaultValue:j,render:({field:{onChange:n,value:s,ref:m}})=>e(k,{label:"To Date",value:s,onChange:n,ref:m})})}),e(r,{xs:12,children:e(y,{label:"Customer Name",fullWidth:!0,...p("customerName"),error:!!t.customerName,helperText:(S=t.customerName)==null?void 0:S.message,placeholder:"Value"})}),e(r,{xs:12,children:e(c,{control:f,name:"payerName",render:({field:{onChange:n,onBlur:s,value:m}})=>e(g,{onChange:(o,l,a)=>{a==="clear"&&n(null),n(l)},onBlur:s,value:m||null,FieldProps:{label:"Payer Name",placeholder:"Value"},options:["Health Plan","Another Plan","Best Plan"]})})}),e(r,{xs:12,paddingY:1}),e(r,{xs:6,children:e(T,{onClick:()=>{b(!1),F()},type:"reset",color:"secondary",fullWidth:!0,children:"Reset Filters"})}),e(r,{xs:6,children:e(T,{type:"submit",fullWidth:!0,children:"Submit"})})]})]})}),P&&i(w,{sx:{padding:"12px 16px",maxWidth:"400px"},children:[e(x,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(h(),null,2)})]})]})})},args:{}},ue={active:"This Page",crumbs:[{name:"Previous Page",url:window.location.href}]},D={render:()=>{var S,n,s,m;const{register:p,handleSubmit:G,formState:{errors:t},control:h,reset:f,getValues:F}=R(),[P,b]=I.useState(!1);return i(X,{children:[e(ne,{breadcrumbs:ue,headerText:"Page Header"}),i(W,{children:[i("form",{onSubmit:G(o=>{console.log("Submit",o),b(!0)}),children:[e(w,{sx:{padding:"1.5rem",marginBottom:"1.25rem"},children:i(r,{container:!0,rowSpacing:{xs:1,md:2},columnSpacing:{xs:2,md:3},children:[e(r,{xs:12,children:e(x,{variant:"h2",children:"Section Header"})}),e(r,{xs:12,md:6,children:e(A,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(q,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,md:4,children:e(c,{control:h,name:"dropdown1",rules:{required:"This field is required"},render:({field:{onChange:o,value:l,onBlur:a}})=>{var v,d;return e(g,{onChange:(u,Q,U)=>{U==="clear"&&o(null),o(Q)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value",required:!0,error:!!((v=t.dropdown1)!=null&&v.message),helperText:(d=t.dropdown1)==null?void 0:d.message},options:C,value:l||null})}})}),e(r,{xs:0,md:8,padding:0}),e(r,{xs:12,sm:6,md:4,children:e(y,{label:"Text Field",fullWidth:!0,required:!0,...p("field1",{required:"This field is required"}),error:!!((S=t.field1)!=null&&S.message),helperText:((n=t.field1)==null?void 0:n.message)||"Help text",placeholder:"Value"})}),e(r,{xs:12,sm:6,md:8,children:e(c,{control:h,name:"dropdown2",render:({field:{onChange:o,value:l,onBlur:a}})=>e(g,{onChange:(v,d,u)=>{u==="clear"&&o(null),o(d)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})}),e(r,{xs:12}),e(r,{xs:12,children:e(le,{})}),e(r,{xs:12}),e(r,{xs:12,children:e(x,{variant:"h4",component:"h3",children:"Subsection Header"})}),e(r,{xs:12}),e(r,{xs:12,sm:6,md:4,children:e(y,{label:"Text Field",fullWidth:!0,...p("field2"),placeholder:"Value"})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:h,name:"dropdown3",render:({field:{onChange:o,value:l,onBlur:a}})=>e(g,{onChange:(v,d,u)=>{u==="clear"&&o(null),o(d)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:h,name:"dropdown4",render:({field:{onChange:o,value:l,onBlur:a}})=>e(g,{onChange:(v,d,u)=>{u==="clear"&&o(null),o(d)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})}),e(r,{xs:12,sm:6,md:4,children:e(c,{control:h,name:"dropdown5",render:({field:{onChange:o,value:l,onBlur:a}})=>e(g,{onChange:(v,d,u)=>{u==="clear"&&o(null),o(d)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})}),e(r,{xs:12}),e(r,{xs:12,children:e(T,{color:"secondary",children:"Secondary Action Button"})})]})}),e(w,{sx:{padding:"1.5rem"},children:i(r,{container:!0,rowSpacing:{xs:1,md:2},columnSpacing:{xs:2,md:3},children:[e(r,{xs:12,children:e(x,{variant:"h2",children:"Section Header"})}),e(r,{xs:12,lg:6,children:e(A,{})}),e(r,{xs:0,lg:6,padding:0}),e(r,{xs:12,lg:6,children:e(q,{})}),e(r,{xs:0,lg:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,children:e(y,{fullWidth:!0,...p("field3"),required:!0,error:!!t.field3,helperText:(s=t.field3)==null?void 0:s.message,placeholder:"Search",inputProps:{"aria-label":"Search"},InputProps:{startAdornment:e(de,{position:"start",children:e(te,{})})}})}),e(r,{xs:12,children:i(se,{error:!!t.radio,children:[e(ee,{id:"radio-group",children:"Radio Group"}),e(me,{"aria-labelledby":"radio-group",defaultValue:"3",...p("radio"),children:i(r,{container:!0,direction:"row",children:[e(N,{control:e(H,{}),value:"1",label:"Option 1",sx:{marginRight:"16px"}}),e(N,{control:e(H,{}),value:"2",label:"Option 2"})]})})]})}),e(r,{xs:12,sm:6,children:e(y,{label:"Text Field",fullWidth:!0,...p("field4",{required:"This field is required"}),required:!0,error:!!t.field4,helperText:(m=t.field4)==null?void 0:m.message,placeholder:"Value"})}),e(r,{xs:12,sm:6,children:e(c,{control:h,name:"dropdown6",render:({field:{onChange:o,value:l,onBlur:a}})=>e(g,{onChange:(v,d,u)=>{u==="clear"&&o(null),o(d)},onBlur:a,FieldProps:{label:"Dropdown",placeholder:"Value"},options:C,value:l||null})})})]})}),i(r,{container:!0,justifyContent:"flex-end",marginTop:2,children:[e(T,{type:"reset",color:"secondary",onClick:()=>{f(),b(!1)},sx:{marginRight:1},children:"Cancel"}),e(T,{type:"submit",children:"Submit"})]})]}),P&&i(w,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e(x,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(F(),null,2)})]})]})]})},args:{}};var L,_,J;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            <Grid container rowSpacing={2}>
              <Grid xs={12} md={6}>
                <SectionText />
              </Grid>
              <Grid xs={0} md={6} padding={0} />
              <Grid xs={12} md={6}>
                <RequiredKey />
              </Grid>
              <Grid xs={0} md={6} padding={0} />
              <Grid xs={12} />
              <Grid xs={12} md={6}>
                <TextField label="Example" fullWidth {...register('text', {
                required: 'This field is required',
                maxLength: {
                  value: 5,
                  message: 'Too long'
                }
              })} error={!!errors.text} helperText={errors.text?.message || 'This is helper text'} placeholder="Value" required />
              </Grid>
              <Grid xs={0} md={6} padding={0} />
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
              <Grid xs={0} md={6} padding={0} />
              <Grid xs={12} />
              <Grid xs={12} justifyContent="end" display="flex" paddingTop={2.5}>
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
}`,...(J=(_=B.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Y,E,K;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
              <Grid container rowSpacing={1} columnSpacing={2}>
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
                <Grid xs={6}>
                  <Controller control={control} name="fromDate" defaultValue={today} render={({
                  field: {
                    onChange,
                    value,
                    ref
                  }
                }) => <Datepicker label="From Date" value={value} onChange={onChange} ref={ref} />} />
                </Grid>
                <Grid xs={6}>
                  <Controller control={control} name="toDate" defaultValue={today} render={({
                  field: {
                    onChange,
                    value,
                    ref
                  }
                }) => <Datepicker label="To Date" value={value} onChange={onChange} ref={ref} />} />
                </Grid>
                <Grid xs={12}>
                  <TextField label="Customer Name" fullWidth {...register('customerName')} error={!!errors.customerName} helperText={errors.customerName?.message} placeholder="Value" />
                </Grid>
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
                <Grid xs={12} paddingY={1} />
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
}`,...(K=(E=V.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var z,M,Z;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
              <Grid container rowSpacing={{
              xs: 1,
              md: 2
            }} columnSpacing={{
              xs: 2,
              md: 3
            }}>
                <Grid xs={12}>
                  <Typography variant="h2">Section Header</Typography>
                </Grid>
                <Grid xs={12} md={6}>
                  <SectionText />
                </Grid>
                <Grid xs={0} md={6} padding={0} />
                <Grid xs={12} md={6}>
                  <RequiredKey />
                </Grid>
                <Grid xs={0} md={6} padding={0} />
                <Grid xs={12} />
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
                  }} options={dropdownOptions} value={value || null} />;
                }} />
                </Grid>
                <Grid xs={0} md={8} padding={0} />
                <Grid xs={12} sm={6} md={4}>
                  <TextField label="Text Field" fullWidth required {...register('field1', {
                  required: 'This field is required'
                })} error={!!errors.field1?.message} helperText={errors.field1?.message || 'Help text'} placeholder="Value" />
                </Grid>
                <Grid xs={12} sm={6} md={8}>
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
                <Grid xs={12} />
                <Grid xs={12}>
                  <Divider />
                </Grid>
                <Grid xs={12} />
                <Grid xs={12}>
                  <Typography variant="h4" component="h3">
                    Subsection Header
                  </Typography>
                </Grid>
                <Grid xs={12} />
                <Grid xs={12} sm={6} md={4}>
                  <TextField label="Text Field" fullWidth {...register('field2')} placeholder="Value" />
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
                    placeholder: 'Value'
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
                    placeholder: 'Value'
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
                    placeholder: 'Value'
                  }} options={dropdownOptions} value={value || null} />;
                }} />
                </Grid>
                <Grid xs={12} />
                <Grid xs={12}>
                  <Button color="secondary">Secondary Action Button</Button>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{
            padding: '1.5rem'
          }}>
              <Grid container rowSpacing={{
              xs: 1,
              md: 2
            }} columnSpacing={{
              xs: 2,
              md: 3
            }}>
                <Grid xs={12}>
                  <Typography variant="h2">Section Header</Typography>
                </Grid>
                <Grid xs={12} lg={6}>
                  <SectionText />
                </Grid>
                <Grid xs={0} lg={6} padding={0} />
                <Grid xs={12} lg={6}>
                  <RequiredKey />
                </Grid>
                <Grid xs={0} lg={6} padding={0} />
                <Grid xs={12} />
                <Grid xs={12}>
                  <TextField fullWidth {...register('field3')} required error={!!errors.field3} helperText={errors.field3?.message} placeholder="Search" inputProps={{
                  'aria-label': 'Search'
                }} InputProps={{
                  startAdornment: <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                }} />
                </Grid>
                <Grid xs={12}>
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
            </Paper>
            <Grid container justifyContent="flex-end" marginTop={2}>
              <Button type="reset" color="secondary" onClick={() => {
              reset();
              setSubmitted(false);
            }} sx={{
              marginRight: 1
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
}`,...(Z=(M=D.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};const io=["_SimpleForm","_CompactForm","_SectionedForm"];export{V as _CompactForm,D as _SectionedForm,B as _SimpleForm,io as __namedExportsOrder,no as default};
//# sourceMappingURL=Form.stories-39c81753.js.map
