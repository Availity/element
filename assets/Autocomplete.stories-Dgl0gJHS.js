import{j as t}from"./iframe-C4HkdVED.js";import{C as e}from"./Autocomplete-CYQsX0-i.js";import{B as i}from"./index-BxZtHMSR.js";import{P as s}from"./index-DN1VTqnZ.js";import{T as a}from"./index-Di1Lly5s.js";import{G as l}from"./index-YZkZIPP3.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Dcux-F_7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcbjsJL0.js";import"./index-ytJbfoR7.js";import"./index-BNpXJtsj.js";import"./index-MVgG_W0q.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CzUPI6h_.js";import"./memoTheme-BG6Rse2P.js";import"./styled-BT-YQVcS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C9ntXL4m.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBv_L_iF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BCOcnhN8.js";import"./SelectFocusSourceContext-De_LaZ5b.js";import"./useSlot-BskdyKfe.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useForkRef-DbUR2J1C.js";import"./useSlotProps-zZW6O8Vc.js";import"./Popover-DZCyI0Pz.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Dwihqrdb.js";import"./useTheme-B8XrPkIo.js";import"./utils-DTqk_mV5.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./useTimeout-Dr23bHsI.js";import"./getReactElementRef-BgdKh17h.js";import"./mergeSlotProps-D4zCYtSN.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_rVHOa-.js";import"./useEventCallback-D9gX9Adj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CPAt_MFQ.js";import"./Fade-JYP9Xa3N.js";import"./Paper-D1x-q-nj.js";import"./List-t3_9dFMJ.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DrH6I0XL.js";import"./createSvgIcon-ZWi4Noed.js";import"./OutlinedInput-Rbi1tT2Y.js";import"./FormHelperText-CB5Pl2UM.js";import"./FormControlLabel-DqOpCIzX.js";import"./Typography-Da_zx24V.js";import"./Switch-WzSlbu28.js";import"./SwitchBase-A-EsK39V.js";import"./ButtonBase-DSSz5Mb_.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D4t5oEYc.js";import"./RadioGroup-Crjwdy5J.js";import"./FormGroup-CVvckbGi.js";import"./Stack-Rm4Xh7KY.js";import"./styled-CWQ1NF-T.js";import"./Box-zmRcbAMo.js";import"./Divider-DePVDSaH.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DkEwm9i-.js";import"./FormControl-BsgqGLFQ.js";import"./isMuiElement-DPikhU7x.js";import"./Grid-BRUvQOfL.js";import"./useInfiniteQuery-Ff-yd8ex.js";import"./suspense-C8C4TGIG.js";import"./useBaseQuery-Clml01es.js";import"./index-B1GGdwIs.js";import"./index-CkVBG_A9.js";import"./___vite-browser-external_commonjs-proxy-C5KZul5m.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-BtObOpv9.js";import"./Close-K-Su-P3R.js";import"./usePreviousProps-DJUyWQ75.js";import"./Tooltip-Cu6qxs5M.js";import"./Chip-BYAillRH.js";import"./IconButton-DAm3sfm9.js";import"./CircularProgress-ClUyHzUc.js";import"./ListSubheader-DDFIMClj.js";import"./Button-Xlv09vPK.js";import"./Container-c3Xuxmeg.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
