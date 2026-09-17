import{j as e}from"./iframe-CwayONq3.js";import{C as a}from"./TextField-CzkntT6_.js";import{B as s}from"./index-rzzKeWqc.js";import{P as l}from"./index-q2qMZHtk.js";import{T as d}from"./index-D86jrWk5.js";import{G as n}from"./index-C55j7MuO.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-d0nBt-Nj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMwb1bxP.js";import"./index-CYRtiz7B.js";import"./index-CrcoPoGw.js";import"./index-FoJb9FyM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dok2DrMx.js";import"./memoTheme-CSn7n7-0.js";import"./styled-WjtpYKzZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTdRs88K.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfAi1Cl1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-cZINCd5X.js";import"./SelectFocusSourceContext-Bmlj6I18.js";import"./useSlot-ar6Q8od1.js";import"./mergeSlotProps-BztucupI.js";import"./useForkRef-Cy6dgODW.js";import"./useSlotProps-C4DgWBnT.js";import"./Popover-Ljxjuwbj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-B5eAGKeX.js";import"./useTheme-DZN2Ghm1.js";import"./utils-BJivSKBX.js";import"./TransitionGroupContext-Bu4CoR7O.js";import"./useTimeout-DzhE3XW1.js";import"./getReactElementRef-CjqPEX8j.js";import"./mergeSlotProps-DSTd1XFa.js";import"./debounce-Be36O1Ab.js";import"./Modal-DN1-xy7q.js";import"./useEventCallback-Cc5Qaj1M.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BYFYfQXf.js";import"./Fade-DXm-QaGZ.js";import"./Paper-DlpHeBlY.js";import"./List-D5XMTJG9.js";import"./utils-DoM3o7-Q.js";import"./useControlled-H2-lqa1O.js";import"./createSvgIcon-DSjYKgaH.js";import"./OutlinedInput--oh61w1N.js";import"./FormHelperText-CjnpPyYN.js";import"./FormControlLabel-BSPnDcnX.js";import"./Typography-CDQ-d4mK.js";import"./Switch-BeMxMh89.js";import"./SwitchBase-fbtSEbIK.js";import"./ButtonBase-3L383qSX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CmQsUMRS.js";import"./RadioGroup-CF3fvuBB.js";import"./FormGroup-bV0aYJSN.js";import"./Stack-k-008in-.js";import"./styled-C0MvsQi9.js";import"./Box-C4nPPECx.js";import"./Divider-CQfA4tzc.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DrqF0lc6.js";import"./FormControl-BSTw1HxY.js";import"./isMuiElement-sqB-nJpP.js";import"./Grid-DathB-g2.js";import"./IconButton-XSGXEsQ5.js";import"./CircularProgress-CcJveUId.js";import"./Tooltip-px23ZV-t.js";import"./Button-hBir-_1a.js";import"./Container-BUicGBFY.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
