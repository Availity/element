import{j as t}from"./iframe-BdtdKmg8.js";import{C as e}from"./Autocomplete-C85lC4cc.js";import{B as i}from"./index-sfs31Xg8.js";import{P as s}from"./index-Ci1afW8z.js";import{T as a}from"./index-BktFWPxY.js";import{G as l}from"./index-y3OLnY3V.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DVBkF3FQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CroamaaL.js";import"./index-DDSSTqjp.js";import"./index-CLJf8Evv.js";import"./index-CrcoPoGw.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BHLlmPIG.js";import"./memoTheme-BSZO8tET.js";import"./styled-DYRRHVQd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-A8uoF4Ei.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-6mG5_X4U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BJ67YTJg.js";import"./SelectFocusSourceContext-BALdufV-.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useForkRef-yU1gIY9t.js";import"./useSlotProps-CIppk9xm.js";import"./Popover-D2QOeMg_.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-By3tqOUu.js";import"./useTheme-BUr8GPQY.js";import"./utils-B5cCI6Rw.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useTimeout-BjzlLD0-.js";import"./getReactElementRef-BX57xPm_.js";import"./mergeSlotProps-BmhbC6HA.js";import"./debounce-Be36O1Ab.js";import"./Modal-r1fngEGv.js";import"./useEventCallback-CNW4hkob.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./Paper-BbHjqnIf.js";import"./List-kh9aNYzj.js";import"./utils-DoM3o7-Q.js";import"./useControlled-qDvReWFA.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./OutlinedInput-By841vvG.js";import"./FormHelperText-CjBh-oXE.js";import"./FormControlLabel-D9_T4UwB.js";import"./Typography-Ct1eVQia.js";import"./Switch-D7-Gaizw.js";import"./SwitchBase-t0UcAKA4.js";import"./ButtonBase-Bsasq48R.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CwDoUWcu.js";import"./RadioGroup-BPASCs_d.js";import"./FormGroup-Crs6dnJ1.js";import"./Stack-DjOyHPuU.js";import"./styled-BACYX6V0.js";import"./Box-Bdbdbjz0.js";import"./Divider-BFyzYRTs.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BQR4myeh.js";import"./FormControl-CLW-YwyF.js";import"./isMuiElement-VRCGw5Z3.js";import"./Grid-BEc5hWlN.js";import"./useInfiniteQuery-h4tHALGV.js";import"./suspense-oxP0Fd4R.js";import"./useBaseQuery-B87enZfa.js";import"./index-Bf-4EAkZ.js";import"./index-D7kz3TOt.js";import"./___vite-browser-external_commonjs-proxy-ChFk25yN.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-CKBP0sXM.js";import"./Close-DNEOIFD-.js";import"./usePreviousProps-BROcA9vW.js";import"./Tooltip-B7d6lYcI.js";import"./Chip-BMEPbNMe.js";import"./IconButton-BGWMoxCC.js";import"./CircularProgress-DKwr5YQe.js";import"./ListSubheader-BjPSWZFa.js";import"./Button-DsRHMuVD.js";import"./Container-5HhabFZh.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
