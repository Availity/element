import{j as t}from"./iframe-h0MgQYlb.js";import{C as e}from"./Autocomplete-DAsmDton.js";import{B as i}from"./index-_zAfcFR5.js";import{P as s}from"./index-DqniC6Sr.js";import{T as a}from"./index-vTaYrtpe.js";import{G as l}from"./index-DDm8yHLq.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DO0WHQxJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLvcmT9s.js";import"./index-BHteuKbB.js";import"./index-BD61RVnX.js";import"./index-MVgG_W0q.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CJ2gQRBv.js";import"./memoTheme-XXgMlyY8.js";import"./styled-BqHoSPCQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-ai4y9w6P.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CzHvh1jI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BHNpSFEz.js";import"./SelectFocusSourceContext-AoxeqCNi.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useForkRef-CKNxtvC9.js";import"./useSlotProps-CeTvmasO.js";import"./Popover-yoB3AMXB.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-De7hiZQn.js";import"./useTheme-ipJVwYFq.js";import"./utils-DputtVCR.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useTimeout-DZyw5ypU.js";import"./getReactElementRef-zdjSJbKU.js";import"./mergeSlotProps-CQCB7Z3d.js";import"./debounce-Be36O1Ab.js";import"./Modal-Br_uJxcw.js";import"./useEventCallback-DzEyioes.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KJ2tZ5Vr.js";import"./Fade-z7eIM_c6.js";import"./Paper-Bzbluycl.js";import"./List-DZrQ3uAf.js";import"./utils-DoM3o7-Q.js";import"./useControlled-4IqYUsvs.js";import"./createSvgIcon-BnwFzQLv.js";import"./OutlinedInput-BuAc6qqn.js";import"./FormHelperText-AZVpt9j-.js";import"./FormControlLabel-a6mRqus2.js";import"./Typography-DKkmO78y.js";import"./Switch-CLZpABLm.js";import"./SwitchBase-Dtg29Sna.js";import"./ButtonBase-DGaEQWnN.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CXfh_6OV.js";import"./RadioGroup-BlqwT0bO.js";import"./FormGroup-BOwHFNcU.js";import"./Stack-B9I8dIEY.js";import"./styled-ZbNx8Tx8.js";import"./Box-CawMSGjY.js";import"./Divider-IpoUtaBO.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BJBK2rIy.js";import"./FormControl-BgnOztMe.js";import"./isMuiElement-DHZpsMdk.js";import"./Grid-BGvSYpEY.js";import"./useInfiniteQuery-2Tj8ItVG.js";import"./suspense-CpR1qpqc.js";import"./useBaseQuery-CuUo-4cq.js";import"./index-BIB_yAj3.js";import"./index-C8MsvkTd.js";import"./___vite-browser-external_commonjs-proxy-BxG7ovk5.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-gyCG8Jzl.js";import"./Close-BJS85dYf.js";import"./usePreviousProps-CF8o7k0V.js";import"./Tooltip-cnLuDxtR.js";import"./Chip-CY9iKWCV.js";import"./IconButton-gyouzdWj.js";import"./CircularProgress-Ce_dbRGa.js";import"./ListSubheader-Bzwe3T9v.js";import"./Button-DFw25j8B.js";import"./Container-CVSHMzmU.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
