import{j as t}from"./iframe-CrDI7sKE.js";import{C as e}from"./Autocomplete-Wwi6QjmZ.js";import{B as i}from"./index-D1nVldbn.js";import{P as s}from"./index-Dt3qqCHF.js";import{T as a}from"./index-DnW44yA8.js";import{G as l}from"./index-BtTxkIqf.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-2JjZkgC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3ryKQFQ.js";import"./index-D3oWf4BY.js";import"./index-BpI0U3eZ.js";import"./index-CrcoPoGw.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./memoTheme-1eSCZRav.js";import"./styled-CqKFH6eA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-X5erI1FX.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DRWQKdnm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DqoCSbAA.js";import"./SelectFocusSourceContext-qiWoxQgp.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useForkRef-BfO6-t9P.js";import"./useSlotProps-Cihilg2w.js";import"./Popover-Cm29Ipyl.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DJpfMgk6.js";import"./useTheme-e92JqNOn.js";import"./utils-BWKdc28P.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useTimeout-B0l-dQbr.js";import"./getReactElementRef-d6gO3Pyv.js";import"./mergeSlotProps-DmKidiVf.js";import"./debounce-Be36O1Ab.js";import"./Modal-Hr0EA0wP.js";import"./useEventCallback-D4QkonYW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B1fHeAP2.js";import"./Fade-BmT7tLhS.js";import"./Paper-DYAzX1VO.js";import"./List-CTjmGkg1.js";import"./utils-DoM3o7-Q.js";import"./useControlled-C0OF1VAF.js";import"./createSvgIcon-B259oLuI.js";import"./OutlinedInput-Di-XT6nh.js";import"./FormHelperText-LkC2Q1TY.js";import"./FormControlLabel-CXnKQHZS.js";import"./Typography-BB__VVHi.js";import"./Switch-CY48rVhs.js";import"./SwitchBase-DCKaqOED.js";import"./ButtonBase-Lw6uESYo.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-ca9tiySW.js";import"./RadioGroup-DloPrg92.js";import"./FormGroup-7kR7A8Vb.js";import"./Stack-BQFWbwCa.js";import"./styled-B5mLmA23.js";import"./Box-BKdDafZT.js";import"./Divider-B87S6cGg.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-yO5oMtNe.js";import"./FormControl-DUGeUz4o.js";import"./isMuiElement-CplrA1Xb.js";import"./Grid-B7k0uIkV.js";import"./useInfiniteQuery-BH-tvak2.js";import"./suspense-CSo65Di8.js";import"./useBaseQuery-B1yHQ6XM.js";import"./index-DZxmlms1.js";import"./index-B41T07YE.js";import"./___vite-browser-external_commonjs-proxy-B0N8KlEf.js";import"./index-CzBJOeop.js";import"./Autocomplete-DrnzBfLz.js";import"./Close-BtLqS1Rv.js";import"./usePreviousProps-CaXPS48m.js";import"./Tooltip-BYMj-RjT.js";import"./Chip-Dik9CHta.js";import"./IconButton-COXIliVf.js";import"./CircularProgress-DKP2WMPH.js";import"./ListSubheader-CKHnCDLk.js";import"./Button-C68buGXp.js";import"./Container-QJP-imy5.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
