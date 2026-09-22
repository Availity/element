import{j as e}from"./iframe-DKvnFaXU.js";import{C as a}from"./TextField-BjnY9TdT.js";import{B as s}from"./index-goOPcPYN.js";import{P as l}from"./index-zBszBh1k.js";import{T as d}from"./index-CDeQa_Ov.js";import{G as n}from"./index-DbDO0Ft_.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CAjEsR6C.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_5xdzNiG.js";import"./index-ksFf16Do.js";import"./index-CrcoPoGw.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CXEooahZ.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkcKI7js.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DSlP_RFA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dyif2wC_.js";import"./SelectFocusSourceContext-F5AOv-5-.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useForkRef-BZiVfW-q.js";import"./useSlotProps-DYzgJZQm.js";import"./Popover-VuJg1sVN.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D0mCJoig.js";import"./useTheme-CSDDNwq2.js";import"./utils-Bp7Prb7W.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useTimeout-CHMS-cR8.js";import"./getReactElementRef-CqgsFiRl.js";import"./mergeSlotProps-BLQDwcQN.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bm3yPZFq.js";import"./useEventCallback-BMp-rMhG.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-EX3DoS9x.js";import"./Fade-CrAHTHjX.js";import"./Paper-DT4unmmL.js";import"./List-BGKHL79p.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DXzaWELJ.js";import"./createSvgIcon-2KwAvjFg.js";import"./OutlinedInput-BIAm5zgc.js";import"./FormHelperText-DYyNj_Dv.js";import"./FormControlLabel-DwYTjEvZ.js";import"./Typography-D7JJPpmc.js";import"./Switch-DxotU7Ib.js";import"./SwitchBase-DhDyeBWH.js";import"./ButtonBase-t7rDwPbd.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BTw0Rwqw.js";import"./RadioGroup-27Q2WKBY.js";import"./FormGroup-B64yWhLm.js";import"./Stack-Ddupjr1g.js";import"./styled-vqTvL8XB.js";import"./Box-D54lZQNO.js";import"./Divider-DEIVsENh.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-psgMHWlS.js";import"./FormControl-Dkm4fxWQ.js";import"./isMuiElement-B9gvf1iq.js";import"./Grid-BqSQzKdl.js";import"./IconButton-Dk2wxJIq.js";import"./CircularProgress-1gU5OTOX.js";import"./Tooltip-D9ZPYqEU.js";import"./Button-CcwmilXM.js";import"./Container-Dg7zSU0F.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
