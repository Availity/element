import{j as t}from"./iframe-DTy-Hi1D.js";import{C as e}from"./Autocomplete-Brvv1WS6.js";import{B as i}from"./index-BWwQVXX2.js";import{P as s}from"./index-CQ9SzY7-.js";import{T as a}from"./index-B3nHNvBt.js";import{G as l}from"./index-zuOxgOiJ.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DWa30rWd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBiDkLxm.js";import"./index-CbCbTI1D.js";import"./index-BW2CNFKP.js";import"./index-CrcoPoGw.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-3YRNiFr2.js";import"./memoTheme-BG1xBytH.js";import"./styled-aP0uaM-i.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BhJzQqzw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BecUCFWL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DkS3VRNH.js";import"./SelectFocusSourceContext-B0GTmmdc.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useForkRef-Cs-hla5u.js";import"./useSlotProps-i2bvpF4l.js";import"./Popover-pG0yFIDd.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BwzhUyNs.js";import"./useTheme-D2uWiRt2.js";import"./utils-UH3J-pbT.js";import"./TransitionGroupContext-vVRi092a.js";import"./useTimeout-Dox0L-0x.js";import"./getReactElementRef-Czal8mnO.js";import"./mergeSlotProps-BWinZWd0.js";import"./debounce-Be36O1Ab.js";import"./Modal-C1xsDPMc.js";import"./useEventCallback-wWQn7yuE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./Paper-BB7D87hg.js";import"./List-CK8mYBos.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DJ-ZRmZ2.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./OutlinedInput-BsxOEMJo.js";import"./FormHelperText-BqXE1i86.js";import"./FormControlLabel-DU0Bs6VA.js";import"./Typography-BE1U26X8.js";import"./Switch-CQO10KB0.js";import"./SwitchBase-B6HLL3af.js";import"./ButtonBase-DQHg31rx.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CT0ik4u9.js";import"./RadioGroup-DhRVjKyW.js";import"./FormGroup-DeHCopE_.js";import"./Stack-D5xuPFAT.js";import"./styled-CiCMHiUo.js";import"./Box-BiTKfYdJ.js";import"./Divider-dXGoqsdo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B-TIor5a.js";import"./FormControl-DauWaPA-.js";import"./isMuiElement-BqP85GjQ.js";import"./Grid-9G99kq7Q.js";import"./useInfiniteQuery-CwyPxo4M.js";import"./suspense-BF7yCdeh.js";import"./useBaseQuery-BO-qonfg.js";import"./index-CsKsuRu9.js";import"./index-2vGFGfAT.js";import"./___vite-browser-external_commonjs-proxy-D_SPfJw6.js";import"./index-BAAVGDDZ.js";import"./Autocomplete-VntltSrE.js";import"./Close-CdcIqPzl.js";import"./usePreviousProps-CB3N8KU_.js";import"./Tooltip-DHFGNIkU.js";import"./Chip-DXnIQAds.js";import"./IconButton-CZkpNN92.js";import"./CircularProgress-Dsur0AFP.js";import"./ListSubheader-CSgrIN2Z.js";import"./Button-BSzYbaIQ.js";import"./Container-CKdO9iiE.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
