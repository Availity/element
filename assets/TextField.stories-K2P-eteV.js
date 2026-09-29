import{j as e}from"./iframe-5qL0mprR.js";import{C as a}from"./TextField-B_T6HUSs.js";import{B as s}from"./index-D6eeRdCr.js";import{P as l}from"./index-DrpSWOjF.js";import{T as d}from"./index-CJigEfEA.js";import{G as n}from"./index-ClcKetnN.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CGn8amwb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIJrhxZS.js";import"./index-C3SWmzio.js";import"./index-CrcoPoGw.js";import"./index-CD_y2Btm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./memoTheme-DGTRKnQQ.js";import"./styled-CoUwmM87.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DVY6ao7R.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5FH_KgV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dc1mU1Pl.js";import"./SelectFocusSourceContext-CEJvL2Re.js";import"./useSlot-Cn1CdUSX.js";import"./mergeSlotProps-BLlOPPFY.js";import"./useForkRef-B_tBAx6E.js";import"./useSlotProps-BldRbwm9.js";import"./Popover-fOCUh9Nt.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BaL9DcFZ.js";import"./useTheme-Dl3uMx7u.js";import"./utils-ZWxhk7o5.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useTimeout-B8tDrGFN.js";import"./getReactElementRef-DBt8lh_B.js";import"./mergeSlotProps-BAEmNdNM.js";import"./debounce-Be36O1Ab.js";import"./Modal-CAwaW-IN.js";import"./useEventCallback-DqMc6arA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DdJYMJ-d.js";import"./Fade-CwTmGpyj.js";import"./Paper-CT3iXlM2.js";import"./List-8rgLrAmz.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CSqunifB.js";import"./createSvgIcon-CZsBBnxz.js";import"./OutlinedInput-exuQdaqt.js";import"./FormHelperText-Bngb2_Es.js";import"./FormControlLabel-cDTw_uEy.js";import"./Typography-F-Y5u_yh.js";import"./Switch-DUksUYmW.js";import"./SwitchBase-C72NdBTb.js";import"./ButtonBase-CEBWCJ86.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BRuYCTD8.js";import"./RadioGroup-PluZ5qs0.js";import"./FormGroup-DUp1hayB.js";import"./Stack-CnLSR6do.js";import"./styled-rFpyV319.js";import"./Box-jTQ-hmH5.js";import"./Divider-DdnnBiCY.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BU-6Dl6v.js";import"./FormControl-Dcj4iUlW.js";import"./isMuiElement-DHbarLNo.js";import"./Grid-B5L6Dh7M.js";import"./IconButton-B8_cpiYd.js";import"./CircularProgress-BqSWo9RJ.js";import"./Tooltip-P-kE-0cn.js";import"./Button-8WJV18MQ.js";import"./Container-B0mlIeY3.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
