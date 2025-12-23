import{j as t}from"./iframe-BOqhEPj6.js";import{C as p}from"./AsyncAutocomplete-HIg0kjzz.js";import{B as s}from"./index-CQw0a6ar.js";import{u as d,F as c}from"./index.esm-B_kI7Vw-.js";import{P as b}from"./index-BnDQCKRO.js";import{T as S}from"./index-C8WQ3P9P.js";import{G as f}from"./index-DMdqsLqb.js";import{i as F}from"./index-BnQMcvUu.js";import{A as w,a as V}from"./Types-DvXBhIzI.js";import{Q as y}from"./suspense-D7CuN_g-.js";import{Q}from"./queryClient-C1k93onC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BU8e8cp8.js";import"./index-BGtykKQB.js";import"./index-Blj6OPPS.js";import"./index-DS1ZdVNz.js";import"./index-DX6yAWWK.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BlVGnbba.js";import"./memoTheme-BYC15E_2.js";import"./styled-ClQgRsdc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CceHt0Ap.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BmeSG9ns.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-PlN7TJgo.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-D87wou6e.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-BHkbNqwn.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./Select-B9cbP78R.js";import"./Menu-Bf3EcXbm.js";import"./useSlotProps-DnEE7xuk.js";import"./Popover-C29c9q_D.js";import"./Portal-Cx3wFGpK.js";import"./useTheme-s5qe_7AX.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./useTimeout-CKtuW5yl.js";import"./getReactElementRef-DF_NnWMb.js";import"./mergeSlotProps-DX0ZwzcB.js";import"./Modal-plhmqEr0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-hLK-Cyuw.js";import"./Fade-Dvz2gflC.js";import"./Paper-Bx06Uw5g.js";import"./List-B_DaY4Qf.js";import"./useControlled-CmW8DIBb.js";import"./createSvgIcon-BzRll-a0.js";import"./FormHelperText-Bp2ajVCS.js";import"./FormControlLabel-BYe2eUOw.js";import"./Typography-DCSeVpBd.js";import"./Switch-BuD3o8qk.js";import"./SwitchBase-C1i5BvMK.js";import"./ButtonBase-C7cVXKAH.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-Dw0DM2_a.js";import"./Radio-Co3Vqsmj.js";import"./FormGroup-BnSyuzUv.js";import"./Box-CIHxGpEh.js";import"./Divider-DJj0BQqc.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-DPaZpNJF.js";import"./styled-BY2Q14_8.js";import"./TextField-DapU95H_.js";import"./FormControl-B-8LsILh.js";import"./isMuiElement-FBus6K6C.js";import"./Grid-BJc_wFud.js";import"./index-CGqRv4RY.js";import"./___vite-browser-external_commonjs-proxy-BIEiDzEk.js";import"./Autocomplete-Dzoo0MWW.js";import"./Close-CCJbhEGR.js";import"./usePreviousProps-LaeQPJEA.js";import"./Tooltip-DKIHpwU2.js";import"./Chip-DFYjC6yz.js";import"./IconButton-BP3VjvuD.js";import"./CircularProgress-Xg5tMO8-.js";import"./ListSubheader-DNYe_aML.js";import"./useInfiniteQuery-DbkYXPIL.js";import"./useBaseQuery-CV-hkf8s.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-BDF2rRxm.js";import"./Container-Ck_72FoA.js";import"./index-vabkworu.js";import"./_toKey-DhmaiSd7.js";import"./index-CCxw3tf-.js";import"./index-DabjR5GN.js";const Tt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:p,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),n={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},u={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
            <Grid container direction="row" justifyContent="space-between" marginTop={1}>
              <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
              <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
            </Grid>
            {methods?.formState?.isSubmitSuccessful ? <Paper sx={{
            padding: '1.5rem',
            marginTop: '1.5rem'
          }}>
                <Typography variant="h2">Submitted Values</Typography>
                <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
              </Paper> : null}
          </form>
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example',
    rules: {
      required: 'This is required.'
    },
    defaultToFirstOption: true,
    disableClearable: true
  }
}`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,j,O;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm({
      defaultValues: {
        controlledAsyncAutocomplete: []
      }
    });
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
            <Grid container direction="row" justifyContent="space-between" marginTop={1}>
              <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
              <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
            </Grid>
            {methods?.formState?.isSubmitSuccessful ? <Paper sx={{
            padding: '1.5rem',
            marginTop: '1.5rem'
          }}>
                <Typography variant="h2">Submitted Values</Typography>
                <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
              </Paper> : null}
          </form>
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    isOptionEqualToValue: (option, value) => option.label === value.label,
    loadOptions,
    limit: 5,
    queryKey: 'example',
    rules: {
      required: 'This is required.'
    },
    defaultToFirstOption: true,
    disableClearable: true,
    multiple: true,
    filterSelectedOptions: true
  }
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var P,v,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
            <Grid container direction="row" justifyContent="space-between" marginTop={1}>
              <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
              <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
            </Grid>
            {methods?.formState?.isSubmitSuccessful ? <Paper sx={{
            padding: '1.5rem',
            marginTop: '1.5rem'
          }}>
                <Typography variant="h2">Submitted Values</Typography>
                <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
              </Paper> : null}
          </form>
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 1,
    queryKey: 'example2',
    rules: {
      required: 'This is required.'
    },
    defaultToOnlyOption: true,
    disableClearable: true
  }
}`,...(q=(v=u.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const jt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteMultiple","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{n as _ControlledAsyncAutoComplete,u as _ControlledAsyncAutoCompleteDefaultToOnlyOption,m as _ControlledAsyncAutoCompleteMultiple,jt as __namedExportsOrder,Tt as default};
