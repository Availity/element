import{j as t}from"./iframe-Wk3enkn_.js";import{C as m}from"./AsyncAutocomplete-D6HjY2Y-.js";import{B as i}from"./index-pyii_x3t.js";import{u as n,F as u}from"./index.esm-R_sjpyJb.js";import{P as p}from"./index-TMY9X8er.js";import{T as d}from"./index-CNr7z3HO.js";import{G as c}from"./index-CV9srtxl.js";import{i as y}from"./index-BZOO7YAB.js";import{A as g,a as x}from"./Types-DLUIPKsS.js";import{Q as b}from"./suspense-Bd_pbFF_.js";import{Q as C}from"./queryClient-CHAqsXqX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cpx5LyCP.js";import"./index-BV5-U_yy.js";import"./index-BucrEBOe.js";import"./index-BiBDMnSv.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./memoTheme-Caj5A1s7.js";import"./styled-BmTYHnh6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-LAF-CuJk.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DXnbjHYZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CYNyfJKO.js";import"./Menu-BseMwSAi.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./useSlotProps-BfCrVpCA.js";import"./Popover-D6BMZrDV.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-CCkMzpr1.js";import"./useTheme-CmRoqaFD.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./useTimeout-BCOPmfCQ.js";import"./getReactElementRef-Cnge9CgM.js";import"./mergeSlotProps-CCeuxG84.js";import"./debounce-Be36O1Ab.js";import"./Modal-CRbA4mc9.js";import"./useEventCallback-B7JQiyR1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B_XiOxQq.js";import"./Fade-CxXiFCgw.js";import"./Paper-BtZlLsyY.js";import"./List-DVxafNt_.js";import"./utils-DoM3o7-Q.js";import"./useControlled-2F9gTxQc.js";import"./createSvgIcon-q6AyRDli.js";import"./OutlinedInput-61eRF8Ns.js";import"./FormHelperText-D2pMThEq.js";import"./FormControlLabel-DI5XH8jn.js";import"./Typography-CLtqYzwP.js";import"./Switch-BPKn7d48.js";import"./SwitchBase-D9fpHDmD.js";import"./ButtonBase-Qsi_pa_1.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-ETXqDp11.js";import"./RadioGroup-BUslnlIU.js";import"./FormGroup-CUY907o-.js";import"./Box-DL-v_noe.js";import"./Divider-6Fy3l_MU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-8J7VIz0q.js";import"./styled-BnyQvlXI.js";import"./TextField-vqzDsRcf.js";import"./FormControl-CnhLmAdI.js";import"./isMuiElement-DVgXTGQo.js";import"./Grid-DdfbYMl5.js";import"./index-CCiKlUX9.js";import"./___vite-browser-external_commonjs-proxy-D6GNdSUz.js";import"./Autocomplete-ODuQM_HE.js";import"./Close-BJPW9EZ5.js";import"./usePreviousProps-BCSzJ1G6.js";import"./Tooltip-BR4Ffd1U.js";import"./Chip-D-MSfsJK.js";import"./IconButton-C6xLK3w0.js";import"./CircularProgress-n4f4P4WA.js";import"./ListSubheader-e-TKQKC5.js";import"./useInfiniteQuery-CLU8jrDk.js";import"./useBaseQuery-Dw6wQntV.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-C074Gfa_.js";import"./Container-ChUN_I-o.js";import"./index-DrPJM3MV.js";import"./_toKey-CQFtmbJp.js";const ut={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
