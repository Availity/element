import{j as e}from"./iframe-DTy-Hi1D.js";import{C as a}from"./TextField-DquO2MRV.js";import{B as s}from"./index-BWwQVXX2.js";import{P as l}from"./index-CQ9SzY7-.js";import{T as d}from"./index-B3nHNvBt.js";import{G as n}from"./index-zuOxgOiJ.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DWa30rWd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CbCbTI1D.js";import"./index-BW2CNFKP.js";import"./index-CrcoPoGw.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-3YRNiFr2.js";import"./memoTheme-BG1xBytH.js";import"./styled-aP0uaM-i.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BhJzQqzw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BecUCFWL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DkS3VRNH.js";import"./SelectFocusSourceContext-B0GTmmdc.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useForkRef-Cs-hla5u.js";import"./useSlotProps-i2bvpF4l.js";import"./Popover-pG0yFIDd.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BwzhUyNs.js";import"./useTheme-D2uWiRt2.js";import"./utils-UH3J-pbT.js";import"./TransitionGroupContext-vVRi092a.js";import"./useTimeout-Dox0L-0x.js";import"./getReactElementRef-Czal8mnO.js";import"./mergeSlotProps-BWinZWd0.js";import"./debounce-Be36O1Ab.js";import"./Modal-C1xsDPMc.js";import"./useEventCallback-wWQn7yuE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./Paper-BB7D87hg.js";import"./List-CK8mYBos.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DJ-ZRmZ2.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./OutlinedInput-BsxOEMJo.js";import"./FormHelperText-BqXE1i86.js";import"./FormControlLabel-DU0Bs6VA.js";import"./Typography-BE1U26X8.js";import"./Switch-CQO10KB0.js";import"./SwitchBase-B6HLL3af.js";import"./ButtonBase-DQHg31rx.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CT0ik4u9.js";import"./RadioGroup-DhRVjKyW.js";import"./FormGroup-DeHCopE_.js";import"./Stack-D5xuPFAT.js";import"./styled-CiCMHiUo.js";import"./Box-BiTKfYdJ.js";import"./Divider-dXGoqsdo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B-TIor5a.js";import"./FormControl-DauWaPA-.js";import"./isMuiElement-BqP85GjQ.js";import"./Grid-9G99kq7Q.js";import"./IconButton-CZkpNN92.js";import"./CircularProgress-Dsur0AFP.js";import"./Tooltip-DHFGNIkU.js";import"./Button-BSzYbaIQ.js";import"./Container-CKdO9iiE.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
