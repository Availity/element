import{j as t}from"./iframe-QKKiXGe2.js";import{C as m}from"./AsyncAutocomplete-C9whnBkP.js";import{B as i}from"./index-Dx_zFY-v.js";import{u as n,F as u}from"./index.esm-BqbkkwU8.js";import{P as d}from"./index-gR99Hw5I.js";import{T as p}from"./index-p3f1BLXv.js";import{G as c}from"./index-DmDUxSlw.js";import{Q as b}from"./suspense-BMwa7e0p.js";import{i as y}from"./index-BnWYiYcP.js";import{A as g,a as x}from"./Types-KT_38BI3.js";import{Q as C}from"./queryClient-I0ddF5dx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5O8b6Im.js";import"./index-CtrWn445.js";import"./index-Cvupsb9L.js";import"./index-CrcoPoGw.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D_H32dE9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BS7uljQq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DSMEK_KK.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./useSlotProps-CqRX49VI.js";import"./Popover-DfTMYM2R.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-JL7agaji.js";import"./useTheme-CobnQWC-.js";import"./utils-Dh1OrGpA.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useTimeout-DkvHtZOb.js";import"./getReactElementRef-DpOU19qE.js";import"./mergeSlotProps-CpR-3M6H.js";import"./debounce-Be36O1Ab.js";import"./Modal-WlFR6ZW0.js";import"./useEventCallback-KenlF9RE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./Paper-Bu_9L5He.js";import"./List-jtBebsxm.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BjERoBEC.js";import"./createSvgIcon-Bm4mBUxC.js";import"./OutlinedInput-Cudg-yYO.js";import"./FormHelperText-DI4TFjly.js";import"./FormControlLabel-DzVdZDHy.js";import"./Typography-lfATY7Ds.js";import"./Switch-D-dXUd1u.js";import"./SwitchBase-BB6lrJXc.js";import"./ButtonBase-BjGfF1Y_.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Bqh7DeHt.js";import"./RadioGroup-SwtLDsyW.js";import"./FormGroup-THy_K4lA.js";import"./Stack-vCt2ORwh.js";import"./styled-CL_ITmKE.js";import"./Box-DS6KTGM7.js";import"./Divider-U3oIKmQv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BW_bH-hP.js";import"./FormControl-CitCh22I.js";import"./isMuiElement-BPsBBR2z.js";import"./Grid-BWZayuEN.js";import"./useInfiniteQuery-B3d4j4e6.js";import"./useBaseQuery-BXrp3Vnr.js";import"./index-Dxvresu9.js";import"./___vite-browser-external_commonjs-proxy-DZSMJcrl.js";import"./Autocomplete-DpF9oed4.js";import"./Close-DncTnFTq.js";import"./usePreviousProps-yaJ9_aj3.js";import"./Tooltip-BYG0wW6K.js";import"./Chip-D6Ob_CsE.js";import"./IconButton-SAs9Di6J.js";import"./CircularProgress-BAVpeqhg.js";import"./ListSubheader-DzYMx52B.js";import"./Button-B0ZWu58J.js";import"./Container-B58issDp.js";import"./index-CY8VLdQ2.js";const mt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:m,tags:["autodocs"],argTypes:{...x,...g}},A=new y({name:"example"}),T=async(r,e)=>{const o=await A.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:f}=await T(r,e);return{options:o,hasMore:r+e<f,offset:r}},S=new C({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),s={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},l={render:r=>{const e=n({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},a={render:r=>{const e=n();return t.jsx(b,{client:S,children:t.jsx(u,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(o=>o),children:[t.jsx(m,{...r}),t.jsxs(c,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!e?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(i,{type:"submit",disabled:e?.formState?.isSubmitSuccessful,children:"Submit"})]}),e?.formState?.isSubmitSuccessful?t.jsxs(d,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(p,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
