import{j as t}from"./iframe-CGrCKeT2.js";import{C as e}from"./Autocomplete-Cls6cKb1.js";import{B as i}from"./index-DmvP-mEg.js";import{P as s}from"./index-Dh2sAMRB.js";import{T as a}from"./index-CZXljNWA.js";import{G as l}from"./index-DolDcqHq.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DfPfq1Xk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O0F0Hxcg.js";import"./index-DHuEgV_k.js";import"./index-6epKdSc3.js";import"./index-CrcoPoGw.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DmVwQJs6.js";import"./memoTheme-BqDMrUbz.js";import"./styled-CotFv3Dr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dm5e5Bpr.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DJsBJsMM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CTV8LpZw.js";import"./SelectFocusSourceContext-C01S2OkC.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useForkRef-BEtKOrY4.js";import"./useSlotProps-DOUkeG0B.js";import"./Popover-BPPXiUal.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BYKyeVye.js";import"./useTheme-4bOKZyvR.js";import"./utils-BkMf-uLY.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useTimeout-DnCoFfSV.js";import"./getReactElementRef-BNGPoDkJ.js";import"./mergeSlotProps-DfxTDm-u.js";import"./debounce-Be36O1Ab.js";import"./Modal-DaH7TrRl.js";import"./useEventCallback-y36uneSW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./Paper-DOXN6uva.js";import"./List-y2FflAjw.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DCMdc5dP.js";import"./createSvgIcon-DSkk_8Bd.js";import"./OutlinedInput-DfoKSt68.js";import"./FormHelperText-CzHZXYcR.js";import"./FormControlLabel-CLZnkdIQ.js";import"./Typography-Bir8nP2f.js";import"./Switch-RFJmoXGw.js";import"./SwitchBase-B4wWvBkW.js";import"./ButtonBase-B5P9vk86.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Dm4oDbtu.js";import"./RadioGroup-CjIXdSfJ.js";import"./FormGroup-A-2cfNzW.js";import"./Stack-_oDMgEvk.js";import"./styled-BjWfuHlM.js";import"./Box-Bi1Xr4Gf.js";import"./Divider-DHaspIrJ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bug5Cm0t.js";import"./FormControl-Ba5nyVsP.js";import"./isMuiElement-RR7Ftbg4.js";import"./Grid-CmaXE-H9.js";import"./useInfiniteQuery-CYa2uNKA.js";import"./suspense-BFby4bIf.js";import"./useBaseQuery-s-e80H8T.js";import"./index-C_5JhCMK.js";import"./index-Bjf7gb31.js";import"./___vite-browser-external_commonjs-proxy-DI21XlTg.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-CFgJtcfq.js";import"./Close-WOGKBFf9.js";import"./usePreviousProps-BUgHPhqG.js";import"./Tooltip-BDnPRKbu.js";import"./Chip-CurS7vqd.js";import"./IconButton-dlpyeDck.js";import"./CircularProgress-BKyEW5Pk.js";import"./ListSubheader-Dehat_Xl.js";import"./Button-BHZdRtrg.js";import"./Container-CUb5VPVp.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
