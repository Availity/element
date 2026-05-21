import{j as e}from"./iframe-BP_6obq-.js";import{C as a}from"./TextField-LN3zdNXT.js";import{B as s}from"./index-D0xPWEah.js";import{P as l}from"./index-BcQUJw-W.js";import{T as d}from"./index-EoJdXtZk.js";import{G as n}from"./index-Cyg8Zoy-.js";import{T as c,a as h}from"./Types-Uqfp7fgP.js";import{u as p,F as u}from"./index.esm-D-237LQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Btgn3iS_.js";import"./index-OtLd_hTL.js";import"./index-BiBDMnSv.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CnHEyztA.js";import"./memoTheme-BSboZUOu.js";import"./styled-tyPDC8H3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CiSkpeaB.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CcVPoqIg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Yr3aFb9D.js";import"./Menu-B16pZnWM.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./useSlotProps-CRXG0rmu.js";import"./Popover-B8-deUWB.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-XICOo1di.js";import"./useTheme-DbBiTE4S.js";import"./utils-fRJUoSLW.js";import"./TransitionGroupContext-B3nL2djk.js";import"./useTimeout-CSJtp0Y8.js";import"./getReactElementRef-CcD8R4QN.js";import"./mergeSlotProps-C4cSFGrS.js";import"./debounce-Be36O1Ab.js";import"./Modal-BoTJ9TiT.js";import"./useEventCallback-BD_ANQY0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./Fade-C9R9e0Yq.js";import"./Paper-00-tiWk7.js";import"./List-DIXN3EWs.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DHSx-hEg.js";import"./createSvgIcon-C8pu6ftq.js";import"./OutlinedInput-BvbUZoKB.js";import"./FormHelperText-DlNTsgkP.js";import"./FormControlLabel-PcokZr4D.js";import"./Typography-xBYBi8Ml.js";import"./Switch-BDYdkdO0.js";import"./SwitchBase-Cy3ktZMy.js";import"./ButtonBase-8n2sjZ5K.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BmUp1QZh.js";import"./RadioGroup-DELYNiGz.js";import"./FormGroup-B81_w-JB.js";import"./Box-CrUjzboj.js";import"./Divider-OjstwTer.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CMlfGjCP.js";import"./styled-VCZNIqfv.js";import"./TextField-DR1rc2We.js";import"./FormControl-DtAGeh-k.js";import"./isMuiElement-Dpdrf9tp.js";import"./Grid-DuXHbjPr.js";import"./Tooltip-DfZ6DZ9O.js";import"./IconButton-DsvJwMgL.js";import"./CircularProgress-DALVNgNR.js";import"./Button-DKYxn39A.js";import"./Container-CMlBc6YM.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
