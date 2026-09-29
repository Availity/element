import{j as e}from"./iframe-BdtdKmg8.js";import{C as a}from"./TextField-DhMqqwFl.js";import{B as s}from"./index-sfs31Xg8.js";import{P as l}from"./index-Ci1afW8z.js";import{T as d}from"./index-BktFWPxY.js";import{G as n}from"./index-y3OLnY3V.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DVBkF3FQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDSSTqjp.js";import"./index-CLJf8Evv.js";import"./index-CrcoPoGw.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BHLlmPIG.js";import"./memoTheme-BSZO8tET.js";import"./styled-DYRRHVQd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-A8uoF4Ei.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-6mG5_X4U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BJ67YTJg.js";import"./SelectFocusSourceContext-BALdufV-.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useForkRef-yU1gIY9t.js";import"./useSlotProps-CIppk9xm.js";import"./Popover-D2QOeMg_.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-By3tqOUu.js";import"./useTheme-BUr8GPQY.js";import"./utils-B5cCI6Rw.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useTimeout-BjzlLD0-.js";import"./getReactElementRef-BX57xPm_.js";import"./mergeSlotProps-BmhbC6HA.js";import"./debounce-Be36O1Ab.js";import"./Modal-r1fngEGv.js";import"./useEventCallback-CNW4hkob.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./Paper-BbHjqnIf.js";import"./List-kh9aNYzj.js";import"./utils-DoM3o7-Q.js";import"./useControlled-qDvReWFA.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./OutlinedInput-By841vvG.js";import"./FormHelperText-CjBh-oXE.js";import"./FormControlLabel-D9_T4UwB.js";import"./Typography-Ct1eVQia.js";import"./Switch-D7-Gaizw.js";import"./SwitchBase-t0UcAKA4.js";import"./ButtonBase-Bsasq48R.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CwDoUWcu.js";import"./RadioGroup-BPASCs_d.js";import"./FormGroup-Crs6dnJ1.js";import"./Stack-DjOyHPuU.js";import"./styled-BACYX6V0.js";import"./Box-Bdbdbjz0.js";import"./Divider-BFyzYRTs.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BQR4myeh.js";import"./FormControl-CLW-YwyF.js";import"./isMuiElement-VRCGw5Z3.js";import"./Grid-BEc5hWlN.js";import"./IconButton-BGWMoxCC.js";import"./CircularProgress-DKwr5YQe.js";import"./Tooltip-B7d6lYcI.js";import"./Button-DsRHMuVD.js";import"./Container-5HhabFZh.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({
      values: {
        [args.name]: ''
      }
    });
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledTextField {...args} />
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
    name: 'controlledTextField',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: {
        value: 10,
        message: 'Too long'
      }
    },
    label: 'TextField Label',
    showCharacterCount: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({
      values: {
        [args.name]: ''
      }
    });
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledTextField {...args} />
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
    name: 'controlledTextField',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: {
        value: 10,
        message: 'Too long'
      }
    },
    label: 'TextField Label',
    displayOverflowMaxLength: true,
    showCharacterCount: true
  }
}`,...i.parameters?.docs?.source}}};const De=["_ControlledTextField","_ControlledTextFieldDisplayOverflow"];export{o as _ControlledTextField,i as _ControlledTextFieldDisplayOverflow,De as __namedExportsOrder,ze as default};
