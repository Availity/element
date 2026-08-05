import{j as t}from"./iframe-Cl61WGkI.js";import{C as e}from"./Autocomplete-B3ztrDOp.js";import{B as i}from"./index-CqgX4Pjw.js";import{P as s}from"./index-DEMyV-7J.js";import{T as a}from"./index-CJQ0Fxar.js";import{G as l}from"./index-D0cf1ol3.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BbogUaub.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZl7DSUb.js";import"./index-Du3U5mjC.js";import"./index-DjWqBCXk.js";import"./index-CrcoPoGw.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./memoTheme-Bl50oicv.js";import"./styled-BC98FWsK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BSv5oG3S.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D2EIO9e7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cn1KxIPd.js";import"./SelectFocusSourceContext-CAKJeAkQ.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./useSlotProps-BwXPHno3.js";import"./Popover-Du9tN1-X.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CKqV7NOt.js";import"./useTheme-IfO6Fwpt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./useTimeout-DRIZehDr.js";import"./getReactElementRef-C7aNrngo.js";import"./mergeSlotProps-ZgLDWHqg.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_tt91Mu.js";import"./useEventCallback-04OY0OEQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./Paper-DdNx7n5g.js";import"./List-BAGNgyyd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Df0GFCpG.js";import"./createSvgIcon-C9mzZA9x.js";import"./OutlinedInput-ClvlI1xc.js";import"./FormHelperText-C194FQMi.js";import"./FormControlLabel-DjUlFFqe.js";import"./Typography-BbUycIDS.js";import"./Switch-BDf-0e9Z.js";import"./SwitchBase-BclwBU3W.js";import"./ButtonBase-q-jaW3RD.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CgniSRaf.js";import"./RadioGroup-DT7A7289.js";import"./FormGroup-NS8rU_fN.js";import"./Stack-DbcIcCvU.js";import"./styled-DUX11FjB.js";import"./Box-BylFce9S.js";import"./Divider-DDnoJtKN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQqTUngf.js";import"./FormControl-DYxyVnQd.js";import"./isMuiElement-Cx1dzcL4.js";import"./Grid-CY38bvtz.js";import"./useInfiniteQuery--ApFUpxF.js";import"./suspense-CjFvtXfk.js";import"./useBaseQuery-B3TWfyC0.js";import"./index-DBwkgZQQ.js";import"./index-BTt-AJ1u.js";import"./___vite-browser-external_commonjs-proxy-Bzn8mUo7.js";import"./index-DCRShdR0.js";import"./Autocomplete-B8GW1t6L.js";import"./Close-2CYXYJvY.js";import"./usePreviousProps-C9ZNeHzw.js";import"./Tooltip-BWDly8di.js";import"./Chip-CcKsOt1l.js";import"./IconButton-q11oqdUa.js";import"./CircularProgress-Bq8oVM2O.js";import"./ListSubheader-DJoCu7G7.js";import"./Button-DuB2O4vc.js";import"./Container-CQCkLV4U.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
