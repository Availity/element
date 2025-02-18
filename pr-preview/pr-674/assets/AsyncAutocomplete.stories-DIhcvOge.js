import{j as o}from"./jsx-runtime-CcL-W3nW.js";import{C as u}from"./AsyncAutocomplete-D6sOXCOX.js";import{B as s}from"./index-DSGElAqY.js";import{u as c,F as y}from"./index.esm-D1k4U55D.js";import{P as f}from"./index-VrFd62RU.js";import{T as S}from"./index-Bssefeeu.js";import{G as h}from"./index-Dnj5y9bu.js";import{s as b}from"./index-Cs70mkZF.js";import{A as g,a as C}from"./Types-CRp4bIYt.js";import{Q as x}from"./suspense-gSMUnaCZ.js";import{Q as A}from"./queryClient-mdpH4muO.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DRpFaM0h.js";import"./index-D69ufRNP.js";import"./index-BlC5JLGo.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./faCheck-B05F4ORy.js";import"./Select-Dt0UCwxY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BU9jXi-3.js";import"./index-nos-0K8U.js";import"./useSlotProps-DE50rPTb.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CaH4cQiJ.js";import"./Portal-D32Mdiva.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-BzSwLqYD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-BeuFtjMr.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./FormLabel-CZFypZnO.js";import"./FormControlLabel-CImDabQe.js";import"./Typography-Dw3TlP36.js";import"./Switch-CXk7mhi6.js";import"./SwitchBase-CHDa-0k7.js";import"./ButtonBase-Ctwr4_Dd.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-B7AA9dKi.js";import"./Box-DR5TX31P.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./TextField-DnlxDaFs.js";import"./FormControl-BhCdTdWt.js";import"./isMuiElement-DAzOCCHH.js";import"./Autocomplete-_uyW3nrN.js";import"./Close-B57SlfWx.js";import"./usePreviousProps-BYCwus4J.js";import"./Tooltip-BNHD4B5V.js";import"./Chip-CjjfMMY_.js";import"./IconButton-DGohL5ME.js";import"./CircularProgress-D2topXWR.js";import"./ListSubheader-3rOeDSM0.js";import"./useInfiniteQuery-CwQX45Ce.js";import"./useBaseQuery-NqdwwGPu.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./Grid2-CHb9J3Cd.js";import"./Container-7wpQgvnn.js";import"./index-IdGqEWBr.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";const gr={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:u,tags:["autodocs"],argTypes:{...C,...g}},T=new b({name:"example"}),j=async(r,t)=>{const e=await T.post({offset:r,limit:t},{params:{}});return{totalCount:e.data.totalCount,offset:r,limit:t,options:e.data.options,count:e.data.count}},P=async(r,t)=>{const{options:e,totalCount:i}=await j(r,t);return{options:e,hasMore:r+t<i,offset:r}},F=new A({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),m={render:r=>{var e,i,p;const t=c();return o.jsx(x,{client:F,children:o.jsx(y,{...t,children:o.jsxs("form",{onSubmit:t.handleSubmit(d=>d),children:[o.jsx(u,{...r}),o.jsxs(h,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(s,{disabled:!((e=t==null?void 0:t.formState)!=null&&e.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>t.reset()}),o.jsx(s,{type:"submit",disabled:(i=t==null?void 0:t.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(p=t==null?void 0:t.formState)!=null&&p.isSubmitSuccessful?o.jsxs(f,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(S,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(t.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:P,limit:10,queryKey:"example",rules:{required:"This is required."}}};var a,n,l;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(n=m.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const Cr=["_ControlledAsyncAutoComplete"];export{m as _ControlledAsyncAutoComplete,Cr as __namedExportsOrder,gr as default};
