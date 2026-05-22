import{j as t}from"./iframe-D2jXllzf.js";import{C as m}from"./AsyncAutocomplete-CU-mE1X1.js";import{B as i}from"./index-toBpsxUE.js";import{u as n,F as u}from"./index.esm-BINi25PS.js";import{P as p}from"./index-Bcc6l1YC.js";import{T as d}from"./index-B-LjnUTn.js";import{G as c}from"./index-_ebpbhE4.js";import{i as y}from"./index-B4MTobdk.js";import{A as g,a as x}from"./Types-KT_38BI3.js";import{Q as b}from"./suspense-B_xDpDZR.js";import{Q as C}from"./queryClient-7UKzF7dW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8iPKeAQ.js";import"./index-DbM9_IZw.js";import"./index-C0wMGhls.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./memoTheme-Zt5oAqwv.js";import"./styled-DdNVu9ib.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C4VpCIrq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useSlotProps-FypE9v1G.js";import"./Popover-d3WYO_gM.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DNbvJLzK.js";import"./useTheme-C2p3ig_2.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./useTimeout-CPz5sd6r.js";import"./getReactElementRef-DHdu6blE.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./debounce-Be36O1Ab.js";import"./Modal-epJMSIoD.js";import"./useEventCallback-B89JyN3q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./Paper-DezgSOvY.js";import"./List-WMhnwrif.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DpI9NEaZ.js";import"./createSvgIcon-BpTXI-oS.js";import"./OutlinedInput-8NKqoys9.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./ButtonBase-DMYh_tyc.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Box-BbqhAezV.js";import"./Divider-ztTjX0xU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-C7w4lddQ.js";import"./styled-CrGM8GXy.js";import"./TextField-DPbYydSm.js";import"./FormControl-B1s-S060.js";import"./isMuiElement-CtLsGuPJ.js";import"./Grid-DcON0D60.js";import"./index-918D6wux.js";import"./___vite-browser-external_commonjs-proxy-CWZwep8m.js";import"./Autocomplete-2H7tXo87.js";import"./Close-BsJCF7Mr.js";import"./usePreviousProps-BzPIdsN4.js";import"./Tooltip-GSnbTknq.js";import"./Chip-DjOcMpWi.js";import"./IconButton-Dd5dInOR.js";import"./CircularProgress-BG5QNhqD.js";import"./ListSubheader-H_nne6QA.js";import"./useInfiniteQuery-D4_yTWT-.js";import"./useBaseQuery-C6iUgDlt.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CwKYXhwT.js";import"./Container-DTQuoaq9.js";import"./index-BzJiEeMt.js";import"./_toKey-DMH86hUz.js";const ut={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
