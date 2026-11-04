import{j as e}from"./iframe-La0hozmm.js";import{C as a}from"./TextField-DI85xR3K.js";import{B as s}from"./index-CT5mpeGo.js";import{P as l}from"./index-CVxIkWKb.js";import{T as d}from"./index-OkwykyCM.js";import{G as n}from"./index-eHZf6pHN.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DXzyLXtj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1KAY_LF_.js";import"./index-L9cyz4q_.js";import"./index-MVgG_W0q.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-YrmrWU_k.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClnyVQ0Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DTVzxWrU.js";import"./SelectFocusSourceContext-BppuX2PY.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useForkRef-CYgSXLxN.js";import"./useSlotProps-o4xrbGrj.js";import"./Popover-CV1jitSE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-QPUTbchU.js";import"./useTheme-D5kgDNuB.js";import"./utils-C_Yf081A.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useTimeout-CjP9kdgI.js";import"./getReactElementRef-TIeMXNsW.js";import"./mergeSlotProps-BDDINM1D.js";import"./debounce-Be36O1Ab.js";import"./Modal-lk5DA8tl.js";import"./useEventCallback-CkMNQS0_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./Paper-BvBPQPSI.js";import"./List-B0CpRJrl.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DV2EMPBp.js";import"./createSvgIcon-CogVIOis.js";import"./OutlinedInput-CTfBg3Vp.js";import"./FormHelperText-Bk8ZiDzG.js";import"./FormControlLabel-BuAbVyu2.js";import"./Typography-F8uVoBR9.js";import"./Switch-Dn7ksyeq.js";import"./SwitchBase-BXj3k-eu.js";import"./ButtonBase-RNjBI3PY.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DrT8Tsp3.js";import"./RadioGroup-B9XhnsTM.js";import"./FormGroup-BFP8PGgB.js";import"./Stack-COfd3H0w.js";import"./styled-99JPjMFe.js";import"./Box-B4jhZySH.js";import"./Divider-BdcGsQEp.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DMxnzIC0.js";import"./FormControl-CgcW0UT-.js";import"./isMuiElement-VxhL7QTS.js";import"./Grid-DTxUT0NX.js";import"./IconButton-BEf7IA6l.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./Button-x0oW_Zme.js";import"./Container-Bl6cg8Xd.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
