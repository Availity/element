import{j as t}from"./iframe-C9_PxSGQ.js";import{C as e}from"./Autocomplete-CEjNVvpI.js";import{B as i}from"./index-ButV5MJr.js";import{P as s}from"./index-Bjbz6YkZ.js";import{T as a}from"./index-Bwm7V2AF.js";import{G as l}from"./index-Cwp1bTGK.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CAaGANuF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cm_DEc49.js";import"./index-DYt7HrLH.js";import"./index-CE6aNSs8.js";import"./index-CrcoPoGw.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./memoTheme-BxvcW3UF.js";import"./styled-B-vqXkzy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BeY29v7P.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CpMC7EHx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DcupVlEN.js";import"./SelectFocusSourceContext-Fw-FsAu5.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./useSlotProps-BDX3RUX-.js";import"./Popover-Dc2RDNtf.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Ct4gHjrk.js";import"./useTheme-BHbpGC30.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./useTimeout-BMn8x6pQ.js";import"./getReactElementRef-on-DwLqm.js";import"./mergeSlotProps-BJFY07Zq.js";import"./debounce-Be36O1Ab.js";import"./Modal-CUp8vkO1.js";import"./useEventCallback-DieoYw-U.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./Paper-DGceIsLw.js";import"./List-DWo7-1hB.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BGxEnoNZ.js";import"./createSvgIcon-DoDU4gSx.js";import"./OutlinedInput-BZW58KdM.js";import"./FormHelperText-CQ0DNzl4.js";import"./FormControlLabel-DQ-Rgi5d.js";import"./Typography-B7ymJCK8.js";import"./Switch-C9aFTenp.js";import"./SwitchBase-CbZ2kkmp.js";import"./ButtonBase-k4M9aDLt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DCg2Gj6y.js";import"./RadioGroup-DJuShQt6.js";import"./FormGroup-mRbk2rO2.js";import"./Stack-BEdSkyO_.js";import"./styled-v5MGqYmj.js";import"./Box-DwMYriWl.js";import"./Divider-BU7503P_.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CdzSC_MY.js";import"./FormControl-DXuwkCpR.js";import"./isMuiElement-BE5icW1i.js";import"./Grid-AdyG_hrd.js";import"./useInfiniteQuery-DtRX2tTx.js";import"./suspense-DqW36k_m.js";import"./useBaseQuery-B2e3HEHA.js";import"./index-DD4KIobM.js";import"./index-Ckji6gEQ.js";import"./___vite-browser-external_commonjs-proxy-BxZYR8lA.js";import"./index-B9N7h3aW.js";import"./Autocomplete-BElT9pxC.js";import"./Close-B3zopXB2.js";import"./usePreviousProps-Cxfl0I4R.js";import"./Tooltip-FRBJUwm-.js";import"./Chip-C_WVf5kH.js";import"./IconButton-BjLNslZW.js";import"./CircularProgress-vDDdOi_d.js";import"./ListSubheader-BHz4HoZ7.js";import"./Button-DtK3QmjS.js";import"./Container-DSjJo15B.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
