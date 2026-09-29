import{j as t}from"./iframe-Cn9qPtrp.js";import{C as e}from"./Autocomplete-CWkGcHl1.js";import{B as i}from"./index-BIlLMFwD.js";import{P as s}from"./index-CYG2bEQ2.js";import{T as a}from"./index-D2wuP2WF.js";import{G as l}from"./index-CyKw9SYR.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-B9BKJgjY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtpXWzCy.js";import"./index-DQGL_OP-.js";import"./index-CcgQ8l9r.js";import"./index-CrcoPoGw.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./memoTheme-6yds69P_.js";import"./styled-D2CDconu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxiY_bl4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-TW3X2czK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DUVCVT7_.js";import"./SelectFocusSourceContext-ePGizTGK.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useForkRef-Dq6ZsqmR.js";import"./useSlotProps-yJhFLJQp.js";import"./Popover-C9eTKBeN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BWZt9Zv4.js";import"./useTheme-B6YVOUYP.js";import"./utils-BlV9er3y.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useTimeout-BoQb9RDS.js";import"./getReactElementRef-6Fd7mh7z.js";import"./mergeSlotProps-DuRirGHi.js";import"./debounce-Be36O1Ab.js";import"./Modal-DH6vGrJY.js";import"./useEventCallback-CiCWuPbq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CvWpQ392.js";import"./Fade-BsEF4Oay.js";import"./Paper-DwYDYFlD.js";import"./List-CDFvHcS1.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BIT0kvxY.js";import"./createSvgIcon-CK6UXRVe.js";import"./OutlinedInput-havtgxzd.js";import"./FormHelperText-BWYBhNPM.js";import"./FormControlLabel-BGe8VaE5.js";import"./Typography-CDKB6cUx.js";import"./Switch-BdwK0ecZ.js";import"./SwitchBase-BoThDgH3.js";import"./ButtonBase-2oFpmJBY.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BupWkmwv.js";import"./RadioGroup-CG6yeKGL.js";import"./FormGroup-DJyf2790.js";import"./Stack-DmctAkNR.js";import"./styled-DhBMIDqB.js";import"./Box-CeYPkCsw.js";import"./Divider-ejbo4Ydy.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--mu-L8K9.js";import"./FormControl-BmLSzKHH.js";import"./isMuiElement-DcGc7pTf.js";import"./Grid-BbGFtGav.js";import"./useInfiniteQuery-BL1h4sNJ.js";import"./suspense-Bo7hNKC-.js";import"./useBaseQuery-Cyax2RcJ.js";import"./index-C15uwsx2.js";import"./index-M7nj2U81.js";import"./___vite-browser-external_commonjs-proxy-CwPU4RYd.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-fzOuqwNA.js";import"./Close-BVHhi-vz.js";import"./usePreviousProps-DMivFr8V.js";import"./Tooltip-DKs25lhA.js";import"./Chip-DocYHxeM.js";import"./IconButton-BEbO5w96.js";import"./CircularProgress-DAUt--dg.js";import"./ListSubheader-Din0N-1L.js";import"./Button-Cp2YlGAc.js";import"./Container-y4mOFKcU.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
