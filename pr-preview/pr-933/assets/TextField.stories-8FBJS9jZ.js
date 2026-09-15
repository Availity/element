import{j as e}from"./iframe-BOySubGY.js";import{C as a}from"./TextField-i_31rHCN.js";import{B as s}from"./index-dHFlkqLk.js";import{P as l}from"./index-BBVQJ4RI.js";import{T as d}from"./index-DN9BmYUP.js";import{G as n}from"./index-BY15XDHL.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-D-Sy6qiw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJbAyTYF.js";import"./index-EOKAY7fx.js";import"./index-CrcoPoGw.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./memoTheme-C-oySTID.js";import"./styled-XjKTZ5Ba.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Crev6sHt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D_4giGBh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DNKWmaXz.js";import"./SelectFocusSourceContext-NsTTN5Ry.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useForkRef-BEcBTcWu.js";import"./useSlotProps-CORZ0NF7.js";import"./Popover-DvcJ8O_V.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Bk70ZbQ1.js";import"./useTheme-BZyZpBhU.js";import"./utils-MRT_IXkN.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useTimeout-D7rfSJNw.js";import"./getReactElementRef-ekrhOioo.js";import"./mergeSlotProps-CosNNS-j.js";import"./debounce-Be36O1Ab.js";import"./Modal-JO3U43CI.js";import"./useEventCallback-De91DTs8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./Paper-DK-wycZj.js";import"./List-DWj6PFWF.js";import"./utils-DoM3o7-Q.js";import"./useControlled-ZCAGuxBe.js";import"./createSvgIcon-CNdKwBrG.js";import"./OutlinedInput-BwuDTIYn.js";import"./FormHelperText-Br3yPV4I.js";import"./FormControlLabel-BN3VyYGk.js";import"./Typography-SY2Ud8Z5.js";import"./Switch-B1ncU5jj.js";import"./SwitchBase-DttprOgY.js";import"./ButtonBase-CriPZSS7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D60xP-8b.js";import"./RadioGroup-HDv0R8RF.js";import"./FormGroup-CtfESWxW.js";import"./Stack-CvrbJzig.js";import"./styled-B4Xqzm8j.js";import"./Box-C0cMPqSK.js";import"./Divider-BLCYt0Sf.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CB4HsX61.js";import"./FormControl-B6yPYiE0.js";import"./isMuiElement-BscQb9Cz.js";import"./Grid-CxzBT5ej.js";import"./IconButton-D23BvDdt.js";import"./CircularProgress-B5gdOPr_.js";import"./Tooltip-CVYQnSxv.js";import"./Button-DWb-ONsW.js";import"./Container-C4UOiudT.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
