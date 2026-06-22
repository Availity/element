import{j as t}from"./iframe-B3KH45W1.js";import{C as i}from"./Autocomplete-YGV5JJKU.js";import{B as e}from"./Button-BFPH_qAh.js";import{P as s}from"./Paper-sb54ma1Z.js";import{T as a}from"./Typography-k07kEcGa.js";import{G as l}from"./Grid-BlezGjUJ.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-H6aIGMrw.js";import"./preload-helper-Dab_6GC_.js";import"./Autocomplete-CbgIMIko.js";import"./TextField-DjCF7CZ3.js";import"./FormHelperText-CZJvLmcm.js";import"./Form-D1K37nGD.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-Bn-upZao.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bg2Y-buC.js";import"./FormLabel-DW_eBrIG.js";import"./FieldHelpIcon-DiJFTHZH.js";import"./index-CrcoPoGw.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./FormControl-D9hbHaGM.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-BGMciLL0.js";import"./Input-CuUrWl-a.js";import"./OutlinedInput-BAiglCmg.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BJwaEEmH.js";import"./Actions-CO819m3I.js";import"./Select-DIxhJ8kq.js";import"./SelectFocusSourceContext-BFgvB2zc.js";import"./Popover-3fDVAJax.js";import"./mergeSlotProps-CZPVrohS.js";import"./Modal-CJRztngO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";import"./List-DafW6Lb2.js";import"./createSvgIcon-CP7Sjzln.js";import"./Stack-D4A7CmlM.js";import"./styled-CG3DpTjV.js";import"./Divider-C6Wz3kbt.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CysQRKEV.js";import"./Autocomplete-BVPTGdNg.js";import"./Close-CCXJfw-Y.js";import"./usePreviousProps-BjASkuMJ.js";import"./Chip-CGZm7A6G.js";import"./ListSubheader-C1va-5Fr.js";import"./Button-CpFiF_Ow.js";import"./Typography-D3qZBRmm.js";import"./Grid-CXe_6B0b.js";const Nt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:i,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(i,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(e,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(e,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
