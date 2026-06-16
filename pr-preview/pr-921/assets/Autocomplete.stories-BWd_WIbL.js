import{j as t}from"./iframe-D__S4UWJ.js";import{C as e}from"./Autocomplete-D1MV24d2.js";import{B as i}from"./index-CSzUZNdV.js";import{P as s}from"./index-BhRHEJUr.js";import{T as a}from"./index-DoXDZQMb.js";import{G as l}from"./index-DMk5qu1-.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DDSLpX3i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6cAHX9F.js";import"./index-CeHxfvJr.js";import"./index-Ba9958WM.js";import"./index-CrcoPoGw.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-XbFZbbsX.js";import"./memoTheme-BV959hj8.js";import"./styled-D9hsOvpf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DogfPA3j.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BV3eLlPL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-75QAeKH4.js";import"./SelectFocusSourceContext-Sxgzlu4M.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./useSlotProps-BwqG8d0v.js";import"./Popover-BxV2QR5y.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DQUO7uTD.js";import"./useTheme-CFaiP_LB.js";import"./utils-qh6k9bbM.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./useTimeout-92omNL17.js";import"./getReactElementRef-CXYGkVyS.js";import"./mergeSlotProps-CgsjCMz0.js";import"./debounce-Be36O1Ab.js";import"./Modal-B4jLPaJ1.js";import"./useEventCallback-DJS3GGm_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B_zkZsEU.js";import"./Fade-BYuTC5N7.js";import"./Paper-Cbe2-SWa.js";import"./List-BzNi2ci2.js";import"./utils-DoM3o7-Q.js";import"./useControlled-jwoPGZ3a.js";import"./createSvgIcon-CjZPmBcj.js";import"./OutlinedInput-C35dVeS9.js";import"./FormHelperText-C5TKqXw1.js";import"./FormControlLabel-DOCoDnNz.js";import"./Typography-jktlZrXz.js";import"./Switch-CtmyTchu.js";import"./SwitchBase-D1Cjv_3W.js";import"./ButtonBase-Ci_mfbwX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Btfwlgcu.js";import"./RadioGroup-DzVI_j6e.js";import"./FormGroup-DqGHfD-7.js";import"./Stack-CGHwgn-1.js";import"./styled-Bi8w4HDu.js";import"./Box-BOn3j62W.js";import"./Divider--uBwDw0n.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bez7Rfvx.js";import"./FormControl-DNyL8KHk.js";import"./isMuiElement-BbpHSvRS.js";import"./Grid-BBYwbGJ2.js";import"./useInfiniteQuery-CG2MIMFr.js";import"./suspense-BQU9mLju.js";import"./useBaseQuery-Cg-foJU7.js";import"./index-C4VUnf3P.js";import"./index-CBSryq4n.js";import"./___vite-browser-external_commonjs-proxy-Cq4iaMOo.js";import"./index-Cr0Duiqm.js";import"./Autocomplete-CDKDXUFQ.js";import"./Close-j7BAIMlS.js";import"./usePreviousProps-DfqR5CJc.js";import"./Tooltip-CiiYXVhS.js";import"./Chip-sq8E6cbD.js";import"./IconButton-CNhmLG-N.js";import"./CircularProgress-haj7VCd3.js";import"./ListSubheader-BMdVCTLk.js";import"./Button-CFqvl5Id.js";import"./Container-B4RgbXyO.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
