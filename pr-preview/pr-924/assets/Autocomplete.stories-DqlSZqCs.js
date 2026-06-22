import{j as t}from"./iframe-D9VxGUXm.js";import{C as i}from"./Autocomplete-Dj7YZQ6R.js";import{B as e}from"./Button-Bh2oDbYg.js";import{P as s}from"./Paper-6rYsSxsl.js";import{T as a}from"./Typography-D9Pc6OpE.js";import{G as l}from"./Grid-gv_YjbwF.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-tubCB1k0.js";import"./preload-helper-Dab_6GC_.js";import"./Autocomplete-lrNhK9dq.js";import"./TextField-25jTd1Sf.js";import"./FormHelperText-yKBLOBUk.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BXWMYJyA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5KNipz4.js";import"./FormLabel-DVupU6Lh.js";import"./FieldHelpIcon-BVNkABm1.js";import"./index-CrcoPoGw.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./FormControl-B4iyM4I1.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-3elNFQAm.js";import"./Input-C9_Sqi_J.js";import"./OutlinedInput-Dr4cfOVe.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-DKGOAe8y.js";import"./Actions-Bez28Qkr.js";import"./Select-CN5D_YTR.js";import"./SelectFocusSourceContext-BhxM5Ro2.js";import"./Popover-R-MCXb6u.js";import"./mergeSlotProps-JAhzVB8J.js";import"./Modal-B8lqQyLL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";import"./List-VhCI1ZGj.js";import"./createSvgIcon-CuKrs_jq.js";import"./Stack-NbPl_tL-.js";import"./styled-N1qat-rE.js";import"./Divider-BXDOAs2I.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Cst3Rcaq.js";import"./Autocomplete-Cy_vlOIt.js";import"./Close-BBIackpZ.js";import"./usePreviousProps-kVohog1A.js";import"./Chip-DKO5tgQr.js";import"./ListSubheader-QsL63-5I.js";import"./Button-CSvshhUs.js";import"./Typography-mI_XzOBj.js";import"./Grid-ClZzvBh4.js";const Nt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:i,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(i,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(e,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(e,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Dt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Dt as __namedExportsOrder,Nt as default};
