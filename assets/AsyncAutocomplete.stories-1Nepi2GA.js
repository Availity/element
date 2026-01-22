import{j as t}from"./iframe-P-I-t7s_.js";import{C as m}from"./AsyncAutocomplete-DDIz3Bxl.js";import{B as i}from"./index-BOqcfzn9.js";import{u as n,F as u}from"./index.esm-CtcoFIAM.js";import{P as p}from"./index-AsjbMJ5C.js";import{T as d}from"./index-DWh3JVg2.js";import{G as c}from"./index-DGaASH14.js";import{i as y}from"./index-Cc847Osj.js";import{A as g,a as x}from"./Types-DLUIPKsS.js";import{Q as b}from"./suspense-B9iPAXfi.js";import{Q as C}from"./queryClient-BqOjpHVd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHJIfxSL.js";import"./index-CWhSIll1.js";import"./index-Dhbn43JG.js";import"./index-BiBDMnSv.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0KiMc52e.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-PrL4cH60.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DUXcWGfO.js";import"./Menu-BJGmABLE.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./useSlotProps-Cx6Yk_v4.js";import"./Popover-CxE7A8ms.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Portal-_y01gIKP.js";import"./useTheme-BPf64W-X.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./useTimeout-Dzhca5Jx.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./mergeSlotProps-BWpcczPW.js";import"./Modal-vVbgVJa4.js";import"./useEventCallback-DAYatbRK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C0L4z1af.js";import"./Fade-CVC1eZsP.js";import"./Paper-DMZ3Nhg0.js";import"./List-C_3Uxwtv.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Cqclzim-.js";import"./createSvgIcon-JwEd2gcS.js";import"./OutlinedInput-D9ScyHuO.js";import"./FormHelperText-Bbq60y1z.js";import"./FormControlLabel-DAUG9NcE.js";import"./Typography-BFwAhjnY.js";import"./Switch-Br6_MbNh.js";import"./SwitchBase-CrBPRb-c.js";import"./ButtonBase-P5TjO14T.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-CQO77CJ0.js";import"./Radio-1bLCVnvB.js";import"./FormGroup-BbkimDWv.js";import"./Box-BCYJimk9.js";import"./Divider-CVqRGGvC.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-JGFv5pEs.js";import"./styled-Cp0DTD0x.js";import"./TextField-CRS0YlgS.js";import"./FormControl-DTZL-Ep5.js";import"./isMuiElement-DIafhdSN.js";import"./Grid-DUqLWWvo.js";import"./index-DdsUWlQe.js";import"./___vite-browser-external_commonjs-proxy-DDlQnjAM.js";import"./Autocomplete-DNacHN71.js";import"./Close-BtLp18zk.js";import"./usePreviousProps-DTI_nXzq.js";import"./Tooltip-kyKJtl96.js";import"./Chip-CgdkVKg-.js";import"./IconButton-BTlhtNIa.js";import"./CircularProgress-BRuGXxty.js";import"./ListSubheader-BMLHS_4E.js";import"./useInfiniteQuery-_lNiSeGw.js";import"./useBaseQuery-DHgVL8kg.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-xw2JRpr3.js";import"./Container-8zPEfJs6.js";import"./index-BdjU-ADR.js";import"./_toKey-CwF_HlVq.js";const ut={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
