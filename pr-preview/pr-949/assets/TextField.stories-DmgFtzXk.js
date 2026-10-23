import{j as e}from"./iframe-BEwKysCr.js";import{C as a}from"./TextField-vf8wLCK8.js";import{B as s}from"./index-DgXerHVi.js";import{P as l}from"./index-B77edPTj.js";import{T as d}from"./index-BYEJAIjN.js";import{G as n}from"./index-C4sW_QjN.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DMZimdxn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvHzOJ2c.js";import"./index-B07NIH_W.js";import"./index-MVgG_W0q.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BCBu9Peg.js";import"./memoTheme-DRAFqHbg.js";import"./styled-Bg0-_ABf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpPPs8BD.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ5DvtNE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CCM-Wvl2.js";import"./SelectFocusSourceContext-CInINzuy.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useForkRef-DOnOtXA5.js";import"./useSlotProps-CytfctCW.js";import"./Popover-DaOq3n4o.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CDUk8pyx.js";import"./useTheme-GtZOwaC6.js";import"./utils-kGYhSz9o.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useTimeout-CgoAjxgp.js";import"./getReactElementRef-CS040HVY.js";import"./mergeSlotProps-BJEr5Vx4.js";import"./debounce-Be36O1Ab.js";import"./Modal-HL9q2m8c.js";import"./useEventCallback-CrQ8pL3N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./Paper-0a0qvbdm.js";import"./List-DPCyJ7f3.js";import"./utils-DoM3o7-Q.js";import"./useControlled-SqHPXcV4.js";import"./createSvgIcon-BBwf9uD1.js";import"./OutlinedInput-C9Bj3Clw.js";import"./FormHelperText-CuKBSHwO.js";import"./FormControlLabel-CS5vRZ4l.js";import"./Typography-DdaiLWH8.js";import"./Switch-CGjlBj-8.js";import"./SwitchBase-gfvk7QPN.js";import"./ButtonBase-DKnYqpgE.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BIuNKybY.js";import"./RadioGroup-Dgbh2tWz.js";import"./FormGroup-DCv0nEPD.js";import"./Stack-CkUGtwqW.js";import"./styled-nNR7mMu5.js";import"./Box-3XwYnqya.js";import"./Divider-CcMK4Bgo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BhBwWtAC.js";import"./FormControl-DkAX9ifC.js";import"./isMuiElement-Ds6j6Ubo.js";import"./Grid-BlMGH9aP.js";import"./IconButton-BB9H-X4e.js";import"./CircularProgress-BsydgvXb.js";import"./Tooltip-hIdC-Elu.js";import"./Button-dWZGUH58.js";import"./Container-CSrQBmhf.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
