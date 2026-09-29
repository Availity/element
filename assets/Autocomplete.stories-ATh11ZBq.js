import{j as t}from"./iframe-5qL0mprR.js";import{C as e}from"./Autocomplete-CG0hfZ0J.js";import{B as i}from"./index-D6eeRdCr.js";import{P as s}from"./index-DrpSWOjF.js";import{T as a}from"./index-CJigEfEA.js";import{G as l}from"./index-ClcKetnN.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CGn8amwb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvH1he0n.js";import"./index-CIJrhxZS.js";import"./index-C3SWmzio.js";import"./index-CrcoPoGw.js";import"./index-CD_y2Btm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./memoTheme-DGTRKnQQ.js";import"./styled-CoUwmM87.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DVY6ao7R.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5FH_KgV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dc1mU1Pl.js";import"./SelectFocusSourceContext-CEJvL2Re.js";import"./useSlot-Cn1CdUSX.js";import"./mergeSlotProps-BLlOPPFY.js";import"./useForkRef-B_tBAx6E.js";import"./useSlotProps-BldRbwm9.js";import"./Popover-fOCUh9Nt.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BaL9DcFZ.js";import"./useTheme-Dl3uMx7u.js";import"./utils-ZWxhk7o5.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useTimeout-B8tDrGFN.js";import"./getReactElementRef-DBt8lh_B.js";import"./mergeSlotProps-BAEmNdNM.js";import"./debounce-Be36O1Ab.js";import"./Modal-CAwaW-IN.js";import"./useEventCallback-DqMc6arA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DdJYMJ-d.js";import"./Fade-CwTmGpyj.js";import"./Paper-CT3iXlM2.js";import"./List-8rgLrAmz.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CSqunifB.js";import"./createSvgIcon-CZsBBnxz.js";import"./OutlinedInput-exuQdaqt.js";import"./FormHelperText-Bngb2_Es.js";import"./FormControlLabel-cDTw_uEy.js";import"./Typography-F-Y5u_yh.js";import"./Switch-DUksUYmW.js";import"./SwitchBase-C72NdBTb.js";import"./ButtonBase-CEBWCJ86.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BRuYCTD8.js";import"./RadioGroup-PluZ5qs0.js";import"./FormGroup-DUp1hayB.js";import"./Stack-CnLSR6do.js";import"./styled-rFpyV319.js";import"./Box-jTQ-hmH5.js";import"./Divider-DdnnBiCY.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BU-6Dl6v.js";import"./FormControl-Dcj4iUlW.js";import"./isMuiElement-DHbarLNo.js";import"./Grid-B5L6Dh7M.js";import"./useInfiniteQuery-DQhL2hi7.js";import"./suspense-Ca22AqI2.js";import"./useBaseQuery-in6Y_jke.js";import"./index-BgvYUwQe.js";import"./index-Ce6zeul1.js";import"./___vite-browser-external_commonjs-proxy-DolIjbot.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-2oImMAEx.js";import"./Close-DTIfGCy3.js";import"./usePreviousProps-BKX5CLWv.js";import"./Tooltip-P-kE-0cn.js";import"./Chip-C0POsqyA.js";import"./IconButton-B8_cpiYd.js";import"./CircularProgress-BqSWo9RJ.js";import"./ListSubheader-DuP4kBYp.js";import"./Button-8WJV18MQ.js";import"./Container-B0mlIeY3.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
