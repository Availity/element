import{j as t}from"./iframe-BOySubGY.js";import{C as e}from"./Autocomplete-SNIS5fP6.js";import{B as i}from"./index-dHFlkqLk.js";import{P as s}from"./index-BBVQJ4RI.js";import{T as a}from"./index-DN9BmYUP.js";import{G as l}from"./index-BY15XDHL.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-D-Sy6qiw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UQjpiiII.js";import"./index-DJbAyTYF.js";import"./index-EOKAY7fx.js";import"./index-CrcoPoGw.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./memoTheme-C-oySTID.js";import"./styled-XjKTZ5Ba.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Crev6sHt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D_4giGBh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DNKWmaXz.js";import"./SelectFocusSourceContext-NsTTN5Ry.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useForkRef-BEcBTcWu.js";import"./useSlotProps-CORZ0NF7.js";import"./Popover-DvcJ8O_V.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Bk70ZbQ1.js";import"./useTheme-BZyZpBhU.js";import"./utils-MRT_IXkN.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useTimeout-D7rfSJNw.js";import"./getReactElementRef-ekrhOioo.js";import"./mergeSlotProps-CosNNS-j.js";import"./debounce-Be36O1Ab.js";import"./Modal-JO3U43CI.js";import"./useEventCallback-De91DTs8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./Paper-DK-wycZj.js";import"./List-DWj6PFWF.js";import"./utils-DoM3o7-Q.js";import"./useControlled-ZCAGuxBe.js";import"./createSvgIcon-CNdKwBrG.js";import"./OutlinedInput-BwuDTIYn.js";import"./FormHelperText-Br3yPV4I.js";import"./FormControlLabel-BN3VyYGk.js";import"./Typography-SY2Ud8Z5.js";import"./Switch-B1ncU5jj.js";import"./SwitchBase-DttprOgY.js";import"./ButtonBase-CriPZSS7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D60xP-8b.js";import"./RadioGroup-HDv0R8RF.js";import"./FormGroup-CtfESWxW.js";import"./Stack-CvrbJzig.js";import"./styled-B4Xqzm8j.js";import"./Box-C0cMPqSK.js";import"./Divider-BLCYt0Sf.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CB4HsX61.js";import"./FormControl-B6yPYiE0.js";import"./isMuiElement-BscQb9Cz.js";import"./Grid-CxzBT5ej.js";import"./useInfiniteQuery-z36l9tXW.js";import"./suspense-c9GQrknW.js";import"./useBaseQuery-JCJ086Ac.js";import"./index-BzLe_HW7.js";import"./index-DS3yUKav.js";import"./___vite-browser-external_commonjs-proxy-DjSuNFQ7.js";import"./index-D33PrsP9.js";import"./Autocomplete-Ds-OezyK.js";import"./Close-C8toxEW2.js";import"./usePreviousProps-C9Q9s8q-.js";import"./Tooltip-CVYQnSxv.js";import"./Chip-ChSK_l75.js";import"./IconButton-D23BvDdt.js";import"./CircularProgress-B5gdOPr_.js";import"./ListSubheader-BSwVwSn-.js";import"./Button-DWb-ONsW.js";import"./Container-C4UOiudT.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
