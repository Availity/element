import{j as t}from"./iframe-6QlsuZks.js";import{C as e}from"./Autocomplete-LBzn-Pg7.js";import{B as i}from"./index-Bu7ksarN.js";import{P as s}from"./index-CDZf3QmR.js";import{T as a}from"./index-ClTqhWkD.js";import{G as l}from"./index-D54pz1q_.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-DiaYOtWy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdMO6x1B.js";import"./index-CWuq3cDW.js";import"./index-DVMtrzSw.js";import"./index-BiBDMnSv.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./memoTheme-B9sQlNky.js";import"./styled-DGzk_rgf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0NhCwZGG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ_CUTQW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CKSuph_q.js";import"./Menu-C8039Cjb.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./useSlotProps-XhtNc6mu.js";import"./Popover-CbDgWpYW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DtF3r0WZ.js";import"./useTheme-CgDfdbfy.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./useTimeout-CoBmWaVy.js";import"./getReactElementRef-CeFrpTOn.js";import"./mergeSlotProps-y686c5--.js";import"./debounce-Be36O1Ab.js";import"./Modal-BEIbnPxI.js";import"./useEventCallback-H76OWquH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BrGAJPN3.js";import"./Fade-BumTlQbr.js";import"./Paper-CDdLas_Y.js";import"./List-Dng0f1WM.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D8gQq48B.js";import"./createSvgIcon-suRscvHS.js";import"./OutlinedInput-BvrLXmtS.js";import"./FormHelperText-BoQfm90T.js";import"./FormControlLabel-DydU_YjN.js";import"./Typography-BiVk-Xpu.js";import"./Switch-CPR75Nav.js";import"./SwitchBase-CPhx0cqS.js";import"./ButtonBase-DqANlMe2.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio--62dKuxE.js";import"./RadioGroup-K7Ow30iF.js";import"./FormGroup-DnkUzQHJ.js";import"./Box-BeM2Ae_w.js";import"./Divider-DciKYC8r.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CcxNsvTs.js";import"./styled-BHPtUtOc.js";import"./TextField-mI9jqCUl.js";import"./FormControl-CXZTEhg_.js";import"./isMuiElement-Cw9eyX2o.js";import"./Grid-B1lubc6W.js";import"./index-0b3xigZQ.js";import"./index-C0QdKyD5.js";import"./___vite-browser-external_commonjs-proxy-p2BYraIi.js";import"./index-DMddt39K.js";import"./_toKey-CnCcwt5D.js";import"./Autocomplete-DiO8o6P8.js";import"./Close-DFnKTLyr.js";import"./usePreviousProps-BOPANTiF.js";import"./Tooltip-Obr4DBw0.js";import"./Chip-C0ZDVbQ4.js";import"./IconButton-C52xOams.js";import"./CircularProgress-BzseWMqn.js";import"./ListSubheader-DaiBUfvg.js";import"./useInfiniteQuery-CQ0_EwDe.js";import"./useBaseQuery-DKddEgEr.js";import"./suspense-B5poojJ7.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-Ck8mL0PX.js";import"./Container-BCUe36Lo.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
