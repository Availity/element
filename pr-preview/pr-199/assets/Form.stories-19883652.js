import{j as d,a as e,F as ie}from"./jsx-runtime-a3bcee63.js";import{r as f}from"./index-570b25c1.js";import{u as U,C as v}from"./index.esm-d81a0d8c.js";import{T as V}from"./index-8b57f084.js";import{A as C}from"./index-b0a2e8d1.js";import{D as le}from"./DatePicker-918dd5f6.js";import{R as O,F as ae,d as _}from"./index-5ee89163.js";import{B as D,I as de}from"./index-5efdcb36.js";import{C as se,S as ue}from"./index-6d4c026f.js";import{P as me}from"./index-c9e322f9.js";import{P as R}from"./index-bcabbcd5.js";import{T as w}from"./index-bf8151f5.js";import{C as K,G as r,S as pe}from"./index-6e8561aa.js";import{D as ce}from"./index-0ab557ce.js";import{M as he}from"./CircularProgress-96ade162.js";import{d as ge}from"./dayjs.min-87d1a51e.js";import{I as fe}from"./InputAdornment-e680d39b.js";import{F as xe}from"./FormControl-6b396c3c.js";import{R as be,a as J}from"./RadioGroup-1ffa6b3b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-471fdd1c.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./useId-6f4bfce0.js";import"./utils-3d35716f.js";import"./FormLabel-3e0f5024.js";import"./Select-473a43cb.js";import"./react-is.production.min-a192e302.js";import"./Menu-113dab7f.js";import"./useTheme-c07bb8e7.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./List-446c66c9.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-71306fdf.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./IconButton-3fd19b93.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Autocomplete-ca582a28.js";import"./Close-41aa9caa.js";import"./Tooltip-91ad21bd.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";import"./Grid-62fb460c.js";import"./extendSxProp-b1abb964.js";import"./Typography-f453bb5c.js";import"./Button-af0ca45f.js";import"./DialogActions-830ddb7d.js";import"./Dialog-fbe5da3d.js";import"./DialogContext-1d24d37f.js";import"./DialogContent-30a45a0f.js";import"./dialogTitleClasses-b181f96d.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./faCircleArrowRight-695b3628.js";import"./faMagnifyingGlass-482fd726.js";import"./index-d117a831.js";import"./index-b3099525.js";import"./Link-b7684510.js";import"./Breadcrumbs-3266d315.js";import"./index-3aca1e92.js";import"./index-4810b236.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./SwitchBase-1f7cd2d8.js";import"./FormGroup-93228893.js";var Se=()=>e(he,{"aria-label":"Loading",variant:"indeterminate"});function E({blocking:l,children:b,className:a="",keepInView:u,loader:S=e(Se,{}),message:T,renderChildren:B=!0,tag:y="div",...F}){const[x,L]=f.useState("50%"),h=f.useRef(null),t=f.useRef(null),m=f.useRef(null),p=f.useRef(null),o=f.useCallback(()=>{if(l&&u&&m.current){const i=m.current.getBoundingClientRect(),k=window.innerHeight;if(i.top>k||i.bottom<0)return;if(i.top>=0&&i.bottom<=k){x!=="50%"&&L("50%");return}const N=p.current?p.current.getBoundingClientRect().height:0;let q=Math.max(Math.min(k,i.bottom)-Math.max(i.top,0),N)/2;i.top<0&&(q=Math.min(q-i.top,i.height-N/2)),x!==q&&L(q)}},[l,u,x]);f.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[o]);const n=(i,k=!1)=>{const{key:N,shiftKey:q}=i;return l&&N==="Tab"&&q===k},s=i=>{h.current&&n(i)&&h.current.focus()},G=i=>{h.current&&n(i)&&(i.preventDefault(),h.current.focus())},c=i=>{t.current&&n(i,!0)&&t.current.focus()},g=i=>{t.current&&n(i,!0)&&(i.preventDefault(),t.current.focus())},H=!l||B;return d(y,{className:l?`block-ui ${a}`:a,"aria-busy":l,...F,children:[l?e("div",{tabIndex:0,onKeyUp:s,onKeyDown:G,ref:t,className:"sr-only",children:T||"loading"}):null,H?b:null,l?d("div",{className:"block-ui-container",tabIndex:0,ref:h,onKeyUp:c,onKeyDown:g,children:[e("div",{className:"block-ui-overlay",ref:m}),e("div",{className:"block-ui-message-container",ref:p,style:{top:u?x:void 0},children:d("div",{className:"block-ui-message",children:[f.isValidElement(S)?e("div",{"aria-hidden":!0,children:S}):null,T||e("div",{className:"sr-only",children:"loading"})]})})]}):null]})}var ve={elevation:8,variant:"elevation",sx:{marginTop:"4px"}},Y=({FieldProps:l,placement:b="bottom-start",...a})=>e(le,{...a,PaperProps:ve,PopperProps:{placement:b},renderInput:u=>(u.inputProps&&(u.inputProps.placeholder="MM/DD/YYYY"),e(V,{...u,...l}))});const vo={title:"Layouts/Form",tags:["autodocs"],parameters:{docs:{description:{component:"Some form examples with proper layouts and spacings. As `Grid` is already used to handle layout it is easiest to also use it for form spacing.\n\nThere are two spacing variations: `normal` and `dense` (See Zeroheight documentation for when to use each). Normal spacing will use `rowSpacing={2}` & `columnSpacing={3}` while dense spacing will use `rowSpacing={1}` & `columnSpacing={2}` on the wrapping `Grid container`.\n\nWhile `Grid` will be the most common way to handle spacing, the form components have their own `margin` prop that can be used en lieu of `rowSpacing` in the case where all form components have the same width, removing the need for a `Grid`."}}}};async function M(l=2500){await new Promise(b=>setTimeout(b,l))}const j=()=>e(w,{children:"This is introduction or helper text that helps the user understand the data that needs to be entered or selections that need to be made in this section."}),P=["Bulbasaur","Squirtle","Charmander"],I={render:()=>{var h;const{register:l,handleSubmit:b,formState:{errors:a},getValues:u,control:S,reset:T}=U(),[B,y]=f.useState(!1),[F,x]=f.useState(!1);return d(K,{children:[e(E,{blocking:F,message:"Loading",children:e(R,{sx:{padding:"1.5rem"},children:d("form",{onSubmit:b(async t=>{x(!0),console.log(t),await M(),y(!0),x(!1)}),children:[e(w,{component:"h1",variant:"h2",sx:{marginBottom:".5rem"},children:"Simple Form"}),d(r,{container:!0,rowSpacing:2,children:[e(r,{xs:12,md:6,children:e(j,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(O,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,md:6,children:e(V,{label:"Example",fullWidth:!0,...l("text",{required:"This field is required",maxLength:{value:5,message:"Too long"}}),error:!!a.text,helperText:((h=a.text)==null?void 0:h.message)||"This is helper text",placeholder:"Value",required:!0})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(v,{control:S,name:"dropdown",render:({field:{onChange:t,value:m,onBlur:p}})=>e(C,{onChange:(o,n,s)=>{s==="clear"&&t(null),t(n)},onBlur:p,FieldProps:{label:"Dropdown",helperText:"This is helper text",placeholder:"Value"},options:P,value:m||null})})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),d(r,{xs:12,justifyContent:"end",display:"flex",paddingTop:2.5,children:[e(D,{type:"reset",color:"secondary",onClick:()=>{T(),y(!1)},sx:{marginRight:".5rem"},children:"Cancel"}),e(D,{type:"submit",children:"Submit"})]})]})]})})}),B&&d(R,{sx:{padding:"12px 16px"},children:[e(w,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(u(),null,2)})]})]})},args:{}},z=ge().startOf("D"),A={render:()=>{var h;const{register:l,handleSubmit:b,formState:{errors:a},getValues:u,control:S,reset:T}=U(),[B,y]=f.useState(!1),[F,x]=f.useState(!1);return e(K,{children:d(r,{container:!0,justifyContent:"center",children:[e(E,{blocking:F,children:e(R,{sx:{padding:"1rem",maxWidth:"400px"},children:d("form",{onSubmit:b(async t=>{x(!0),console.log("submitted",t),await M(),x(!1),y(!0)}),children:[d(pe,{direction:"row",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",children:[e(w,{component:"h1",variant:"h5",children:"Filters"}),e(de,{title:"close",size:"small",children:e(se,{})})]}),d(r,{container:!0,rowSpacing:1,columnSpacing:2,children:[e(r,{xs:12,children:e(v,{control:S,name:"status",render:({field:{onChange:t,onBlur:m,value:p,ref:o}})=>{var n,s;return e(C,{ref:o,onChange:(G,c,g)=>{g==="clear"&&t(null),t(c)},onBlur:m,value:p||null,FieldProps:{label:"Status",error:!!((n=a.status)!=null&&n.message),helperText:(s=a.status)==null?void 0:s.message,placeholder:"Value"},options:["Pending","Accepted","Denied"]})}})}),e(r,{xs:6,children:e(v,{control:S,name:"fromDate",defaultValue:z,render:({field:{onChange:t,value:m,ref:p}})=>e(Y,{label:"From Date",value:m,onChange:t,ref:p})})}),e(r,{xs:6,children:e(v,{control:S,name:"toDate",defaultValue:z,render:({field:{onChange:t,value:m,ref:p}})=>e(Y,{label:"To Date",value:m,onChange:t,ref:p})})}),e(r,{xs:12,children:e(V,{label:"Customer Name",fullWidth:!0,...l("customerName"),error:!!a.customerName,helperText:(h=a.customerName)==null?void 0:h.message,placeholder:"Value"})}),e(r,{xs:12,children:e(v,{control:S,name:"payerName",render:({field:{onChange:t,onBlur:m,value:p}})=>e(C,{onChange:(o,n,s)=>{s==="clear"&&t(null),t(n)},onBlur:m,value:p||null,FieldProps:{label:"Payer Name",placeholder:"Value"},options:["Health Plan","Another Plan","Best Plan"]})})}),e(r,{xs:12,paddingY:1}),e(r,{xs:6,children:e(D,{onClick:()=>{y(!1),T()},type:"reset",color:"secondary",fullWidth:!0,children:"Reset Filters"})}),e(r,{xs:6,children:e(D,{type:"submit",fullWidth:!0,children:"Submit"})})]})]})})}),B&&d(R,{sx:{padding:"12px 16px",maxWidth:"400px"},children:[e(w,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(u(),null,2)})]})]})})},args:{}},ye={active:"This Page",crumbs:[{name:"Previous Page",url:window.location.href}]},W={render:()=>{var h,t,m,p;const{register:l,handleSubmit:b,formState:{errors:a},control:u,reset:S,getValues:T}=U(),[B,y]=f.useState(!1),[F,x]=f.useState(!1);return d(ie,{children:[e(me,{breadcrumbs:ye,headerText:"Page Header"}),e(E,{blocking:F,children:d(K,{children:[d("form",{onSubmit:b(async o=>{x(!0),console.log("Submit",o),await M(),x(!1),y(!0)}),children:[e(R,{sx:{padding:"1.5rem",marginBottom:"1.25rem"},children:d(r,{container:!0,rowSpacing:{xs:1,md:2},columnSpacing:{xs:2,md:3},children:[e(r,{xs:12,children:e(w,{variant:"h2",children:"Section Header"})}),e(r,{xs:12,md:6,children:e(j,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12,md:6,children:e(O,{})}),e(r,{xs:0,md:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,md:4,children:e(v,{control:u,name:"dropdown1",rules:{required:"This field is required"},render:({field:{onChange:o,value:n,onBlur:s}})=>{var G,c;return e(C,{onChange:(g,H,i)=>{i==="clear"&&o(null),o(H)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value",required:!0,error:!!((G=a.dropdown1)!=null&&G.message),helperText:(c=a.dropdown1)==null?void 0:c.message},options:P,value:n||null})}})}),e(r,{xs:0,md:8,padding:0}),e(r,{xs:12,sm:6,md:4,children:e(V,{label:"Text Field",fullWidth:!0,required:!0,...l("field1",{required:"This field is required"}),error:!!((h=a.field1)!=null&&h.message),helperText:((t=a.field1)==null?void 0:t.message)||"Help text",placeholder:"Value"})}),e(r,{xs:12,sm:6,md:8,children:e(v,{control:u,name:"dropdown2",render:({field:{onChange:o,value:n,onBlur:s}})=>e(C,{onChange:(G,c,g)=>{g==="clear"&&o(null),o(c)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value"},options:P,value:n||null})})}),e(r,{xs:12}),e(r,{xs:12,children:e(ce,{})}),e(r,{xs:12}),e(r,{xs:12,children:e(w,{variant:"h4",component:"h3",children:"Subsection Header"})}),e(r,{xs:12}),e(r,{xs:12,sm:6,md:4,children:e(V,{label:"Text Field",fullWidth:!0,...l("field2"),placeholder:"Value"})}),e(r,{xs:12,sm:6,md:4,children:e(v,{control:u,name:"dropdown3",render:({field:{onChange:o,value:n,onBlur:s}})=>e(C,{onChange:(G,c,g)=>{g==="clear"&&o(null),o(c)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value"},options:P,value:n||null})})}),e(r,{xs:12,sm:6,md:4,children:e(v,{control:u,name:"dropdown4",render:({field:{onChange:o,value:n,onBlur:s}})=>e(C,{onChange:(G,c,g)=>{g==="clear"&&o(null),o(c)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value"},options:P,value:n||null})})}),e(r,{xs:12,sm:6,md:4,children:e(v,{control:u,name:"dropdown5",render:({field:{onChange:o,value:n,onBlur:s}})=>e(C,{onChange:(G,c,g)=>{g==="clear"&&o(null),o(c)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value"},options:P,value:n||null})})}),e(r,{xs:12}),e(r,{xs:12,children:e(D,{color:"secondary",children:"Secondary Action Button"})})]})}),e(R,{sx:{padding:"1.5rem"},children:d(r,{container:!0,rowSpacing:{xs:1,md:2},columnSpacing:{xs:2,md:3},children:[e(r,{xs:12,children:e(w,{variant:"h2",children:"Section Header"})}),e(r,{xs:12,lg:6,children:e(j,{})}),e(r,{xs:0,lg:6,padding:0}),e(r,{xs:12,lg:6,children:e(O,{})}),e(r,{xs:0,lg:6,padding:0}),e(r,{xs:12}),e(r,{xs:12,children:e(V,{fullWidth:!0,...l("field3"),required:!0,error:!!a.field3,helperText:(m=a.field3)==null?void 0:m.message,placeholder:"Search",inputProps:{"aria-label":"Search"},InputProps:{startAdornment:e(fe,{position:"start",children:e(ue,{})})}})}),e(r,{xs:12,children:d(xe,{error:!!a.radio,children:[e(ae,{id:"radio-group",children:"Radio Group"}),e(be,{"aria-labelledby":"radio-group",defaultValue:"3",...l("radio"),children:d(r,{container:!0,direction:"row",children:[e(_,{control:e(J,{}),value:"1",label:"Option 1",sx:{marginRight:"16px"}}),e(_,{control:e(J,{}),value:"2",label:"Option 2"})]})})]})}),e(r,{xs:12,sm:6,children:e(V,{label:"Text Field",fullWidth:!0,...l("field4",{required:"This field is required"}),required:!0,error:!!a.field4,helperText:(p=a.field4)==null?void 0:p.message,placeholder:"Value"})}),e(r,{xs:12,sm:6,children:e(v,{control:u,name:"dropdown6",render:({field:{onChange:o,value:n,onBlur:s}})=>e(C,{onChange:(G,c,g)=>{g==="clear"&&o(null),o(c)},onBlur:s,FieldProps:{label:"Dropdown",placeholder:"Value"},options:P,value:n||null})})})]})}),d(r,{container:!0,justifyContent:"flex-end",marginTop:2,children:[e(D,{type:"reset",color:"secondary",onClick:()=>{S(),y(!1)},sx:{marginRight:1},children:"Cancel"}),e(D,{type:"submit",children:"Submit"})]})]}),B&&d(R,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e(w,{variant:"h2",children:"Submitted Values"}),e("pre",{children:JSON.stringify(T(),null,2)})]})]})})]})},args:{}};var Z,$,Q;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    const [loading, setLoading] = useState(false);
    const onSubmit: SubmitHandler<SimpleFormInputs> = async data => {
      setLoading(true);
      console.log(data);
      await sleep();
      setSubmitted(true);
      setLoading(false);
    };
    return <Container>
        <BlockUi blocking={loading} message="Loading">
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
        </BlockUi>
        {submitted && <Paper sx={{
        padding: '12px 16px'
      }}>
            <Typography variant="h2">Submitted Values</Typography>
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </Paper>}
      </Container>;
  },
  args: {}
}`,...(Q=($=I.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,ee,re;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    const [loading, setLoading] = useState(false);
    const onSubmit: SubmitHandler<CompactFormInputs> = async data => {
      setLoading(true);
      console.log('submitted', data);
      await sleep();
      setLoading(false);
      setSubmitted(true);
    };
    return <Container>
        <Grid container justifyContent="center">
          <BlockUi blocking={loading}>
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
          </BlockUi>
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
}`,...(re=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ne;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
    const [loading, setLoading] = useState(false);
    const onSubmit: SubmitHandler<SectionedFormInputs> = async data => {
      setLoading(true);
      console.log('Submit', data);
      await sleep();
      setLoading(false);
      setSubmitted(true);
    };
    return <>
        <PageHeader breadcrumbs={crumbs} headerText="Page Header" />
        <BlockUi blocking={loading}>
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
        </BlockUi>
      </>;
  },
  args: {}
}`,...(ne=(te=W.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const yo=["_SimpleForm","_CompactForm","_SectionedForm"];export{A as _CompactForm,W as _SectionedForm,I as _SimpleForm,yo as __namedExportsOrder,vo as default};
//# sourceMappingURL=Form.stories-19883652.js.map
