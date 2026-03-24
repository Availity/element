import{j as t}from"./iframe-BXw3gXzi.js";import{C as m}from"./AsyncAutocomplete-Dz8Edkly.js";import{B as i}from"./index-DejzIRML.js";import{u as n,F as u}from"./index.esm-BoSfQ9kM.js";import{P as p}from"./index-CLVk1EvH.js";import{T as d}from"./index-DgW2N-xw.js";import{G as c}from"./index-tCOiXdlf.js";import{i as y}from"./index-D-R_J93y.js";import{A as g,a as x}from"./Types-DLUIPKsS.js";import{Q as b}from"./suspense-DiktpFJ7.js";import{Q as C}from"./queryClient-BgEvXfZK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UCVhQwZ1.js";import"./index-BnRExMZC.js";import"./index-CW8Uf0e3.js";import"./index-BiBDMnSv.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdgZp3W_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-v5C4S-YL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select--_x2H-6c.js";import"./Menu-CW4zJ6VU.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./useSlotProps-yzZ17Wp2.js";import"./Popover-Bzr2tLUQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-7KnvOddD.js";import"./useTheme-BMbLtIQ2.js";import"./utils-xtkVmQdP.js";import"./TransitionGroupContext-M8heGJda.js";import"./useTimeout-0uXpumKy.js";import"./getReactElementRef-DHOcIADn.js";import"./mergeSlotProps-BLBn1dIn.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_gnWSEE.js";import"./useEventCallback-3YhfTi0L.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D7s4TJBu.js";import"./Fade-D_YaJ4fg.js";import"./Paper-DAJ4kOlQ.js";import"./List-Cs9MPw4u.js";import"./utils-DoM3o7-Q.js";import"./useControlled-B4VTwyPs.js";import"./createSvgIcon--3tSNQ0H.js";import"./OutlinedInput-BHzGOAt2.js";import"./FormHelperText-DL7htFBa.js";import"./FormControlLabel-Ckl0iH_4.js";import"./Typography-BaC1f153.js";import"./Switch-BD3lQCjm.js";import"./SwitchBase-DGpDYu1p.js";import"./ButtonBase-BTnZicAm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BmXj6-yU.js";import"./RadioGroup-CrpTZ2V1.js";import"./FormGroup-v_02e0Td.js";import"./Box-BM1JqmYM.js";import"./Divider-D_KSA0HU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BuTN3X4b.js";import"./styled-C8dNPj49.js";import"./TextField-BBMe6aQj.js";import"./FormControl-BqJPZOpA.js";import"./isMuiElement-HwGtkGEy.js";import"./Grid-BGtXNav_.js";import"./index-ujimlIq_.js";import"./___vite-browser-external_commonjs-proxy-FWM20rQt.js";import"./Autocomplete-CJJJ1pjI.js";import"./Close-CAtJECmA.js";import"./usePreviousProps-B2_N8krC.js";import"./Tooltip-ByULunc2.js";import"./Chip-CQwiGa5s.js";import"./IconButton-DeurSYdO.js";import"./CircularProgress-DhFZnFeX.js";import"./ListSubheader-Dme4ycWs.js";import"./useInfiniteQuery-BqXZ5Ejh.js";import"./useBaseQuery-D0c6b1VP.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BgBpxWh8.js";import"./Container-BCT1HrQN.js";import"./index-CziuDJRf.js";import"./_toKey-WKv7aBz5.js";const ut={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(p,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(d,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
