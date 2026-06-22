import{j as t}from"./iframe-BcpGFM79.js";import{C as i}from"./Autocomplete-CyCbAVEf.js";import{B as e}from"./Button-DgpwJSBN.js";import{P as s}from"./Paper-yohM4iyv.js";import{T as a}from"./Typography-giEvkJi7.js";import{G as l}from"./Grid-CobFFp4x.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-D7MBIlYn.js";import"./preload-helper-Dab_6GC_.js";import"./Autocomplete-D-TOUwFZ.js";import"./TextField-uYxxMu-u.js";import"./FormHelperText-DHNlWcSg.js";import"./Form-BSB-tu1Z.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-B5A4eWsZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./FormLabel-KM-1TQDB.js";import"./FieldHelpIcon-Dc0XpqfL.js";import"./index-CrcoPoGw.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./FormControl-P2zjagtr.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-IVbgCQ7T.js";import"./Input-CKZyVNiP.js";import"./OutlinedInput-CRSwkZMH.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-C1npLRYC.js";import"./Actions-D5HDZDyt.js";import"./Select-CxS44fOa.js";import"./SelectFocusSourceContext-BgAF1XhB.js";import"./Popover-C-vNPShq.js";import"./mergeSlotProps-0PeTl37o.js";import"./Modal-ORZGbsIm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";import"./List-B4tdnm47.js";import"./createSvgIcon-D6BcWLqc.js";import"./Stack-C71gTkqw.js";import"./styled-CAzon1OD.js";import"./Divider-DtLhEkPR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D9BkScsD.js";import"./Autocomplete-m1w5Tiq4.js";import"./Close-BJXb1f8O.js";import"./usePreviousProps-CRxGi7vS.js";import"./Chip-CVFXZwEA.js";import"./ListSubheader-DxmX5MAa.js";import"./Button-CNBYq3K8.js";import"./Typography-D2_Tvhdq.js";import"./Grid-DtKUTAQi.js";const Nt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:i,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(i,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(e,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(e,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Dt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Dt as __namedExportsOrder,Nt as default};
