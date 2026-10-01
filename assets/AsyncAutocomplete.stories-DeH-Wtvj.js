import{j as t}from"./iframe-BfiSjCZE.js";import{C as m}from"./AsyncAutocomplete-R6pobn79.js";import{B as i}from"./index-BnEi8s_n.js";import{u as n,F as u}from"./index.esm-kcvTnjHx.js";import{P as d}from"./index-BqDXSYAc.js";import{T as p}from"./index-Ditxfwx6.js";import{G as c}from"./index-DXU92sR7.js";import{Q as b}from"./suspense-CDgsDqgL.js";import{i as y}from"./index-BHDw3JNc.js";import{A as g,a as x}from"./Types-KT_38BI3.js";import{Q as C}from"./queryClient-CRAw8wt9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzpVch_D.js";import"./index-So7oyo1n.js";import"./index-BP56GXIS.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C5CMMi3k.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bc7HWole.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./useSlotProps-DsKdZe-B.js";import"./Popover-B_IG8L-c.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-1iQSKTOk.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useTimeout-Dvw-KAbd.js";import"./getReactElementRef-DrqUH2UJ.js";import"./mergeSlotProps-DuqHZ2js.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeYFWYjf.js";import"./useEventCallback-BRDDRqyT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./Paper-8FyfnLjY.js";import"./List-DSZlyKTP.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DuHd5Dfi.js";import"./createSvgIcon-DV4tT70v.js";import"./OutlinedInput-DF7uYzJm.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Typography-C4HmXqwR.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./ButtonBase-B0Rj5enX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Stack-ggz2xYsp.js";import"./styled-Bty96-Ys.js";import"./Box-CRTcjAl_.js";import"./Divider-CELaABvA.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dz7hzDL9.js";import"./FormControl-C9VIskN5.js";import"./isMuiElement-CIl3go_L.js";import"./Grid-C2RK_1Jw.js";import"./useInfiniteQuery-RjjOvBIQ.js";import"./useBaseQuery-DZasCuPT.js";import"./index-ClgzThDV.js";import"./___vite-browser-external_commonjs-proxy-Dzcmey56.js";import"./Autocomplete-ChZBcIKa.js";import"./Close-BzO8XwWJ.js";import"./usePreviousProps-Em2L3jzV.js";import"./Tooltip-DQOY4bTe.js";import"./Chip-CO4k7qnm.js";import"./IconButton-CFfT0ndL.js";import"./CircularProgress-DFM5h0gz.js";import"./ListSubheader-CGQi5MSF.js";import"./Button-CWR2xa5V.js";import"./Container-B6cEEQtr.js";import"./index-CY8VLdQ2.js";const mt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const nt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteMultiple","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{s as _ControlledAsyncAutoComplete,a as _ControlledAsyncAutoCompleteDefaultToOnlyOption,l as _ControlledAsyncAutoCompleteMultiple,nt as __namedExportsOrder,mt as default};
