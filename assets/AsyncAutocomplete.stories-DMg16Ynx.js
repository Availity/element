import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{C as u}from"./AsyncAutocomplete-Hj0-Bpo3.js";import{B as s}from"./index-DnNfvsmq.js";import{u as d,F as c}from"./index.esm-Cdw3oWqD.js";import{P as b}from"./index-EBwYH3Ct.js";import{T as S}from"./index-DSF7aQ5o.js";import{G as f}from"./index-CQspzllj.js";import{i as F}from"./index-DdNunzh7.js";import{A as w,a as V}from"./Types-FWYZLT-L.js";import{i as y}from"./suspense-GeRHAAXg.js";import{Q}from"./queryClient-xkie3DHw.js";import"./index-ChsGqxH_.js";import"./index-BX8EWk4x.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DdiRDdA4.js";import"./index-DNupz-aR.js";import"./index-DJKl12U0.js";import"./index-CIzqi3uD.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";import"./SvgIcon-CiBNlF9H.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./generateUtilityClasses-whvyra8-.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BDxB3zbH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-B93mfhOp.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./useTheme-Ib01SJ3a.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-Dz4aGlyk.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-BRLJ6o5z.js";import"./Menu-GaZ6ImQN.js";import"./index-DyJdRKzS.js";import"./useSlotProps-BmqT0tgx.js";import"./resolveComponentProps-CCNxqvxI.js";import"./Popover-CQBNnNRW.js";import"./useSlot-1VRyIerd.js";import"./Portal-C2J4q3Ji.js";import"./useTheme-Cx1wRXKO.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useTimeout-iC_34LsC.js";import"./getReactElementRef-Df0xbma2.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./List-eXGzl-Dz.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./createSvgIcon-BWWwXn7v.js";import"./FormHelperText-DrOxEAeh.js";import"./FormControlLabel-BzV1MzKU.js";import"./Typography-COSof5sR.js";import"./Switch-BftWopts.js";import"./SwitchBase-CYtmyT40.js";import"./ButtonBase-D97P5WV0.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-bZEe10Dj.js";import"./Radio-I3N--tLc.js";import"./FormGroup-GBcTM3pP.js";import"./Box-Dv31mJKI.js";import"./Divider-DJW73rZ3.js";import"./dividerClasses-0g4QmK6Y.js";import"./Stack-qbqOHiMo.js";import"./styled-Dbr83ACF.js";import"./useThemeProps-Do5o_sjG.js";import"./TextField-CiyvdTXx.js";import"./FormControl-BpN01e6f.js";import"./isMuiElement-DiOAsJE6.js";import"./Grid2-JMPt1-k0.js";import"./index-DLKRbc4C.js";import"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import"./Autocomplete-CjCKGKDI.js";import"./Close-_BvKU_hM.js";import"./usePreviousProps-DrPGTKoq.js";import"./Tooltip-CIyLwlBA.js";import"./Chip-BprfrhNF.js";import"./IconButton-D_kG6RhR.js";import"./CircularProgress-fcRSDrpN.js";import"./ListSubheader-CTxWtyL5.js";import"./useInfiniteQuery-ee7wYcej.js";import"./useBaseQuery-D38vf5CD.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./Container-DVbvSSVb.js";import"./index-DuRQpI0H.js";import"./_toKey-DFcMYS53.js";import"./index-D1qcKK6a.js";const Rt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:u,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),m={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(u,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},n={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(u,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},p={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(u,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,j,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(j=n.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var P,v,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(v=p.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const Wt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteMultiple","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{m as _ControlledAsyncAutoComplete,p as _ControlledAsyncAutoCompleteDefaultToOnlyOption,n as _ControlledAsyncAutoCompleteMultiple,Wt as __namedExportsOrder,Rt as default};
