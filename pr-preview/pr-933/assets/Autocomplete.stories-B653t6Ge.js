import{j as t}from"./iframe-_ZTccD58.js";import{C as e}from"./Autocomplete-SZe3_nxJ.js";import{B as i}from"./index-DLaYSOpi.js";import{P as s}from"./index-CSJoiZpW.js";import{T as a}from"./index-CHmUp4gL.js";import{G as l}from"./index-MbAAKXvE.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B6w-j87e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4Pw6xNmP.js";import"./index-C3h17Tj6.js";import"./index-BrswPlEY.js";import"./index-CrcoPoGw.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BOIs-YGq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-3-vne5Nr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-wCdgrbFd.js";import"./SelectFocusSourceContext-CjN1_fJS.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useForkRef-BH960YuM.js";import"./useSlotProps-93kC9vNJ.js";import"./Popover-DTwCY0yp.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D40QliBd.js";import"./useTheme-CbKlvc9V.js";import"./utils-CGytJ6bP.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useTimeout-COBvC2JW.js";import"./getReactElementRef-CKHPMftD.js";import"./mergeSlotProps-D6scpCU0.js";import"./debounce-Be36O1Ab.js";import"./Modal-D02YFzj_.js";import"./useEventCallback-Bsg7GzMN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B0rEXgSL.js";import"./Fade-U1zsu3gd.js";import"./Paper-TFiwEfzG.js";import"./List-D6qKeGNd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-h9lrVQtL.js";import"./createSvgIcon-CPBwa84_.js";import"./OutlinedInput-DXlNzAXJ.js";import"./FormHelperText-CVMjCHsI.js";import"./FormControlLabel-Bk2X92XQ.js";import"./Typography-BQev244I.js";import"./Switch-DVpo9JuL.js";import"./SwitchBase-BCE6kg8q.js";import"./ButtonBase-CPTcrrxt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4kknd4X.js";import"./RadioGroup-jGIVdwLG.js";import"./FormGroup-DF6oOKk8.js";import"./Stack-DA_tb5jO.js";import"./styled-B0tsulN_.js";import"./Box-BSxgn2ms.js";import"./Divider-ByHj0LGu.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-3_6rcchm.js";import"./FormControl-COm2WUnr.js";import"./isMuiElement-yepEbMeh.js";import"./Grid-cMYs6nxO.js";import"./useInfiniteQuery-_8rLnWWC.js";import"./suspense-Xn0uKYSU.js";import"./useBaseQuery-sbWgdn-F.js";import"./index-CTKxd3L4.js";import"./index-Cal9rjX2.js";import"./___vite-browser-external_commonjs-proxy-CWv8JeV2.js";import"./index-CXRgriMz.js";import"./Autocomplete-KjhL-YUQ.js";import"./Close-DDepYFWR.js";import"./usePreviousProps-Bkmlh2h1.js";import"./Tooltip-BlJXya1q.js";import"./Chip-JdieyNSv.js";import"./IconButton-DaIXPvFu.js";import"./CircularProgress-DP4XdEyk.js";import"./ListSubheader-CybiQOoS.js";import"./Button-DpAEBbkn.js";import"./Container-ChGZTn1s.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
