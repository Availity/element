import{j as t}from"./iframe-BfiSjCZE.js";import{C as e}from"./Autocomplete-7VI-Qo0g.js";import{B as i}from"./index-BnEi8s_n.js";import{P as s}from"./index-BqDXSYAc.js";import{T as a}from"./index-Ditxfwx6.js";import{G as l}from"./index-DXU92sR7.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-kcvTnjHx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzpVch_D.js";import"./index-So7oyo1n.js";import"./index-BP56GXIS.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C5CMMi3k.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bc7HWole.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./useSlotProps-DsKdZe-B.js";import"./Popover-B_IG8L-c.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-1iQSKTOk.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useTimeout-Dvw-KAbd.js";import"./getReactElementRef-DrqUH2UJ.js";import"./mergeSlotProps-DuqHZ2js.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeYFWYjf.js";import"./useEventCallback-BRDDRqyT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./Paper-8FyfnLjY.js";import"./List-DSZlyKTP.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DuHd5Dfi.js";import"./createSvgIcon-DV4tT70v.js";import"./OutlinedInput-DF7uYzJm.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Typography-C4HmXqwR.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./ButtonBase-B0Rj5enX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Stack-ggz2xYsp.js";import"./styled-Bty96-Ys.js";import"./Box-CRTcjAl_.js";import"./Divider-CELaABvA.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dz7hzDL9.js";import"./FormControl-C9VIskN5.js";import"./isMuiElement-CIl3go_L.js";import"./Grid-C2RK_1Jw.js";import"./useInfiniteQuery-RjjOvBIQ.js";import"./suspense-CDgsDqgL.js";import"./useBaseQuery-DZasCuPT.js";import"./index-BHDw3JNc.js";import"./index-ClgzThDV.js";import"./___vite-browser-external_commonjs-proxy-Dzcmey56.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-ChZBcIKa.js";import"./Close-BzO8XwWJ.js";import"./usePreviousProps-Em2L3jzV.js";import"./Tooltip-DQOY4bTe.js";import"./Chip-CO4k7qnm.js";import"./IconButton-CFfT0ndL.js";import"./CircularProgress-DFM5h0gz.js";import"./ListSubheader-CGQi5MSF.js";import"./Button-CWR2xa5V.js";import"./Container-B6cEEQtr.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
