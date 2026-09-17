import{j as t}from"./iframe-CwayONq3.js";import{C as e}from"./Autocomplete-Caudu61I.js";import{B as i}from"./index-rzzKeWqc.js";import{P as s}from"./index-q2qMZHtk.js";import{T as a}from"./index-D86jrWk5.js";import{G as l}from"./index-C55j7MuO.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-d0nBt-Nj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2knkBYh.js";import"./index-BMwb1bxP.js";import"./index-CYRtiz7B.js";import"./index-CrcoPoGw.js";import"./index-FoJb9FyM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dok2DrMx.js";import"./memoTheme-CSn7n7-0.js";import"./styled-WjtpYKzZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTdRs88K.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfAi1Cl1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-cZINCd5X.js";import"./SelectFocusSourceContext-Bmlj6I18.js";import"./useSlot-ar6Q8od1.js";import"./mergeSlotProps-BztucupI.js";import"./useForkRef-Cy6dgODW.js";import"./useSlotProps-C4DgWBnT.js";import"./Popover-Ljxjuwbj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-B5eAGKeX.js";import"./useTheme-DZN2Ghm1.js";import"./utils-BJivSKBX.js";import"./TransitionGroupContext-Bu4CoR7O.js";import"./useTimeout-DzhE3XW1.js";import"./getReactElementRef-CjqPEX8j.js";import"./mergeSlotProps-DSTd1XFa.js";import"./debounce-Be36O1Ab.js";import"./Modal-DN1-xy7q.js";import"./useEventCallback-Cc5Qaj1M.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BYFYfQXf.js";import"./Fade-DXm-QaGZ.js";import"./Paper-DlpHeBlY.js";import"./List-D5XMTJG9.js";import"./utils-DoM3o7-Q.js";import"./useControlled-H2-lqa1O.js";import"./createSvgIcon-DSjYKgaH.js";import"./OutlinedInput--oh61w1N.js";import"./FormHelperText-CjnpPyYN.js";import"./FormControlLabel-BSPnDcnX.js";import"./Typography-CDQ-d4mK.js";import"./Switch-BeMxMh89.js";import"./SwitchBase-fbtSEbIK.js";import"./ButtonBase-3L383qSX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CmQsUMRS.js";import"./RadioGroup-CF3fvuBB.js";import"./FormGroup-bV0aYJSN.js";import"./Stack-k-008in-.js";import"./styled-C0MvsQi9.js";import"./Box-C4nPPECx.js";import"./Divider-CQfA4tzc.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DrqF0lc6.js";import"./FormControl-BSTw1HxY.js";import"./isMuiElement-sqB-nJpP.js";import"./Grid-DathB-g2.js";import"./useInfiniteQuery-CSoAOYxE.js";import"./suspense-O0DXezdF.js";import"./useBaseQuery-fdDeJD0p.js";import"./index-DIZXZRWI.js";import"./index-Bf04OlcH.js";import"./___vite-browser-external_commonjs-proxy-DMVweGvg.js";import"./index-D0NWAu9R.js";import"./Autocomplete-CwD40PGk.js";import"./Close-BFvihe5l.js";import"./usePreviousProps-ByKP67Bs.js";import"./Tooltip-px23ZV-t.js";import"./Chip-BKU8oJ3c.js";import"./IconButton-XSGXEsQ5.js";import"./CircularProgress-CcJveUId.js";import"./ListSubheader-D1T9jb_V.js";import"./Button-hBir-_1a.js";import"./Container-BUicGBFY.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
