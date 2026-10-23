import{j as e}from"./iframe-DM2JG2Wv.js";import{C as a}from"./TextField-K5kDtq7n.js";import{B as s}from"./index-DQYiNEqx.js";import{P as l}from"./index-BZbVZ93S.js";import{T as d}from"./index-DASKwMqe.js";import{G as n}from"./index-Dro33RKh.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DRmN-6ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn3VVfQY.js";import"./index-D0QEA918.js";import"./index-MVgG_W0q.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlqYcycJ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BOyQprAg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CUSrbkCV.js";import"./SelectFocusSourceContext-DI2xIgZx.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useForkRef--lBTfT4q.js";import"./useSlotProps-6BpQXPqS.js";import"./Popover-LlYF3w6K.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DFUf67sY.js";import"./useTheme-BIdTJdU8.js";import"./utils-B1H1HspZ.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useTimeout-DDDxsICF.js";import"./getReactElementRef-gsi1wQpy.js";import"./mergeSlotProps-gJlJxAuh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bpysy-qr.js";import"./useEventCallback-B8_sGVJg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./Paper-D6rGRseY.js";import"./List-lGfDTeyH.js";import"./utils-DoM3o7-Q.js";import"./useControlled-4UyvroS3.js";import"./createSvgIcon-CxStVnnE.js";import"./OutlinedInput-BVhxzUTD.js";import"./FormHelperText-DmHrS-f2.js";import"./FormControlLabel-CgZbLNmr.js";import"./Typography-Cb49bwUU.js";import"./Switch-Uj5KOIHe.js";import"./SwitchBase-DE3M2Edh.js";import"./ButtonBase-FpBSGXSw.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BvqRFW_F.js";import"./RadioGroup-Dp4TasKT.js";import"./FormGroup-B-vHGHwY.js";import"./Stack-D8O8MXVX.js";import"./styled-Bf965zM_.js";import"./Box-Cqyd88nw.js";import"./Divider-FKTpnAgL.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CkhBNCjB.js";import"./FormControl-DuDHVeRj.js";import"./isMuiElement-B6N371AV.js";import"./Grid-CX1e7vz2.js";import"./IconButton-Bj7e_4ur.js";import"./CircularProgress-D7bBmSyx.js";import"./Tooltip-Ff-XGBQt.js";import"./Button-p88YkSSM.js";import"./Container-I8b0yq_j.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
