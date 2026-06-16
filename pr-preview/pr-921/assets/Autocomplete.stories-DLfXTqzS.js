import{j as t}from"./iframe-DbrIJLQi.js";import{C as e}from"./Autocomplete-8B_rrp5A.js";import{B as i}from"./index-BviXD-l_.js";import{P as s}from"./index-CYbneiSx.js";import{T as a}from"./index-uxKHXzQl.js";import{G as l}from"./index-D9nQZvQo.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-2SHADflH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QH0LKgyo.js";import"./index-C6LAyptn.js";import"./index-D1fYhjb6.js";import"./index-CrcoPoGw.js";import"./index-BV8EXEzP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DkLovEvc.js";import"./memoTheme-CYnUbeeS.js";import"./styled-7I1Qt9E3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7bT6Btw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYWmgkgE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cdrixiru.js";import"./SelectFocusSourceContext-BBesLkFm.js";import"./useSlot-ucEwirIM.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useForkRef-xHQCOq-i.js";import"./useSlotProps-CHkbcgjp.js";import"./Popover-CoLBYFg2.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CRDltpFP.js";import"./useTheme-DYW2Qal8.js";import"./utils-C3QXpwtY.js";import"./TransitionGroupContext-bpHC9icU.js";import"./useTimeout-0bEjAxlE.js";import"./getReactElementRef-CTToKV8F.js";import"./mergeSlotProps-BYQRBRhP.js";import"./debounce-Be36O1Ab.js";import"./Modal-DerH6gqI.js";import"./useEventCallback-GRDf_Mdq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BxUsxFSD.js";import"./Fade-BisiffpU.js";import"./Paper-CCVHPuGA.js";import"./List-C1_gwHJu.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DZAExesg.js";import"./createSvgIcon-GCeLsGHA.js";import"./OutlinedInput-BFe23H1n.js";import"./FormHelperText-BvP8g2iX.js";import"./FormControlLabel-WcjZ1yo1.js";import"./Typography-CJOV5VVW.js";import"./Switch-B5eAU5u-.js";import"./SwitchBase-D5XteesO.js";import"./ButtonBase-BHclRNV-.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DxcSoo58.js";import"./RadioGroup-ypRPCInm.js";import"./FormGroup-VuYgoRam.js";import"./Stack-H1A63kiw.js";import"./styled-DMMrRL0j.js";import"./Box-ddZNUx2x.js";import"./Divider-BV6LSjrm.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Cxl4IXvA.js";import"./FormControl-CA9sRqVU.js";import"./isMuiElement-2h_sD4kS.js";import"./Grid-D3_qV-Fz.js";import"./useInfiniteQuery-ER1xOzZF.js";import"./suspense-DYwDfxsZ.js";import"./useBaseQuery-DOPph3p4.js";import"./index-eGgQknTF.js";import"./index-DncEkrls.js";import"./___vite-browser-external_commonjs-proxy-DxbviS0p.js";import"./index-CfcGBtrm.js";import"./Autocomplete-EkYNfxgS.js";import"./Close-BwrnJGzX.js";import"./usePreviousProps-HJc8a1EQ.js";import"./Tooltip-Dj2v8eaN.js";import"./Chip-4KCJAjx2.js";import"./IconButton-FVSq3BNJ.js";import"./CircularProgress-HcGcr7gk.js";import"./ListSubheader-B81h0n-Z.js";import"./Button-CzxszAvI.js";import"./Container-B1a9E6oy.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledAutocomplete {...args} />
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
      </FormProvider>;
  },
  args: {
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    rules: {
      required: 'This is required.'
    },
    FieldProps: {
      label: 'Autocomplete Label'
    }
  }
}`,...r.parameters?.docs?.source}}};const Zt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Zt as __namedExportsOrder,Yt as default};
