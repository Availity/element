import{j as t}from"./iframe-DDeFjhwT.js";import{C as e}from"./Autocomplete-B9MLVlb5.js";import{B as i}from"./index-CSwp3I03.js";import{P as s}from"./index-o31oqBcQ.js";import{T as a}from"./index-B0i4PftB.js";import{G as l}from"./index-oWqJ9z6g.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BLlPQQ4J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nE7Zx0eU.js";import"./index-CJHB4Wq3.js";import"./index-BaZRRpT9.js";import"./index-CrcoPoGw.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./memoTheme-BKUl2Kw8.js";import"./styled-PQjfDOgQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DwKt04Fe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-eu10Xp36.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-hUhZUIoR.js";import"./SelectFocusSourceContext-CquKgtEw.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./useSlotProps-B4bgTElG.js";import"./Popover-DktFq9tj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BqacPdFW.js";import"./useTheme-KKOLTJXa.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./useTimeout-Cm2RyAAI.js";import"./getReactElementRef-BeHDg4ji.js";import"./mergeSlotProps-CjAnYkZH.js";import"./debounce-Be36O1Ab.js";import"./Modal-BpltTEbA.js";import"./useEventCallback-tCUa2-C3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./Paper-igPbegtl.js";import"./List-nMnQx56C.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BH5VVnvv.js";import"./createSvgIcon-BxZGQxhE.js";import"./OutlinedInput-ZBGK4L-L.js";import"./FormHelperText-C0of87GE.js";import"./FormControlLabel-Ji9c007o.js";import"./Typography-Be3kmzes.js";import"./Switch-B4_H_B2f.js";import"./SwitchBase-DR9e1Vdv.js";import"./ButtonBase-D-CcOUqB.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CNcgpL5h.js";import"./RadioGroup-BxaV2sVI.js";import"./FormGroup-DtvKduvm.js";import"./Stack-D5p-aU6z.js";import"./styled-B5nfTXUF.js";import"./Box-ClrgcKqA.js";import"./Divider-C-2m7oZQ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DFgDQXLQ.js";import"./FormControl-CYQG91-S.js";import"./isMuiElement-C8BOTMMK.js";import"./Grid-DkuRXmB0.js";import"./useInfiniteQuery-BdYA0gdL.js";import"./suspense-Ck_m44xn.js";import"./useBaseQuery-DiCsLTfM.js";import"./index-COGxDCcE.js";import"./index-CG12tBum.js";import"./___vite-browser-external_commonjs-proxy-CLxyROCc.js";import"./index-DbhJCPhL.js";import"./Autocomplete-C5VTaTeh.js";import"./Close-CjaMKFHv.js";import"./usePreviousProps-CazvrnrZ.js";import"./Tooltip-5o6beSBH.js";import"./Chip-B8bwpMQp.js";import"./IconButton-CurJhF0D.js";import"./CircularProgress-DZuzO0Uv.js";import"./ListSubheader-CKsm33Ps.js";import"./Button-su8UM5h8.js";import"./Container-BKOvC3qE.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
