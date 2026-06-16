import{j as e}from"./iframe-Cyg9aVcX.js";import{C as a}from"./TextField-Ep27Q0Lb.js";import{B as s}from"./index-h-exa6rv.js";import{P as l}from"./index-DqJSta0x.js";import{T as d}from"./index-BvOEaAPF.js";import{G as n}from"./index-DUYfXBKq.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-Ce7wzlsb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Z6WRBSFW.js";import"./index-CVel8P3L.js";import"./index-CrcoPoGw.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-yyAmYjGv.js";import"./memoTheme-jifZnr2J.js";import"./styled-Bd0VbO2U.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGxiyC7J.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BUS69YTZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-IhPRkG6b.js";import"./SelectFocusSourceContext-C-S6pfu1.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./useSlotProps-D3SvR_Jp.js";import"./Popover-DGII8wAD.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CbV_9_tw.js";import"./useTheme-CzQvHrc-.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./useTimeout-D6StvTbU.js";import"./getReactElementRef-CtSLxyS5.js";import"./mergeSlotProps-N0Bp7CtQ.js";import"./debounce-Be36O1Ab.js";import"./Modal-BKoLjwX6.js";import"./useEventCallback-C8dig9Cp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Dt1aobyE.js";import"./Fade-BlsC_kbX.js";import"./Paper-CQzqH1w0.js";import"./List-BhseiF0d.js";import"./utils-DoM3o7-Q.js";import"./useControlled-LzVIFy4V.js";import"./createSvgIcon-C4GbkCiK.js";import"./OutlinedInput-CwV_y8Kk.js";import"./FormHelperText-BEXj3jiV.js";import"./FormControlLabel-jOwSmfh2.js";import"./Typography-fPTXF0ua.js";import"./Switch-BNJ4GIvD.js";import"./SwitchBase-BLP-bgBx.js";import"./ButtonBase-BvuHtZ4U.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-hpxBX7ZN.js";import"./RadioGroup-zueoi5PR.js";import"./FormGroup-CeG0nHdE.js";import"./Stack-BB9tt9ZR.js";import"./styled-JRnDCPkO.js";import"./Box-DlTv5Oab.js";import"./Divider-BNMEa6zC.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-OGBRiM2i.js";import"./FormControl-wLZjahnK.js";import"./isMuiElement-D3GE3m2r.js";import"./Grid-ss4buRXG.js";import"./Tooltip-B872xQRW.js";import"./IconButton-D_0lSByq.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./Container-6TunXfMs.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
