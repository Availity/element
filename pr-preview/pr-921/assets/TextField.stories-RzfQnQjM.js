import{j as e}from"./iframe-D9ubqhJK.js";import{C as a}from"./TextField-BJ20Dnfu.js";import{B as s}from"./index-h4r-WnWl.js";import{P as l}from"./index-DryvU1Ls.js";import{T as d}from"./index-jvKCwEAF.js";import{G as n}from"./index-hzcYFh1I.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-C44Jn127.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B82A_qMa.js";import"./index-CSs7pf9D.js";import"./index-CrcoPoGw.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DlrnpruC.js";import"./memoTheme-CgUpfGaw.js";import"./styled-DXiPKtQZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BIiQiwwA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B4IulI9A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CdgqzUcM.js";import"./SelectFocusSourceContext-CuEUKYKV.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./useSlotProps-Bfn47NpZ.js";import"./Popover-DhsMvyrY.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-HXWOitc9.js";import"./useTheme-Bs7bia1b.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./useTimeout-TLxlWLEl.js";import"./getReactElementRef-MrxWZY03.js";import"./mergeSlotProps-BMpw8A9K.js";import"./debounce-Be36O1Ab.js";import"./Modal-CR4yZ1tw.js";import"./useEventCallback-BOUt7crc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KCj6wAhX.js";import"./Fade-WpG-sZwU.js";import"./Paper-D9VaIl9p.js";import"./List-BzQZ4-oj.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BMamuY7F.js";import"./createSvgIcon-9Ro74DHR.js";import"./OutlinedInput-Dp6fJ7s5.js";import"./FormHelperText-wFz2-NwJ.js";import"./FormControlLabel-BMzoDqJ1.js";import"./Typography-CmwrtNIv.js";import"./Switch-DeW0XF3P.js";import"./SwitchBase-DhBNEaDq.js";import"./ButtonBase-CmaElg-P.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CLI4nFJ5.js";import"./RadioGroup-CzRLiIJo.js";import"./FormGroup-CYRUVGh7.js";import"./Stack-CGmSesTx.js";import"./styled-B7Z91F3L.js";import"./Box-Bn9CddAr.js";import"./Divider-DR9gQ7ZN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DpBf5W8Y.js";import"./FormControl-Chp22M92.js";import"./isMuiElement-CNzi3ipk.js";import"./Grid-XUldnHEv.js";import"./Tooltip-DJtaByj1.js";import"./IconButton-CdRgNr67.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./Container-vLztGkDr.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
