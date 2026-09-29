import{j as e}from"./iframe-CEHPhfh-.js";import{C as a}from"./TextField-fKSuyCIb.js";import{B as s}from"./index-BiRTiuFa.js";import{P as l}from"./index-BzmlnbPG.js";import{T as d}from"./index-Bao5kwzm.js";import{G as n}from"./index-DYWaDwbT.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BQbTLB1S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BurFZRLE.js";import"./index-_UegUKj_.js";import"./index-CrcoPoGw.js";import"./index-tILHWvZu.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CRmvg5rp.js";import"./memoTheme-CIUXmmP3.js";import"./styled-surM00hH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BRYtStoZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DKOaXlnO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-D7khzvuo.js";import"./SelectFocusSourceContext-ZlVDIhni.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useForkRef-CUwhrb4S.js";import"./useSlotProps-CX3w_7Yv.js";import"./Popover-Cu_iSQEj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BAyfuJxK.js";import"./useTheme-B_yH_tF0.js";import"./utils-Dqw6COyO.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useTimeout-C36QQqY4.js";import"./getReactElementRef-BKZTuICO.js";import"./mergeSlotProps-CfdDxxlC.js";import"./debounce-Be36O1Ab.js";import"./Modal-D7vdJCxc.js";import"./useEventCallback-BjU86bqT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BLceXtZc.js";import"./Fade-snlpbKkK.js";import"./Paper-CXpuvckS.js";import"./List-DTUSYVMO.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CuNUqud6.js";import"./createSvgIcon-DM21giQZ.js";import"./OutlinedInput-B4rUmiBa.js";import"./FormHelperText-DheZpH7H.js";import"./FormControlLabel-BzSk7T_G.js";import"./Typography-CJQmKVEQ.js";import"./Switch-BsymbQPl.js";import"./SwitchBase-DLCeua8o.js";import"./ButtonBase-Bi9yKj0d.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BHEJ1nRB.js";import"./RadioGroup-CeNvO4S4.js";import"./FormGroup-uFTTDTpe.js";import"./Stack-kFyJTz_L.js";import"./styled-Z7vS--HU.js";import"./Box-JfKqa7ps.js";import"./Divider-Ct8M__zO.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BP4ybW42.js";import"./FormControl-C4mjEeHz.js";import"./isMuiElement-B3XjmQiv.js";import"./Grid-BWykgrcb.js";import"./IconButton-DFv4hPcI.js";import"./CircularProgress-DIulSjrJ.js";import"./Tooltip-BwegOhQ3.js";import"./Button-DCMVSOfW.js";import"./Container-WyARCUam.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
