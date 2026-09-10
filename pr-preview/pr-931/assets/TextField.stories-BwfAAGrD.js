import{j as e}from"./iframe-ujVaYq5z.js";import{C as a}from"./TextField-ljpZaXDq.js";import{B as s}from"./index-612CGizF.js";import{P as l}from"./index-CGMJ1u06.js";import{T as d}from"./index-sKyEjHXt.js";import{G as n}from"./index-BOD_Negu.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DxUkVbf_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtlWzaMP.js";import"./index-DuhTuEga.js";import"./index-CrcoPoGw.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DXUCDQE8.js";import"./memoTheme-CdGwTPP7.js";import"./styled-B-xCudEP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CPfTRyuP.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Cvu2sY6d.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BPDCCuPw.js";import"./SelectFocusSourceContext-rG7pWPT_.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useForkRef-DbBKzesF.js";import"./useSlotProps-zhwYHJyp.js";import"./Popover-BHdYqB-a.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-C9J_EaUY.js";import"./useTheme-CRyXlIuJ.js";import"./utils-JnhbsWr6.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useTimeout-NHks1NG8.js";import"./getReactElementRef-SADr8eSm.js";import"./mergeSlotProps-Cf3nLFWM.js";import"./debounce-Be36O1Ab.js";import"./Modal-3Eqv_0Wj.js";import"./useEventCallback-Ckojbqp4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./Paper-tJaxAljo.js";import"./List-CjBQExuh.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BffgEsp1.js";import"./createSvgIcon-C0cHZWti.js";import"./OutlinedInput-BtSlq6bO.js";import"./FormHelperText-CTZY8iBR.js";import"./FormControlLabel-C4xfba5E.js";import"./Typography-BNx6-4zj.js";import"./Switch-CBjqQ08R.js";import"./SwitchBase-DwviZCGg.js";import"./ButtonBase-iPF5PiZW.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CjVbsVnH.js";import"./RadioGroup-_oAPx5U4.js";import"./FormGroup-Bf_foN45.js";import"./Stack-CQconrOZ.js";import"./styled-VPzH8ng9.js";import"./Box-Cl1E5OD4.js";import"./Divider-DIAH-5fx.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DsbsbLjs.js";import"./FormControl-DlRG_fK7.js";import"./isMuiElement-rsUHqA_z.js";import"./Grid-CvbP1FC1.js";import"./IconButton-MZkZlGxG.js";import"./CircularProgress-see__pNb.js";import"./Tooltip-5f47SB-B.js";import"./Button-CHVL5mlZ.js";import"./Container-Bu0A8KYF.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
