import{j as t}from"./iframe-G1mPJgBf.js";import{C as e}from"./Autocomplete-BlITPtc_.js";import{B as i}from"./index-L2w0xRVx.js";import{P as s}from"./index-BFDFNQZR.js";import{T as a}from"./index-BohNTKzF.js";import{G as l}from"./index-Dd7L_VAv.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-C-ZLkGLU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrvRnxG3.js";import"./index-CJfPOYSG.js";import"./index-DPTb8TTK.js";import"./index-CrcoPoGw.js";import"./index-J2aZCtZS.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CTlX2w7Q.js";import"./memoTheme-ClxxX8JT.js";import"./styled-Bu4wmneT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CXyukB4E.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DGpS68tJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BYk43Zrb.js";import"./SelectFocusSourceContext-DO_9ohPs.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useForkRef-BD2h0Jdv.js";import"./useSlotProps-C0zVRdHz.js";import"./Popover-CqRJKN8j.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D2NuCJSx.js";import"./useTheme-D1p8Kaqq.js";import"./utils-CV6P-8oh.js";import"./TransitionGroupContext-F733By2L.js";import"./useTimeout-EKZwYL1w.js";import"./getReactElementRef-D1QwtblH.js";import"./mergeSlotProps-B2gKoX76.js";import"./debounce-Be36O1Ab.js";import"./Modal-CSvN6E0P.js";import"./useEventCallback-C728JWJX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wbozj9wt.js";import"./Fade-DRE_fc-F.js";import"./Paper-B8ctKAYM.js";import"./List-NPmmzPN-.js";import"./utils-DoM3o7-Q.js";import"./useControlled-_wEooLXW.js";import"./createSvgIcon-BAr3_gQH.js";import"./OutlinedInput-C3tRGErD.js";import"./FormHelperText-B8V18IsC.js";import"./FormControlLabel-tWenJfV9.js";import"./Typography-DNGzJ1Ro.js";import"./Switch-ChMWY217.js";import"./SwitchBase-DC5Y6S4X.js";import"./ButtonBase-B5xaXwjS.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-B20SOU7e.js";import"./RadioGroup-BjboFY-P.js";import"./FormGroup-B0-dPKpp.js";import"./Stack-baAEBtk1.js";import"./styled-DkfJ6ssg.js";import"./Box-B9x9TWbS.js";import"./Divider-SgB52HKQ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CYnDEoli.js";import"./FormControl-CDBc_1Ko.js";import"./isMuiElement-CksqsLPP.js";import"./Grid-DzK1vDYp.js";import"./useInfiniteQuery--zMr5MSV.js";import"./suspense-rKRI-UBi.js";import"./useBaseQuery-DvkeHGVq.js";import"./index-CEiGyhSD.js";import"./index-DIoy5QMF.js";import"./___vite-browser-external_commonjs-proxy-BbC5ecPs.js";import"./index-CGWJm4Tl.js";import"./Autocomplete-DnPa1Klg.js";import"./Close-CE-Vyd3p.js";import"./usePreviousProps-Bp_MxTUR.js";import"./Tooltip-DQJZ8sfi.js";import"./Chip-CJJ7a1EP.js";import"./IconButton-Bcnv2CeG.js";import"./CircularProgress-CUukeIT7.js";import"./ListSubheader-wEfaDNU3.js";import"./Button-ByjTqYnc.js";import"./Container-v7PawbDd.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
