import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{C as n}from"./AsyncAutocomplete-C3IuzOwY.js";import{B as p}from"./index-DLsH_p52.js";import{u as S,F as h}from"./index.esm-CE2LouoS.js";import{P as g}from"./index-BrWjJmRs.js";import{T as x}from"./index-BtPDELIe.js";import{G as C}from"./index-Cyp_3NIz.js";import{s as O}from"./index-BAj1_MpQ.js";import{A as P,a as v}from"./Types-BnBUvX6b.js";import{i as A}from"./suspense-BqeUBMhm.js";import{Q as F}from"./queryClient-CjDmLjqo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BB8tm4BS.js";import"./index-Bt3o1v1W.js";import"./index-C_1ECHSD.js";import"./index-DMWJB0MK.js";import"./index-CTQn_wDL.js";import"./faCircleArrowRight-6L8v8FIg.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./faCheck-B05F4ORy.js";import"./FormLabel-98YPf6ct.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-CQlxW3ax.js";import"./isHostComponent-DVu5iVWx.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./useTheme-C2CrmYKc.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-BVrIj09m.js";import"./useEnhancedEffect-D2f2tbda.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-hLZ2S4VH.js";import"./Menu-Byu17A6t.js";import"./index-nos-0K8U.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./Popover-ChEuM7rO.js";import"./useSlot-DnkSxE3X.js";import"./Portal-CBAx_nZm.js";import"./useTheme-DUkCvbx_.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./getReactElementRef-AnOffBoZ.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-TketyoFF.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./ButtonBase-DbVRbsLs.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-BogPRRDq.js";import"./Box-DWnb8VZB.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./TextField-BxbLM7nG.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Grid2-y9MPRr2u.js";import"./Autocomplete-DYfkOmMd.js";import"./Close-CpXO-CFZ.js";import"./usePreviousProps-BYCwus4J.js";import"./Tooltip-CiiaKkqp.js";import"./Chip-ALB5H4lg.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./ListSubheader-DDrjAA_E.js";import"./useInfiniteQuery-BlwNwEaC.js";import"./useBaseQuery-CJ5trF24.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./Container-Cqq8qXXg.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./_toKey-MoF_TmUD.js";const Ot={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:n,tags:["autodocs"],argTypes:{...v,...P}},q=new O({name:"example"}),w=async(r,e)=>{const o=await q.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},T=async(r,e)=>{const{options:o,totalCount:i}=await w(r,e);return{options:o,hasMore:r+e<i,offset:r}},j=new F({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),l={render:r=>{var o,i,s;const e=S();return t.jsx(A,{client:j,children:t.jsx(h,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(n,{...r}),t.jsxs(C,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(p,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(p,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(s=e==null?void 0:e.formState)!=null&&s.isSubmitSuccessful?t.jsxs(g,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(x,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:T,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,s;const e=S();return t.jsx(A,{client:j,children:t.jsx(h,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(n,{...r}),t.jsxs(C,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(p,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(p,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(s=e==null?void 0:e.formState)!=null&&s.isSubmitSuccessful?t.jsxs(g,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(x,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:T,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var u,d,c;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var b,y,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=m.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Pt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{l as _ControlledAsyncAutoComplete,m as _ControlledAsyncAutoCompleteDefaultToOnlyOption,Pt as __namedExportsOrder,Ot as default};
