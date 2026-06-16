import{j as t}from"./iframe-CskbrvwW.js";import{C as e}from"./Autocomplete-CU4eJaov.js";import{B as i}from"./index-BA1sIr4x.js";import{P as s}from"./index-D2NoLy7w.js";import{T as a}from"./index-BYkKLoSf.js";import{G as l}from"./index-CZsLRVDZ.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-CLvYEEw9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKv-6Ip5.js";import"./index-_9yCn__n.js";import"./index-CTKUFQuw.js";import"./index-CrcoPoGw.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./memoTheme-DEwbXW4J.js";import"./styled-BsXlxVo_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-De4oAUc0.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfOh6Tof.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-ByAJkR7Y.js";import"./SelectFocusSourceContext-BPCr-wpP.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./useSlotProps-C5o6YfE5.js";import"./Popover-DXCvR8dx.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-4hvJB8nO.js";import"./useTheme-BYK31DIa.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./useTimeout-tPc9dJl0.js";import"./getReactElementRef-C03_kC3i.js";import"./mergeSlotProps-CnXGUKPA.js";import"./debounce-Be36O1Ab.js";import"./Modal-BBxZlvcb.js";import"./useEventCallback-SyYUcrzB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./Paper-C7gSeK8B.js";import"./List-TojBtRhm.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DIqjKUDM.js";import"./createSvgIcon-Bhh07A3D.js";import"./OutlinedInput-DIJeNguT.js";import"./FormHelperText-DuMGeBBY.js";import"./FormControlLabel-DU9By6y8.js";import"./Typography-C3YNkC5-.js";import"./Switch-C8V1MSZG.js";import"./SwitchBase-B5TBSL1B.js";import"./ButtonBase-D0cuhZpt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CkEEhUL0.js";import"./RadioGroup-DNnvKS06.js";import"./FormGroup-F9zDzK3f.js";import"./Stack-C_7R7j6r.js";import"./styled-DBnwDxk1.js";import"./Box-ChrZYvSC.js";import"./Divider-CQKuo_rK.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DEzAGuhy.js";import"./FormControl-CY1-Z9r6.js";import"./isMuiElement-AkziJBw1.js";import"./Grid-Dtrs9C3c.js";import"./useInfiniteQuery-C1gHG9Py.js";import"./suspense-vTXPO3Ra.js";import"./useBaseQuery-DEp5rs_t.js";import"./index-DyeJjk-d.js";import"./index-D3sTtJd8.js";import"./___vite-browser-external_commonjs-proxy-CW-dTi_Y.js";import"./index-BRjqHJWv.js";import"./Autocomplete-reVXiqLD.js";import"./Close-Behtas3R.js";import"./usePreviousProps-DBCmsxR8.js";import"./Tooltip-DpvX0KYg.js";import"./Chip-BvXuiaAF.js";import"./IconButton-C3QjbCEP.js";import"./CircularProgress-DRIVKGSr.js";import"./ListSubheader-oq69H4go.js";import"./Button-NBHJiR2s.js";import"./Container-YINSrinB.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
