import{j as t}from"./iframe-BRP1PsTd.js";import{C as e}from"./Autocomplete-DYo61U8D.js";import{B as i}from"./index-BsNnDr7w.js";import{P as s}from"./index-CnTQWbf1.js";import{T as a}from"./index-DlB5fuNM.js";import{G as l}from"./index-D7dOkDl_.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CIwY0UHO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVmHTPhR.js";import"./index-CpKfFk7W.js";import"./index-B3tzpYmG.js";import"./index-CrcoPoGw.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./memoTheme-Rx2ZtNd-.js";import"./styled-kfJMXx_R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DFQHDft-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClZVz9V6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BKZ2kjY2.js";import"./SelectFocusSourceContext-DOQkQ0SO.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./useSlotProps-fBG80Xpc.js";import"./Popover-Cq8sFUbM.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CRr1uWpV.js";import"./useTheme-C-06SHWZ.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./useTimeout-zBXF3kIc.js";import"./getReactElementRef-y-MSVziw.js";import"./mergeSlotProps-C4YKGlLy.js";import"./debounce-Be36O1Ab.js";import"./Modal-D89_wzi3.js";import"./useEventCallback-BX14bO_3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DCwrU8T9.js";import"./Fade-ByvXngvB.js";import"./Paper-Cw-zNh9i.js";import"./List-7Ktovrvd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-8-M28gqE.js";import"./createSvgIcon-DDgQnkKT.js";import"./OutlinedInput-URDDzUkx.js";import"./FormHelperText-CJRPJvNW.js";import"./FormControlLabel-CKZTo3Af.js";import"./Typography-BELI0wSd.js";import"./Switch-CxGtlCVz.js";import"./SwitchBase-7T8YNLcX.js";import"./ButtonBase-DI3KZvly.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-0Tlh6eCh.js";import"./RadioGroup-lgnoJOI3.js";import"./FormGroup-CgbUB1-e.js";import"./Stack-DIw4f7bu.js";import"./styled-BWHNlctr.js";import"./Box-CXnBoTl2.js";import"./Divider-CcSh8kgD.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BCT971wE.js";import"./FormControl-DSVABsS-.js";import"./isMuiElement-CTMPmI0-.js";import"./Grid-Mz87TCh6.js";import"./useInfiniteQuery-BDygbQAf.js";import"./suspense-7idsBrSV.js";import"./useBaseQuery-D_ZTJNFN.js";import"./index-BcExjKBt.js";import"./index-CD3DaTz2.js";import"./___vite-browser-external_commonjs-proxy-BHKhwzHZ.js";import"./index-Bwqc7xOL.js";import"./Autocomplete-CDQeDCNq.js";import"./Close-Bi4R9hIj.js";import"./usePreviousProps-C4HJy2_6.js";import"./Tooltip-C5fygC3l.js";import"./Chip-CyJJIrnq.js";import"./IconButton-4bUdPSIB.js";import"./CircularProgress-Dy9r_LoH.js";import"./ListSubheader-RFH9H9Lr.js";import"./Button-BSPls0mt.js";import"./Container-Bk3CGwFA.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
