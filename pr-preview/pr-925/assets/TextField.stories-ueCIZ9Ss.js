import{j as e}from"./iframe-BRP1PsTd.js";import{C as a}from"./TextField-DgkhUR0Y.js";import{B as s}from"./index-BsNnDr7w.js";import{P as l}from"./index-CnTQWbf1.js";import{T as d}from"./index-DlB5fuNM.js";import{G as n}from"./index-D7dOkDl_.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CIwY0UHO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpKfFk7W.js";import"./index-B3tzpYmG.js";import"./index-CrcoPoGw.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./memoTheme-Rx2ZtNd-.js";import"./styled-kfJMXx_R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DFQHDft-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClZVz9V6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BKZ2kjY2.js";import"./SelectFocusSourceContext-DOQkQ0SO.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./useSlotProps-fBG80Xpc.js";import"./Popover-Cq8sFUbM.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CRr1uWpV.js";import"./useTheme-C-06SHWZ.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./useTimeout-zBXF3kIc.js";import"./getReactElementRef-y-MSVziw.js";import"./mergeSlotProps-C4YKGlLy.js";import"./debounce-Be36O1Ab.js";import"./Modal-D89_wzi3.js";import"./useEventCallback-BX14bO_3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DCwrU8T9.js";import"./Fade-ByvXngvB.js";import"./Paper-Cw-zNh9i.js";import"./List-7Ktovrvd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-8-M28gqE.js";import"./createSvgIcon-DDgQnkKT.js";import"./OutlinedInput-URDDzUkx.js";import"./FormHelperText-CJRPJvNW.js";import"./FormControlLabel-CKZTo3Af.js";import"./Typography-BELI0wSd.js";import"./Switch-CxGtlCVz.js";import"./SwitchBase-7T8YNLcX.js";import"./ButtonBase-DI3KZvly.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-0Tlh6eCh.js";import"./RadioGroup-lgnoJOI3.js";import"./FormGroup-CgbUB1-e.js";import"./Stack-DIw4f7bu.js";import"./styled-BWHNlctr.js";import"./Box-CXnBoTl2.js";import"./Divider-CcSh8kgD.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BCT971wE.js";import"./FormControl-DSVABsS-.js";import"./isMuiElement-CTMPmI0-.js";import"./Grid-Mz87TCh6.js";import"./Tooltip-C5fygC3l.js";import"./IconButton-4bUdPSIB.js";import"./CircularProgress-Dy9r_LoH.js";import"./Button-BSPls0mt.js";import"./Container-Bk3CGwFA.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
