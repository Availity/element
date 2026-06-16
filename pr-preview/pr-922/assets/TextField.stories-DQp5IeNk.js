import{j as e}from"./iframe-DOPEDWVE.js";import{C as a}from"./TextField-BcZCcAF_.js";import{B as s}from"./index-B920RZd2.js";import{P as l}from"./index-a__vzDUH.js";import{T as d}from"./index-Bc9oImAB.js";import{G as n}from"./index-CVbaZk5H.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BkNDLnsN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EgVkongX.js";import"./index-DBmw2oKs.js";import"./index-CrcoPoGw.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./memoTheme-8zILCmUA.js";import"./styled-LPfbW-Wh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CBYcclqk.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DIv8BJCy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CpDZPS1H.js";import"./SelectFocusSourceContext-BhjBp6ew.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./useSlotProps-DiHBVMXF.js";import"./Popover-BgxDu_AE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CcIDLVWU.js";import"./useTheme-D2iYqlAC.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./useTimeout-CvyLGLNv.js";import"./getReactElementRef-CylE0SZK.js";import"./mergeSlotProps-CEgtkqsO.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dz4Wg6rk.js";import"./useEventCallback-2DpT7fNb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D5hQN3RU.js";import"./Fade-DWzLIVc2.js";import"./Paper-e-gdlgr6.js";import"./List-CVXZp5mU.js";import"./utils-DoM3o7-Q.js";import"./useControlled-W_wjgM09.js";import"./createSvgIcon-URN63_Ch.js";import"./OutlinedInput-L_8zJgVV.js";import"./FormHelperText-CYrlQGob.js";import"./FormControlLabel-Dd2Mqmwt.js";import"./Typography-D_VWbga9.js";import"./Switch-DQVRQ4_0.js";import"./SwitchBase-C2DjFSld.js";import"./ButtonBase-CQME6_xK.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Z7ssCuQ9.js";import"./RadioGroup-CEVZjNHr.js";import"./FormGroup-DQPvM_H1.js";import"./Stack-CjxkYZ6F.js";import"./styled-DCDHMWdc.js";import"./Box-m-kHsJDm.js";import"./Divider-B3v8nYDN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-D8gCz3GK.js";import"./FormControl-D6iyS4X7.js";import"./isMuiElement-OUcohH0i.js";import"./Grid-D6ohNbZE.js";import"./Tooltip-VtUuxwVh.js";import"./IconButton-C52uYHTa.js";import"./CircularProgress-Bd2XmtNT.js";import"./Button-DHnc0sD-.js";import"./Container-5_MJa3VZ.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
