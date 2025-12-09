import{j as t}from"./iframe-Cv4YEYCT.js";import{C as p}from"./AsyncAutocomplete-D5z0cCRi.js";import{B as s}from"./index-C6B9H3-6.js";import{u as d,F as c}from"./index.esm-DxRNho1G.js";import{P as b}from"./index-CZd-ikpv.js";import{T as S}from"./index-Cy8ZwHJB.js";import{G as f}from"./index-bB8uZqWv.js";import{i as F}from"./index-Cp61hPs1.js";import{A as w,a as V}from"./Types-DvXBhIzI.js";import{Q as y}from"./suspense-DbMB9jKo.js";import{Q}from"./queryClient-DxU7aLZ_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGmQdo9O.js";import"./index-inuYiTDe.js";import"./index-DnPt5deZ.js";import"./index-DS1ZdVNz.js";import"./index-CNJpAeel.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-RzgLEiZ2.js";import"./memoTheme-pu_-LVrP.js";import"./styled-BjYrgzj8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BwjfLjpu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CIuk8i81.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-C6lArYvq.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-Cy9-wLDX.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Dezg1Jp2.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./Select-DdtRsles.js";import"./Menu-Dp7wAg9-.js";import"./useSlotProps-DpLQsBTB.js";import"./Popover-BbkQ84jj.js";import"./Portal-HdFRzq7f.js";import"./useTheme-yn0WqvlF.js";import"./utils-CC-nVGrC.js";import"./TransitionGroupContext-ReV1kAll.js";import"./useTimeout-S5FMYS9P.js";import"./getReactElementRef-Cucsv-xJ.js";import"./mergeSlotProps-pd1YXqCy.js";import"./Modal-C2-2MRhp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CJgjCZ3h.js";import"./Fade-72ut2BWr.js";import"./Paper-BGV9jSeN.js";import"./List-5gkoo-vG.js";import"./useControlled-DotOmqWu.js";import"./createSvgIcon-anG-4vyn.js";import"./FormHelperText-f-ithwPR.js";import"./FormControlLabel-Bn-8_Wfs.js";import"./Typography-BHaCpI2A.js";import"./Switch-CUTgowE6.js";import"./SwitchBase-CKHrTpOb.js";import"./ButtonBase-Te2dWPfF.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-BkrhAZ5l.js";import"./Radio-DCQT_nxE.js";import"./FormGroup-CZi0Ex0q.js";import"./Box-GX48hKKC.js";import"./Divider-0N8BvuQ6.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-BZ8fB6iW.js";import"./styled-Cz-jNn-e.js";import"./TextField-DXQ21rqp.js";import"./FormControl-FbDQyrmL.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Grid-CuYwHY7F.js";import"./index-BrHZs0_A.js";import"./___vite-browser-external_commonjs-proxy-D8UIT_1F.js";import"./Autocomplete-DRP_kz4l.js";import"./Close-CHeCf1pf.js";import"./usePreviousProps-DcfuBEM1.js";import"./Tooltip-DdwYWGQa.js";import"./Chip-BnZF5Ar2.js";import"./IconButton-y4oP_Qzi.js";import"./CircularProgress-4dbP_wqt.js";import"./ListSubheader-CQhLLmRk.js";import"./useInfiniteQuery-BNCrE6sY.js";import"./useBaseQuery-vjvUJRXI.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-CxHqlBlz.js";import"./Container-Ceu7L51X.js";import"./index-uYP5-W9N.js";import"./_toKey-Dft4WnKN.js";import"./index-CGjFXCyB.js";import"./index-L5zdR5bf.js";const Tt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:p,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),n={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},u={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
