import{j as t}from"./iframe-DKvnFaXU.js";import{C as e}from"./Autocomplete-CaWU_O7O.js";import{B as i}from"./index-goOPcPYN.js";import{P as s}from"./index-zBszBh1k.js";import{T as a}from"./index-CDeQa_Ov.js";import{G as l}from"./index-DbDO0Ft_.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CAjEsR6C.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvCdIF2S.js";import"./index-_5xdzNiG.js";import"./index-ksFf16Do.js";import"./index-CrcoPoGw.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CXEooahZ.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkcKI7js.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DSlP_RFA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dyif2wC_.js";import"./SelectFocusSourceContext-F5AOv-5-.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useForkRef-BZiVfW-q.js";import"./useSlotProps-DYzgJZQm.js";import"./Popover-VuJg1sVN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D0mCJoig.js";import"./useTheme-CSDDNwq2.js";import"./utils-Bp7Prb7W.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useTimeout-CHMS-cR8.js";import"./getReactElementRef-CqgsFiRl.js";import"./mergeSlotProps-BLQDwcQN.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bm3yPZFq.js";import"./useEventCallback-BMp-rMhG.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-EX3DoS9x.js";import"./Fade-CrAHTHjX.js";import"./Paper-DT4unmmL.js";import"./List-BGKHL79p.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DXzaWELJ.js";import"./createSvgIcon-2KwAvjFg.js";import"./OutlinedInput-BIAm5zgc.js";import"./FormHelperText-DYyNj_Dv.js";import"./FormControlLabel-DwYTjEvZ.js";import"./Typography-D7JJPpmc.js";import"./Switch-DxotU7Ib.js";import"./SwitchBase-DhDyeBWH.js";import"./ButtonBase-t7rDwPbd.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BTw0Rwqw.js";import"./RadioGroup-27Q2WKBY.js";import"./FormGroup-B64yWhLm.js";import"./Stack-Ddupjr1g.js";import"./styled-vqTvL8XB.js";import"./Box-D54lZQNO.js";import"./Divider-DEIVsENh.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-psgMHWlS.js";import"./FormControl-Dkm4fxWQ.js";import"./isMuiElement-B9gvf1iq.js";import"./Grid-BqSQzKdl.js";import"./useInfiniteQuery-T0qc0pW-.js";import"./suspense-B3ARyDAO.js";import"./useBaseQuery-S6cU6In8.js";import"./index-Ds1bBKID.js";import"./index-zW81wbG9.js";import"./___vite-browser-external_commonjs-proxy-D0Uf09dU.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DjK4QtL9.js";import"./Close-BJ35LOVq.js";import"./usePreviousProps-Bt-wMdIb.js";import"./Tooltip-D9ZPYqEU.js";import"./Chip-BQ7zAuMf.js";import"./IconButton-Dk2wxJIq.js";import"./CircularProgress-1gU5OTOX.js";import"./ListSubheader-KUyPYhHF.js";import"./Button-CcwmilXM.js";import"./Container-Dg7zSU0F.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
