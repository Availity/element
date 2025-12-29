import{j as t}from"./iframe-XJ8rUARQ.js";import{C as p}from"./AsyncAutocomplete-COL69UOM.js";import{B as s}from"./index-Bfg0IfXb.js";import{u as d,F as c}from"./index.esm-CZp8QHxv.js";import{P as b}from"./index-CwE50H-3.js";import{T as S}from"./index-CMxAEhwf.js";import{G as f}from"./index-BiP5P7M1.js";import{i as F}from"./index-D0PoHtwb.js";import{A as w,a as V}from"./Types-DLUIPKsS.js";import{Q as y}from"./suspense-BKyLW9Hs.js";import{Q}from"./queryClient-BcfS7DiY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DDpfM8l1.js";import"./index-D-CSH5Nh.js";import"./index-BrB8cp_v.js";import"./index-DS1ZdVNz.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-gs9ZPknn.js";import"./memoTheme-q27Lu1jJ.js";import"./styled-DH1bohWY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CuI6a_rh.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BQzGV_Rr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-CRGope29.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-k_WY5UDV.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-BDPMWXz1.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./Select-DRmfM0LR.js";import"./Menu-CwbeRV8m.js";import"./useSlotProps-ClBThUbu.js";import"./Popover-CSSnkq1S.js";import"./Portal-xufODOBH.js";import"./useTheme-DdE3jScQ.js";import"./utils-Bu5_zceD.js";import"./TransitionGroupContext-BLsjMo91.js";import"./useTimeout-CHPWgY-X.js";import"./getReactElementRef-CA2jWjUI.js";import"./mergeSlotProps-DiGp33rA.js";import"./Modal-mRbZ2Llg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk5P0AXa.js";import"./Fade-7aiRsYlH.js";import"./Paper-BItyqzia.js";import"./List-BH13I8v0.js";import"./useControlled-XnLwGYQ0.js";import"./createSvgIcon-CZFbIjHx.js";import"./FormHelperText-CWz_PZRQ.js";import"./FormControlLabel-DERvxbVJ.js";import"./Typography-DLCURa9h.js";import"./Switch-DAE0QIZT.js";import"./SwitchBase-wxow7jUk.js";import"./ButtonBase-CgzYzVmi.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-B4eLwq-k.js";import"./Radio-BM00RdYB.js";import"./FormGroup-DBHzl_SM.js";import"./Box-qW0uta-Y.js";import"./Divider-By-_we-K.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-DBw9MoVN.js";import"./styled-BwErFkk7.js";import"./TextField-os4QXjpx.js";import"./FormControl-ChASXxOp.js";import"./isMuiElement-bpXde_gu.js";import"./Grid-Dk4fwvMn.js";import"./index-0JyjbUyi.js";import"./___vite-browser-external_commonjs-proxy-Bbvn4Lk3.js";import"./Autocomplete-BG0erbm8.js";import"./Close-Dw_-z5X-.js";import"./usePreviousProps-C2obb4pn.js";import"./Tooltip-CFosmsmO.js";import"./Chip-Dnol4tA1.js";import"./IconButton-CSeSeZKT.js";import"./CircularProgress-DHokMmGN.js";import"./ListSubheader-xkvldxGj.js";import"./useInfiniteQuery-E4hWKMc3.js";import"./useBaseQuery-C3KxfX-D.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-jNyCdmKh.js";import"./Container-D0WZR6MW.js";import"./index-B_QiQ0h7.js";import"./_toKey-Bc2BYSdO.js";import"./index-DxZmSA_X.js";import"./index--DMbptHO.js";const Tt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:p,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),n={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},u={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
