import{j as t}from"./iframe-Dc8rhMFy.js";import{C as e}from"./Autocomplete-DgTiYS_5.js";import{B as i}from"./index-Dd1sCRm8.js";import{P as s}from"./index-Dh_WMTr-.js";import{T as a}from"./index-j2N_GGzH.js";import{G as l}from"./index-5t25iiun.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BvZBn0WO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KEFpS9dx.js";import"./index-ygDng6Wy.js";import"./index-BpsJpJfp.js";import"./index-MVgG_W0q.js";import"./index-DY0QHs1w.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BxrpqK7J.js";import"./memoTheme-S-5nuklg.js";import"./styled-BGT3xm4Q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CJhShZK7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv8J8Q0P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-D5ShPJUX.js";import"./SelectFocusSourceContext-DAmy3Y7c.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useForkRef-udrkS_SI.js";import"./useSlotProps-Bnd3aa5q.js";import"./Popover-CGrtCsPR.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-jMetYcmF.js";import"./useTheme-CAn2KvKi.js";import"./utils-D7u3O4jf.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useTimeout-CrdWGjXP.js";import"./getReactElementRef-Dso64NKM.js";import"./mergeSlotProps-CnvQftF1.js";import"./debounce-Be36O1Ab.js";import"./Modal-Ch87VQcB.js";import"./useEventCallback-BaT-rbGb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-fXAkdBb0.js";import"./Fade-DOAN5MWn.js";import"./Paper-CSAWm734.js";import"./List-CCvWDakc.js";import"./utils-DoM3o7-Q.js";import"./useControlled-g2ws-rib.js";import"./createSvgIcon-CArSjKuJ.js";import"./OutlinedInput-OICLv0Nd.js";import"./FormHelperText-0GbrumB_.js";import"./FormControlLabel-DPQCCqsQ.js";import"./Typography-B_IwZxWJ.js";import"./Switch-fiWFufRn.js";import"./SwitchBase-CND8MRdP.js";import"./ButtonBase-CqO9c84b.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DzKMm59G.js";import"./RadioGroup-BCR1LXCh.js";import"./FormGroup-FLJ02UL5.js";import"./Stack-CFoc2Kye.js";import"./styled-Bni-voJ-.js";import"./Box-BeA7Astr.js";import"./Divider-OGNQ4sKt.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DVHg-shP.js";import"./FormControl-CX0NonDn.js";import"./isMuiElement-DClEETsS.js";import"./Grid-CK3PRshc.js";import"./useInfiniteQuery-P-4lyog-.js";import"./suspense-CyoahKL7.js";import"./useBaseQuery-hNTibl36.js";import"./index-CVAcvEgZ.js";import"./index-zYdcEWB1.js";import"./___vite-browser-external_commonjs-proxy-BalxyFdc.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-CXia26B0.js";import"./Close-C-Uwrjhi.js";import"./usePreviousProps-D3IuWV4s.js";import"./Tooltip-y8JW-hsI.js";import"./Chip-CsfQRKA3.js";import"./IconButton-CeH7M-cn.js";import"./CircularProgress-FGVI2lRz.js";import"./ListSubheader-CMVZEj66.js";import"./Button-D07KqWD2.js";import"./Container-B259nuZR.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
