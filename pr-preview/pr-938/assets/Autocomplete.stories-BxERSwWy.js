import{j as t}from"./iframe-pcBkreyF.js";import{C as e}from"./Autocomplete-DbFlZ5RD.js";import{B as i}from"./index-D-7rEUPH.js";import{P as s}from"./index-D4mWQJ5y.js";import{T as a}from"./index-oyMY6j-r.js";import{G as l}from"./index-rjMel0fo.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Cb3XGUHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-r_UccaDE.js";import"./index-BNNmgO8a.js";import"./index-DvMYR6cM.js";import"./index-CrcoPoGw.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CQU7rCYy.js";import"./memoTheme-BGzSgD4T.js";import"./styled-DhfgW05P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkVLmsyo.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bf13Qy6E.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Hy7YqFc2.js";import"./SelectFocusSourceContext-CX9jhojZ.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useForkRef-D6t7VBhN.js";import"./useSlotProps-DXdTwkgQ.js";import"./Popover-C9B_5d2D.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BLikJhBv.js";import"./useTheme-DrTO_DRk.js";import"./utils-BhTotuHU.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useTimeout-BkFACxc1.js";import"./getReactElementRef-DUpT5N-m.js";import"./mergeSlotProps-DZ2a6j45.js";import"./debounce-Be36O1Ab.js";import"./Modal-B61PTYm1.js";import"./useEventCallback-C_PhZ4gM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CgPauin7.js";import"./Fade-BrnSbnNG.js";import"./Paper-CIIxPuZQ.js";import"./List-a_vVMaa5.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DNBc9hrk.js";import"./createSvgIcon-BbL3U0Hb.js";import"./OutlinedInput-BjryEflV.js";import"./FormHelperText-C7FrADGT.js";import"./FormControlLabel-DRNnFuPg.js";import"./Typography-sFl1f9yL.js";import"./Switch-DsQpNO6o.js";import"./SwitchBase-31BvtgwI.js";import"./ButtonBase-BIRNPLHh.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Dy2mqGql.js";import"./RadioGroup-CNBCQsi2.js";import"./FormGroup-BurSUFFK.js";import"./Stack-CK_dWn5x.js";import"./styled-Dcs2wRea.js";import"./Box-Ca_dclTz.js";import"./Divider-DByQLpF0.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CsOWRe-2.js";import"./FormControl-DG3RaKjS.js";import"./isMuiElement-c2rAqbnw.js";import"./Grid-CiV8r-oF.js";import"./useInfiniteQuery-Bvd7IZcr.js";import"./suspense-sTObW_wx.js";import"./useBaseQuery-B9sEuPFD.js";import"./index-DmpvfKrB.js";import"./index-BXEw90fH.js";import"./___vite-browser-external_commonjs-proxy-XwZNvLiy.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-BhpA1eXd.js";import"./Close-BVTaMr4I.js";import"./usePreviousProps-BFgFkScX.js";import"./Tooltip-DFZ7S6Z_.js";import"./Chip-CJpCDrxT.js";import"./IconButton-CLvE6niR.js";import"./CircularProgress-vX9_m42Y.js";import"./ListSubheader-CkJl914t.js";import"./Button-BPX7NsmD.js";import"./Container-h1971dVV.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
