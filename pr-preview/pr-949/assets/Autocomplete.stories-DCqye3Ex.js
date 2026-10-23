import{j as t}from"./iframe-BEwKysCr.js";import{C as e}from"./Autocomplete-CH-cKOhu.js";import{B as i}from"./index-DgXerHVi.js";import{P as s}from"./index-B77edPTj.js";import{T as a}from"./index-BYEJAIjN.js";import{G as l}from"./index-C4sW_QjN.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DMZimdxn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wm1Ro_HN.js";import"./index-DvHzOJ2c.js";import"./index-B07NIH_W.js";import"./index-MVgG_W0q.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BCBu9Peg.js";import"./memoTheme-DRAFqHbg.js";import"./styled-Bg0-_ABf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpPPs8BD.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ5DvtNE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CCM-Wvl2.js";import"./SelectFocusSourceContext-CInINzuy.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useForkRef-DOnOtXA5.js";import"./useSlotProps-CytfctCW.js";import"./Popover-DaOq3n4o.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CDUk8pyx.js";import"./useTheme-GtZOwaC6.js";import"./utils-kGYhSz9o.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useTimeout-CgoAjxgp.js";import"./getReactElementRef-CS040HVY.js";import"./mergeSlotProps-BJEr5Vx4.js";import"./debounce-Be36O1Ab.js";import"./Modal-HL9q2m8c.js";import"./useEventCallback-CrQ8pL3N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./Paper-0a0qvbdm.js";import"./List-DPCyJ7f3.js";import"./utils-DoM3o7-Q.js";import"./useControlled-SqHPXcV4.js";import"./createSvgIcon-BBwf9uD1.js";import"./OutlinedInput-C9Bj3Clw.js";import"./FormHelperText-CuKBSHwO.js";import"./FormControlLabel-CS5vRZ4l.js";import"./Typography-DdaiLWH8.js";import"./Switch-CGjlBj-8.js";import"./SwitchBase-gfvk7QPN.js";import"./ButtonBase-DKnYqpgE.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BIuNKybY.js";import"./RadioGroup-Dgbh2tWz.js";import"./FormGroup-DCv0nEPD.js";import"./Stack-CkUGtwqW.js";import"./styled-nNR7mMu5.js";import"./Box-3XwYnqya.js";import"./Divider-CcMK4Bgo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BhBwWtAC.js";import"./FormControl-DkAX9ifC.js";import"./isMuiElement-Ds6j6Ubo.js";import"./Grid-BlMGH9aP.js";import"./useInfiniteQuery-b3PJSLwm.js";import"./suspense-BKv9jLsl.js";import"./useBaseQuery-Dpg7s5zC.js";import"./index-CB3VoyWC.js";import"./index-5x18DLk4.js";import"./___vite-browser-external_commonjs-proxy-BeBneEXX.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DvAXXSRH.js";import"./Close-g56MsvL6.js";import"./usePreviousProps-DJXzM-sJ.js";import"./Tooltip-hIdC-Elu.js";import"./Chip-DzLYJKcF.js";import"./IconButton-BB9H-X4e.js";import"./CircularProgress-BsydgvXb.js";import"./ListSubheader-BUXCCxOn.js";import"./Button-dWZGUH58.js";import"./Container-CSrQBmhf.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
