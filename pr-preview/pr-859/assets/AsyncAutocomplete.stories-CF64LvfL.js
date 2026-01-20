import{j as t}from"./iframe-DDdys5VZ.js";import{C as m}from"./AsyncAutocomplete-DUGh617q.js";import{B as i}from"./index-Do6uxBxf.js";import{u as n,F as u}from"./index.esm-DTOSC_M7.js";import{P as p}from"./index-BIdpMfTg.js";import{T as d}from"./index-Z7ZBVKdt.js";import{G as c}from"./index-C23gf4rm.js";import{i as y}from"./index-WctVZiAu.js";import{A as g,a as x}from"./Types-DLUIPKsS.js";import{Q as b}from"./suspense-By12qyu1.js";import{Q as C}from"./queryClient-CM8KWzLO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPKqjOEF.js";import"./index-DS-Fl5hH.js";import"./index-edAtDfel.js";import"./index-BiBDMnSv.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxsO_0-t.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BqJWQcaa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-ucVlTC9v.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-CnZ00-R9.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-Cc8SLIyn.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useSlot-tZFGbiOx.js";import"./Select-Djy4tG8c.js";import"./Menu-Co2n-EqS.js";import"./useSlotProps-CMLU_yM0.js";import"./Popover-CjMcOH46.js";import"./Portal-CIlqDXrO.js";import"./useTheme-3S67f5Cb.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./useTimeout-DZwXI9W9.js";import"./getReactElementRef-KKwdvyjG.js";import"./mergeSlotProps-DywXoXlU.js";import"./Modal-QZjHV8Pa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DQLMuQga.js";import"./Fade-Ci7jieLM.js";import"./Paper-BNuTBhMB.js";import"./List-CR67BSGH.js";import"./useControlled-DPgR13iz.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./FormHelperText-Cpr7oON-.js";import"./FormControlLabel-B1gJTqT_.js";import"./Typography-CZtxpkXF.js";import"./Switch-crCZdAfS.js";import"./SwitchBase-DjDUEO21.js";import"./ButtonBase-DZVI88h8.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-C83SlUVY.js";import"./Radio-BU8wkIcC.js";import"./FormGroup-CqwFAPep.js";import"./Box-D4-1J1wq.js";import"./Divider-Dljr7oH4.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-XR9IapJe.js";import"./styled-D0qD_60F.js";import"./TextField-CuJqJwv5.js";import"./FormControl-DV2HCR4z.js";import"./isMuiElement-CGZGs55h.js";import"./Grid-D5jHLohi.js";import"./index-DivR2jCb.js";import"./___vite-browser-external_commonjs-proxy-C0Pi2jES.js";import"./Autocomplete-BnZLsJzg.js";import"./Close-D4KUM2AM.js";import"./usePreviousProps--eOSyDDI.js";import"./Tooltip-BrywaEgo.js";import"./Chip-BvUPJXZt.js";import"./IconButton-BOaXfSEH.js";import"./CircularProgress-CD5GaXFj.js";import"./ListSubheader-BZpXmurY.js";import"./useInfiniteQuery-CWKhJRJv.js";import"./useBaseQuery-BVlsqadk.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-uXds9IdN.js";import"./Container-BECr7IV3.js";import"./index-DuOb-EIt.js";import"./_toKey-QyxjJVxe.js";const ut={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const pt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteMultiple","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{s as _ControlledAsyncAutoComplete,a as _ControlledAsyncAutoCompleteDefaultToOnlyOption,l as _ControlledAsyncAutoCompleteMultiple,pt as __namedExportsOrder,ut as default};
