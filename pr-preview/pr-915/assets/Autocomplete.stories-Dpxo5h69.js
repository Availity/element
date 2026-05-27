import{j as t}from"./iframe-BeW-ShBa.js";import{C as e}from"./Autocomplete-D9ixhYQh.js";import{B as i}from"./index-B-GrkHTI.js";import{P as s}from"./index-BFBORQJF.js";import{T as a}from"./index-BSsohYFg.js";import{G as l}from"./index-CcUAtZIu.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-n3g2VIij.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dn-Gw8p6.js";import"./index-BUpPI6bd.js";import"./index-DHE56XfM.js";import"./index-BiBDMnSv.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./memoTheme-Dx1_-nEN.js";import"./styled-E0CmYcz3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cxj9EV6v.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DwS3dUaL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DxZlcoBU.js";import"./Menu-CN-C-Du1.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./useSlotProps-ghuGdCEB.js";import"./Popover-BVS0J5pW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BPMEmQxN.js";import"./useTheme-BPzLpLU0.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./useTimeout-Da9tNn-P.js";import"./getReactElementRef-BjNvvstO.js";import"./mergeSlotProps-D8UcRAc-.js";import"./debounce-Be36O1Ab.js";import"./Modal-CnexL54u.js";import"./useEventCallback-6Uyg9fGx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./Fade-D8bMgo8d.js";import"./Paper-C7ldQuEP.js";import"./List-C1Y1JpKl.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BpXRfpPn.js";import"./createSvgIcon-BpCrnFel.js";import"./OutlinedInput-DFxqNyAs.js";import"./FormHelperText-DLkF45Vp.js";import"./FormControlLabel-rtHyeW46.js";import"./Typography-C3HO5zSq.js";import"./Switch-B_X6xexg.js";import"./SwitchBase-D-OFjC1o.js";import"./ButtonBase-Z8KwVcKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BNVrWmQP.js";import"./RadioGroup-D9O0pa2h.js";import"./FormGroup-CXZ8nN14.js";import"./Box-BJjonoMC.js";import"./Divider-DULf-jQm.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CkM3UncO.js";import"./styled-C6cy5gNq.js";import"./TextField-_Lta7BN7.js";import"./FormControl-BGOvdkoq.js";import"./isMuiElement-Gc_4vFE3.js";import"./Grid-D-BmDj5R.js";import"./index-DLnvtUdw.js";import"./index-DMVu9gap.js";import"./___vite-browser-external_commonjs-proxy-CtUXk23B.js";import"./index-BgBxCtiF.js";import"./_toKey-DMT_zmqL.js";import"./Autocomplete-Du_51NJj.js";import"./Close-aKFnXmik.js";import"./usePreviousProps-1XZU4b2x.js";import"./Tooltip-UPiMyfZ8.js";import"./Chip--90D7W4F.js";import"./IconButton-BvJM40or.js";import"./CircularProgress-CiOpdtGa.js";import"./ListSubheader-CxPKXRFp.js";import"./useInfiniteQuery-BOI4AiZ8.js";import"./useBaseQuery-DLkX-G6u.js";import"./suspense-CNr0Ed_c.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BwdPpmvm.js";import"./Container-CuzKFum9.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const to=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,to as __namedExportsOrder,$t as default};
