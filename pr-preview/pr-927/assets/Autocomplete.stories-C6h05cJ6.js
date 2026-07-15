import{j as t}from"./iframe-DxDqWgB3.js";import{C as e}from"./Autocomplete-DMo1iVTR.js";import{B as i}from"./index-CE_ZDuuA.js";import{P as s}from"./index-DGf8uJ3M.js";import{T as a}from"./index-kRUN3OIn.js";import{G as l}from"./index-Dz-uzYEo.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-Bbj6X-Kp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zsiMTGXN.js";import"./index-BnoM5WX3.js";import"./index-C12PZec_.js";import"./index-CrcoPoGw.js";import"./index-CA8wTNp_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DuolYAV0.js";import"./memoTheme-CW08UaDq.js";import"./styled-C-u4rj0B.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BCXj-Ezv.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-s6qjM2X3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cqayly8p.js";import"./SelectFocusSourceContext-IuLaNH-W.js";import"./useSlot-DhabbitO.js";import"./mergeSlotProps-CkntHcZx.js";import"./useForkRef-DI5ILbHc.js";import"./useSlotProps-C80LEsEt.js";import"./Popover-ChYq-J8R.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BC-tKqvb.js";import"./useTheme-CKON97k_.js";import"./utils-C0firkgU.js";import"./TransitionGroupContext-DQeLAkDQ.js";import"./useTimeout-Cg12-pSn.js";import"./getReactElementRef-8K8_YwXV.js";import"./mergeSlotProps-BDEDV9VX.js";import"./debounce-Be36O1Ab.js";import"./Modal-DWjx2hRe.js";import"./useEventCallback-BAtRlhKU.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-COfvuY5V.js";import"./Fade-CrNSUCom.js";import"./Paper-07-bvRG5.js";import"./List-D2CsPysG.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BtuGr2vc.js";import"./createSvgIcon-DYs5Y6Jm.js";import"./OutlinedInput-lQiM0HOI.js";import"./FormHelperText-BTWiYLzM.js";import"./FormControlLabel-C7NGeSpD.js";import"./Typography-C89Ggk5t.js";import"./Switch-CCHmmAjq.js";import"./SwitchBase-D3CCA6Bi.js";import"./ButtonBase-Cv_OxEAB.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-9NIMnnwm.js";import"./RadioGroup-Czt-QDiE.js";import"./FormGroup-C29suHwn.js";import"./Stack-pOcYjPv5.js";import"./styled-CRQ2ZGB4.js";import"./Box-aFyRrUOd.js";import"./Divider-DCUlQGE7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DGTxJ20L.js";import"./FormControl-cRBbGdId.js";import"./isMuiElement-Mzgb52Ql.js";import"./Grid-B6GnwMzX.js";import"./useInfiniteQuery-BN3MJDR0.js";import"./suspense-9NuidOnd.js";import"./useBaseQuery-CmzvMnxr.js";import"./index-DNJz3ILC.js";import"./index-BkhnDdeT.js";import"./___vite-browser-external_commonjs-proxy-DfgmlVcb.js";import"./index-B5eWFWMd.js";import"./Autocomplete-Db8gK-w7.js";import"./Close-D6pX4ZTo.js";import"./usePreviousProps-BQAG4eY-.js";import"./Tooltip-CU2nv3Au.js";import"./Chip-BWT-uwzw.js";import"./IconButton-Bq1g08rd.js";import"./CircularProgress-X93LMWzE.js";import"./ListSubheader-Bwsg1frO.js";import"./Button-Cfa_uJOq.js";import"./Container-BXfLwVnI.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
