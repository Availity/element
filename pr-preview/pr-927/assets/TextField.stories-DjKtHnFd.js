import{j as e}from"./iframe-DDeFjhwT.js";import{C as a}from"./TextField-C-DzDu0Y.js";import{B as s}from"./index-CSwp3I03.js";import{P as l}from"./index-o31oqBcQ.js";import{T as d}from"./index-B0i4PftB.js";import{G as n}from"./index-oWqJ9z6g.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BLlPQQ4J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJHB4Wq3.js";import"./index-BaZRRpT9.js";import"./index-CrcoPoGw.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./memoTheme-BKUl2Kw8.js";import"./styled-PQjfDOgQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DwKt04Fe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-eu10Xp36.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-hUhZUIoR.js";import"./SelectFocusSourceContext-CquKgtEw.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./useSlotProps-B4bgTElG.js";import"./Popover-DktFq9tj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BqacPdFW.js";import"./useTheme-KKOLTJXa.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./useTimeout-Cm2RyAAI.js";import"./getReactElementRef-BeHDg4ji.js";import"./mergeSlotProps-CjAnYkZH.js";import"./debounce-Be36O1Ab.js";import"./Modal-BpltTEbA.js";import"./useEventCallback-tCUa2-C3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./Paper-igPbegtl.js";import"./List-nMnQx56C.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BH5VVnvv.js";import"./createSvgIcon-BxZGQxhE.js";import"./OutlinedInput-ZBGK4L-L.js";import"./FormHelperText-C0of87GE.js";import"./FormControlLabel-Ji9c007o.js";import"./Typography-Be3kmzes.js";import"./Switch-B4_H_B2f.js";import"./SwitchBase-DR9e1Vdv.js";import"./ButtonBase-D-CcOUqB.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CNcgpL5h.js";import"./RadioGroup-BxaV2sVI.js";import"./FormGroup-DtvKduvm.js";import"./Stack-D5p-aU6z.js";import"./styled-B5nfTXUF.js";import"./Box-ClrgcKqA.js";import"./Divider-C-2m7oZQ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DFgDQXLQ.js";import"./FormControl-CYQG91-S.js";import"./isMuiElement-C8BOTMMK.js";import"./Grid-DkuRXmB0.js";import"./Tooltip-5o6beSBH.js";import"./IconButton-CurJhF0D.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./Container-BKOvC3qE.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
