import{j as t}from"./iframe-Cnf77ZIg.js";import{C as e}from"./Autocomplete-Bf15FguI.js";import{B as i}from"./index-BbhRJntT.js";import{P as s}from"./index-JwqJeIy4.js";import{T as a}from"./index-qa_smkpe.js";import{G as l}from"./index-ORdrVCt-.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-DRxWHQwq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dyoxt0TP.js";import"./index-hVQEkyN7.js";import"./index-CpFXeQfH.js";import"./index-CrcoPoGw.js";import"./index-CCvoZ_po.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8TdQCTz.js";import"./memoTheme-rtNk9j34.js";import"./styled-D7PTo4Yf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjvK7be8.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-FlV4R_pV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BSUog0-L.js";import"./SelectFocusSourceContext-CGaZJ5Tt.js";import"./useSlot-UCTcrF1q.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useForkRef-CwrFiSR5.js";import"./useSlotProps-9tgtsXjP.js";import"./Popover-CyHUhMPu.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-_ErOQT1L.js";import"./useTheme-fbZoBAbS.js";import"./utils-C9oXke8q.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./useTimeout-DDbT1lIl.js";import"./getReactElementRef-CMOtQl0I.js";import"./mergeSlotProps-DJo0CcBT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BsxKKYBP.js";import"./useEventCallback-C-Qx89z1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CwjXL11W.js";import"./Fade-DcdXt8nB.js";import"./Paper-DkkA_EpG.js";import"./List-B-VVle_u.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CSfvqfPH.js";import"./createSvgIcon-C5tcB9_e.js";import"./OutlinedInput-Wlr5Q67i.js";import"./FormHelperText-BughnuW6.js";import"./FormControlLabel-DA0D24Rk.js";import"./Typography-C7kdML4f.js";import"./Switch-DUQOdpz9.js";import"./SwitchBase-BooYjoT7.js";import"./ButtonBase-Cb27w-UN.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-5LCq-NFB.js";import"./RadioGroup-BKRFtPL4.js";import"./FormGroup-DzvvVjMS.js";import"./Stack-CAuZPL_Y.js";import"./styled-BdiKer14.js";import"./Box-ChPufWLv.js";import"./Divider-nIEtNCFC.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BY2QW2mO.js";import"./FormControl-CCnUhFPG.js";import"./isMuiElement-DBtd91O4.js";import"./Grid-CrhtQkIm.js";import"./useInfiniteQuery-B4Kj-nq-.js";import"./suspense-CZUhSpM1.js";import"./useBaseQuery-k9qCI5-J.js";import"./index-CsFiSTiB.js";import"./index-BlDkkMZd.js";import"./___vite-browser-external_commonjs-proxy-Dxxm6Cdx.js";import"./index-BIVoh9iT.js";import"./Autocomplete-D2BFC0-T.js";import"./Close-Ds_eDuIS.js";import"./usePreviousProps-BXt0H41M.js";import"./Tooltip-RxJZvyE-.js";import"./Chip-DGRdw-jk.js";import"./IconButton-De56WQhg.js";import"./CircularProgress-DjiS4vOo.js";import"./ListSubheader-Dw1iOmkG.js";import"./Button-B1EPaR8-.js";import"./Container-Bpufyj5a.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
