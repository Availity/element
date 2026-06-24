import{j as t}from"./iframe-D77h7lRS.js";import{C as e}from"./Autocomplete-yLns3V3w.js";import{B as i}from"./index-DfVYTiZj.js";import{P as s}from"./index-DgqH9cgp.js";import{T as a}from"./index-VLdNb8Nf.js";import{G as l}from"./index-DKJ5gtoF.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BtDTKsGP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1Hm-Jxc.js";import"./index-fEH6BR5w.js";import"./index-DVH5TI0W.js";import"./index-CrcoPoGw.js";import"./index-CquEWAAI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CnEcCUNg.js";import"./memoTheme-DqX_R3KK.js";import"./styled-CDvIACaW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BJmj-K9U.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-9VfVAAyA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-C4WXADnT.js";import"./SelectFocusSourceContext-Czp42SwI.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./useSlotProps-uX8RgR0A.js";import"./Popover-CwdVeln-.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DtDkDNee.js";import"./useTheme-CWKAY9AZ.js";import"./utils-CC74677U.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./useTimeout-BjR7jkxB.js";import"./getReactElementRef-BIPFoYsf.js";import"./mergeSlotProps-Br5GpCfN.js";import"./debounce-Be36O1Ab.js";import"./Modal-DrVB10Rb.js";import"./useEventCallback-d4rGFhnJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-__Xm0d1s.js";import"./Fade-DyYAtDpQ.js";import"./Paper-BiY9noHN.js";import"./List-R8dOKo6P.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BR2YzmEr.js";import"./createSvgIcon-BLoD-eFu.js";import"./OutlinedInput-MSLFQPLk.js";import"./FormHelperText-Ypt_VW2y.js";import"./FormControlLabel-DT8dT1qO.js";import"./Typography-Bljyylya.js";import"./Switch-BUzHje9n.js";import"./SwitchBase-aanT7hNQ.js";import"./ButtonBase-D6ESZVYa.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CtNllKQQ.js";import"./RadioGroup-DR8oDR1o.js";import"./FormGroup-5D0gupCO.js";import"./Stack-CP02Z4Z2.js";import"./styled-BMl8GMRY.js";import"./Box-o7XdZc8G.js";import"./Divider-ml52RQXY.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-tb3E5PWY.js";import"./FormControl-Ce2kJr-x.js";import"./isMuiElement-Blipuvld.js";import"./Grid-hgY9dIJR.js";import"./useInfiniteQuery-DAw6_sD9.js";import"./suspense-BkKxAvb_.js";import"./useBaseQuery-DcdpPqCk.js";import"./index-Cwh8nxUP.js";import"./index-B040VruN.js";import"./___vite-browser-external_commonjs-proxy-8XJy59YQ.js";import"./index-CmwOJNE2.js";import"./Autocomplete-BUJXofT5.js";import"./Close-WmX40Z7A.js";import"./usePreviousProps-B22HkzpX.js";import"./Tooltip-BhKuATOF.js";import"./Chip-BOdYK55A.js";import"./IconButton-CCSNmYsA.js";import"./CircularProgress-Bxr3-rHo.js";import"./ListSubheader-C3h9JUvZ.js";import"./Button-CJwJUbvG.js";import"./Container-BclAzrCm.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
