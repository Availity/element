import{j as t}from"./iframe-7yTZJyI8.js";import{C as e}from"./Autocomplete-C3YZ4qe1.js";import{B as i}from"./index-BAPd2OJx.js";import{P as s}from"./index-BBKrIaOg.js";import{T as a}from"./index-Fm3BvXJg.js";import{G as l}from"./index-DoZlsXSq.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-OiudKBNG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-j0tuM5jJ.js";import"./index-mo0xo_s1.js";import"./index-Fccp8F6-.js";import"./index-MVgG_W0q.js";import"./index-LWy-RhUk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BfOELIkm.js";import"./memoTheme-CIMTQhyT.js";import"./styled-BMlFG2th.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-I6OgSsZO.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-vZHxFS91.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-C8OaN8DB.js";import"./SelectFocusSourceContext-wLszAgBF.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useForkRef-CH4SD_Tq.js";import"./useSlotProps-EhI9vhRh.js";import"./Popover-DlQtJRWC.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-B1bcjcbG.js";import"./useTheme-BQI76UIF.js";import"./utils-C-JIMqUV.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useTimeout-DDTRmv4f.js";import"./getReactElementRef-BidH7fq7.js";import"./mergeSlotProps-Bi6GFR8l.js";import"./debounce-Be36O1Ab.js";import"./Modal-CedBjRzI.js";import"./useEventCallback-B8agtspF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Bj6XerGx.js";import"./Fade-DH1Krrsi.js";import"./Paper-DkH-Q5xC.js";import"./List-CRcTwWHL.js";import"./utils-DoM3o7-Q.js";import"./useControlled-C9ki-RMb.js";import"./createSvgIcon-D2n64X_N.js";import"./OutlinedInput-CpoiWSqJ.js";import"./FormHelperText-CWuIrZZ7.js";import"./FormControlLabel-B-Gj01lZ.js";import"./Typography-Bz3seEIw.js";import"./Switch-D80papWj.js";import"./SwitchBase-B3rR0Chu.js";import"./ButtonBase-DlKrHxyr.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-pAidvSGQ.js";import"./RadioGroup-DzGlsQkP.js";import"./FormGroup-B09RTSmM.js";import"./Stack-CZJNS7pW.js";import"./styled-Cs8_Hcz2.js";import"./Box-BsPtR0uw.js";import"./Divider-4AVVzlu6.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-C6TtCfy8.js";import"./FormControl-o6j7FVmD.js";import"./isMuiElement-BI6Pjydy.js";import"./Grid-CKHq_-iw.js";import"./useInfiniteQuery-BEi_l5x-.js";import"./suspense-Bh2RuJJ8.js";import"./useBaseQuery-BYCxL4S2.js";import"./index-e3xISyZQ.js";import"./index-7SoByLum.js";import"./___vite-browser-external_commonjs-proxy-C8gZ9b-f.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-BhzDQ9_h.js";import"./Close-DB3c58TO.js";import"./usePreviousProps-CIyZQqjU.js";import"./Tooltip-BDwmcAHG.js";import"./Chip-k_LCwSxr.js";import"./IconButton-ffMIHdaJ.js";import"./CircularProgress-CFzFWCR0.js";import"./ListSubheader-Cg9335Di.js";import"./Button-BK3WQXmQ.js";import"./Container-CJPQZB9X.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
