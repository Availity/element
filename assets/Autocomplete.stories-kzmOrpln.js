import{j as t}from"./iframe-DM2JG2Wv.js";import{C as e}from"./Autocomplete-CDSBmaAV.js";import{B as i}from"./index-DQYiNEqx.js";import{P as s}from"./index-BZbVZ93S.js";import{T as a}from"./index-DASKwMqe.js";import{G as l}from"./index-Dro33RKh.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DRmN-6ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcyHmIrX.js";import"./index-Bn3VVfQY.js";import"./index-D0QEA918.js";import"./index-MVgG_W0q.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlqYcycJ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BOyQprAg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CUSrbkCV.js";import"./SelectFocusSourceContext-DI2xIgZx.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useForkRef--lBTfT4q.js";import"./useSlotProps-6BpQXPqS.js";import"./Popover-LlYF3w6K.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DFUf67sY.js";import"./useTheme-BIdTJdU8.js";import"./utils-B1H1HspZ.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useTimeout-DDDxsICF.js";import"./getReactElementRef-gsi1wQpy.js";import"./mergeSlotProps-gJlJxAuh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bpysy-qr.js";import"./useEventCallback-B8_sGVJg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./Paper-D6rGRseY.js";import"./List-lGfDTeyH.js";import"./utils-DoM3o7-Q.js";import"./useControlled-4UyvroS3.js";import"./createSvgIcon-CxStVnnE.js";import"./OutlinedInput-BVhxzUTD.js";import"./FormHelperText-DmHrS-f2.js";import"./FormControlLabel-CgZbLNmr.js";import"./Typography-Cb49bwUU.js";import"./Switch-Uj5KOIHe.js";import"./SwitchBase-DE3M2Edh.js";import"./ButtonBase-FpBSGXSw.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BvqRFW_F.js";import"./RadioGroup-Dp4TasKT.js";import"./FormGroup-B-vHGHwY.js";import"./Stack-D8O8MXVX.js";import"./styled-Bf965zM_.js";import"./Box-Cqyd88nw.js";import"./Divider-FKTpnAgL.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CkhBNCjB.js";import"./FormControl-DuDHVeRj.js";import"./isMuiElement-B6N371AV.js";import"./Grid-CX1e7vz2.js";import"./useInfiniteQuery-D1sFsx3E.js";import"./suspense-BSjNsbtt.js";import"./useBaseQuery-DewempDT.js";import"./index-DUd7HCfU.js";import"./index-Dhw4AyUI.js";import"./___vite-browser-external_commonjs-proxy-Dtep4sfn.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-CIJqZwfa.js";import"./Close-BRUyXtrN.js";import"./usePreviousProps-oUe9pMkW.js";import"./Tooltip-Ff-XGBQt.js";import"./Chip-uVuZu_aR.js";import"./IconButton-Bj7e_4ur.js";import"./CircularProgress-D7bBmSyx.js";import"./ListSubheader-XMyweIZc.js";import"./Button-p88YkSSM.js";import"./Container-I8b0yq_j.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
