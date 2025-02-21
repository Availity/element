import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{C as u}from"./AsyncAutocomplete-DJCK-8tO.js";import{B as s}from"./index-CDwEgPAM.js";import{u as c,F as y}from"./index.esm-DcOKI9LK.js";import{P as f}from"./index-Bo_nYZVI.js";import{T as S}from"./index-yTp6TMTk.js";import{G as h}from"./index-BObrA9Y-.js";import{s as b}from"./index-C5soOJ6z.js";import{A as g,a as C}from"./Types-DFZlQxsW.js";import{i as x}from"./suspense-BqeUBMhm.js";import{Q as A}from"./queryClient-CjDmLjqo.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BXQkNjHt.js";import"./index-DaRMplxe.js";import"./index-BPVUk_cQ.js";import"./index-DMWJB0MK.js";import"./index--IoBtPgS.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./faCheck-B05F4ORy.js";import"./Select-Bh3HlTBm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BNF0dZPe.js";import"./index-nos-0K8U.js";import"./useSlotProps-Cuv6gcjd.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./Popover-DJDHQo2S.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DO4SmqlR.js";import"./Portal-CKWfQBCE.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./List-Ce1NCs06.js";import"./utils-DoM3o7-Q.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-IUeEQzFc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-DUFM6NiM.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./FormLabel-DrJE-ijH.js";import"./FormControlLabel-DLlzi5Ft.js";import"./Typography-Cng4iL4p.js";import"./Switch-6eDJgjyT.js";import"./SwitchBase-DPjFJeLH.js";import"./ButtonBase-DQZrtVrL.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-DLgS-ogh.js";import"./Box-BAeL439g.js";import"./Divider-D_YJaRgz.js";import"./dividerClasses-Dy0fxzds.js";import"./Stack-C5Zrd0Q6.js";import"./styled-C36SNKZX.js";import"./useThemeProps-YZ7_EcgO.js";import"./TextField-D_phNllt.js";import"./FormControl-DxHQf2_s.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-DlvytMGW.js";import"./Close-L9RbW_Po.js";import"./usePreviousProps-BYCwus4J.js";import"./Tooltip-eF_7lzc5.js";import"./Chip-CBOHQDsU.js";import"./IconButton-v3cBwN0V.js";import"./CircularProgress-BHFEuwTi.js";import"./ListSubheader-Bw6Q0Eqn.js";import"./useInfiniteQuery-BlwNwEaC.js";import"./useBaseQuery-CJ5trF24.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./Grid2-CanCOREk.js";import"./Container-nY1JXDIQ.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";const Ar={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:u,tags:["autodocs"],argTypes:{...C,...g}},T=new b({name:"example"}),j=async(r,t)=>{const e=await T.post({offset:r,limit:t},{params:{}});return{totalCount:e.data.totalCount,offset:r,limit:t,options:e.data.options,count:e.data.count}},P=async(r,t)=>{const{options:e,totalCount:i}=await j(r,t);return{options:e,hasMore:r+t<i,offset:r}},F=new A({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),m={render:r=>{var e,i,p;const t=c();return o.jsx(x,{client:F,children:o.jsx(y,{...t,children:o.jsxs("form",{onSubmit:t.handleSubmit(d=>d),children:[o.jsx(u,{...r}),o.jsxs(h,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(s,{disabled:!((e=t==null?void 0:t.formState)!=null&&e.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>t.reset()}),o.jsx(s,{type:"submit",disabled:(i=t==null?void 0:t.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(p=t==null?void 0:t.formState)!=null&&p.isSubmitSuccessful?o.jsxs(f,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(S,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(t.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:P,limit:10,queryKey:"example",rules:{required:"This is required."}}};var a,n,l;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
