import{j as t}from"./iframe-CoG_eD6W.js";import{C as e}from"./Autocomplete-CV0fDbvF.js";import{B as i}from"./index-BY7cwWhX.js";import{P as s}from"./index-DYh46aeX.js";import{T as a}from"./index-8MVp_n_A.js";import{G as l}from"./index-BDyGITPx.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BnhwAm-V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpCLznnC.js";import"./index-Bvjy6M59.js";import"./index-BE8Ll7Ot.js";import"./index-BiBDMnSv.js";import"./index-BiwFPdxj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CCNV5-S3.js";import"./memoTheme-CN1XLapj.js";import"./styled-CrcATWO9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTAhp3K4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-I9ZHfBzW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BYaj2ZYw.js";import"./Menu-BbxzJjKs.js";import"./useSlot-l_cpBHym.js";import"./mergeSlotProps-CuYtKo7e.js";import"./useForkRef-9zYUNwSQ.js";import"./useSlotProps-CIYBUvT1.js";import"./Popover-DzuLIXX2.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-7VZcAwyN.js";import"./useTheme-DYBUFgS8.js";import"./utils-D_Ss1Qw4.js";import"./TransitionGroupContext-DiP32wUd.js";import"./useTimeout-q1GWP7GL.js";import"./getReactElementRef-n9HqNesf.js";import"./mergeSlotProps-o__YjBAq.js";import"./debounce-Be36O1Ab.js";import"./Modal-BuuBhc14.js";import"./useEventCallback-zH8r8cS3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CNiEEGxX.js";import"./Fade-54RPVvaS.js";import"./Paper-C7UtGvQD.js";import"./List-C5woYmQ0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BVDl1GQq.js";import"./createSvgIcon-BZPSTfMo.js";import"./OutlinedInput-CQM4Urfm.js";import"./FormHelperText-D9B_EybF.js";import"./FormControlLabel-Dj3okdwu.js";import"./Typography-ByO5UaW_.js";import"./Switch-uWW0_4XR.js";import"./SwitchBase-C-K9jIoH.js";import"./ButtonBase-xOGqtgga.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BZ06ecad.js";import"./RadioGroup-DJI1jOFA.js";import"./FormGroup-h8CX_LB4.js";import"./Box-B04c7Rsy.js";import"./Divider-buyCaqQp.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BofL0Z-3.js";import"./styled-BeasdvCJ.js";import"./TextField-Cd5sx48p.js";import"./FormControl-VqjmRM_o.js";import"./isMuiElement-BhB00eMX.js";import"./Grid-BeBOjXU7.js";import"./index-NWAjQ8GF.js";import"./index-BxX5aEWm.js";import"./___vite-browser-external_commonjs-proxy-CJzqnXTj.js";import"./index-C1BCLP02.js";import"./_toKey-DHzXaBvN.js";import"./Autocomplete-TMgEHsGZ.js";import"./Close-DHtkNkYL.js";import"./usePreviousProps-BrGAbJDo.js";import"./Tooltip-oLaJghdR.js";import"./Chip-CDETbY6h.js";import"./IconButton-DsWpehFA.js";import"./CircularProgress-tDS4AUw-.js";import"./ListSubheader-BGY-IAl7.js";import"./useInfiniteQuery-DPMPHcr0.js";import"./useBaseQuery-BZ_aI3ME.js";import"./suspense-D0uJ2-qL.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-DJVoIG0F.js";import"./Container-COr2r_OP.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const to=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,to as __namedExportsOrder,$t as default};
