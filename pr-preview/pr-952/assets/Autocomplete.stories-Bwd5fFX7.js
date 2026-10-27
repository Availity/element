import{j as t}from"./iframe-DUa_E2nK.js";import{C as e}from"./Autocomplete-BJflK1u0.js";import{B as i}from"./index-CS_NebII.js";import{P as s}from"./index-BsAkYoDU.js";import{T as a}from"./index-C4ikLYbZ.js";import{G as l}from"./index-CpWANY3x.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DJpMLnE4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDz2xD78.js";import"./index-h-RAtAdn.js";import"./index-BU1mb21Z.js";import"./index-MVgG_W0q.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BewdDvzO.js";import"./memoTheme-Bo6NThYL.js";import"./styled-D3Muh4M2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpBzcOsS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-S2Jix1K5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-ElUVnloi.js";import"./SelectFocusSourceContext-C1yv2uKz.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useForkRef-CxpHUqnO.js";import"./useSlotProps-Cc5Sw607.js";import"./Popover-rBOqpwbc.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DK6E0QaG.js";import"./useTheme-D2wrQY5U.js";import"./utils-9zA4k4wE.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useTimeout-CVWqITqM.js";import"./getReactElementRef-ReUsDlEE.js";import"./mergeSlotProps-BWiww6C5.js";import"./debounce-Be36O1Ab.js";import"./Modal-BWDZ2XAH.js";import"./useEventCallback-BMK6R2Pt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D1fLbtuP.js";import"./Fade-BulH4fWG.js";import"./Paper-BFFGqGxw.js";import"./List-BU73CZkQ.js";import"./utils-DoM3o7-Q.js";import"./useControlled-mPNvpXlD.js";import"./createSvgIcon-BrmPcgFj.js";import"./OutlinedInput-CFR5oBwr.js";import"./FormHelperText-D9BA1QML.js";import"./FormControlLabel-BWd96Wzk.js";import"./Typography-BemmhR83.js";import"./Switch-CKOovF9u.js";import"./SwitchBase-Cbi-g6KU.js";import"./ButtonBase-Bug9d4_R.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BjnBtCnE.js";import"./RadioGroup-GuTuFZPa.js";import"./FormGroup-BvSMqjlq.js";import"./Stack-BXnO2vhe.js";import"./styled-DfLAYXD9.js";import"./Box-BO8RQHnM.js";import"./Divider-C3QA1lO4.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CItELq9u.js";import"./FormControl-Bsqtqb3j.js";import"./isMuiElement-CAErNZ9l.js";import"./Grid-BjkaeTm4.js";import"./useInfiniteQuery-CxwVJgZx.js";import"./suspense-CED7JhWh.js";import"./useBaseQuery-DspHs3UI.js";import"./index-6lyooZqo.js";import"./index-CjPTx4A6.js";import"./___vite-browser-external_commonjs-proxy-CTXS35BP.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-IZ5Twj3Q.js";import"./Close-BKLOGUyb.js";import"./usePreviousProps-CNjjcUxp.js";import"./Tooltip-Bq-dRAZk.js";import"./Chip-Bjgq0s0u.js";import"./IconButton-BifEyGUq.js";import"./CircularProgress-Bzposo0O.js";import"./ListSubheader-zW641-DO.js";import"./Button-CbV8DhMK.js";import"./Container-D09iA6_m.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
