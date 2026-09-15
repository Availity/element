import{j as t}from"./iframe-DF0Rdha4.js";import{C as e}from"./Autocomplete-xcYk8zA6.js";import{B as i}from"./index-CUgfwVUD.js";import{P as s}from"./index-4RjwuuOq.js";import{T as a}from"./index-tdaHATjI.js";import{G as l}from"./index-CPOPohyu.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-C2G3D7Ed.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_wEVoBfI.js";import"./index-C3g1b-Zt.js";import"./index-BVLgzJf-.js";import"./index-CrcoPoGw.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CMfmqAYx.js";import"./memoTheme-4vIjm6LZ.js";import"./styled-I7SbqUzc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D3AL5AgI.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-A_gbksq7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CgSH5fRm.js";import"./SelectFocusSourceContext-Dy_24zIK.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useForkRef-BKwvVnzL.js";import"./useSlotProps-CexFUqCS.js";import"./Popover-6fv2nyIA.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CcmPSbI-.js";import"./useTheme-Dht0CY8-.js";import"./utils-DCMHm21Z.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useTimeout-CMPjzxnq.js";import"./getReactElementRef-BJS3FUmu.js";import"./mergeSlotProps-BO33MI0n.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bdo5cqSi.js";import"./useEventCallback-BNwW89Is.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Cj1iOKB7.js";import"./Fade-Cx-6eTbl.js";import"./Paper-DargFASt.js";import"./List-CQj_DkG6.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Dig0ZMyL.js";import"./createSvgIcon-IzKekw11.js";import"./OutlinedInput-mQC1K6j_.js";import"./FormHelperText-9mqc9Ecw.js";import"./FormControlLabel-Dq_-18BO.js";import"./Typography-CVkvQWeR.js";import"./Switch-C2KqfsMd.js";import"./SwitchBase-DZV18a5O.js";import"./ButtonBase-DIMIguuI.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DA7ldTDW.js";import"./RadioGroup-BOyQBxC7.js";import"./FormGroup-DhUgHgdA.js";import"./Stack-CQjWIA4P.js";import"./styled-CjeI9bHt.js";import"./Box-g_k8tvoW.js";import"./Divider-P6rUNdV1.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BKBRq5Dl.js";import"./FormControl-CEW9cI4g.js";import"./isMuiElement-CM_e2YWo.js";import"./Grid-wcoxmIQC.js";import"./useInfiniteQuery-Cq4sC6xq.js";import"./suspense-BZUwcA1H.js";import"./useBaseQuery-swT4tqMf.js";import"./index-RkKteQFr.js";import"./index-qGcukIFs.js";import"./___vite-browser-external_commonjs-proxy-3BD_NkgN.js";import"./index-DD89Agjh.js";import"./Autocomplete-3NVceKmI.js";import"./Close-DzOV4uIs.js";import"./usePreviousProps-BLmFkQ2q.js";import"./Tooltip-BWnEWeD7.js";import"./Chip-CroglSL9.js";import"./IconButton-oDfd5Lmw.js";import"./CircularProgress-B4cKxRwq.js";import"./ListSubheader-CyARCSln.js";import"./Button-kz7BikUW.js";import"./Container-D2_4bomA.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
