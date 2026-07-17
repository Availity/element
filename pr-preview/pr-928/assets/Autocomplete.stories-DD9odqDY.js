import{j as t}from"./iframe-DFjmTghm.js";import{C as e}from"./Autocomplete-Dj_Sm1Yj.js";import{B as i}from"./index-C9VG5BR5.js";import{P as s}from"./index-Cr0a1tQl.js";import{T as a}from"./index-Fpxu3GdQ.js";import{G as l}from"./index-CRzHfBAS.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-nJND2Z3k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwsgQG13.js";import"./index-BZXJRt-S.js";import"./index-jO9EpA7l.js";import"./index-CrcoPoGw.js";import"./index-BziNu4GU.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-loQPFd-T.js";import"./memoTheme-BQvuiRMw.js";import"./styled-Bs6aTLdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CVzJErPY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BfqaQjSl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CsYK4MgS.js";import"./SelectFocusSourceContext-Be8PVA64.js";import"./useSlot-Cc0TH-P4.js";import"./mergeSlotProps-dd0y0IZz.js";import"./useForkRef-Cm1smsVr.js";import"./useSlotProps-BPRZd4R9.js";import"./Popover-Clpup2NH.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-6A9k5eoS.js";import"./useTheme-C6J0_U3R.js";import"./utils-DG8dL2Al.js";import"./TransitionGroupContext-CFoyGAe4.js";import"./useTimeout-DYSzpSzE.js";import"./getReactElementRef-dZ7e7R7I.js";import"./mergeSlotProps-Bioj6IL2.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeIW4txF.js";import"./useEventCallback-DYc4zMoP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Behw_zi2.js";import"./Fade-BDQ0ytsL.js";import"./Paper-DDJAWKgV.js";import"./List-DDn9UT2Z.js";import"./utils-DoM3o7-Q.js";import"./useControlled-_CojnKOO.js";import"./createSvgIcon-BZFSDOFb.js";import"./OutlinedInput-CYFmS-1F.js";import"./FormHelperText-D5drgxgl.js";import"./FormControlLabel-DH8yz918.js";import"./Typography-B0pIYi8P.js";import"./Switch-DU0RNYmU.js";import"./SwitchBase-fM7ST65L.js";import"./ButtonBase-WbBW4SNX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-H9CP-1cm.js";import"./RadioGroup-By2pNnEt.js";import"./FormGroup-BhsOAUu0.js";import"./Stack-CWk2zcdQ.js";import"./styled-tzudnm-b.js";import"./Box-CxjVphfW.js";import"./Divider-CTNIEa-8.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CXMOO4W4.js";import"./FormControl-CBg4yJvo.js";import"./isMuiElement-BTwBnJKE.js";import"./Grid-88wyRLeR.js";import"./useInfiniteQuery-D5_SOLRS.js";import"./suspense-CwAU2u64.js";import"./useBaseQuery-BM7X3ltn.js";import"./index-DuZcS_m3.js";import"./index-D9CAbCnG.js";import"./___vite-browser-external_commonjs-proxy-BvOHJjar.js";import"./index-DMhxb2GA.js";import"./Autocomplete-CdxtxFBv.js";import"./Close-DTbS5nYR.js";import"./usePreviousProps-C8Xq4V4r.js";import"./Tooltip-BpELumoD.js";import"./Chip-C4A6HoYO.js";import"./IconButton-D8Ip9ZNp.js";import"./CircularProgress-DAp6FT1u.js";import"./ListSubheader-Bg7eguyb.js";import"./Button-Di2tppwh.js";import"./Container-BIn0b_Bo.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
