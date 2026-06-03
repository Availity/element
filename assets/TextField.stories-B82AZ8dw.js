import{j as e}from"./iframe-BXngGBfv.js";import{C as a}from"./TextField-o7nHw1yr.js";import{B as s}from"./index-ZvN5iItO.js";import{P as l}from"./index-Dc7aN8sI.js";import{T as d}from"./index-Cw2AsxKm.js";import{G as n}from"./index-D7EY_zU-.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CFyTxmyX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-_Q406J.js";import"./index-Bk46c2ns.js";import"./index-BiBDMnSv.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./memoTheme-By_0Hb9I.js";import"./styled-Bawvqwj4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-POAGYpGd.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYmoh9g8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CAygNoe6.js";import"./Menu-DGj6ldkx.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./useSlotProps-Djma3IUa.js";import"./Popover-3ptJ9M55.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-71LMLhER.js";import"./useTheme-C0sMdU1B.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./useTimeout-DWqRGYei.js";import"./getReactElementRef-BBa8qN_k.js";import"./mergeSlotProps-tz8U3nPv.js";import"./debounce-Be36O1Ab.js";import"./Modal-DmtASUzd.js";import"./useEventCallback-BS9kycBS.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./Fade-CaBS8FWJ.js";import"./Paper-DbLV-z9R.js";import"./List-83oLdzCs.js";import"./utils-DoM3o7-Q.js";import"./useControlled-XJJbW9AP.js";import"./createSvgIcon-PKFeQm70.js";import"./OutlinedInput-D8j1VWle.js";import"./FormHelperText-C-R3JwUM.js";import"./FormControlLabel-D-20YuFd.js";import"./Typography-CV53WmLj.js";import"./Switch-Xno7-L_Z.js";import"./SwitchBase-BmDSdJmL.js";import"./ButtonBase-CzabJsBp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DCMCbOVJ.js";import"./RadioGroup-BskKp_ip.js";import"./FormGroup-BPXNegLF.js";import"./Box-Cs53hwdz.js";import"./Divider-BN0wEXXb.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DSCZMnTD.js";import"./styled-B3TWJa8B.js";import"./TextField-B7AnE0ah.js";import"./FormControl-zzhLjcAz.js";import"./isMuiElement-7V78C_da.js";import"./Grid-DhicbWoX.js";import"./Tooltip-16k3P5ny.js";import"./IconButton-B7Rw7xc_.js";import"./CircularProgress-CH7ElgU6.js";import"./Button-BjebpOto.js";import"./Container-BIFp3KrG.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
