import{j as e}from"./iframe-CGrCKeT2.js";import{C as a}from"./TextField-f241sajj.js";import{B as s}from"./index-DmvP-mEg.js";import{P as l}from"./index-Dh2sAMRB.js";import{T as d}from"./index-CZXljNWA.js";import{G as n}from"./index-DolDcqHq.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DfPfq1Xk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHuEgV_k.js";import"./index-6epKdSc3.js";import"./index-CrcoPoGw.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DmVwQJs6.js";import"./memoTheme-BqDMrUbz.js";import"./styled-CotFv3Dr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dm5e5Bpr.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DJsBJsMM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CTV8LpZw.js";import"./SelectFocusSourceContext-C01S2OkC.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useForkRef-BEtKOrY4.js";import"./useSlotProps-DOUkeG0B.js";import"./Popover-BPPXiUal.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BYKyeVye.js";import"./useTheme-4bOKZyvR.js";import"./utils-BkMf-uLY.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useTimeout-DnCoFfSV.js";import"./getReactElementRef-BNGPoDkJ.js";import"./mergeSlotProps-DfxTDm-u.js";import"./debounce-Be36O1Ab.js";import"./Modal-DaH7TrRl.js";import"./useEventCallback-y36uneSW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./Paper-DOXN6uva.js";import"./List-y2FflAjw.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DCMdc5dP.js";import"./createSvgIcon-DSkk_8Bd.js";import"./OutlinedInput-DfoKSt68.js";import"./FormHelperText-CzHZXYcR.js";import"./FormControlLabel-CLZnkdIQ.js";import"./Typography-Bir8nP2f.js";import"./Switch-RFJmoXGw.js";import"./SwitchBase-B4wWvBkW.js";import"./ButtonBase-B5P9vk86.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Dm4oDbtu.js";import"./RadioGroup-CjIXdSfJ.js";import"./FormGroup-A-2cfNzW.js";import"./Stack-_oDMgEvk.js";import"./styled-BjWfuHlM.js";import"./Box-Bi1Xr4Gf.js";import"./Divider-DHaspIrJ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bug5Cm0t.js";import"./FormControl-Ba5nyVsP.js";import"./isMuiElement-RR7Ftbg4.js";import"./Grid-CmaXE-H9.js";import"./IconButton-dlpyeDck.js";import"./CircularProgress-BKyEW5Pk.js";import"./Tooltip-BDnPRKbu.js";import"./Button-BHZdRtrg.js";import"./Container-CUb5VPVp.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
