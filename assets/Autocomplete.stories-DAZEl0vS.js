import{j as t}from"./iframe-Bzxq4khQ.js";import{C as e}from"./Autocomplete-JbC0vkvs.js";import{B as i}from"./index-HZB2unx2.js";import{P as s}from"./index-Buh0WhxV.js";import{T as a}from"./index-CErBQ4Jd.js";import{G as l}from"./index-DXLpfNz7.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B9ijTOzS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HDUzvNNN.js";import"./index-DU829yZl.js";import"./index-D4q0lTpi.js";import"./index-CrcoPoGw.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./memoTheme-CkAjAg3h.js";import"./styled-BSgFKBik.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7loAdmS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CNT2ANZv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DF1l4Dby.js";import"./SelectFocusSourceContext-CNFdeD9T.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./useSlotProps-Dxsb08A1.js";import"./Popover-LBHWHgEN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DrMzc0O0.js";import"./useTheme-CLJ35KcV.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./useTimeout-D8n7EMSe.js";import"./getReactElementRef-C4G1HZdF.js";import"./mergeSlotProps-516L7gnV.js";import"./debounce-Be36O1Ab.js";import"./Modal-DYASwYOM.js";import"./useEventCallback-Zn8Kx7hu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-_k8xef8N.js";import"./Fade-DV9rGJYk.js";import"./Paper-i7wmImU7.js";import"./List-C9h_lLEy.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BxlFJ8nt.js";import"./createSvgIcon-Bd4vIYa-.js";import"./OutlinedInput-rTNgHDL6.js";import"./FormHelperText-obR1wLHF.js";import"./FormControlLabel-HjAGXNw6.js";import"./Typography-B9ybtieC.js";import"./Switch-RyNLpMLT.js";import"./SwitchBase-Cq5XAYLf.js";import"./ButtonBase-mnH_3Wha.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BtrdgFmx.js";import"./RadioGroup-BX4ZIunc.js";import"./FormGroup-gt1zcoyV.js";import"./Stack-C6SNpi-l.js";import"./styled-zIwGk7GA.js";import"./Box-Bmi0pHZf.js";import"./Divider-DaOJE4uw.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BMzuCG6i.js";import"./FormControl-m8dKyrAv.js";import"./isMuiElement-BFlpbPNJ.js";import"./Grid-DBmnTLkS.js";import"./useInfiniteQuery-0oJT023C.js";import"./suspense-ApQII9Jb.js";import"./useBaseQuery-CrwKbn3Q.js";import"./index-pD7x_zqN.js";import"./index-CUQsHTQm.js";import"./___vite-browser-external_commonjs-proxy-C1hYxkYC.js";import"./index-BLcjZxhx.js";import"./Autocomplete-BFBtLphl.js";import"./Close-C1tpug76.js";import"./usePreviousProps-D8XhmpMP.js";import"./Tooltip--PgUuozR.js";import"./Chip-JmiNJoig.js";import"./IconButton-CbyRNbtW.js";import"./CircularProgress-OhY0Ky5x.js";import"./ListSubheader-Lvf35jjl.js";import"./Button-COtcAXVl.js";import"./Container-C5W7aLU7.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
