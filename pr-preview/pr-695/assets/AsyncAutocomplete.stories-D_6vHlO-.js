import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{C as u}from"./AsyncAutocomplete-DmPTwQn4.js";import{B as s}from"./index-DLsH_p52.js";import{u as c,F as y}from"./index.esm-D1k4U55D.js";import{P as f}from"./index-BrWjJmRs.js";import{T as S}from"./index-BtPDELIe.js";import{G as h}from"./index-Cyp_3NIz.js";import{s as b}from"./index-C5soOJ6z.js";import{A as g,a as C}from"./Types-DFZlQxsW.js";import{i as x}from"./suspense-BqeUBMhm.js";import{Q as A}from"./queryClient-CjDmLjqo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-f4L0U9g7.js";import"./index-Cy29Pico.js";import"./index-DS2qViMa.js";import"./index-DMWJB0MK.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./faCheck-B05F4ORy.js";import"./Select-hLZ2S4VH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-Byu17A6t.js";import"./index-nos-0K8U.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DnkSxE3X.js";import"./Portal-CBAx_nZm.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-TketyoFF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-CQlxW3ax.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./FormLabel-98YPf6ct.js";import"./FormControlLabel-GqYWwHWT.js";import"./Typography-CvSvtD2a.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./ButtonBase-DbVRbsLs.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-BogPRRDq.js";import"./Box-DWnb8VZB.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./TextField-BxbLM7nG.js";import"./FormControl-BPSU2g7t.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-DYfkOmMd.js";import"./Close-CpXO-CFZ.js";import"./usePreviousProps-BYCwus4J.js";import"./Tooltip-CiiaKkqp.js";import"./Chip-ALB5H4lg.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./ListSubheader-DDrjAA_E.js";import"./useInfiniteQuery-BlwNwEaC.js";import"./useBaseQuery-CJ5trF24.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./Grid2-y9MPRr2u.js";import"./Container-Cqq8qXXg.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";const Ar={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:u,tags:["autodocs"],argTypes:{...C,...g}},T=new b({name:"example"}),j=async(r,t)=>{const e=await T.post({offset:r,limit:t},{params:{}});return{totalCount:e.data.totalCount,offset:r,limit:t,options:e.data.options,count:e.data.count}},P=async(r,t)=>{const{options:e,totalCount:i}=await j(r,t);return{options:e,hasMore:r+t<i,offset:r}},F=new A({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),m={render:r=>{var e,i,p;const t=c();return o.jsx(x,{client:F,children:o.jsx(y,{...t,children:o.jsxs("form",{onSubmit:t.handleSubmit(d=>d),children:[o.jsx(u,{...r}),o.jsxs(h,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(s,{disabled:!((e=t==null?void 0:t.formState)!=null&&e.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>t.reset()}),o.jsx(s,{type:"submit",disabled:(i=t==null?void 0:t.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(p=t==null?void 0:t.formState)!=null&&p.isSubmitSuccessful?o.jsxs(f,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(S,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(t.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:P,limit:10,queryKey:"example",rules:{required:"This is required."}}};var a,n,l;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    }
  }
}`,...(l=(n=m.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const Tr=["_ControlledAsyncAutoComplete"];export{m as _ControlledAsyncAutoComplete,Tr as __namedExportsOrder,Ar as default};
