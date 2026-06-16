import{j as e}from"./iframe-Bzxq4khQ.js";import{C as a}from"./TextField-CKW5wxb7.js";import{B as s}from"./index-HZB2unx2.js";import{P as l}from"./index-Buh0WhxV.js";import{T as d}from"./index-CErBQ4Jd.js";import{G as n}from"./index-DXLpfNz7.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-B9ijTOzS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DU829yZl.js";import"./index-D4q0lTpi.js";import"./index-CrcoPoGw.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./memoTheme-CkAjAg3h.js";import"./styled-BSgFKBik.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7loAdmS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CNT2ANZv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DF1l4Dby.js";import"./SelectFocusSourceContext-CNFdeD9T.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./useSlotProps-Dxsb08A1.js";import"./Popover-LBHWHgEN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DrMzc0O0.js";import"./useTheme-CLJ35KcV.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./useTimeout-D8n7EMSe.js";import"./getReactElementRef-C4G1HZdF.js";import"./mergeSlotProps-516L7gnV.js";import"./debounce-Be36O1Ab.js";import"./Modal-DYASwYOM.js";import"./useEventCallback-Zn8Kx7hu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-_k8xef8N.js";import"./Fade-DV9rGJYk.js";import"./Paper-i7wmImU7.js";import"./List-C9h_lLEy.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BxlFJ8nt.js";import"./createSvgIcon-Bd4vIYa-.js";import"./OutlinedInput-rTNgHDL6.js";import"./FormHelperText-obR1wLHF.js";import"./FormControlLabel-HjAGXNw6.js";import"./Typography-B9ybtieC.js";import"./Switch-RyNLpMLT.js";import"./SwitchBase-Cq5XAYLf.js";import"./ButtonBase-mnH_3Wha.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BtrdgFmx.js";import"./RadioGroup-BX4ZIunc.js";import"./FormGroup-gt1zcoyV.js";import"./Stack-C6SNpi-l.js";import"./styled-zIwGk7GA.js";import"./Box-Bmi0pHZf.js";import"./Divider-DaOJE4uw.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BMzuCG6i.js";import"./FormControl-m8dKyrAv.js";import"./isMuiElement-BFlpbPNJ.js";import"./Grid-DBmnTLkS.js";import"./Tooltip--PgUuozR.js";import"./IconButton-CbyRNbtW.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./Container-C5W7aLU7.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
