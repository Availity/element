import{j as t}from"./iframe-3dkTY0jX.js";import{C as e}from"./Autocomplete-BCWYSU_V.js";import{B as i}from"./index-B-aFmFgv.js";import{P as s}from"./index-C3qj5OeK.js";import{T as a}from"./index-C6l436Fc.js";import{G as l}from"./index-DIxClpYS.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-kPQ7hqRw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-98J8ZriN.js";import"./index-B5d6M-xG.js";import"./index-C83s78gO.js";import"./index-CrcoPoGw.js";import"./index-CuTsacvC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-iH6sJxt7.js";import"./memoTheme-ClYOyAcO.js";import"./styled-DpUmhVNm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BNykh8H7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BkMljPP4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-hM0JA67n.js";import"./SelectFocusSourceContext-DDFMB3UY.js";import"./useSlot-rqG-d0ju.js";import"./mergeSlotProps-DA590uQB.js";import"./useForkRef-D98SVFOp.js";import"./useSlotProps-cunvSKS2.js";import"./Popover-DRGr9AS8.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-COcgB0Km.js";import"./useTheme-DqSWHq5v.js";import"./utils-q4WRQ2GW.js";import"./TransitionGroupContext-CenxJGkC.js";import"./useTimeout-C1Q0-pFI.js";import"./getReactElementRef-D5Pt6kS1.js";import"./mergeSlotProps-gdJU7zTn.js";import"./debounce-Be36O1Ab.js";import"./Modal-C04Dtpn0.js";import"./useEventCallback-DqxbtF2b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DwY4Idrm.js";import"./Fade-DoGbMPsZ.js";import"./Paper-v-wIRd8c.js";import"./List-DjzIYyb1.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BRptJIgz.js";import"./createSvgIcon-BvVOPXpo.js";import"./OutlinedInput-Duj6wcXY.js";import"./FormHelperText-CfwUUlMy.js";import"./FormControlLabel-CWmS10z3.js";import"./Typography-BaJfZ2Cx.js";import"./Switch-BmTIf3nr.js";import"./SwitchBase-kK0dwszt.js";import"./ButtonBase-CGwtNBxW.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4Mro5AG.js";import"./RadioGroup-B3zSb4-e.js";import"./FormGroup-dum4jMC0.js";import"./Stack-C6U2vEDQ.js";import"./styled-BLuOjd1d.js";import"./Box-8YbrThzE.js";import"./Divider-xWAGgNzV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--NEMuvbW.js";import"./FormControl-DVjrtSwm.js";import"./isMuiElement-Bd2bXImB.js";import"./Grid-CLckDB5v.js";import"./useInfiniteQuery-DPhH4miE.js";import"./suspense-LImw3zVj.js";import"./useBaseQuery-m07hOZd4.js";import"./index-BlL9977D.js";import"./index-InsQLx3y.js";import"./___vite-browser-external_commonjs-proxy-XgDoKZSQ.js";import"./index-CmY9jp0R.js";import"./Autocomplete-D87n1PWv.js";import"./Close-BkClo0wN.js";import"./usePreviousProps-BRdmswVt.js";import"./Tooltip-gP38pAtd.js";import"./Chip-DO8Y9Q_H.js";import"./IconButton-NndX5job.js";import"./CircularProgress-BLVqZX76.js";import"./ListSubheader-Ctr5EHnG.js";import"./Button-llKR0QUB.js";import"./Container-DbHjUNkP.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
