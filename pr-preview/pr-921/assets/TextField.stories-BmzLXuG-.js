import{j as e}from"./iframe-CskbrvwW.js";import{C as a}from"./TextField-CyigrY5e.js";import{B as s}from"./index-BA1sIr4x.js";import{P as l}from"./index-D2NoLy7w.js";import{T as d}from"./index-BYkKLoSf.js";import{G as n}from"./index-CZsLRVDZ.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CLvYEEw9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_9yCn__n.js";import"./index-CTKUFQuw.js";import"./index-CrcoPoGw.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./memoTheme-DEwbXW4J.js";import"./styled-BsXlxVo_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-De4oAUc0.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfOh6Tof.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-ByAJkR7Y.js";import"./SelectFocusSourceContext-BPCr-wpP.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./useSlotProps-C5o6YfE5.js";import"./Popover-DXCvR8dx.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-4hvJB8nO.js";import"./useTheme-BYK31DIa.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./useTimeout-tPc9dJl0.js";import"./getReactElementRef-C03_kC3i.js";import"./mergeSlotProps-CnXGUKPA.js";import"./debounce-Be36O1Ab.js";import"./Modal-BBxZlvcb.js";import"./useEventCallback-SyYUcrzB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./Paper-C7gSeK8B.js";import"./List-TojBtRhm.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DIqjKUDM.js";import"./createSvgIcon-Bhh07A3D.js";import"./OutlinedInput-DIJeNguT.js";import"./FormHelperText-DuMGeBBY.js";import"./FormControlLabel-DU9By6y8.js";import"./Typography-C3YNkC5-.js";import"./Switch-C8V1MSZG.js";import"./SwitchBase-B5TBSL1B.js";import"./ButtonBase-D0cuhZpt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CkEEhUL0.js";import"./RadioGroup-DNnvKS06.js";import"./FormGroup-F9zDzK3f.js";import"./Stack-C_7R7j6r.js";import"./styled-DBnwDxk1.js";import"./Box-ChrZYvSC.js";import"./Divider-CQKuo_rK.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DEzAGuhy.js";import"./FormControl-CY1-Z9r6.js";import"./isMuiElement-AkziJBw1.js";import"./Grid-Dtrs9C3c.js";import"./Tooltip-DpvX0KYg.js";import"./IconButton-C3QjbCEP.js";import"./CircularProgress-DRIVKGSr.js";import"./Button-NBHJiR2s.js";import"./Container-YINSrinB.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
