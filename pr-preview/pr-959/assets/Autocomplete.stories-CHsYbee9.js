import{j as t}from"./iframe-La0hozmm.js";import{C as e}from"./Autocomplete-DiOtTxbV.js";import{B as i}from"./index-CT5mpeGo.js";import{P as s}from"./index-CVxIkWKb.js";import{T as a}from"./index-OkwykyCM.js";import{G as l}from"./index-eHZf6pHN.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DXzyLXtj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-W4njMiwA.js";import"./index-1KAY_LF_.js";import"./index-L9cyz4q_.js";import"./index-MVgG_W0q.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-YrmrWU_k.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClnyVQ0Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DTVzxWrU.js";import"./SelectFocusSourceContext-BppuX2PY.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useForkRef-CYgSXLxN.js";import"./useSlotProps-o4xrbGrj.js";import"./Popover-CV1jitSE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-QPUTbchU.js";import"./useTheme-D5kgDNuB.js";import"./utils-C_Yf081A.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useTimeout-CjP9kdgI.js";import"./getReactElementRef-TIeMXNsW.js";import"./mergeSlotProps-BDDINM1D.js";import"./debounce-Be36O1Ab.js";import"./Modal-lk5DA8tl.js";import"./useEventCallback-CkMNQS0_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./Paper-BvBPQPSI.js";import"./List-B0CpRJrl.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DV2EMPBp.js";import"./createSvgIcon-CogVIOis.js";import"./OutlinedInput-CTfBg3Vp.js";import"./FormHelperText-Bk8ZiDzG.js";import"./FormControlLabel-BuAbVyu2.js";import"./Typography-F8uVoBR9.js";import"./Switch-Dn7ksyeq.js";import"./SwitchBase-BXj3k-eu.js";import"./ButtonBase-RNjBI3PY.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DrT8Tsp3.js";import"./RadioGroup-B9XhnsTM.js";import"./FormGroup-BFP8PGgB.js";import"./Stack-COfd3H0w.js";import"./styled-99JPjMFe.js";import"./Box-B4jhZySH.js";import"./Divider-BdcGsQEp.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DMxnzIC0.js";import"./FormControl-CgcW0UT-.js";import"./isMuiElement-VxhL7QTS.js";import"./Grid-DTxUT0NX.js";import"./useInfiniteQuery-Dn-cppbN.js";import"./suspense-CKiPZMHe.js";import"./useBaseQuery-DVV5wzPU.js";import"./index-y8X2dNNL.js";import"./index-ClM2XKlh.js";import"./___vite-browser-external_commonjs-proxy-D0Oqq-kF.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DdQ4cYwF.js";import"./Close-B_nlfjmT.js";import"./usePreviousProps-Do1ETvCM.js";import"./Tooltip-DDgYhS1x.js";import"./Chip-D-eOanK1.js";import"./IconButton-BEf7IA6l.js";import"./CircularProgress-DKXLIFka.js";import"./ListSubheader-UKGTyzSS.js";import"./Button-x0oW_Zme.js";import"./Container-Bl6cg8Xd.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
