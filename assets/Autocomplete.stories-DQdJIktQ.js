import{j as t}from"./iframe-Cwe65xm_.js";import{C as e}from"./Autocomplete-DTmQZZ6J.js";import{B as i}from"./index-B70TfKNL.js";import{P as s}from"./index-Bn86Cr3B.js";import{T as a}from"./index-D9T6YpUv.js";import{G as l}from"./index-GEX0zvPr.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-4wPmvIF7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XWIOtsAF.js";import"./index-B18st6EO.js";import"./index-CPjIJxsx.js";import"./index-CrcoPoGw.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./memoTheme-JTO0J2AE.js";import"./styled-DQU8Bodb.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CoNS-ZSY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BhG-OBsq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bee2J2VA.js";import"./SelectFocusSourceContext-8cwNuwWa.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./useSlotProps-CHdu95RH.js";import"./Popover-BqjsgymF.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-MprWoh0y.js";import"./useTheme-ClD_legM.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./useTimeout-B979BKpc.js";import"./getReactElementRef-BO3eeWP1.js";import"./mergeSlotProps-DKtwpG52.js";import"./debounce-Be36O1Ab.js";import"./Modal-DXesMzil.js";import"./useEventCallback-Cus8kDUU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BuJJs5yg.js";import"./Fade-DVmn_b9B.js";import"./Paper-BllScWLN.js";import"./List-CdxcmJFC.js";import"./utils-DoM3o7-Q.js";import"./useControlled-B5htf0na.js";import"./createSvgIcon-BCdDg_61.js";import"./OutlinedInput-CVtI0giW.js";import"./FormHelperText-CcTnWzja.js";import"./FormControlLabel-pIK1R6xI.js";import"./Typography-CwzEaEbc.js";import"./Switch-COmW8gnw.js";import"./SwitchBase-vEUtDMIo.js";import"./ButtonBase-B2MrdNo3.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-B-ELdh2p.js";import"./RadioGroup-7oQM0Exi.js";import"./FormGroup-bSlB8GHJ.js";import"./Stack-CRAKFpNP.js";import"./styled-Drm9UKpq.js";import"./Box-DUWM_zX0.js";import"./Divider-DdiTjDHI.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B51YWxUA.js";import"./FormControl-DZK54C7D.js";import"./isMuiElement-CFlSzKZl.js";import"./Grid-XXlh0rR0.js";import"./useInfiniteQuery-Dxii0Fix.js";import"./suspense-BTBYQ-a5.js";import"./useBaseQuery-CL9oKK4G.js";import"./index-CCWtWTEb.js";import"./index-BhplCRAi.js";import"./___vite-browser-external_commonjs-proxy-DEtnVKx2.js";import"./index-po9FdVlG.js";import"./Autocomplete-BcrsvKWC.js";import"./Close-CDWcnhUE.js";import"./usePreviousProps-DmkwnLiy.js";import"./Tooltip-DXMour_H.js";import"./Chip-DQogad8n.js";import"./IconButton-CLwVH8iN.js";import"./CircularProgress-Gl2vZfvX.js";import"./ListSubheader-B8_fT4ca.js";import"./Button-BPlwCXwF.js";import"./Container-Bu5eEzkf.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
